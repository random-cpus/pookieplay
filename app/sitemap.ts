import { MetadataRoute } from "next";
import { bettingSites } from "@/data/betting-sites";
import { blogPosts } from "@/data/blogs";
import { countries } from "@/data/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pookieplay.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/faqs",
    "/blogs",
    "/review",
    "/terms",
    "/privacy",
    "/affiliate-disclosure",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Country routes
  const countryRoutes = countries
    .filter((c) => c.path !== "/")
    .map((country) => ({
      url: `${baseUrl}${country.path}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }));

  // Review routes
  const reviewRoutes = bettingSites.map((site) => ({
    url: `${baseUrl}/${site.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...countryRoutes, ...reviewRoutes, ...blogRoutes];
}
