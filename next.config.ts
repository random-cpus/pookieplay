import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.sportsrc.org",
      },
      {
        protocol: "https",
        hostname: "**.sportsrc.org",
      },
      {
        protocol: "https",
        hostname: "cdn.sportmonks.com",
      },
      {
        protocol: "https",
        hostname: "**.sportmonks.com",
      },
    ],
  },
};

export default nextConfig;
