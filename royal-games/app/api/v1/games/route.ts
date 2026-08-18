import { NextResponse } from "next/server";
import { STUDIO_GAMES } from "@/lib/gamesCatalog";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const query = searchParams.get("q")?.toLowerCase();

    let games = STUDIO_GAMES;

    if (query) {
      games = games.filter((g) => g.name.toLowerCase().includes(query) || g.category.toLowerCase().includes(query));
    }

    return NextResponse.json({
      code: 0,
      msg: "Success",
      data: {
        games,
        total: games.length,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ code: 5000, msg: error.message }, { status: 500 });
  }
}
