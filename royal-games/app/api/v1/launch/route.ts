import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { signSessionToken } from "@/lib/auth";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      token,
      user_id,
      balance,
      game_uid,
      currency_code = "INR",
      callback,
      return: returnUrl,
    } = body;

    if (!token) {
      return NextResponse.json({ code: 1001, msg: "Missing API token" }, { status: 401 });
    }

    // Find API token & Operator
    const apiToken = await db.apiToken.findUnique({
      where: { token },
      include: { operator: true },
    });

    if (!apiToken || !apiToken.operator) {
      return NextResponse.json({ code: 1002, msg: "Invalid or revoked API token" }, { status: 401 });
    }

    const operator = apiToken.operator;

    if (operator.status !== "ACTIVE") {
      return NextResponse.json({ code: 1003, msg: "Operator account suspended" }, { status: 403 });
    }

    // Check Operator Prepaid GGR credit
    if (operator.balance < 50) {
      return NextResponse.json({
        code: 1004,
        msg: "Operator prepaid GGR balance too low. Please recharge operator wallet in Royal Games portal.",
      }, { status: 402 });
    }

    if (!user_id || balance === undefined || !game_uid || !callback) {
      return NextResponse.json({
        code: 1005,
        msg: "Missing required parameters: user_id, balance, game_uid, callback",
      }, { status: 400 });
    }

    // Generate unique Game Session
    const sessionId = `sess_${Date.now()}_${crypto.randomBytes(8).toString("hex")}`;
    const expiresAt = new Date(Date.now() + 4 * 60 * 60 * 1000); // 4 hours

    const session = await db.gameSession.create({
      data: {
        sessionId,
        operatorId: operator.id,
        userId: String(user_id),
        gameUid: String(game_uid),
        balance: Number(balance),
        currency: currency_code || "INR",
        callbackUrl: String(callback),
        returnUrl: returnUrl || "https://royal-games.com",
        expiresAt,
      },
    });

    // Create session JWT token
    const sessionJwt = signSessionToken({
      sessionId: session.sessionId,
      operatorId: operator.id,
      userId: session.userId,
      gameUid: session.gameUid,
    });

    const studioBaseUrl = process.env.NEXT_PUBLIC_STUDIO_URL || "http://localhost:3001";
    const playUrl = `${studioBaseUrl}/play/${session.sessionId}?token=${sessionJwt}`;

    return NextResponse.json({
      code: 0,
      msg: "Success",
      data: {
        url: playUrl,
        session_id: session.sessionId,
      },
    });
  } catch (error: any) {
    console.error("B2B Launch Session Error:", error);
    return NextResponse.json({ code: 5000, msg: error.message || "Internal server error" }, { status: 500 });
  }
}
