import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { verifyOperatorToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/operator/wallet (Wallet Balance & Transaction History)
export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const operator = await db.operator.findUnique({
      where: { id: auth.operatorId },
      select: { balance: true, currency: true, ggrRate: true },
    });

    const transactions = await db.operatorTransaction.findMany({
      where: { operatorId: auth.operatorId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ operator, transactions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/operator/wallet (Recharge Prepaid GGR Balance)
export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { amount, method = "DEMO_RECHARGE", note } = await req.json();
    const numAmount = Number(amount);

    if (numAmount <= 0 || isNaN(numAmount)) {
      return NextResponse.json({ error: "Invalid recharge amount" }, { status: 400 });
    }

    const operator = await db.operator.findUnique({ where: { id: auth.operatorId } });
    if (!operator) return NextResponse.json({ error: "Operator not found" }, { status: 404 });

    const newBalance = Number((operator.balance + numAmount).toFixed(2));
    const refId = `REC-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

    const [updatedOp] = await db.$transaction([
      db.operator.update({
        where: { id: operator.id },
        data: { balance: newBalance },
      }),
      db.operatorTransaction.create({
        data: {
          operatorId: operator.id,
          type: "DEPOSIT",
          amount: numAmount,
          balanceAfter: newBalance,
          referenceId: refId,
          description: note || `Prepaid GGR Balance Top-up via ${method}`,
        },
      }),
    ]);

    return NextResponse.json({ success: true, balance: updatedOp.balance, refId });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
