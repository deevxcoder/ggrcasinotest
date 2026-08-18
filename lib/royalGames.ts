import { Provider, Game } from "./types";

export const ROYAL_GAMES_BRAND_ID = 88888;

export const ROYAL_GAMES_PROVIDER: Provider = {
  brand_id: ROYAL_GAMES_BRAND_ID,
  name: "Royal Games",
  logo: null,
  game_count: 3,
};

export const ROYAL_GAMES: Game[] = [
  {
    game_id: 88801,
    game_uid: "royal_coinflip",
    name: "Coin Flip Royale",
    provider: "Royal Games",
    category: "Casual / Instant Win",
    logo: "/api/media?url=https%3A%2F%2Fapi.nexxapi.tech%2Fmedia%2Fgames%2F737.png", // fallback placeholder or custom
  },
  {
    game_id: 88802,
    game_uid: "royal_andarbahar",
    name: "Andar Bahar Live",
    provider: "Royal Games",
    category: "Table / Live Indian",
    logo: "/api/media?url=https%3A%2F%2Fapi.nexxapi.tech%2Fmedia%2Fgames%2F101.png",
  },
  {
    game_id: 88803,
    game_uid: "royal_chickencross",
    name: "Chicken Road Cross",
    provider: "Royal Games",
    category: "Crash / Flash",
    logo: "/api/media?url=https%3A%2F%2Fapi.nexxapi.tech%2Fmedia%2Fgames%2F737.png",
  },
];

export function isRoyalGame(gameUid: string | number): boolean {
  const uidStr = String(gameUid);
  return uidStr.startsWith("royal_") || uidStr.startsWith("888");
}
