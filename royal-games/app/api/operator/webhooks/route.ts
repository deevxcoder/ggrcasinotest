import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { verifyOperatorToken } from "@/lib/auth";
import axios from "axios";

export const dynamic = "force-dynamic";

// GET /api/operator/webhooks (List Webhook Logs)
export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const logs = await db.webhookLog.findMany({
      where: { operatorId: auth.operatorId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ logs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/operator/webhooks (Retry a Webhook Delivery)
export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("royal_operator_token")?.value;
    const auth = token ? verifyOperatorToken(token) : null;
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { logId } = await req.json();
    const log = await db.webhookLog.findUnique({
      where: { id: logId, operatorId: auth.operatorId },
    });

    if (!log) return NextResponse.json({ error: "Log not found" }, { status: 404 });

    try {
      const payload = JSON.parse(log.payload);
      const res = await axios.post(log.targetUrl, payload, { timeout: 10000 });

      const updated = await db.webhookLog.update({
        where: { id: log.id },
        data: {
          status: "SUCCESS",
          responseCode: res.status,
          responseBody: typeof res.data === "string" ? res.data : JSON.stringify(res.data),
          attempts: log.attempts + 1,
        },
      });

      return NextResponse.json({ success: true, log: updated });
    } catch (err: any) {
      const status = err.response?.status || 500;
      const updated = await db.webhookLog.update({
        where: { id: log.id },
        data: {
          status: "FAILED",
          responseCode: status,
          responseBody: err.message,
          attempts: log.attempts + 1,
        },
      });
      return NextResponse.json({ success: false, log: updated });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
