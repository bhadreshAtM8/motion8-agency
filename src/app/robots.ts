import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

/* Never indexed, never worth crawl budget. Repeated in EVERY group: a crawler
   that matches a named group ignores the "*" group entirely. */
const DISALLOW = ["/api/", "/thank-you"];

/* Search engines — classic indexes that also feed AI answers
   (Bing → ChatGPT search & Copilot; Google → AI Overviews & Gemini). */
const SEARCH_BOTS = ["Googlebot", "Bingbot", "Applebot", "DuckDuckBot", "YandexBot"];

/* AI search / retrieval and user-triggered fetchers — these produce citations
   and referral traffic in ChatGPT, Perplexity, Claude and others. */
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "DuckAssistBot",
  "MistralAI-User",
];

/* AI training crawlers. Business decision (owner, 2026): ALLOW — maximum AI
   visibility, so the brand and services are present in model knowledge, not
   only in live retrieval. To opt out of training while keeping citations,
   move an entry to a `disallow: "/"` group; search/retrieval bots above are
   unaffected. Google-Extended and Applebot-Extended are control tokens only
   (they never fetch); they govern Gemini / Apple Intelligence use. */
const AI_TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: [...SEARCH_BOTS, ...AI_SEARCH_BOTS], allow: "/", disallow: DISALLOW },
      { userAgent: AI_TRAINING_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
