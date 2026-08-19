import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BOT_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "facebot",
  "ia_archiver",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
];

const COUNTRY_MAP: Record<string, string> = {
  CA: "/canada/",
  BR: "/brazil/",
  PT: "/portugal/",
  DE: "/germany/",
  MX: "/mexico/",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only consider geo-redirection for the root path "/"
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // If user has already visited or manually selected a country, do not redirect
  if (request.cookies.has("pookie_country_visited")) {
    return NextResponse.next();
  }

  // Detect bots/crawlers and do not redirect them to ensure SEO indexing works perfectly
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));
  if (isBot) {
    return NextResponse.next();
  }

  // Detect country from Vercel / Cloudflare / edge headers
  const countryHeader =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code");

  if (countryHeader && COUNTRY_MAP[countryHeader.toUpperCase()]) {
    const targetPath = COUNTRY_MAP[countryHeader.toUpperCase()];
    const response = NextResponse.redirect(new URL(targetPath, request.url));
    // Set cookie so manual navigation back to "/" won't trigger an infinite loop
    response.cookies.set("pookie_country_visited", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images/ (public images)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
