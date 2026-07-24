import type { MetadataRoute } from "next";

/**
 * sitemap.xml (BACKLOG-2226) — public, indexable pages only.
 * /cookies is intentionally excluded (it is noindex).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://keeprcompliance.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/download`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacy`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "monthly", priority: 0.3 },
  ];
}
