import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://answerbit.cn";
  const modified = new Date("2026-09-21");
  return [
    { url: base, lastModified: modified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services/geo`, lastModified: modified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/methodology`, lastModified: modified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights/geo-guide`, lastModified: modified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
