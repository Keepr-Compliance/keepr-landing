import type { MetadataRoute } from "next";

/**
 * robots.txt (BACKLOG-2226).
 *
 * A public marketing site needs to be crawlable for SEO, so this allows normal
 * search engines while:
 *  - keeping all bots out of /api/ (nothing there is meant for crawlers), and
 *  - blocking AI-training / scraper crawlers from the marketing content entirely.
 *
 * This is polite enforcement — well-behaved bots obey it. Malicious bots ignore
 * robots.txt; those are handled at the edge (Vercel WAF / Bot Management).
 */

// AI-training and known aggressive scraper user agents to disallow outright.
const AI_SCRAPERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "PerplexityBot",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...AI_SCRAPERS.map((ua) => ({ userAgent: ua, disallow: "/" })),
    ],
    sitemap: "https://keeprcompliance.com/sitemap.xml",
    host: "https://keeprcompliance.com",
  };
}
