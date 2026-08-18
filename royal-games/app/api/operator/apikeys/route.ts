import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { verifyOperatorToken } from "@/lib/auth";
import { generateApiKey } from "@/lib/crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const tokens = await db.apiToken.findMany({
      where: { operatorId: auth.operatorId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tokens });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { action, name, ipWhitelist, tokenId } = await req.json();

    if (action === "create") {
      const { token: apiToken, secretKey } = generateApiKey();
      const created = await db.apiToken.create({
        data: {
          operatorId: auth.operatorId,
          token: apiToken,
          secretKey,
          name: name || "New API Token",
          ipWhitelist: ipWhitelist || null,
        },
      });
      return NextResponse.json({ success: true, token: created });
    }

    if (action === "update_ip" && tokenId) {
      const updated = await db.apiToken.update({
        where: { id: tokenId, operatorId: auth.operatorId },
        data: { ipWhitelist: ipWhitelist || null },
      });
      return NextResponse.json({ success: true, token: updated });
    }

    if (action === "delete" && tokenId) {
      await db.apiToken.delete({
        where: { id: tokenId, operatorId: auth.operatorId },
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
