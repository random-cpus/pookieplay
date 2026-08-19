import { NextResponse } from "next/server";
import { fetchSportSRCFootball } from "@/lib/api/sportsrc";

export const revalidate = 30;

export async function GET() {
  const result = await fetchSportSRCFootball();
  return NextResponse.json(result);
}
