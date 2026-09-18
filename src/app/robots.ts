import type { MetadataRoute } from "next";
import { absolute } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* Nothing here should ever be indexed or spend crawl budget. */
        disallow: ["/api/", "/thank-you"],
      },
      /* Answer- and generative-engine crawlers, allowed explicitly so AEO/GEO
         work can actually be cited. Remove a line here to opt out of one. */
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: absolute("/sitemap.xml"),
    host: absolute("/"),
  };
}
