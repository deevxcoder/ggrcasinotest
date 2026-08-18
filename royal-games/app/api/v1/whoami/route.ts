import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    let operatorName = "Guest";
    let isWhitelisted = true;

    if (token) {
      const apiToken = await db.apiToken.findUnique({
        where: { token },
        include: { operator: true },
      });
      if (apiToken) {
        operatorName = apiToken.operator.companyName;
        if (apiToken.ipWhitelist) {
          const ips = apiToken.ipWhitelist.split(",").map((i) => i.trim());
          isWhitelisted = ips.includes(clientIp);
        }
      }
    }

    return NextResponse.json({
      code: 0,
      msg: "Success",
      data: {
        your_ip: clientIp,
        whitelisted: isWhitelisted,
        operator: operatorName,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ code: 5000, msg: error.message }, { status: 500 });
  }
}
