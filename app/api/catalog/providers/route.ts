import { NextResponse } from "next/server";
import { fetchProviders } from "@/lib/nexx";

export async function GET() {
  try {
    const providers = await fetchProviders();
    return NextResponse.json({ providers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
