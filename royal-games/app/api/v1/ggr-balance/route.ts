import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ code: 1001, msg: "Missing token parameter" }, { status: 401 });
    }

    const apiToken = await db.apiToken.findUnique({
      where: { token },
      include: { operator: true },
    });

    if (!apiToken || !apiToken.operator) {
      return NextResponse.json({ code: 1002, msg: "Invalid API token" }, { status: 401 });
    }

    return NextResponse.json({
      code: 0,
      msg: "Success",
      data: {
        wallet: apiToken.operator.balance,
        currency: apiToken.operator.currency,
        status: apiToken.operator.status,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ code: 5000, msg: error.message }, { status: 500 });
  }
}
