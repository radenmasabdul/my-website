import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.radenmasabdul.my.id";
  return ["en", "id", "ja"].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1.0 : 0.8,
  }));
}