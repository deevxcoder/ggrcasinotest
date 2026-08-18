import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { hashPassword, comparePassword, signOperatorToken, verifyOperatorToken } from "@/lib/auth";
import { generateApiKey } from "@/lib/crypto";

export const dynamic = "force-dynamic";

// GET /api/operator/auth (Current Operator Profile)
export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;

    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const operator = await db.operator.findUnique({
      where: { id: auth.operatorId },
      include: {
        tokens: true,
        _count: { select: { sessions: true, rounds: true, webhookLogs: true } },
      },
    });

    if (!operator) return NextResponse.json({ error: "Operator not found" }, { status: 404 });

    return NextResponse.json({ operator });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/operator/auth (Login & Register)
export async function POST(req: Request) {
  try {
    const { action, companyName, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    if (action === "register") {
      const existing = await db.operator.findUnique({ where: { email: email.toLowerCase() } });
      if (existing) {
        return NextResponse.json({ error: "Operator email already registered" }, { status: 400 });
      }

      const operator = await db.operator.create({
        data: {
          companyName: companyName || "New Casino Partner",
          email: email.toLowerCase(),
          passwordHash: hashPassword(password),
          balance: 5000.0, // ₹5000 starting demo credit
        },
      });

      // Generate initial production API key
      const { token: apiToken, secretKey } = generateApiKey();
      await db.apiToken.create({
        data: {
          operatorId: operator.id,
          token: apiToken,
          secretKey,
          name: "Default Production API Key",
        },
      });

      const jwtToken = signOperatorToken({ operatorId: operator.id, email: operator.email });
      cookies().set("royal_operator_token", jwtToken, { httpOnly: true, path: "/" });

      return NextResponse.json({ success: true, operator });
    }

    // Default: Login
    const operator = await db.operator.findUnique({ where: { email: email.toLowerCase() } });
    if (!operator || !comparePassword(password, operator.passwordHash)) {
      return NextResponse.json({ error: "Invalid operator credentials" }, { status: 401 });
    }

    const jwtToken = signOperatorToken({ operatorId: operator.id, email: operator.email });
    cookies().set("royal_operator_token", jwtToken, { httpOnly: true, path: "/" });

    return NextResponse.json({ success: true, operator });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
