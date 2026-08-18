import axios from "axios";
import { encryptPayload } from "./crypto";
import { Provider, Game, LaunchGameParams } from "./types";

const NEXX_API_URL = process.env.NEXX_API_URL || "https://api.nexxapi.tech/api/v1";
const NEXX_TOKEN = process.env.NEXX_TOKEN || "79b49f0e7f96cb36a53abeba98126bc7";

// In-memory cache for catalog
let cachedProviders: Provider[] | null = null;
let lastProvidersFetch = 0;
const CACHE_TTL = 30 * 60 * 1000; // 30 mins

export function proxyImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.includes("nexxapi.tech")) {
    return `/api/media?url=${encodeURIComponent(url)}`;
  }
  return url;
}

export async function fetchProviders(): Promise<Provider[]> {
  if (cachedProviders && Date.now() - lastProvidersFetch < CACHE_TTL) {
    return cachedProviders;
  }

  try {
    const res = await axios.get(`${NEXX_API_URL}/providers`, {
      params: { token: NEXX_TOKEN },
      timeout: 10000,
    });

    if (res.data.code === 0 && res.data.data?.providers) {
      cachedProviders = res.data.data.providers.map((p: Provider) => ({
        ...p,
        logo: proxyImageUrl(p.logo),
      }));
      lastProvidersFetch = Date.now();
      return cachedProviders!;
    }
  } catch (error: any) {
    console.error("Error fetching providers from NexxAPI:", error.message);
  }

  return cachedProviders || [];
}

export async function fetchGames(brandId: number, query = "", limit = 100, offset = 0): Promise<{ games: Game[]; total: number }> {
  try {
    const res = await axios.get(`${NEXX_API_URL}/games`, {
      params: {
        token: NEXX_TOKEN,
        brand_id: brandId,
        q: query || undefined,
        limit,
        offset,
      },
      timeout: 10000,
    });

    if (res.data.code === 0 && res.data.data) {
      const mappedGames = (res.data.data.games || []).map((g: Game) => ({
        ...g,
        logo: proxyImageUrl(g.logo),
      }));
      return {
        games: mappedGames,
        total: res.data.data.total || 0,
      };
    }
  } catch (error: any) {
    console.error(`Error fetching games for brand ${brandId}:`, error.message);
  }

  return { games: [], total: 0 };
}

export async function getGgrBalance(): Promise<{ wallet: number } | null> {
  try {
    const res = await axios.get(`${NEXX_API_URL}/ggr-balance`, {
      params: { token: NEXX_TOKEN },
      timeout: 8000,
    });

    if (res.data.code === 0 && res.data.data) {
      return res.data.data;
    }
  } catch (error: any) {
    console.error("Error fetching GGR balance:", error.message);
  }
  return null;
}

export async function getWhoami(): Promise<any> {
  try {
    const res = await axios.get(`${NEXX_API_URL}/whoami`, {
      params: { token: NEXX_TOKEN },
      timeout: 8000,
    });
    return res.data.data || null;
  } catch (error: any) {
    console.error("Error calling whoami:", error.message);
    return null;
  }
}

export async function launchGameSession(params: LaunchGameParams): Promise<{ url: string; code: number; msg?: string }> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  let customSettings: any = null;
  try {
    const { db } = await import("./db");
    customSettings = await db.siteSetting.findUnique({ where: { id: "default" } });
  } catch (e) {}

  let returnUrl = params.returnUrl || customSettings?.returnUrl || `${appUrl}/lobby`;
  let callbackUrl = params.callbackUrl || customSettings?.callbackUrl || `${appUrl}/api/callback`;

  // NexxAPI strictly requires callback URL to be HTTPS
  if (!callbackUrl.startsWith("https://")) {
    callbackUrl = callbackUrl.replace(/^http:\/\//, "https://");
  }
  if (!returnUrl.startsWith("http://") && !returnUrl.startsWith("https://")) {
    returnUrl = `https://${returnUrl}`;
  }

  const payload = {
    user_id: params.userId,
    balance: Number(params.balance.toFixed(2)),
    game_uid: String(params.gameUid),
    token: NEXX_TOKEN,
    timestamp: Date.now(),
    return: returnUrl,
    callback: callbackUrl,
    currency_code: params.currencyCode || "INR",
    language: params.language || "en",
  };

  const encrypted = encryptPayload(payload);

  const res = await axios.post(
    NEXX_API_URL,
    {
      token: NEXX_TOKEN,
      payload: encrypted,
    },
    { timeout: 15000 }
  );

  if (res.data.code === 0 && res.data.data?.url && !res.data.data.url.includes("/api/error")) {
    return { url: res.data.data.url, code: 0, msg: "Success" };
  }

  const errorMsg = res.data.msg || (res.data.data?.url?.includes("msg=") ? decodeURIComponent(res.data.data.url.split("msg=")[1]) : "This game provider is currently undergoing maintenance. Please try PGSoft, JILI, Spribe, Smartsoft, or Endorphina games.");
  throw new Error(errorMsg);
}
