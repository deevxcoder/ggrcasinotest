import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";
import { launchGameSession } from "@/lib/nexx";

export async function POST(req: Request) {
  try {
    const { gameUid, currencyCode = "INR", language = "en" } = await req.json();

    if (!gameUid) {
      return NextResponse.json({ error: "gameUid is required" }, { status: 400 });
    }

    // Determine current user
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const payload = token ? verifyToken(token) : null;

    if (!payload) {
      return NextResponse.json({ error: "Please sign in to launch games. Contact Admin if you need an account." }, { status: 401 });
    }

    const user = await db.user.findUnique({ where: { id: payload.userId } });
    if (!user) {
      return NextResponse.json({ error: "Player account not found. Please sign in again." }, { status: 401 });
    }

    if (user.balance < 1.0) {
      return NextResponse.json(
        { error: "Insufficient balance to launch game. Please deposit funds." },
        { status: 400 }
      );
    }

    // If it's a native Royal Game, launch directly in native modal without external NexxAPI call
    if (String(gameUid).startsWith("royal_")) {
      return NextResponse.json({
        success: true,
        isRoyal: true,
        url: null,
        user: {
          id: user.id,
          username: user.username,
          balance: user.balance,
        },
      });
    }

    // Call NexxAPI to launch external game
    const result = await launchGameSession({
      userId: user.id,
      gameUid: String(gameUid),
      balance: user.balance,
      currencyCode: user.currency || currencyCode,
      language,
    });

    return NextResponse.json({
      success: true,
      url: result.url,
      user: {
        id: user.id,
        username: user.username,
        balance: user.balance,
      },
    });
  } catch (error: any) {
    console.error("Game launch error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to launch game" },
      { status: 500 }
    );
  }
}
