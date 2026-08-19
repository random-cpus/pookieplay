import { NextResponse } from "next/server";
import { fetchSportMonksCricket } from "@/lib/api/sportmonks";

export const revalidate = 60;

export async function GET() {
  const data = await fetchSportMonksCricket();
  return NextResponse.json(data);
}
