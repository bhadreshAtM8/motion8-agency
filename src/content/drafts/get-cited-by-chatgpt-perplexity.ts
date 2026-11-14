import type { Post } from "@/content/posts";

export const post: Post = {
  slug: "get-cited-by-chatgpt-perplexity",
  title: "How to get cited by ChatGPT, Perplexity and AI Overviews",
  metaTitle: "How to Get Cited by ChatGPT & AI Search | Motion 8 Agency",
  metaDescription:
    "Get your brand cited by ChatGPT, Perplexity and Google AI Overviews: get indexed, write answer-first pages, fix entity data and measure citations monthly.",
  excerpt:
    "AI assistants can only cite what they can retrieve, parse and trust. Here is the practical work behind each of those three, and how to tell whether it is paying off.",
  published: "2026-11-14",
  readingMinutes: 8,
  category: "Search",
  intro: [
    "To get cited by ChatGPT, Perplexity and Google AI Overviews, you first need to be in the index each engine retrieves from — Bing, Google, or Perplexity’s own crawl. Then write pages that answer a question in their opening sentences, keep your brand described consistently everywhere, and earn mentions on the third-party sources these engines already trust.",
    "This is the practical companion to our explainer on AEO vs GEO vs SEO. That piece covers why the target shifts from a ranking to a citation. This one covers the work: where each engine looks, what makes a page quotable, and how to tell whether any of it is working.",
  ],
  sections: [
    {
      heading: "Where do ChatGPT, Perplexity and AI Overviews get their sources?",
      body: [
        "Each engine searches a web index before it writes an answer, and they do not all use the same one. If you are missing from the index an engine relies on, no amount of on-page work will get you cited there.",
        "ChatGPT search and Microsoft Copilot are widely reported to draw heavily on Bing’s index, with OpenAI also running its own search crawler, OAI-SearchBot. Gemini and Google AI Overviews draw on Google’s index. Perplexity runs its own crawler, PerplexityBot, and is reported to supplement it with partner search data.",
        "Those are public reports and vendor documentation, not Motion 8 Agency measurements, and the arrangements change. The practical consequence is stable, though: a brand that only ever checks Google Search Console may be invisible to half the assistants its buyers use.",
        "Retrieval also happens at question time. The engine rewrites the user’s prompt into one or more searches, pulls a handful of pages and composes an answer from passages inside them. You are competing to be one of those pages, and then to have the most quotable passage on it.",
      ],
    },
    {
      heading: "How do you make sure AI engines can find your pages?",
      body: [
        "Get indexed in both Google and Bing, and make sure nothing is blocking the crawlers that feed AI search. It is the cheapest step and the one most often skipped.",
        "Verify the site in Google Search Console and Bing Webmaster Tools, submit the same XML sitemap to both, and check the coverage reports for important pages that are excluded. Bing Webmaster Tools can import a verified Search Console property, so this takes minutes rather than days.",
        "Set up IndexNow. It is an open protocol that lets you notify participating search engines, Bing among them, the moment a URL is published or changed instead of waiting to be recrawled. Google does not use it, so it complements Search Console rather than replacing it. Many CMS and ecommerce platforms support it through a setting or plugin.",
        "Then read your robots.txt the way an AI engine would. Blocking GPTBot or Google-Extended is a decision about model training. Blocking OAI-SearchBot, PerplexityBot or Bingbot is a decision to be left out of search answers. Teams often conflate the two and block more than they meant to. Check your CDN or bot-protection layer as well, because it can turn crawlers away even when robots.txt allows them.",
        "Finally, make sure the substance of each page is in the HTML. Content that only appears after client-side rendering, or behind tabs that load on click, is harder for any crawler to parse reliably.",
      ],
    },
    {
      heading: "What kind of page actually gets quoted?",
      body: [
        "Pages that answer a specific question in their first one or two sentences, under a heading that reads like the question. Engines extract passages rather than whole pages, so every section has to stand on its own.",
        "Write headings the way buyers phrase questions — ‘How long does a Shopify Plus migration take?’ rather than ‘Timelines’. Open each section with a direct answer that would still make sense if it were lifted out and pasted into someone else’s response, because that is exactly what happens to it.",
        "Then add the detail that makes the answer trustworthy: the conditions where it changes, the concrete steps, the trade-offs. A generic answer gives an engine no reason to choose you over every other page saying the same thing. Specificity is what makes a passage worth citing.",
        "Keep paragraphs short, with one idea in each, and never bury the answer below a long preamble. Comparison and definition questions benefit from a plain table or a tight list. Date your content and keep it current; for anything time-sensitive, a page that looks maintained is an easier source to trust.",
      ],
    },
    {
      heading: "Does structured data help you get cited?",
      body: [
        "It helps engines understand who you are and what a page contains, but it does not make a weak page worth quoting. Treat it as low-cost hygiene rather than a lever.",
        "The useful types for most brands are Organization (with logo, contact details and sameAs links to your official profiles), Article or BlogPosting with a named author and dates, Product with offers and reviews for ecommerce, FAQPage where the page genuinely is a set of questions, and BreadcrumbList. Validate with Google’s Rich Results Test and the Schema.org validator.",
        "Make the markup match the visible page. Schema that claims things the page does not show is ignored at best and treated as spam at worst. Google has also narrowed which sites get FAQ rich results in classic search; the markup is still worth keeping for parsing even where the visual feature no longer appears.",
      ],
    },
    {
      heading: "Do you need an llms.txt file?",
      body: [
        "It is optional and unproven. llms.txt is a proposed convention — a markdown file at your site root that summarises the site and links to key pages for language models — and no major search engine has confirmed using it to choose sources for answers.",
        "Google has said publicly that it does not use llms.txt for Search, and its guidance for appearing in AI Overviews is ordinary SEO practice. At the time of writing, other major providers have not publicly said they read it when composing answers either.",
        "So why bother? It takes an hour, costs almost nothing to maintain if it is generated from your existing content, and gives any agent or tool that does read it a clean summary of what you offer. Motion 8 Agency publishes one for exactly that reason. Do it after the indexing, content and entity work, not instead of it, and be sceptical of anyone selling it as a citation lever.",
      ],
    },
    {
      heading: "Why does entity consistency matter so much?",
      body: [
        "An engine will only put your name next to a claim when it is confident who you are. Inconsistent names, descriptions and facts across the web lower that confidence.",
        "Pick one canonical form of your brand name and use it everywhere: site, schema, social profiles, directories and press. If your name is a common word or is shared with another company, pair it with a consistent descriptor — ‘Acme, the payroll platform for clinics’ — so the engine can tell you apart. Brands with generic names are easily confused with namesakes in AI answers, and the fix is relentless consistency rather than any single tag.",
        "Align the facts too: what you do, where you operate, who you serve, when you were founded and who leads the company. If your About page, LinkedIn and Crunchbase disagree, an engine may repeat the wrong version, or hedge and cite a competitor instead. List your official profiles in your Organization schema’s sameAs property so the connections are explicit.",
        "Have one page that states plainly what the company is and does, in a sentence an engine could quote verbatim. Most home pages are too abstract to do that job.",
      ],
    },
    {
      heading: "Which third-party sources do AI engines lean on?",
      body: [
        "Engines lean heavily on sources other than your own site — review platforms, directories, community forums, video and ‘best of’ listicles — especially for comparison and recommendation questions. Your presence there often decides whether you are named at all.",
        "Run your target buyer questions through each assistant and look at what it cites. In most categories a recurring set appears: industry directories and review sites such as G2, Capterra, Clutch or Trustpilot depending on the market, Reddit threads, YouTube videos, Wikipedia where it applies, trade publications, and listicles from publishers or competitors.",
        "Then work that list deliberately. Claim and complete directory and review profiles using the same name and description as your site. Ask real customers for reviews on the platforms your category’s answers actually cite. Take part in relevant communities as a named, useful person rather than a brand dropping links; forum moderators remove the latter quickly. Publish video answers to the questions buyers ask, with accurate titles and descriptions. Earn inclusion in reputable listicles and coverage through PR tied to something specific.",
        "None of this is new. It is reputation work. It matters more now because an assistant answering ‘what are the best options for X’ is effectively summarising these sources for your buyer.",
      ],
    },
    {
      heading: "How do you measure whether you are being cited?",
      body: [
        "Track a fixed list of buyer questions across the main assistants every month, logging whether you are cited, how you are described and who is cited instead. Month-on-month movement is the signal; a single answer on its own proves nothing.",
        "Build the prompt set from real buyer language: sales call notes, support tickets and Search Console queries. Cover problem questions, comparison questions and questions about your brand by name, and keep the wording identical from month to month so the results are comparable.",
        "Run each prompt in ChatGPT with search enabled, Perplexity, Google with AI Overviews or AI Mode, Gemini and Copilot. Use clean sessions and a consistent location, and run each prompt more than once where you can, because answers vary between runs. Record whether you were cited, which URL, whether your brand was mentioned without a link, the description used, and which competitors and third-party sources appeared.",
        "Pair that with traffic data: referral sessions from chatgpt.com, perplexity.ai and similar sources in your analytics, plus branded search volume over time. AI referral traffic is modest for most sites, but it is the most direct evidence that the work is reaching buyers.",
        "When a prompt you care about keeps citing someone else, read the page it cites. It usually tells you what is missing: a clearer answer, a fact you never published, or a third-party source you are absent from. That loop — measure, diagnose, fix, re-measure — is how Motion 8 Agency runs AEO and GEO work, and it keeps the effort iterative rather than speculative.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why does ChatGPT cite our competitors instead of us?",
      answer:
        "Usually because their pages are easier to retrieve, quote or trust for that question. Open the pages being cited and compare: a clearer opening answer, a specific fact you never published, or a review site or directory where you are absent. Also confirm Bing has indexed your pages, since ChatGPT search is widely reported to rely heavily on its index.",
    },
    {
      question: "Can you pay to appear in ChatGPT or AI Overviews answers?",
      answer:
        "Not in the organic answer. There is no submission process or paid placement that guarantees a citation inside AI Overviews, ChatGPT or Perplexity responses. Some platforms show or test labelled ads alongside AI answers, but those are ads, not citations. Treat anyone promising guaranteed placement in the answer itself with suspicion.",
    },
    {
      question: "Does ranking well on Google mean AI Overviews will cite us?",
      answer:
        "It helps, but it does not guarantee it. AI Overviews draw on Google’s index, so strong organic visibility puts you in the candidate set. The engine then selects passages that answer the specific question, and a high-ranking page with no direct, quotable answer can be passed over for one that states it clearly.",
    },
    {
      question: "Should we block AI crawlers in robots.txt?",
      answer:
        "Block training crawlers if you have a reason to, but leave search crawlers alone. GPTBot and Google-Extended govern use of your content for model training. OAI-SearchBot, PerplexityBot, Bingbot and Googlebot govern whether you can appear in search and AI answers at all. Blocking the second group removes you from the answers your buyers read.",
    },
    {
      question: "What should we fix first?",
      answer:
        "Confirm that your important pages are indexed in both Google and Bing, and that robots.txt and your CDN are not blocking AI search crawlers. It is the cheapest fix, and nothing else matters if engines cannot retrieve your pages. Then rewrite your highest-value pages so every section opens with a direct answer.",
    },
  ],
  related: [
    { name: "AEO — Answer Engine Optimization", href: "/digital-marketing/aeo-answer-engine-optimization" },
    { name: "GEO — Generative Engine Optimization", href: "/digital-marketing/geo-generative-engine-optimization" },
    { name: "AEO vs GEO vs SEO: what actually changes", href: "/blog/aeo-vs-geo-vs-seo" },
    { name: "SEO & Content Strategy", href: "/digital-marketing/seo-content-strategy" },
  ],
};
