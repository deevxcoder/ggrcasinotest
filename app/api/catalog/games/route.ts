import { NextResponse } from "next/server";
import { fetchGames, fetchProviders } from "@/lib/nexx";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const brandIdParam = searchParams.get("brand_id");
    const category = searchParams.get("category")?.toLowerCase();
    const query = searchParams.get("q") || "";
    const limit = parseInt(searchParams.get("limit") || "60", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    let brandId = brandIdParam ? parseInt(brandIdParam, 10) : null;

    // Fetch site settings to check enabled providers
    const settings = await db.siteSetting.findUnique({
      where: { id: "default" },
    });

    let enabledProviders: number[] | null = null;
    if (settings?.enabledProviders) {
      try {
        const parsed = JSON.parse(settings.enabledProviders);
        if (Array.isArray(parsed) && parsed.length > 0) {
          enabledProviders = parsed;
        }
      } catch (e) {
        console.error("Failed to parse enabledProviders:", e);
      }
    }

    if (brandId) {
      // If brandId is specified but not in enabled list, return empty
      if (enabledProviders && !enabledProviders.includes(brandId)) {
        return NextResponse.json({ games: [], total: 0, brand_id: brandId });
      }

      const result = await fetchGames(brandId, query, limit, offset);
      let filtered = result.games;
      if (category && category !== "all") {
        filtered = filtered.filter(
          (g) =>
            g.category?.toLowerCase().includes(category) ||
            (category === "crash" && (g.name.toLowerCase().includes("aviator") || g.category?.toLowerCase().includes("flash")))
        );
      }
      return NextResponse.json({ games: filtered, total: filtered.length, brand_id: brandId });
    }

    // Default featured brands if none configured
    const defaultBrands = [57, 45, 49, 107, 152, 136, 99];
    const targetBrands = enabledProviders && enabledProviders.length > 0
      ? enabledProviders
      : defaultBrands;

    // Fetch games for enabled brands (batch first 8 to keep response snappy)
    const activeQueryBrands = targetBrands.slice(0, 10);
    const gamePromises = activeQueryBrands.map((bId) => fetchGames(bId, query, 30, 0));
    const results = await Promise.all(gamePromises);

    let allGames = results.flatMap((r) => r.games);

    if (category && category !== "all") {
      allGames = allGames.filter((g) => {
        const cat = g.category?.toLowerCase() || "";
        const name = g.name.toLowerCase();
        if (category === "crash") {
          return cat.includes("flash") || name.includes("aviator") || name.includes("crash") || name.includes("balloon") || name.includes("jet");
        }
        if (category === "slots") {
          return cat.includes("slot") || (!cat.includes("live") && !cat.includes("flash"));
        }
        if (category === "live") {
          return cat.includes("live") || name.includes("roulette") || name.includes("blackjack") || name.includes("baccarat");
        }
        return cat.includes(category);
      });
    }

    return NextResponse.json({
      games: allGames.slice(offset, offset + limit),
      total: allGames.length,
    });
  } catch (error: any) {
    console.error("Games catalog error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

