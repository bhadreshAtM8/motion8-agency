/**
 * FAQ sets ported verbatim from the approved Claude Design artboards
 * (color-mockups/*.dc.html). These were written and verified in that project;
 * this file is the transcription, keyed by the route they belong to.
 *
 * Generated — edit the copy here, not in the artboards.
 */

export type Faq = { question: string; answer: string };

export const FAQ_SETS: Record<string, Faq[]> = {
  "pillar:digital-marketing": [
    {
      "question": "How is this different from a traditional agency?",
      "answer": "Traditional agencies hand you a single-channel retainer and a monthly slide deck. We run performance, SEO, automation, CRO, social, AEO/GEO, analytics, PR, and brand out of one integrated pod, so the channels compound each other instead of competing for budget in separate silos. You get one strategist accountable for the whole growth number, not nine vendors pointing at each other."
    },
    {
      "question": "How long does SEO take to work?",
      "answer": "Technical fixes and content restructuring typically move rankings within 60-90 days; compounding organic traffic and pipeline usually shows up around month four to six. We pair SEO with paid and AEO/GEO from day one so you're not waiting on one channel alone to prove the program is working."
    },
    {
      "question": "In-house or agency for social media?",
      "answer": "Most companies can't justify a full in-house social hire until they are considerably larger. We run social as one thread inside the broader marketing pod, so it's briefed by the same positioning and performance data as your paid and content work, at a fraction of the cost of a dedicated hire."
    },
    {
      "question": "Which of the ten services do we actually need?",
      "answer": "Almost nobody starts with all ten. We scope a channel mix from your stage, funnel, and current traction in the first working session, usually anchored on performance marketing plus SEO or CRO, then layer in automation, social, AEO, GEO, PR, or advanced analytics as the data tells us where the next unit of growth is cheapest."
    },
    {
      "question": "How do the channels actually work together?",
      "answer": "SEO and content feed the paid campaigns better landing pages and ad angles; performance data tells CRO what to test next; automation nurtures everyone the other channels bring in; and analytics ties it all back to revenue so we know what to double down on. It's one funnel run by one team, not nine reports stitched together after the fact."
    },
    {
      "question": "What's the minimum budget to see results?",
      "answer": "Engagements typically start where a focused two- or three-channel program can run properly, media spend included where relevant. We'll tell you plainly during scoping if your budget is better spent on fewer channels done well rather than spreading thin across all nine."
    },
    {
      "question": "Is this a flat retainer or performance-based?",
      "answer": "Most engagements run as a monthly retainer sized to the channel mix, with media spend billed separately and transparently at cost. We'll discuss a hybrid structure with performance components once a channel has enough baseline data to set a fair target."
    },
    {
      "question": "Who owns our ad accounts, CRM, and content?",
      "answer": "You do, always. We work inside your ad accounts, your CRM, and your CMS as an operator with access, not the account owner, so nothing is held hostage if you ever change agencies. Every asset, script, and workflow we build is yours to keep."
    },
    {
      "question": "How do you report on results?",
      "answer": "You get a live analytics dashboard pulling pipeline, spend, and channel performance into one view, plus a monthly review call where we walk through what moved, what we're testing next, and where budget should shift. No static PDF decks that are stale by the time you open them."
    },
    {
      "question": "Which metrics do you actually optimize for?",
      "answer": "Pipeline and revenue, not vanity metrics. We track qualified leads, CAC, and conversion rate as the north stars, with channel-level metrics like rankings, CTR, or engagement as leading indicators we watch to keep the bigger number moving in the right direction."
    },
    {
      "question": "How fast can this program start?",
      "answer": "A scoping call and access handoff usually takes about a week, and paid or automation channels can be live within the first two weeks after kickoff. SEO, content, and PR need more setup time, but you'll see the first campaigns and pages moving well before month one closes."
    },
    {
      "question": "What do AEO and GEO actually mean?",
      "answer": "It's making sure your product shows up when people ask Google's answer box or ChatGPT, Perplexity, and Gemini for recommendations, not just when they scroll a results page. AEO covers snippet, voice, and \"People Also Ask\" placements; GEO covers being cited inside a generative AI answer. We structure content, schema, and brand mentions for both, since they're becoming their own discovery channels alongside traditional SEO."
    },
    {
      "question": "Do you require a long-term contract?",
      "answer": "We ask for an initial three-month minimum because that's roughly how long it takes most channels to produce a clean read on performance. After that, engagements run month-to-month, and you can scale channels up or down as your funding and priorities shift."
    },
    {
      "question": "Why pick Motion 8 over a bigger agency?",
      "answer": "We're built as growth infrastructure, not a generalist shop juggling unrelated retainers alongside you. That means senior strategists on your account, tooling and processes that match your stage, and a channel mix that flexes as fast as your business does."
    },
    {
      "question": "What happens after we say yes?",
      "answer": "We kick off with a discovery session to scope your channel mix, get access set up across your ad accounts, CRM, and analytics, and have a working plan back to you within the first week. From there it's the same Discover, Build, Launch, Scale cadence you saw above, running every month."
    }
  ],
  "pillar:software-development": [
    {
      "question": "Do you build on our existing stack, or do we have to rebuild from scratch?",
      "answer": "We build on what you already have whenever it's sound — we don't rip out a working stack to justify a bigger invoice. If your codebase, cloud setup, or data layer has real problems we'll say so plainly and give you the tradeoffs before you commit to a rebuild."
    },
    {
      "question": "Can you work inside our current cloud and DevOps setup (AWS, GCP, Azure)?",
      "answer": "Yes. We work directly inside your existing AWS, GCP, or Azure environment and your CI/CD pipeline rather than standing up a parallel one. If you don't have infrastructure in place yet, we'll set it up to match how your team plans to operate post-launch."
    },
    {
      "question": "What languages and frameworks does your team actually work in?",
      "answer": "Our core stack covers React, React Native, Node.js, Next.js, Python, and Solidity, plus native iOS and Android when a product needs it. We pick the stack based on what your product and team need long-term, not what's fastest for us to bill."
    },
    {
      "question": "Can you build a custom internal tool, not just a customer-facing app?",
      "answer": "Yes — internal dashboards, admin panels, ops tooling, and workflow systems are a regular part of what we build for post-Series-A teams who've outgrown spreadsheets and no-code tools. Same process, same team, just a different audience."
    },
    {
      "question": "Can you take a rough idea straight to an MVP, or do we need a finished spec first?",
      "answer": "You don't need a finished spec. We regularly take a founder's rough idea or a whiteboard sketch through scoping and straight into a working MVP, tightening requirements as we build rather than stalling on a perfect document upfront."
    },
    {
      "question": "Do you write smart contracts, or just front-end interfaces for Web3 products?",
      "answer": "Both. We write and audit smart contracts (primarily Solidity, on EVM-compatible chains) and build the application layer — wallets, dashboards, and user-facing interfaces — on top of them, so the same team owns the product end to end."
    },
    {
      "question": "How much does custom software or app development cost?",
      "answer": "It depends on scope, but we quote a fixed range after a scoping call, not an open-ended hourly rate that grows with the project. A lean MVP and a full multi-platform product land in very different bands — we'll tell you which one you're actually building before you sign anything."
    },
    {
      "question": "How fast can you turn an MVP around?",
      "answer": "Most focused MVPs ship in 6 to 10 weeks from a locked scope. Timeline depends on integrations and platform count (web-only moves faster than web plus native iOS and Android), and we give you a firm date at the end of Discover, not a moving target."
    },
    {
      "question": "Who owns the code and IP once the project ships?",
      "answer": "You do, fully. Every repository, credential, and deployment we touch is under your accounts from day one, and IP ownership transfers to you outright on delivery — there's no vendor lock-in and no code held hostage behind a support contract."
    },
    {
      "question": "How do you handle security for products that touch user data or funds?",
      "answer": "Security review is built into Build and Launch, not bolted on afterward — dependency scanning, access-control review, and (for blockchain work) contract audits before anything touches mainnet or real user data. For regulated products we'll flag compliance gaps early, before they become launch blockers."
    },
    {
      "question": "What happens after launch — do you disappear, or do you support the product?",
      "answer": "Scale is a standing part of our process, not an upsell we mention after the invoice clears. We stay on for monitoring, bug fixes, and iteration through a monthly retainer or an ongoing sprint cadence — whichever matches how your team wants to keep shipping."
    },
    {
      "question": "Will we be working with senior engineers or a rotating bench of juniors?",
      "answer": "You get a consistent, named team for the life of the engagement — not a rotating bench reassigned between projects. Senior engineers scope and lead the build; you'll know exactly who's writing your code and can talk to them directly, not through an account manager relay."
    },
    {
      "question": "How do you keep a timeline from slipping?",
      "answer": "Scope gets locked at the end of Discover, sprints run on a fixed weekly demo cadence, and any change request gets priced and scheduled instead of quietly absorbed into the timeline. You see slippage risk the moment it appears, not at the missed deadline."
    },
    {
      "question": "What makes Motion 8 different from a generalist dev agency or a freelance platform?",
      "answer": "We're built for teams shipping against real deadlines, not general contract work — which means our process assumes tight budgets, board-level timelines, and a product that has to be defensible technically, not just functional. And because development sits alongside our marketing and AI/automation pillars, your product, growth, and internal tooling can stay on one team instead of three disconnected vendors."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a Project below and you'll get a Discover call within 24 hours to walk through what you're building, your current stack, and your timeline. From there we scope the engagement and give you a fixed range and a start date — no lengthy sales process."
    }
  ],
  "pillar:ai-automation": [
    {
      "question": "Is my startup actually ready for AI, or is this premature?",
      "answer": "If you have a workflow with real volume — support tickets, lead qualification, data entry, document review — and it's repetitive enough to be measured, you're ready. Readiness isn't about your funding stage or team size; it's about whether the process you want to automate is well-defined enough to build against. We'll tell you honestly in the first call if it isn't."
    },
    {
      "question": "What kinds of problems is AI actually good at solving right now?",
      "answer": "Anything that's high-volume, pattern-based, and currently done by a person reading and deciding: triaging support tickets, qualifying inbound leads, extracting data from documents, drafting first-pass responses, routing internal requests. It's weaker at open-ended judgment calls with no historical pattern to learn from — we'll flag those upfront instead of overselling the model."
    },
    {
      "question": "Do we need a data science or ML team internally to work with you?",
      "answer": "No. Most of what we build sits on top of existing large language models rather than training new ones from scratch, so you don't need in-house ML expertise. We handle the engineering; your team just needs to know your data and workflows well enough to sit in on discovery."
    },
    {
      "question": "Can you build agents that connect to our existing product and databases?",
      "answer": "Yes — that's most of the work. Agents that only live in a sandbox don't move metrics. We integrate directly with your app's database, internal APIs, and third-party tools (CRM, support desk, payments) so the automation reads real data and takes real actions, not demo data."
    },
    {
      "question": "What does \"RAG\" actually mean and do we need it?",
      "answer": "Retrieval-augmented generation means the AI looks up relevant information from your own documents or database before answering, instead of relying only on what it was trained on. You need it whenever accuracy matters and the answer depends on your specific, current data — product docs, policies, customer records — rather than general knowledge."
    },
    {
      "question": "How do you keep the AI from making things up (hallucinating)?",
      "answer": "We ground responses in your actual data through retrieval rather than letting the model freewheel, constrain outputs with structured formats and validation, and build in confidence thresholds that hand off to a human when the model isn't sure. For anything customer-facing or high-stakes, we test against real edge cases before launch, not just happy-path demos."
    },
    {
      "question": "Is our data safe if it's being sent to a model like GPT or Claude?",
      "answer": "We use enterprise API agreements with providers that contractually exclude your data from model training, and we architect systems so only the minimum necessary data reaches the model. For anything sensitive — PII, financial records, health data — we scope the integration with your compliance requirements up front, not as an afterthought."
    },
    {
      "question": "How much does an AI or automation project cost?",
      "answer": "It depends on scope — a single-workflow automation is a very different build from a multi-agent system wired into several products. We scope and quote after discovery rather than pricing off a rate card, because the honest cost driver is integration complexity, not the AI itself."
    },
    {
      "question": "How long does it take to go from idea to a working system?",
      "answer": "A focused automation or agent typically ships in 4–8 weeks from kickoff to production. Larger builds involving multiple integrations or fine-tuning run longer, but we structure every project in shippable sprints so you see working software early, not just a plan at week eight."
    },
    {
      "question": "What happens after launch — who maintains and improves the system?",
      "answer": "Models, prompts, and usage patterns drift, so we don't treat launch as the finish line. We offer ongoing monitoring and iteration — tracking accuracy and cost, retraining or re-prompting as needed — either as a retainer or a defined support window, whichever fits how you want to run it internally."
    },
    {
      "question": "Will this replace jobs on our team, and how should we think about that?",
      "answer": "Most of what we build removes repetitive volume from a role, not the role itself — freeing your team for the judgment calls AI still can't make well. How you staff around that capacity is your call; we build the system to fit whichever direction you choose, automation-first or augmentation-first."
    },
    {
      "question": "What are the ethical and bias risks we should be watching for?",
      "answer": "Any system trained or grounded on historical data can inherit the patterns — and biases — in that data, especially in decisions touching hiring, credit, or customer treatment. We flag these risk areas during discovery, build in human review for consequential decisions, and avoid fully autonomous automation wherever the downside of a wrong call is high."
    },
    {
      "question": "We tried a no-code AI tool and it didn't work well. What's different about a custom build?",
      "answer": "No-code tools are built for the average case, not your workflow's edge cases — which is usually where they break. A custom build lets us handle your specific data structure, business logic, and failure modes directly, and gives you a system you actually own rather than a workflow trapped inside a third-party platform's limits."
    },
    {
      "question": "Why Motion 8 instead of a specialist AI-only shop or a freelancer?",
      "answer": "Because your AI system rarely lives in isolation — it needs to talk to your product, your marketing stack, and your data pipeline, and we already build all three under one roof. You get engineers who understand the whole system it's plugging into, not a specialist who hands you a model and disappears once it's \"done.\""
    },
    {
      "question": "How do we get started?",
      "answer": "Book a call and bring the workflow that's costing you the most time or money right now. We'll tell you honestly whether AI is the right fix, scope a first project against real data within a week, and give you a working prototype before you commit to anything larger."
    }
  ],
  "digital-marketing/performance-marketing": [
    {
      "question": "Which paid channels are right for an early-stage startup?",
      "answer": "It depends on where your buyers already are: Google for high-intent, ready-to-buy search demand; Meta and TikTok for broader awareness and retargeting at lower cost; LinkedIn for account-based B2B outreach. We usually start with one or two channels backed by real signal, then expand once we can prove CAC on the first."
    },
    {
      "question": "How much budget do we need before performance marketing makes sense?",
      "answer": "We typically see meaningful signal starting around $5-10k/month in ad spend, though the right floor depends on your deal size and sales cycle. Below that, spend is often too thin to reach statistical confidence, and we'll tell you honestly if that's where you are."
    },
    {
      "question": "Do you manage the total ad spend on top of your fee?",
      "answer": "Ad spend runs directly through your own platform accounts, billed to you by Google, Meta, LinkedIn, or TikTok — not marked up or routed through us. Our fee covers strategy, execution, and optimization, so you always see exactly what the platforms are charging."
    },
    {
      "question": "How long until we see results from paid campaigns?",
      "answer": "Early signal on cost-per-click and cost-per-lead usually shows within 2-3 weeks of launch. Reliable pipeline and CAC numbers take longer — typically 6-8 weeks — since we need enough volume to move past early noise before making real optimization calls."
    },
    {
      "question": "Why did our last agency's numbers look great but pipeline didn't move?",
      "answer": "That's usually a sign the agency was optimizing for the metrics they could control — clicks, impressions, CTR — instead of what closes deals. We tie every campaign to CRM stages and revenue from day one, so the report you see is the same one that matters to your board."
    },
    {
      "question": "How do you measure success if not clicks and impressions?",
      "answer": "Our primary scoreboard is qualified pipeline generated and cost per qualified opportunity, pulled straight from your CRM. Clicks, impressions, and CTR still get tracked as diagnostic signals, but they're never the number we report as success."
    },
    {
      "question": "What's your approach to attribution when a buyer touches multiple channels?",
      "answer": "We set up multi-touch attribution across your ad platforms and CRM so we can see the full path a buyer takes, not just the last click before conversion. That's what lets us credit awareness channels fairly instead of over-crediting whichever channel happens to close."
    },
    {
      "question": "Can you work with our existing CRM and analytics stack?",
      "answer": "Yes — we integrate with HubSpot, Salesforce, and most common CRM and analytics tools rather than asking you to migrate. If tracking is already broken or incomplete, we'll fix the plumbing before we launch spend on top of it."
    },
    {
      "question": "Should we run Google, Meta, LinkedIn, and TikTok all at once?",
      "answer": "Usually not from day one — spreading a limited budget across four platforms just dilutes the signal on every one of them. We start with the one or two channels most likely to fit your buyer and budget, then add channels as spend and confidence grow."
    },
    {
      "question": "How do you decide which platform gets the most budget?",
      "answer": "Budget follows cost per qualified opportunity, reviewed weekly against your CRM data. Whichever platform and campaign is producing pipeline most efficiently gets more spend; anything underperforming gets cut or reworked before it drains more budget."
    },
    {
      "question": "Is LinkedIn worth it for B2B startups given the higher CPCs?",
      "answer": "Often yes, if your deal size supports it — LinkedIn's targeting by title, company, and seniority can outweigh the higher click cost for enterprise or ABM motions. For lower deal sizes we'll usually test cheaper channels first and only bring LinkedIn in once the economics clearly work."
    },
    {
      "question": "How do you know when it's safe to scale spend on a winning campaign?",
      "answer": "We look for consistent cost-per-opportunity across enough volume to trust the pattern, not one good week. Once that holds, we scale budget in measured steps and watch for efficiency drop-off, rather than doubling spend overnight and hoping the numbers hold."
    },
    {
      "question": "What happens to performance when we increase budget quickly?",
      "answer": "Platforms often need to re-learn delivery when spend jumps sharply, which can temporarily push cost per result up. We pace budget increases in stages precisely to avoid that dip, protecting the CAC you've already proven out."
    },
    {
      "question": "What makes Motion 8 different from a typical paid media agency?",
      "answer": "We sit close to your revenue data instead of reporting from inside the ad platform alone, and our team builds the landing pages and tracking too — so there's no handoff gap between the ad, the page it lands on, and the number that shows up in your CRM."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and we'll audit your current spend, tracking, and CRM setup within 24 hours. From there we'll propose a channel mix, target CAC, and launch timeline before any budget moves."
    }
  ],
  "digital-marketing/seo-content-strategy": [
    {
      "question": "What is SEO and why does it matter for a startup?",
      "answer": "SEO is the practice of earning visibility in search results and AI-generated answers without paying per click. It's the channel that keeps working after the ad budget runs out, compounding traffic and credibility instead of resetting to zero every month."
    },
    {
      "question": "How long does it take to see results from SEO?",
      "answer": "Technical fixes can move indexation and site health within weeks, but meaningful ranking and traffic gains typically take 3-6 months as content and authority build. We set milestone checkpoints early so progress is visible well before that."
    },
    {
      "question": "What's the difference between technical, on-page, and off-page SEO?",
      "answer": "Technical SEO fixes how well search engines and crawlers can access and understand your site (speed, indexing, structured data). On-page SEO optimizes individual pages and content for target keywords and intent. Off-page SEO builds the external signals, mainly backlinks and mentions, that establish authority."
    },
    {
      "question": "Do you handle local SEO?",
      "answer": "Yes, for startups with a physical presence, service area, or regional launch market, we optimize Google Business Profiles, local citations, and location-specific content. It's scoped in alongside the core strategy, not sold as a separate add-on."
    },
    {
      "question": "We just launched — is it too early to start SEO?",
      "answer": "It's actually the ideal time, since SEO compounds and a new domain needs time to build authority regardless of when you start. Getting the technical foundation and information architecture right from day one avoids expensive rework later."
    },
    {
      "question": "How does content marketing tie into the SEO strategy?",
      "answer": "Content is how the strategy gets executed, since every keyword and topic in the map becomes a piece written to rank and to answer a real buyer question. We plan it as one editorial calendar rather than running content and SEO as separate workstreams that fight for the same pages."
    },
    {
      "question": "What tools do you use to track and manage SEO?",
      "answer": "Semrush and Google Search Console for keyword tracking and technical health, Screaming Frog for crawl audits, and Google Analytics for traffic and conversion reporting. You get shared dashboard access, not a black box."
    },
    {
      "question": "How often do you review and adjust the strategy?",
      "answer": "We run a monthly review against rankings, traffic, and conversion data, and adjust the content and link priorities for the next month accordingly. Technical issues get flagged and fixed as soon as a crawl surfaces them, not held for the monthly cycle."
    },
    {
      "question": "What is AEO/GEO, and why should we care about it now?",
      "answer": "Answer Engine Optimization and Generative Engine Optimization are how you get cited by AI tools like ChatGPT, Perplexity, and Google's AI Overviews, which increasingly answer questions before a user ever clicks a blue link. We structure content to be directly quotable and machine-readable so you show up in those answers, not just traditional rankings."
    },
    {
      "question": "Will you build backlinks for us, and is that safe?",
      "answer": "Yes, through relevant guest content, digital PR, and outreach to sites your buyers actually read. We avoid link schemes that risk a penalty, since a fast spike in low-quality links can do more damage than doing nothing at all."
    },
    {
      "question": "Can you audit our existing site before we commit to a retainer?",
      "answer": "Yes, the audit is the first phase of engagement and gives you a concrete view of technical issues, keyword gaps, and competitive positioning before any retainer commitment. Most clients use it to decide where to prioritize spend."
    },
    {
      "question": "Do you write the content yourselves, or do we?",
      "answer": "Our team writes, edits, and publishes the content, briefed against your product and audience so it reads like it came from inside your company. You review and approve before anything goes live, and subject-matter input from your team is always welcome."
    },
    {
      "question": "How do you measure success beyond rankings?",
      "answer": "Rankings are a leading indicator, but we report on organic traffic, qualified sign-ups or demo requests, and assisted conversions tied back to specific pages and keywords. The goal is pipeline, not just position-one vanity metrics."
    },
    {
      "question": "Why choose Motion 8 over a specialist SEO shop?",
      "answer": "Because SEO sits inside the same team building your product, brand, and paid channels, your content and technical work stay aligned with what the rest of the business is actually doing. You get an agency that understands your growth stage, not a generic retainer template."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a Project to book an intro call, where we'll scope the audit and outline what a first 90 days looks like for your site and category. Most engagements can begin auditing within a week of that call."
    }
  ],
  "digital-marketing/marketing-automation-email": [
    {
      "question": "What exactly is marketing automation?-",
      "answer": "It's software-driven logic that sends the right message to the right person based on what they do — sign up, click, go quiet — instead of a human deciding each time. For a startup it means onboarding, nurture, and win-back run continuously without manual list pulls."
    },
    {
      "question": "Which platform should we use — HubSpot, Klaviyo, Marketo, or something else?+",
      "answer": "It depends on your model: HubSpot suits B2B SaaS with a sales team, Klaviyo suits ecommerce and consumer apps, Marketo suits larger B2B orgs with complex scoring. We audit your stack and volume before recommending, rather than defaulting to one tool."
    },
    {
      "question": "How long does it take to get a lifecycle program live?+",
      "answer": "A core program — welcome, onboarding, and one nurture track — typically launches in 3–4 weeks. Full lifecycle coverage with segmentation and CRM integration usually runs 6–8 weeks depending on data cleanliness."
    },
    {
      "question": "How do you protect deliverability when we're sending more email?+",
      "answer": "We set up domain authentication (SPF, DKIM, DMARC), warm up sending domains gradually, and monitor bounce and spam-complaint rates before scaling volume. Inbox placement testing runs before every major sequence goes live."
    },
    {
      "question": "How do you decide how to segment our list?+",
      "answer": "We segment on behavior and lifecycle stage — product usage, plan tier, engagement recency — rather than firmographics alone, since that's what predicts who's ready for a nudge versus who needs nurturing. Segments get revisited monthly as usage data accumulates."
    },
    {
      "question": "Will this integrate with our existing CRM and sales process?+",
      "answer": "Yes — we build lead scoring and handoff triggers so sales gets notified the moment a contact hits sales-ready behavior, instead of marketing and sales working off separate lists. This is usually where the biggest pipeline lift shows up."
    },
    {
      "question": "What does marketing automation cost, and are there platform fees on top?+",
      "answer": "Our fee covers strategy, build, and ongoing optimization; the automation platform itself (HubSpot, Klaviyo, etc.) is a separate subscription billed directly to you based on contact volume. We scope both during the audit so there are no surprises."
    },
    {
      "question": "How do we measure ROI on this?+",
      "answer": "We track activation rate, sequence-to-conversion rate, and revenue influenced by automated touches, not just opens and clicks. You get a monthly dashboard tying automation activity back to pipeline and retained revenue."
    },
    {
      "question": "We already have some email flows — can you improve them instead of starting over?+",
      "answer": "Yes, most engagements start with an audit of what's already live. We keep what's working, fix deliverability or targeting issues, and fill the gaps rather than rebuilding a program that's already performing."
    },
    {
      "question": "Do you write the email copy, or do we?+",
      "answer": "We write and design full sequences as part of the engagement, using your product and customer voice as input. You review and approve before anything sends, and can hand us as much or as little copy direction as you want."
    },
    {
      "question": "How many sequences do we actually need to start?+",
      "answer": "Most startups get the biggest early lift from three: welcome/onboarding, trial or activation nurture, and win-back for lapsed users. We build those first, then expand based on what the data says is leaking users."
    },
    {
      "question": "What happens if our product or ICP changes after launch?+",
      "answer": "Lifecycle programs aren't static — we revisit segmentation and messaging as your product or target customer shifts, which is part of the ongoing optimization cadence rather than a separate rebuild project."
    },
    {
      "question": "Can this scale internationally across the US, UK, and Australia?+",
      "answer": "Yes — we account for send-time localization, regional compliance (CAN-SPAM, GDPR, Australia's Spam Act), and region-specific segmentation from the start, which matters for any company expanding across those markets."
    },
    {
      "question": "Why choose Motion 8 over an in-house hire or a freelance specialist?+",
      "answer": "You get strategy, copy, build, and deliverability expertise in one team instead of hiring and managing multiple specialists, at a fraction of the cost of a full-time lifecycle marketer. We've built this for teams moving fast on limited headcount."
    },
    {
      "question": "How do we get started?+",
      "answer": "Start with a project scoping call where we audit your current data, tools, and lifecycle gaps. From there we send a proposal with timeline and cost, and can typically kick off the build within a week of sign-off."
    }
  ],
  "digital-marketing/conversion-rate-optimization": [
    {
      "question": "What is conversion rate optimization, exactly?",
      "answer": "CRO is the disciplined process of turning more of your existing traffic into signups, demos, or paying customers — without spending another dollar on acquisition. We form hypotheses from real user behavior, test them, and roll out only what actually moves the number. It's the fastest lever to improve unit economics before your next raise or budget cycle."
    },
    {
      "question": "How is CRO different from SEO or paid media?",
      "answer": "SEO and paid media are about getting more people to your site; CRO is about getting more value out of the people already there. The two compound each other — a higher conversion rate makes every acquisition channel cheaper — which is why we treat CRO as the multiplier sitting underneath your growth spend, not a separate line item."
    },
    {
      "question": "What's your testing methodology?",
      "answer": "We start with research — analytics, session recordings, heatmaps, and user feedback — to find where visitors hesitate or drop off. Every test ships as a clear hypothesis with a defined success metric, and we run one confident variant at a time rather than scattering changes across the funnel."
    },
    {
      "question": "How long before we see a measurable lift?",
      "answer": "Most engagements surface their first validated win within four to six weeks, though the exact timeline depends on your traffic volume and current conversion rate. We prioritize the highest-impact, fastest-to-test opportunities first so early-stage teams see momentum quickly."
    },
    {
      "question": "What counts as statistical significance to you?",
      "answer": "We hold to a 95% confidence threshold before calling a winner, and we won't end a test early just because a lift looks good on day three. For lower-traffic startups, we account for the longer runway needed and pair quantitative results with qualitative signals so a decision never rests on noise."
    },
    {
      "question": "Do we need a minimum amount of traffic to run tests?",
      "answer": "A/B testing works best above a certain volume, but plenty of early-stage startups don't have it yet. When traffic is too thin for reliable split tests, we shift to structured qualitative methods — usability sessions, funnel audits, and heuristic reviews — that still produce evidence-backed changes."
    },
    {
      "question": "What tools do you use?",
      "answer": "We work with industry-standard testing and analytics platforms alongside session-recording and heatmap tools, chosen to fit your existing stack rather than force a migration. If you're already paying for a testing platform, we'll use it; if not, we'll recommend the lightest option for your traffic level."
    },
    {
      "question": "What does a typical CRO engagement include?",
      "answer": "A typical engagement covers a funnel and analytics audit, a prioritized test roadmap, design and build of each variant, test execution and analysis, and a rollout of validated wins. We run this as a continuous cycle rather than a one-off project, so learnings compound engagement over engagement."
    },
    {
      "question": "Can you optimize our checkout or signup flow specifically?",
      "answer": "Yes — checkout and signup flows are usually where we start, since even small friction there directly costs revenue or activations. We map every step of the flow, identify where users abandon, and test fixes ranging from form design to copy to trust signals."
    },
    {
      "question": "Do you also run tests on paid landing pages?",
      "answer": "Absolutely, and it's often the highest-leverage place to start since paid traffic is already costing you money per click. We optimize landing page match with ad intent, test messaging and layout, and work directly with whoever runs your media buying so wins ship fast."
    },
    {
      "question": "How do you report results?",
      "answer": "You get a running test log with hypothesis, results, and confidence level for every experiment, plus a regular summary that ties wins back to revenue or activation impact. No vanity metrics — every report answers the question \"did this move the number that matters.\""
    },
    {
      "question": "What does CRO cost?",
      "answer": "Pricing scales with your traffic volume and the scope of testing infrastructure already in place, so we size engagements to your stage rather than to enterprise budgets. Tell us your funnel and current traffic and we'll give you a concrete number, not a range that hides the real answer."
    },
    {
      "question": "What happens when a test loses?",
      "answer": "A losing test is still a win for the roadmap — it rules out an assumption and tells us something real about your users. We document why it likely lost, fold that insight into the next hypothesis, and revert cleanly so the experience never degrades for your visitors."
    },
    {
      "question": "Why Motion 8 over a specialist CRO shop?",
      "answer": "Because we sit across dev, design, and marketing under one roof, so a winning test doesn't stall waiting on another vendor to implement it — we build and ship it ourselves. That speed matters most where every week of runway counts."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a Project below and we'll set up a short call to look at your funnel and analytics together. From there we scope a prioritized test roadmap so you know exactly what we'll test first and why, before any commitment is made."
    }
  ],
  "digital-marketing/social-media-management": [
    {
      "question": "Which social platforms actually matter for a startup like ours?",
      "answer": "It depends on who you're selling to. B2B startups usually get the most pipeline value from LinkedIn and X, with a founder-led presence doing a lot of the work. B2C and consumer startups lean on Instagram, TikTok, and increasingly YouTube Shorts, where discovery and community happen natively. We start from your ICP, not a platform checklist."
    },
    {
      "question": "Should we focus on organic social or paid social first?",
      "answer": "Organic builds the brand voice, proof points, and content library that paid then amplifies — running paid against weak organic just accelerates fatigue. For most early-stage clients we spend the first 60–90 days building organic foundations, then layer in paid boosting on what's already proven to convert."
    },
    {
      "question": "How often should we actually be posting?",
      "answer": "Cadence is set by platform and capacity, not a round number. LinkedIn and X typically run 3–5 times a week per channel; Instagram and TikTok often need daily presence including Stories or short-form video to stay in the algorithm's good graces. We'd rather ship a sustainable cadence you can maintain than a heavy one that collapses in month three."
    },
    {
      "question": "Who actually produces the content — photos, video, graphics?",
      "answer": "Our in-house team handles copywriting, graphic design, and short-form video editing for every post. For raw footage or founder interviews we'll either work from what your team captures on a phone or bring in a lightweight shoot, depending on budget and platform needs."
    },
    {
      "question": "What does community management actually involve day to day?",
      "answer": "We monitor and respond to comments, DMs, and mentions across your active channels on a same-day SLA, in your brand voice. That includes routing product questions or complaints to your team, flagging sales-ready conversations, and keeping an eye on what competitors and your audience are saying."
    },
    {
      "question": "How do you measure ROI on social when it's not a direct sale?",
      "answer": "We track engagement and reach as leading indicators, but the metrics that matter are UTM-tagged site traffic, sign-ups, and demo requests attributed back to social. Every monthly report ties activity to funnel movement, not just impressions, so you can see whether the channel is actually contributing to pipeline."
    },
    {
      "question": "Should we just hire an in-house social manager instead?",
      "answer": "A single in-house hire covers one skill set — usually either content or community, rarely both plus paid and analytics. Motion 8 gives you that full bench for less than one full-time salary, plus the strategy and design layer a solo hire typically doesn't have. Some clients later bring social in-house once volume justifies it, and we're comfortable with that handoff."
    },
    {
      "question": "What does social media management cost with Motion 8?",
      "answer": "Pricing is scoped to platform count, posting cadence, and whether paid social and influencer support are included — we don't run one flat package. Tell us your funnel stage and target channels on a scoping call and we'll come back with a fixed monthly retainer, not a vague estimate."
    },
    {
      "question": "Do you write in our brand voice, or does everything sound like an agency?",
      "answer": "We build a written voice guide from your existing content, founder interviews, and customer language before we draft a single post, then run every piece through your approval workflow until it needs no edits. The goal is content your own team would have written, just faster."
    },
    {
      "question": "Can you tie social into influencer or partnership campaigns?",
      "answer": "Yes — we source and vet micro and mid-tier creators aligned with your ICP, manage outreach and briefing, and fold the resulting content into your organic and paid calendars. For B2C startups this is often the fastest way to borrow an audience's trust before you've built your own."
    },
    {
      "question": "How does paid social fit alongside our organic content?",
      "answer": "We boost organic posts that are already proving out engagement rather than building paid creative from scratch, and layer in dedicated conversion campaigns once we have retargeting audiences worth spending against. Media spend runs through your ad accounts so you keep full ownership and visibility."
    },
    {
      "question": "What if our startup doesn't have much content or brand assets yet?",
      "answer": "That's the normal starting point for most companies we work with. We build the initial asset library — templates, brand voice guide, a content bank — as part of onboarding, so you're not blocked waiting on design before the calendar can start."
    },
    {
      "question": "How involved does our team need to be day to day?",
      "answer": "Light. You approve the monthly calendar and flag anything sensitive; we handle drafting, scheduling, and day-to-day replies. Founder-led platforms like LinkedIn or X work best with 15–20 minutes of your time a week for authentic commentary, which we'll script and prompt for."
    },
    {
      "question": "Why choose Motion 8 over a freelance social media manager?",
      "answer": "A freelancer gives you one person's bandwidth and one skill set. Motion 8 gives you a strategist, designer, copywriter, and paid media specialist working from the same funnel data your other Motion 8 services already use — so social isn't an isolated channel, it's connected to the rest of your growth stack."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and bring whatever you have — existing channels, a brand guide, or nothing at all. We'll audit what's there, propose a channel mix and calendar, and can typically have your first month of content in review within two weeks of kickoff."
    }
  ],
  "digital-marketing/aeo-answer-engine-optimization": [
    {
      "question": "What is Answer Engine Optimization, exactly?",
      "answer": "AEO is the practice of structuring content so search engines can extract a single, direct answer from it — the featured snippet at the top of Google, a \"People Also Ask\" expansion, or the reply a voice assistant reads out loud. It's a different goal than ranking well; it's about being chosen as the one answer shown, often without the searcher ever clicking through."
    },
    {
      "question": "How is AEO different from regular SEO?",
      "answer": "Regular SEO optimizes for ranking position on a results page a person scrolls through. AEO optimizes for a specific SERP feature — a snippet box, a PAA expansion, a voice answer — that sits above or outside the normal ranked list. The two reinforce each other: a page that already ranks well is the easiest candidate to also win the answer box."
    },
    {
      "question": "How is AEO different from GEO?",
      "answer": "AEO targets the answer features built into traditional search — snippets, PAA, voice assistants. GEO (Generative Engine Optimization) targets being cited inside a generative AI's synthesized response, in tools like ChatGPT, Claude, or Perplexity. The disciplines overlap heavily — clear, structured, well-marked-up content helps both — which is why we run them as sibling services and often scope them together."
    },
    {
      "question": "Does winning a featured snippet actually drive traffic if people don't click?",
      "answer": "It drives less click volume per impression than a normal top ranking, but it puts your brand in front of every searcher for that query, often above every other result including paid ads, and snippet holders still see meaningful click-through from people who want more detail. For early-stage brand visibility, that exposure is worth more than the raw click count suggests."
    },
    {
      "question": "What kind of questions should we be targeting?",
      "answer": "We start from real \"People Also Ask\" data and voice-query patterns in your category — definition questions (\"what is X\"), comparison questions (\"X vs Y\"), and process questions (\"how to X\") tend to trigger the most answer features. We prioritize the ones with clear commercial relevance to your product, not just search volume."
    },
    {
      "question": "How long does it take to win a featured snippet?",
      "answer": "A page that already ranks on page one can pick up a snippet within a few weeks of a structural rewrite, since Google is mostly choosing among pages it already trusts. A page starting from nothing needs to earn a page-one ranking first, which typically pushes the timeline to two to four months."
    },
    {
      "question": "Can we lose a snippet once we win it?",
      "answer": "Yes — snippets rotate as competitors update their content or as Google re-evaluates the SERP, so it's not a one-and-done win. We track snippet ownership weekly and treat losing one as a trigger to refresh the page, not a surprise to react to months later."
    },
    {
      "question": "Do you handle voice assistants like Alexa, Siri, and Google Assistant?",
      "answer": "Voice assistants mostly read out the same featured snippet or knowledge-panel data we're already optimizing for, so most startups see voice benefit as a natural byproduct of core AEO work. We can go deeper on dedicated voice-query phrasing if it's a meaningful channel for your specific audience."
    },
    {
      "question": "What schema markup do you implement for this?",
      "answer": "Primarily FAQPage and HowTo schema, plus Article and Organization markup where relevant, so search engines can parse your Q&A content unambiguously. It's a scoped addition to your existing templates or CMS, implemented alongside your dev team's workflow rather than around it."
    },
    {
      "question": "Do we need brand-new content, or can you optimize what we have?",
      "answer": "Most of the time we restructure existing pages first, since they usually already carry the ranking signal a snippet needs — we just reformat the relevant section into a clean, extractable answer. We only recommend new content where there's a real gap against a question your buyers are actually asking."
    },
    {
      "question": "How do you measure results?",
      "answer": "We track which SERP features you hold for your priority queries week over week, alongside impressions, click-through rate, and where relevant, voice-answer capture. That rolls into the same monthly review as your broader SEO reporting, so you see one growth number, not a separate scoreboard."
    },
    {
      "question": "Can you guarantee we'll win a specific featured snippet?",
      "answer": "No one can honestly guarantee a specific snippet — the algorithm chooses dynamically and re-evaluates constantly. What we commit to is measurably improving the structural and topical signals that make winning likely, and reporting transparently on which features you hold each month."
    },
    {
      "question": "Will this cannibalize our existing SEO rankings?",
      "answer": "No — a well-structured answer section sits within a page that still targets its normal ranking keywords, so you're adding a feature on top of the ranking, not replacing it. We audit what's already performing before we touch anything, so we extend existing equity instead of risking it."
    },
    {
      "question": "Why choose Motion 8 for AEO instead of a general SEO agency?",
      "answer": "We're built as growth infrastructure, so AEO work happens alongside the product, engineering, and brand context a generic SEO shop doesn't have. That means the questions we target and the pages we restructure are picked with your actual roadmap and positioning in mind."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project with us and we'll run a snippet-and-answer audit, mapping which of your priority queries already trigger an answer feature and who currently holds it. From there we scope a prioritized roadmap of structural fixes and new content so you can see the first wins within a month."
    }
  ],
  "digital-marketing/geo-generative-engine-optimization": [
    {
      "question": "What does GEO actually mean, and why does it matter now?",
      "answer": "Generative Engine Optimization is the practice of structuring content and technical signals so generative AI systems like ChatGPT, Claude, Perplexity, and Google AI Overviews can find, understand, and cite your startup directly in the answers they synthesize. As more buyers skip search results and ask an AI instead, a startup that isn't legible to these engines isn't in the conversation, no matter how good its SEO used to be."
    },
    {
      "question": "How is GEO different from AEO?",
      "answer": "AEO (Answer Engine Optimization) targets the direct-answer surfaces built into traditional search, featured snippets, \"People Also Ask\", and voice assistants. GEO targets a different moment, being one of the sources a generative model like ChatGPT or Claude actually cites or quotes when it synthesizes a free-form answer. The disciplines share a foundation of clear, well-structured content, but GEO leans more heavily on entity signals, llms.txt, and brand-mention consistency across the web, since the model is choosing sources rather than ranking pages. Most startups need both, which is why we offer them as separate, focused engagements."
    },
    {
      "question": "How is this different from traditional SEO?",
      "answer": "Traditional SEO optimizes for ranking on a results page a human scrolls through; GEO optimizes for being the specific fact, quote, or recommendation an AI model pulls into its synthesized answer. That means different signals matter, clear entity definitions, structured data, extractable answers, and consistent brand mentions across the web, rather than just backlinks and keyword density."
    },
    {
      "question": "Which AI tools and engines does Motion 8 optimize for?",
      "answer": "We optimize for the major generative engines your buyers actually use, ChatGPT, Claude, Perplexity, Google AI Overviews and Gemini, and Microsoft Copilot. Each engine sources and weighs content a little differently, so our approach is engine-aware rather than one-size-fits-all."
    },
    {
      "question": "How do you actually measure whether it's working?",
      "answer": "We run structured prompt tests across ChatGPT, Claude, Perplexity, and Google AI Overviews on the queries that matter to your category, then track how often your brand is mentioned, cited, or recommended over time. That sits alongside referral traffic from AI tools and share-of-voice against named competitors, reported in plain, board-ready numbers."
    },
    {
      "question": "What does \"brand-mention tracking\" mean in practice?",
      "answer": "It means we systematically query AI tools with the questions your prospects are actually asking and log whether, how, and in what context your brand shows up versus competitors. That gives us a baseline, a way to prove progress, and an early warning if an engine starts citing a competitor instead of you."
    },
    {
      "question": "How long until we see our startup cited by AI engines?",
      "answer": "Early signals like schema indexing and first AI-tool mentions often appear within four to eight weeks, since generative engines can pick up well-structured content faster than traditional search ever did. Durable, consistent citation across multiple engines and query variations typically builds over two to four months of sustained content and entity work."
    },
    {
      "question": "Is GEO a one-time project or ongoing?",
      "answer": "It's ongoing. AI models retrain, re-crawl, and re-weight sources continuously, so the content and entity signals that earn a citation today need refreshing as your product, competitors, and the engines themselves evolve. We treat it like a growth channel to compound, not a launch to check off."
    },
    {
      "question": "What content do we need to have or produce for this to work?",
      "answer": "We start with what you already have, docs, blog posts, case studies, product pages, and restructure it into clearly answerable, citation-worthy formats. Where gaps exist against the questions your buyers are actually asking AI tools, we produce new content built specifically to be extracted and quoted by generative engines."
    },
    {
      "question": "What is llms.txt and do we actually need one?",
      "answer": "llms.txt is an emerging standard, a plain-text file at your site root that gives AI crawlers a clean, prioritized map of your most important content. It's not a magic switch, but for a startup wanting to be efficiently understood by LLMs it's a low-cost, high-signal piece of a broader GEO setup, and we implement it as part of our technical foundation work."
    },
    {
      "question": "What schema markup do you implement, and does it touch our codebase?",
      "answer": "We implement structured data like Organization, Product, FAQ, and Article schema so engines can parse exactly what your pages mean, not just what they say. It's typically a scoped, low-risk addition to your existing templates or CMS, and we work with your dev team's workflow rather than around it."
    },
    {
      "question": "Will this cannibalize the SEO work we've already done?",
      "answer": "No, well-executed GEO builds on your existing SEO rather than competing with it, since clear structure, strong entities, and citation-worthy content help both traditional rankings and AI answers. We audit what's already working before we touch anything, so we extend your equity instead of overwriting it."
    },
    {
      "question": "Can you guarantee we'll be cited by ChatGPT or Perplexity?",
      "answer": "No one can honestly guarantee a specific citation, AI models choose sources dynamically and their logic isn't fully public. What we can commit to is measurably improving the signals that drive citation likelihood, and we report transparently on mention frequency and share of voice so you always see real progress, not promises."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project with us and we'll run an AI-visibility audit, benchmarking where your brand currently shows up (or doesn't) across the major generative engines. From there we scope a prioritized roadmap of quick technical wins and content production so you can see momentum within the first month."
    }
  ],
  "digital-marketing/advanced-analytics": [
    {
      "question": "Why isn't the default GA4 setup enough?-",
      "answer": "Out-of-the-box GA4 tracks pageviews and last-click conversions, which undercounts the channels that actually influence a buying decision. Most startups also have broken events, double-counted conversions, or no link between ad spend and CRM revenue, so the numbers look precise but aren't trustworthy."
    },
    {
      "question": "What attribution model do you use?+",
      "answer": "We start with data-driven or position-based multi-touch attribution rather than last-click, then adjust the model to your actual sales motion — self-serve, sales-assisted, or long B2B cycles behave differently. You get a model you understand, not a black box."
    },
    {
      "question": "Which tools do you build in?+",
      "answer": "GA4 and Google Tag Manager form the tracking layer, with server-side tagging for platforms losing signal to iOS/cookie restrictions. Dashboards typically live in Looker Studio, though we'll build in whatever BI tool your team already trusts."
    },
    {
      "question": "How do you handle data privacy and compliance?+",
      "answer": "We build consent-mode tracking and data-retention settings aligned to GDPR and CCPA from the start, not bolted on after launch. Personally identifiable data is minimized in the analytics layer and handled per your existing privacy policy and legal counsel's requirements."
    },
    {
      "question": "What does dashboard setup actually involve?+",
      "answer": "We start by identifying the two or three decisions each stakeholder needs to make weekly, then build dashboards around those — not every metric available. Growth, finance, and channel owners each get a view sized to what they own."
    },
    {
      "question": "Do you look at cohorts and retention, or just acquisition?+",
      "answer": "Both — acquisition numbers mean little if retention is leaking. Cohort analysis shows which channels, campaigns, or onboarding flows bring in users who stick, so budget shifts toward durable growth instead of one-time spikes."
    },
    {
      "question": "What is marketing mix modeling and do I need it?+",
      "answer": "Marketing mix modeling estimates each channel's contribution to revenue using aggregate spend and outcome data, which matters as privacy restrictions erode click-level tracking. We layer it in once you have enough spend history across channels for the model to be meaningful, typically a few months in."
    },
    {
      "question": "How does analytics work tie into your other marketing services?+",
      "answer": "Analytics is the measurement layer underneath everything else Motion 8 runs — paid, SEO, content, lifecycle — so every campaign we launch is instrumented to prove itself from day one. If you're only engaging us for analytics, we build the same infrastructure to plug into whatever agency or in-house team runs the campaigns."
    },
    {
      "question": "How long does the initial setup take?+",
      "answer": "The audit and core tracking instrumentation typically take two to three weeks, with dashboards following in week three or four. Attribution modeling and marketing mix modeling mature over the following months as more data accumulates."
    },
    {
      "question": "What does an engagement cost?+",
      "answer": "Setup is scoped as a fixed project based on how many platforms and data sources need wiring together, with ongoing dashboard maintenance and monthly reporting billed as a retainer. We'll give you an exact number after a short scoping call — no generic package pricing."
    },
    {
      "question": "Can you work with our existing data warehouse or BI stack?+",
      "answer": "Yes — if you already have a warehouse (BigQuery, Snowflake) or a BI tool (Looker, Tableau, Power BI), we build models and dashboards on top of your existing infrastructure rather than replacing it. We only recommend new tooling when there's a real gap."
    },
    {
      "question": "Who owns the dashboards and tracking once we're done?+",
      "answer": "You do, fully. Every account, container, and dashboard is set up under your organization's ownership from day one, so there's no migration or handoff friction if the engagement ever ends."
    },
    {
      "question": "What happens after the reporting cadence starts?+",
      "answer": "Monthly (or biweekly, for faster-moving teams) reviews turn dashboard trends into specific actions — budget reallocation, retention fixes, new tracking requests as your product changes. It's an ongoing loop, not a one-time report drop."
    },
    {
      "question": "Why Motion 8 over a freelance analyst or another agency?+",
      "answer": "Our analytics team sits inside the same agency running paid, SEO, and content for other clients, so we build measurement that anticipates how campaigns actually get run — not generic tracking a freelancer hands off and disappears. We've done this for teams reporting to investors and boards, where the reporting has to hold up to scrutiny."
    },
    {
      "question": "How do we get started?+",
      "answer": "Book a scoping call and bring access to your current analytics, ad accounts, and CRM — we'll audit what's there and come back with a concrete plan and quote within a few days. No commitment required for the initial audit conversation."
    }
  ],
  "digital-marketing/public-relations": [
    {
      "question": "What does PR actually do for an early-stage startup?",
      "answer": "PR builds third-party credibility that ads can't buy — a journalist or analyst vouching for you carries more weight with investors, customers, and future hires than anything you say about yourself. It's often the fastest way to establish category authority before a competitor claims it."
    },
    {
      "question": "How long until we see actual press placements?",
      "answer": "A first pitch cycle typically lands initial coverage within four to eight weeks of a locked narrative and media list. Bigger placements — national outlets, feature profiles — usually take longer since they run on the journalist's editorial calendar, not ours."
    },
    {
      "question": "What's the difference between PR and paid media?",
      "answer": "Paid media guarantees placement because you're buying the space; PR earns it by convincing an independent journalist your story is worth covering, which means no guaranteed timeline but far more credibility with the reader. Most companies run both, with PR building trust and paid media driving volume."
    },
    {
      "question": "We're about to close a funding round — how does PR work around that?",
      "answer": "We build the announcement narrative and embargoed press kit ahead of close, line up exclusive or tiered outreach to relevant reporters and investor-focused outlets, and coordinate timing with your lead investor's own comms. The goal is coverage that lands the day the round is public, not a scramble afterward."
    },
    {
      "question": "How do you measure whether PR is working?",
      "answer": "We track placements earned, outlet tier and reach, referral traffic and branded search lift after coverage runs, and downstream signals like inbound investor or candidate interest. Coverage volume alone isn't the goal — we weight it against whether it's moving the metrics that matter to you."
    },
    {
      "question": "Do you already have relationships with relevant journalists?",
      "answer": "We maintain active relationships across startup, tech, and vertical trade press in the US, UK, and Australia, and we research and build outlet-specific lists for every new engagement. A cold pitch to the right reporter still beats a warm one to the wrong beat."
    },
    {
      "question": "What does PR cost, and how is it priced?",
      "answer": "Engagements are typically scoped as a monthly retainer covering strategy, outreach, and reporting, or as a fixed-fee sprint around a specific moment like a funding announcement or launch. We'll size it against your goals and stage on a scoping call rather than quote a flat rate here."
    },
    {
      "question": "Should we hire in-house instead of using an agency?",
      "answer": "An in-house hire makes sense once PR needs are constant and predictable; before that, an agency gives you existing journalist relationships and a full team — strategy, writing, outreach — without the cost of building it from scratch. Many clients start with us and bring PR in-house later as they scale."
    },
    {
      "question": "Can you get our founder placed as a thought leader, not just in news coverage?",
      "answer": "Yes — that's a core part of the offering. We identify the angles your founder is genuinely credible on, then pursue bylined articles, podcast guest slots, and speaking opportunities alongside straight news pitching."
    },
    {
      "question": "What happens if a journalist reaches out with something negative?",
      "answer": "We help you prepare a factual, on-record response quickly, coordinate with legal or leadership where needed, and manage the reporter relationship so the story runs with your side included. Fast, honest response almost always beats silence or delay."
    },
    {
      "question": "Do we need a press kit before we start pitching?",
      "answer": "It helps a lot — a clean one-pager with your story, founder bios, product facts, and approved imagery lets a journalist move fast once they're interested. We build this as part of the initial engagement if you don't already have one."
    },
    {
      "question": "Can PR help with hiring, not just customers and investors?",
      "answer": "Absolutely — candidates research a company's press footprint before joining, especially at the senior level, and visible coverage of funding, product wins, or founder credibility is a real signal in a competitive hiring market. It's often an underused benefit of a strong PR program."
    },
    {
      "question": "Do you cover regional press in the UK and Australia, or just the US?",
      "answer": "We work all three markets since that's where our client base sits, and we tailor outreach to each region's outlets and press conventions rather than running one generic list everywhere. A UK fintech launch and a US funding round get genuinely different media strategies."
    },
    {
      "question": "Why Motion 8 over a dedicated PR firm?",
      "answer": "A standalone PR firm hands you coverage and leaves the rest to you; Motion 8 sits PR alongside the marketing, brand, and web work already turning that coverage into traffic and pipeline. You get one team that understands the full picture instead of coordinating vendors yourself."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and we'll walk through your story, timeline, and any near-term moments like a raise or launch worth building around. From there we'll propose a narrative direction and engagement structure within 24 hours."
    }
  ],
  "digital-marketing/brand-positioning": [
    {
      "question": "Why does positioning matter before we scale marketing spend?",
      "answer": "Every dollar of ad spend, every landing page, and every sales call repeats whatever message you start with. If that message is fuzzy or forgettable, you're paying to make a weak position louder. Nailing positioning first means the growth budget that follows compounds instead of getting reset every campaign."
    },
    {
      "question": "How is this different from a logo or rebrand project?",
      "answer": "A logo refresh changes how you look; positioning changes what you're known for. We start with the strategic question — category, differentiator, core message — and only build the visual identity on top of that answer, so the new look actually says something instead of just looking newer."
    },
    {
      "question": "How long does a positioning & brand engagement take?",
      "answer": "Most engagements run four to eight weeks from kickoff to a locked positioning document and brand system, depending on how much research and how many stakeholders are involved. We scope the timeline with you up front so it fits around fundraising, launches, or other deadlines already on your calendar."
    },
    {
      "question": "What does the research and discovery process actually involve?",
      "answer": "We run founder and customer interviews, a teardown of your real competitors, and a map of who else is chasing your buyer's attention. It's the same rigor an investor would expect from a market analysis, just aimed at finding the ground only you can defend."
    },
    {
      "question": "How does positioning feed into our other marketing services?",
      "answer": "Positioning becomes the brief every other Motion 8 service works from — paid campaigns, content, and web all inherit the same message hierarchy instead of each team reinventing the pitch. That's how we keep a startup's growth motion coherent as it scales across channels."
    },
    {
      "question": "What does a positioning & brand engagement cost?",
      "answer": "Pricing depends on scope — whether you need positioning alone or positioning plus a full visual identity and naming. We quote a fixed project fee after a short scoping call, so you know the number before any work begins, not partway through."
    },
    {
      "question": "When should a startup revisit its positioning?",
      "answer": "The clearest signals are a new funding round, a pivot in who you sell to, or a competitor that suddenly makes your pitch sound generic. If your sales team and your website are describing the company differently, that's usually a sign positioning is overdue for a refresh."
    },
    {
      "question": "Do we need a full rebrand, or can positioning stand alone?",
      "answer": "Positioning and messaging can absolutely stand alone — plenty of startups just need the strategic core fixed without touching the logo or visual system. We scope the engagement to what you actually need, and only recommend a fuller identity build if the research shows the current visuals are actively undermining the message."
    },
    {
      "question": "Who on our team needs to be involved in the process?",
      "answer": "We ask for a founder or two, plus whoever owns marketing or sales, for a handful of interviews and review checkpoints — typically a few hours total across the engagement. Everything else runs on our side, with async Figma reviews so you're not stuck in meetings."
    },
    {
      "question": "What do we actually walk away with at the end?",
      "answer": "A locked positioning statement and messaging hierarchy, a brand guidelines document, and — if scoped in — a full visual identity and asset library. Everything is handed off in formats your team or ours can put to work immediately, not left as a deck that gets shelved."
    },
    {
      "question": "Can you validate positioning with real customers before we commit?",
      "answer": "Yes — we regularly test draft messaging with a handful of target customers before it's locked, so you're not betting the brand system on a guess. That feedback loop is built into the discovery phase, not tacked on as an afterthought."
    },
    {
      "question": "How do you handle naming if trademark conflicts come up?",
      "answer": "We generate a shortlist of name candidates and run preliminary trademark and domain screening before you fall in love with one. If a conflict turns up, we go back to the well rather than leaving you to discover the problem after launch."
    },
    {
      "question": "Will this work for a technical or B2B product, not just consumer brands?",
      "answer": "Most of our clients are funded B2B and technical startups — software, blockchain, and infrastructure companies where the buyer is sophisticated and skeptical of hype. Our process is built to make a complex product sound clear and credible, not to dress it up in consumer-style polish it doesn't need."
    },
    {
      "question": "Why Motion 8 for brand and positioning work?",
      "answer": "We build positioning knowing it has to survive contact with paid campaigns, sales decks, and board updates — not just look good in a brand deck. Because we also run the marketing, dev, and automation work downstream, we design positioning that's actually built to be used."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a project call using the button on this page and tell us where you're at — pre-launch, mid-scale, or somewhere the current story has stopped working. We'll scope the engagement and respond within 24 hours with next steps."
    }
  ],
  "software-development/custom-software-development": [
    {
      "question": "How do I know if I need custom software instead of an off-the-shelf tool?",
      "answer": "If your team is stitching together three or more tools with Zapier, paying per-seat for features you don't use, or hitting a wall where the platform simply can't do what your business logic requires, that's the signal. Off-the-shelf tools are built for the common case — custom software earns its cost once your workflow becomes the exception."
    },
    {
      "question": "Won't building custom software just take longer than using a SaaS product?",
      "answer": "Initial setup, yes — a SaaS tool is live on day one. But we consistently see teams spend months fighting a platform's limitations with workarounds and middleware that break every time the vendor updates. Custom software costs more upfront and less over the following two years, once you account for the workarounds you no longer need."
    },
    {
      "question": "How do you choose the tech stack for a project?",
      "answer": "We start from your constraints — team size, existing systems, hiring market, and expected scale — not from what we prefer to build in. In practice that means proven, widely-hired-for stacks (Node/TypeScript, React, Postgres, common cloud providers) unless your product genuinely needs something more specialized."
    },
    {
      "question": "What if we already have a stack or an existing codebase?",
      "answer": "We build inside your existing stack by default rather than pushing our own preferences. Our first step on any brownfield project is a codebase audit so we understand conventions, technical debt, and constraints before writing new code against them."
    },
    {
      "question": "How long does a typical custom software project take?",
      "answer": "A focused internal tool or single-workflow platform typically runs 6–10 weeks. A multi-module product with several user roles and integrations runs 3–6 months. We scope in phases so you get a working release early rather than waiting for one big-bang launch."
    },
    {
      "question": "What does custom software development typically cost?",
      "answer": "Cost tracks scope, not a flat rate — a single-workflow internal tool costs a fraction of a multi-tenant customer-facing product. We give you a fixed quote after the scoping phase, once architecture and feature list are locked, so there's no open-ended hourly clock."
    },
    {
      "question": "Do we own the code and IP once the project ships?",
      "answer": "Yes, entirely. Repository access, infrastructure credentials, and full IP transfer to you at project completion — this is your codebase, not ours. There's no vendor lock-in and no ongoing license fee to keep using what we built."
    },
    {
      "question": "What happens after launch — do you disappear?",
      "answer": "No. Every project ships with a defined support window for bug fixes and stabilization, and most clients move into a monthly retainer for ongoing feature work afterward. You can also take the codebase in-house at any point — it's fully documented either way."
    },
    {
      "question": "Can the software scale if our user base or usage grows fast?",
      "answer": "Scale is a design decision, not an afterthought — we architect data models and infrastructure around your expected growth curve from the scoping phase. That said, we build for the scale you can credibly justify now, not a hypothetical, to avoid over-engineering you don't need yet."
    },
    {
      "question": "How do you handle security and data protection?",
      "answer": "Authentication, encryption at rest and in transit, role-based access control, and dependency auditing are standard on every build, not an optional add-on. For regulated data (health, financial, PII) we scope compliance requirements — SOC 2, GDPR, HIPAA-adjacent — into the architecture up front."
    },
    {
      "question": "Will you integrate with the tools we already use, like our CRM or ERP?",
      "answer": "Yes — integration work is often the entire point of a custom build. We've connected custom platforms to HubSpot, Salesforce, Stripe, QuickBooks, and internal ERPs via API, and we flag any integration risk during scoping, before it becomes a mid-project surprise."
    },
    {
      "question": "Do you also handle mobile apps, or just web platforms?",
      "answer": "Both. Most custom builds start as a web platform, and where a mobile experience is genuinely needed we build cross-platform with React Native to share logic with the web app rather than maintaining three separate codebases."
    },
    {
      "question": "Why choose Motion 8 over a freelancer or another dev shop?",
      "answer": "You get a full team — product, engineering, and QA — not one freelancer's availability, and unlike a generalist shop we work startups exclusively, so we already understand funded-startup timelines and investor expectations. Everything ships with documentation and a defined handoff, not tribal knowledge in one person's head."
    },
    {
      "question": "What does getting started actually look like?",
      "answer": "Book an intro call where we scope the problem and confirm fit. If it's a match, we run a paid discovery phase to produce a locked spec and fixed quote, then move straight into the build sprints — typically within two weeks of that first call."
    }
  ],
  "software-development/web-mobile-app-development": [
    {
      "question": "Should we build native or cross-platform?",
      "answer": "It depends on your priorities. Native (Swift/Kotlin) gives the best performance and deepest platform integration; cross-platform (React Native/Flutter) ships to both stores faster from one codebase and costs less to maintain. We scope your app against your timeline, budget, and feature list, then recommend the path — not the other way around."
    },
    {
      "question": "What platforms do you support?",
      "answer": "iOS, Android, and web — built individually or as a single cross-platform release, depending on your product. We also build responsive and progressive web apps when a browser-first experience makes more sense than a native install."
    },
    {
      "question": "What does your design process look like?",
      "answer": "We start with user flows and wireframes, then move to high-fidelity, platform-native UI screens in Figma. You get a clickable prototype to test and sign off on before a single line of production code is written."
    },
    {
      "question": "How long does a typical app build take?",
      "answer": "A focused single-platform app typically runs 8–14 weeks from kickoff to store submission; a cross-platform or combined web+mobile build usually runs 12–20 weeks. Scope, integrations, and design complexity are the main swing factors, and we lock a timeline before work starts."
    },
    {
      "question": "How is a web and mobile app project priced?",
      "answer": "We quote a fixed price per project phase after scoping, based on platform choice, feature complexity, and integrations. You'll see the full number before any build work begins — no open-ended hourly billing."
    },
    {
      "question": "Do you handle updates and maintenance after launch?",
      "answer": "Yes. We offer ongoing maintenance retainers covering OS/framework updates, bug fixes, and new feature sprints, so your app stays compatible as Apple and Google ship new platform versions."
    },
    {
      "question": "Do you manage App Store and Play Store submission?",
      "answer": "Yes — we prepare store listings, screenshots, and metadata, handle the submission process for both Apple and Google, and manage any review feedback until your app is approved and live."
    },
    {
      "question": "Is analytics and tracking built in?",
      "answer": "Every build ships with event tracking and crash reporting wired in from day one, so you have usage and stability data the moment you launch — not months into iterating blind."
    },
    {
      "question": "Can you integrate our existing backend or third-party APIs?",
      "answer": "Yes. We regularly integrate payment processors, auth providers, CRMs, and custom backends, and can build new API layers where none exist yet."
    },
    {
      "question": "What devices and browsers do you test against?",
      "answer": "We run QA on real physical devices across current and prior-generation iOS and Android hardware, plus the major desktop and mobile browsers, so edge cases surface before your users find them."
    },
    {
      "question": "Can you take over an app another agency or in-house team built?",
      "answer": "Yes. We start with a codebase and architecture audit so you know exactly what you're inheriting, then propose a plan for continued development or a rebuild if the existing foundation won't scale."
    },
    {
      "question": "Do you build the backend too, or just the app?",
      "answer": "We build both. Our team covers backend infrastructure, databases, and API design alongside the front-end app, so you get one accountable team instead of coordinating separate vendors."
    },
    {
      "question": "Why choose Motion 8 over another dev shop?",
      "answer": "Our process is built around commercial timelines, growth metrics, and marketing handoff from day one — not just shipping code. Product, design, and engineering sit in the same room, not separate vendors you have to coordinate."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and bring whatever you have — a spec, a Figma file, or just an idea. We'll come back within 24 hours with a proposed platform approach, timeline, and fixed quote."
    }
  ],
  "software-development/mvp-rapid-prototyping": [
    {
      "question": "How long does it take to build an MVP for a startup?",
      "answer": "Most MVPs we build ship in 6–10 weeks, depending on how many core flows are in scope. We scope tightly upfront so we're building the smallest thing that proves your riskiest assumption, not a feature-complete product. Timelines stretch when third-party integrations or compliance requirements are involved, and we flag that at the scoping stage, not after you've paid for two sprints."
    },
    {
      "question": "What's the difference between an MVP and a prototype?",
      "answer": "A prototype is for testing whether people understand and want what you're building — it's often clickable but not functional, and we throw a lot of it away. An MVP is real, shipped software that early users actually run on, with the thinnest possible feature set that still delivers value. We usually recommend prototyping first if your riskiest assumption is about the idea, and going straight to MVP if the idea is validated and the risk is execution."
    },
    {
      "question": "How much does an MVP actually cost?",
      "answer": "It depends entirely on scope, but most engagements land between a lean single-flow build and a multi-role platform with integrations. We give you a fixed-scope quote after a paid discovery sprint, not a rough range that balloons once we're in the code. You'll know the number before you commit to the build."
    },
    {
      "question": "How do you decide which tech stack to use?",
      "answer": "We pick boring, proven technology that your future engineering hires will actually want to work in — not whatever's trending. The decision factors are your team's post-MVP hiring plans, expected scale in year one, and how much of the stack has to survive into the full build. We document the reasoning so it's never a mystery to your next CTO."
    },
    {
      "question": "What does \"rapid\" actually mean here — are you cutting corners?",
      "answer": "Rapid means a ruthlessly small scope and a senior team that isn't learning your stack on your dime, not skipped testing or unreadable code. We still write tests for the flows that matter, review every PR, and structure the codebase so it can be extended, not rebuilt. Speed comes from saying no to features, not from lowering the bar on what ships."
    },
    {
      "question": "Will this MVP be credible to investors during due diligence?",
      "answer": "Yes — we build with technical due diligence in mind because most of our clients are funded and raising again within a year. That means clean version control history, documented architecture decisions, no hardcoded secrets, and a codebase a diligence engineer can read in an afternoon without red flags. We've had our MVPs pass diligence for Series A rounds without a single follow-up build question."
    },
    {
      "question": "How do you keep scope from creeping once we start seeing progress?",
      "answer": "We lock the MVP scope in writing before build starts, and every new idea that comes up mid-sprint goes into a parked backlog instead of the current sprint. You'll see weekly demos, so if something genuinely needs to change we renegotiate scope explicitly rather than letting it drift in silently. This is the single biggest reason MVP timelines blow out, and it's the one we protect hardest."
    },
    {
      "question": "What happens after the MVP ships — do we have to rebuild for the full product?",
      "answer": "No, and that's by design — we architect the MVP so the parts worth keeping can be extended, and the parts that were deliberately shortcut are isolated and clearly marked. When you're ready to scale, we do a technical assessment against your actual usage data and decide together what stays, what gets refactored, and what gets replaced. Most of our MVP clients continue with us into the full build without a rewrite from scratch."
    },
    {
      "question": "What team actually works on our MVP?",
      "answer": "A small senior pod — typically a lead engineer, one or two supporting developers, and a product-minded PM who keeps scope honest — not a rotating cast of juniors learning on your project. You get direct access to the people writing the code, not an account manager relaying messages. The same pod stays with you through launch so context never gets lost in a handoff."
    },
    {
      "question": "Who owns the IP and the code once the MVP is built?",
      "answer": "You do, fully — every line of code, design asset, and piece of documentation transfers to you on final payment, with no licensing strings attached. This is written into every contract before work starts, not negotiated after the fact. You get admin access to every repo and service from day one, not just at handoff."
    },
    {
      "question": "Do you help validate the idea, or do you just build what we tell you?",
      "answer": "We push back when the scope doesn't match what you're actually trying to learn — that's part of the job, not overstepping. Discovery includes mapping your core hypothesis to the smallest buildable test of it, and we'll tell you honestly if a feature you want won't move the needle for launch. You stay the decision-maker, but you won't be building in a vacuum."
    },
    {
      "question": "Can you work with our existing designs or technical requirements?",
      "answer": "Yes — if you already have wireframes, a design system, or a technical spec, we build from it and flag anything that conflicts with a rapid timeline before we start. If you're starting from a napkin sketch or just a problem statement, we handle the design and spec work as part of discovery. Either way, nothing gets built until you've signed off on what it is."
    },
    {
      "question": "Why choose Motion 8 over a freelancer or an in-house hire for this?",
      "answer": "A freelancer gives you one person's bandwidth and risk if they disappear mid-build; an in-house hire takes months to recruit and costs a full salary before you've validated anything. We give you a full senior pod, on day one, that's shipped MVPs across the US, UK, and Australia and knows what investor-grade code actually looks like. You get speed and rigor without the hiring risk or the single point of failure."
    },
    {
      "question": "How do we get started?",
      "answer": "Start with a scoping call — we'll talk through what you're trying to prove, your timeline, and any constraints, then follow up with a fixed-scope proposal within a few days. If it's a fit, we move straight into a short discovery sprint before the build starts, so there are no surprises once the clock is running. No lengthy procurement process, no vague retainers."
    }
  ],
  "software-development/ecommerce-development": [
    {
      "question": "Which ecommerce platform should you actually pick?",
      "answer": "It depends on catalog complexity, order volume, and where you're headed post-raise — not on what's trending. We map your product model, integrations, and 12–18 month growth plan against Shopify, Shopify Plus, and headless options, then recommend the one with the lowest total cost of change as you scale."
    },
    {
      "question": "Shopify vs. Shopify Plus — when do we need to upgrade?",
      "answer": "Plus earns its cost once you need custom checkout, multi-currency or multi-entity storefronts, wholesale channels, or automation at a volume standard Shopify's app stack can't handle cleanly. Below that threshold, Plus is often overkill. We'll tell you honestly which side of that line you're on."
    },
    {
      "question": "We're on WooCommerce and outgrowing it — migrate or rebuild?",
      "answer": "Usually migrate rather than rebuild from zero — your product data, content, and SEO equity are worth preserving. We audit what's actually slowing WooCommerce down (hosting, plugin bloat, or the platform ceiling itself) before deciding whether a clean re-platform or a targeted overhaul is the right call."
    },
    {
      "question": "Can you migrate our store without losing orders, SEO rankings, or customer data?",
      "answer": "Yes — that's the standard we hold every migration to. Orders, customer records, and product history are mapped and reconciled field by field, and every URL gets a 301 redirect plan and metadata carryover so your rankings transfer instead of resetting to zero."
    },
    {
      "question": "How long does a migration typically take, and does the old store stay live during it?",
      "answer": "Most migrations run 4–8 weeks depending on catalog size and integration count. Your existing store stays fully live and taking orders throughout — we build and validate the new environment in parallel and cut over only once data, redirects, and checkout are tested end to end."
    },
    {
      "question": "How much does an ecommerce build cost?",
      "answer": "It scales with catalog complexity, custom checkout needs, and how many systems we're integrating — a lean Shopify launch and a headless Plus build with ERP and fulfillment ties are different budgets entirely. We scope against your actual requirements and give you a fixed number before work starts, not a range."
    },
    {
      "question": "What's a realistic timeline from kickoff to launch?",
      "answer": "A focused Shopify build typically launches in 6–10 weeks; a headless or Plus build with deeper integrations runs 10–16 weeks. We set the real number after scoping, then hold to it — you need a launch date you can put on a board deck."
    },
    {
      "question": "Which payment providers can you integrate?",
      "answer": "Stripe, Shopify Payments, PayPal, Braintree, Adyen, and most regional and BNPL providers your growth markets in the US, UK, or Australia require. If you need multiple providers or currency-specific routing, we build that logic into checkout from day one."
    },
    {
      "question": "Can you connect our store to our existing inventory or fulfillment system?",
      "answer": "Yes — we regularly integrate with 3PLs, WMS platforms, and ERPs like NetSuite or Cin7 so inventory, orders, and fulfillment status sync automatically. If a native connector doesn't exist, we build the middleware rather than force you into manual reconciliation."
    },
    {
      "question": "Do you handle shipping-rate and carrier integrations?",
      "answer": "Yes — live carrier rates, multi-warehouse shipping logic, and services like ShipStation or Shippo are standard parts of a build. We set rate rules up to reflect your actual margin, not just pass through whatever the carrier API returns."
    },
    {
      "question": "Will the site be fast, and will it hold up under a traffic spike?",
      "answer": "Performance budgets and load testing are built into every project, not bolted on after launch. We architect for your expected peak — a funding announcement, a launch campaign, a Black Friday spike — so the store holds up when the traffic actually matters."
    },
    {
      "question": "Will our SEO and existing rankings survive a rebuild?",
      "answer": "They should improve, not just survive. Every rebuild ships with a full redirect map, preserved metadata and structured data, and technical SEO checks before launch, so you keep the rankings you've earned and gain the speed and crawlability wins a modern platform provides."
    },
    {
      "question": "How do you handle checkout security and PCI compliance?",
      "answer": "We build on platforms and payment providers that carry PCI DSS compliance natively, so card data never touches your servers, and we harden the rest — access controls, app permissions, data handling — to match what investors and enterprise customers expect to see in diligence."
    },
    {
      "question": "Why choose Motion 8 over a platform-specific specialist shop?",
      "answer": "A specialist shop sells you the platform they know. We start from your growth trajectory and pick the platform to match, then back it with the marketing, automation, and dev capability you need after launch — not just at handoff."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call — we'll review your current platform or plan, your growth timeline, and any deadlines that matter (a raise, a launch date), then come back with a fixed-scope proposal and timeline within days."
    }
  ],
  "software-development/ecommerce-maintenance": [
    {
      "question": "What counts as a \"maintenance task\"?",
      "answer": "Bug fixes, plugin and platform updates, small UI tweaks, broken-link and checkout fixes, and small feature requests that can be scoped and completed within your allotted hours. Larger builds — a new module, a redesign, a new integration — are scoped and quoted separately under Ecommerce Development."
    },
    {
      "question": "What's the difference between the monthly and adhoc plans?",
      "answer": "The monthly plan reserves a fixed block of hours every month at a set rate, with your requests prioritized ahead of adhoc clients. The adhoc plan has no recurring commitment — you're billed hourly for the work you send us, as you send it."
    },
    {
      "question": "What happens to unused hours on the monthly plan?",
      "answer": "Unused hours roll over one billing cycle so a quiet month doesn't cost you, then expire — the plan is sized to your store's typical workload, not a bank of hours to stockpile indefinitely."
    },
    {
      "question": "How fast do you respond to issues?",
      "answer": "Standard response time is within 24 hours. Store-down or checkout-breaking issues on the monthly plan are treated as priority and picked up faster — the exact SLA is set during onboarding based on your plan."
    },
    {
      "question": "Do we get a dedicated point of contact?",
      "answer": "Yes. Every maintenance client is assigned a lead who owns your account and a shared Slack channel, so requests don't disappear into a generic support inbox."
    },
    {
      "question": "Can we switch between the monthly and adhoc plans?",
      "answer": "Yes, at any monthly review point. Many clients start adhoc while their maintenance volume is unpredictable, then move to a monthly plan once a clearer pattern of recurring work shows up."
    },
    {
      "question": "Is there a minimum commitment?",
      "answer": "The monthly plan runs month to month with no long-term lock-in — cancel or adjust with notice at any billing cycle. The adhoc plan has no commitment at all; you send work only when you need it."
    },
    {
      "question": "What's your refund policy?",
      "answer": "Hours already worked aren't refundable, but unused hours on a cancelled monthly plan are settled fairly at cancellation — we'll walk through the specifics of your plan before you sign anything."
    },
    {
      "question": "Do you maintain stores you didn't originally build?",
      "answer": "Yes. Most of our maintenance clients come to us with a store someone else built. The audit step in our process exists specifically to get us up to speed on unfamiliar code before we start making changes."
    },
    {
      "question": "Which ecommerce platforms do you support?",
      "answer": "Shopify, WooCommerce, and custom-built storefronts are all in scope. If your platform isn't listed, ask — we'll confirm during the audit whether it's a fit."
    },
    {
      "question": "What if a request is bigger than a maintenance task?",
      "answer": "We'll flag it during scoping rather than quietly burning your hours on it. Larger requests get a separate proposal under Ecommerce Development so your maintenance plan stays focused on upkeep."
    },
    {
      "question": "How do you handle security issues and vulnerabilities?",
      "answer": "Security patches are applied as part of routine maintenance, and anything flagged as urgent — a known exploit, a compromised plugin — jumps the queue and is treated as priority regardless of plan."
    },
    {
      "question": "How is this different from Ecommerce Development?",
      "answer": "Ecommerce Development is the one-off build — a new store, a redesign, a major integration. Ecommerce Maintenance is what keeps that store healthy afterward, on a monthly or adhoc-hours basis rather than a fixed project scope."
    },
    {
      "question": "Why Motion 8 for ongoing maintenance?",
      "answer": "We already build ecommerce stores end to end, so maintenance requests are handled by people who understand the platforms deeply — not a generic support desk working from a ticket template."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project below and we'll schedule the audit call, review your store, and recommend the plan that fits — usually within 24 hours of first contact."
    }
  ],
  "software-development/custom-plugins-app-development": [
    {
      "question": "Which platforms do you build custom plugins and apps for?",
      "answer": "We build primarily on Shopify and WooCommerce, along with BigCommerce, Magento/Adobe Commerce, and headless commerce stacks. Outside of commerce, we also build custom plugins for CMS platforms like WordPress when a client's workflow calls for it."
    },
    {
      "question": "When does a custom app make more sense than an existing marketplace app?",
      "answer": "When your workflow, integration, or business logic doesn't map cleanly onto an off-the-shelf app's assumptions — or when you'd need three apps stitched together to approximate one clean feature. If an existing app covers 90% of the need with acceptable trade-offs, we'll tell you that instead of selling you a build."
    },
    {
      "question": "What's the difference between a public and a private app?",
      "answer": "A private (custom) app is built and installed for your store alone and never goes through public marketplace review. A public app is listed on the platform's App Store for other merchants to install, which means it must pass the platform's review, security, and UX requirements. We scope which one you need before development starts."
    },
    {
      "question": "Can you take an existing private app and publish it publicly later?",
      "answer": "Yes. Many clients start with a private app to prove the workflow internally, then ask us to harden it for public listing once it's validated. We architect for that path from the start when it's on your roadmap, which saves a rebuild later."
    },
    {
      "question": "Will a custom plugin slow down my site or checkout?",
      "answer": "Not if it's built right. We build against each platform's performance guidelines — async processing, webhook-driven updates instead of polling, and minimal storefront JavaScript — and load-test before launch. A well-scoped custom app is typically lighter than the two or three marketplace apps it replaces."
    },
    {
      "question": "Who owns the code once the plugin is built?",
      "answer": "You do. Every custom app or plugin we build is delivered with full source and IP ownership assigned to your business, with no licensing fees back to Motion 8. You're never locked into us to keep running your own software."
    },
    {
      "question": "How much does a custom plugin or app cost?",
      "answer": "It depends entirely on scope — a focused single-feature plugin and a full multi-integration app are very different builds. We scope against your specific requirements and give you a fixed quote before development starts, so there's no open-ended billing."
    },
    {
      "question": "How long does a typical build take?",
      "answer": "A focused private app usually ships in a few weeks. A public app headed for App Store review takes longer once you factor in the platform's review cycle, which can add another one to three weeks outside our control. We give you a realistic timeline once scope is locked."
    },
    {
      "question": "What happens when Shopify, WooCommerce, or another platform pushes a major update?",
      "answer": "We monitor platform release notes and API deprecations for apps under an ongoing support agreement, and patch ahead of breaking changes rather than after your storefront breaks. This is exactly the risk generic marketplace apps often leave merchants exposed to."
    },
    {
      "question": "How do you test across platform versions and store configurations?",
      "answer": "We run a test matrix across theme versions, checkout extensibility (Shopify) or plugin conflicts (WooCommerce), and common merchant configurations, plus a staging install on your actual store before go-live. Public apps also get tested against the platform's own review checklist before we submit."
    },
    {
      "question": "Can a custom plugin integrate with our other tools, like our CRM or ERP?",
      "answer": "Yes — that's one of the most common reasons a custom build beats a marketplace app. We regularly connect storefront plugins to CRMs, ERPs, inventory systems, and internal tools via API, so data flows one way instead of living in three disconnected places."
    },
    {
      "question": "Do you handle App Store or marketplace approval on our behalf?",
      "answer": "Yes. We prepare listing assets, complete the technical review checklist, and manage the submission and any reviewer feedback for public apps, so your team isn't navigating platform review requirements alone."
    },
    {
      "question": "What if our requirements change mid-build?",
      "answer": "We build in short sprints with regular check-ins specifically so scope changes get caught early and re-quoted transparently, rather than surfacing as a surprise at delivery."
    },
    {
      "question": "Why choose Motion 8 for custom plugin development?",
      "answer": "We're a dev team that also does growth marketing, so we understand how a plugin affects conversion, page speed, and reporting — not just whether the feature technically works. You get software built by people who also have to live with its impact on the storefront."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project with the details of the workflow you're trying to solve. We'll set up a scoping call, confirm the right platform and app type, and follow up with a fixed quote and timeline within 24 hours."
    }
  ],
  "software-development/ui-ux-design": [
    {
      "question": "What does your UI/UX design process actually look like?",
      "answer": "We move through research, wireframing, UI design, and prototyping in four stages, with a usability check before each handoff. You see working screens every week, not a single reveal at the end."
    },
    {
      "question": "What's the difference between wireframes, mockups, and prototypes?",
      "answer": "Wireframes are low-fidelity sketches that lock layout and flow logic. Mockups are full-color, pixel-accurate screens. Prototypes link those screens together so you can click through the product before any code exists."
    },
    {
      "question": "How long does a UI/UX design engagement take?",
      "answer": "A focused MVP flow (5–10 screens) typically runs 3–4 weeks. A full product design system with 20+ screens and usability testing runs 6–8 weeks. We scope the exact timeline after the discovery call."
    },
    {
      "question": "How many design variations do we get to choose from?",
      "answer": "We present two directional concepts for key screens early on so you can pick a visual language before we design the full product. From there, revisions are scoped into the engagement rather than capped at an arbitrary number."
    },
    {
      "question": "Will one designer work exclusively on our project?",
      "answer": "Yes. A lead designer is assigned to your project for its full duration, backed by a researcher and a second designer for review. You always know who owns the work."
    },
    {
      "question": "What do we need to provide to get started?",
      "answer": "A clear product brief, any existing brand assets, and access to users or stakeholders for research interviews if available. If you don't have a brand yet, we can scope that as a first step."
    },
    {
      "question": "How much does UI/UX design cost?",
      "answer": "Cost depends on screen count, research scope, and whether you need a full design system built from scratch. We give a fixed quote after scoping on the discovery call, not an open-ended hourly estimate."
    },
    {
      "question": "Do you run usability testing, or just design and ship?",
      "answer": "We run moderated usability sessions on key flows before final handoff, using real or recruited users. Findings get folded into a revision pass, so friction gets caught before your engineers build it."
    },
    {
      "question": "How does handoff to our development team work?",
      "answer": "You get a Figma file in dev mode with inspectable specs, a documented component library, and an annotated spec sheet covering states and edge cases. We stay available through the first sprint of implementation to answer questions."
    },
    {
      "question": "Can you design for both web and mobile in the same project?",
      "answer": "Yes, and we design them together rather than as separate efforts, so the design system and interaction patterns stay consistent across platforms from the start."
    },
    {
      "question": "Do you also build the product, or only design it?",
      "answer": "Both. Motion 8's software and blockchain dev team can take the design straight into build, or we hand a dev-ready package to your in-house engineers — whichever fits your team."
    },
    {
      "question": "What if our product requirements change mid-project?",
      "answer": "Startups pivot — we build scope reviews into the process so changes get re-scoped transparently instead of derailing the timeline or getting silently absorbed."
    },
    {
      "question": "Who owns the design files once the project wraps?",
      "answer": "You do. Every Figma file, component library, and asset we produce transfers to your team on final payment, with no licensing restrictions on future use."
    },
    {
      "question": "Why choose Motion 8 over a freelance designer or design agency?",
      "answer": "We design and build under one roof, so your interfaces are shaped by people who know what's buildable, not just what looks good in Figma. That means fewer surprises when engineering picks up the file."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a discovery call, share your product brief, and we'll come back with a scoped timeline and fixed quote within 24 hours — no obligation to proceed."
    }
  ],
  "software-development/devops-cloud-services": [
    {
      "question": "Which cloud providers do you work with?",
      "answer": "We work across AWS, Google Cloud, and Azure, and pick the provider based on where your team already has credits, compliance needs, or existing services rather than a house preference. Most teams land on AWS or GCP; we're equally comfortable standing up a multi-cloud or hybrid setup if your product requires it."
    },
    {
      "question": "How do we know if we actually need dedicated DevOps yet?",
      "answer": "If deploys are manual, an outage takes hours to diagnose, or your cloud bill is a mystery each month, you're already past the point where ad-hoc DevOps is safe. Most teams need this in place before a funding-driven growth spike, not after it causes an incident."
    },
    {
      "question": "What does a DevOps engagement typically cost and how long does it take?",
      "answer": "Initial infrastructure setup and CI/CD pipelines typically run four to eight weeks depending on how much of your stack needs migrating versus building fresh. Ongoing monitoring and support then move to a monthly retainer sized to your infrastructure footprint — we scope exact numbers after the audit call."
    },
    {
      "question": "Will this disrupt how our engineers already work?",
      "answer": "No — we build around your existing git workflow and branching model rather than asking your team to adopt a new process. Engineers keep pushing code the way they already do; what changes is what happens automatically after that push."
    },
    {
      "question": "How do you handle security across our cloud environment?",
      "answer": "We apply least-privilege access controls, encrypted secrets management, network segmentation, and automated vulnerability scanning as part of the base setup, not as an add-on. For teams working toward SOC 2 or similar, we structure infrastructure to make that audit straightforward rather than retrofitted later."
    },
    {
      "question": "Can our infrastructure scale automatically as usage grows?",
      "answer": "Yes — we build auto-scaling into the infrastructure layer from the start, so traffic spikes and steady growth are handled by policy rather than a 2am manual intervention. As usage patterns become clearer, we tune those thresholds to balance performance against cost."
    },
    {
      "question": "Do you provide on-call or incident response after launch?",
      "answer": "Yes, our retainer clients get monitored alerting with a defined on-call response window, so an infrastructure issue gets a human looking at it fast rather than sitting in an unread notification. Every incident is followed by a short written postmortem so the same failure doesn't recur."
    },
    {
      "question": "What's the difference between DevOps and just hiring a sysadmin?",
      "answer": "A sysadmin keeps existing servers running; DevOps builds the automated pipeline between your code and production so deploys, scaling, and recovery happen by design rather than by someone remembering the right manual steps. We're closer to embedded infrastructure engineers than reactive support."
    },
    {
      "question": "Can you migrate us off our current host without downtime?",
      "answer": "We plan migrations in stages with parallel environments and a tested rollback path, so the cutover window is minutes, not a weekend outage. For most startup-scale applications we can complete a migration with zero customer-facing downtime."
    },
    {
      "question": "How do you keep our cloud bill under control as we grow?",
      "answer": "We right-size resources, set up billing alerts, and run a monthly cost review that flags idle or oversized infrastructure before it becomes a line item nobody questions. Most teams see a meaningful reduction in their first quarter just from eliminating waste that accumulated pre-engagement."
    },
    {
      "question": "What happens if there's an outage — who's responsible?",
      "answer": "Ownership is defined upfront in the engagement scope, and our monitoring stack is built to catch problems before your users do. When something does break, our on-call process kicks in immediately rather than waiting on someone to notice and escalate."
    },
    {
      "question": "Do you work with early-stage startups that don't have infrastructure yet?",
      "answer": "Yes — greenfield builds are often simpler than migrations, since we can set up the right foundation from day one instead of untangling legacy decisions. It's the ideal time to start, before technical debt accumulates."
    },
    {
      "question": "Do you use containers and Kubernetes, or is that overkill for us?",
      "answer": "We containerize with Docker as a default since it makes environments portable and deploys predictable, but we only bring in Kubernetes when your scale or team size actually justifies the added operational complexity. For most seed and Series A startups, a simpler managed orchestration layer gets the same reliability without the overhead."
    },
    {
      "question": "Why choose Motion 8 over a freelance DevOps engineer?",
      "answer": "A single freelancer is a single point of failure — if they're unavailable during an incident, you're stuck. Motion 8 gives you a team with coverage, documented infrastructure, and the same product and marketing context we bring to every engagement, so DevOps isn't operating in a silo."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project and we'll schedule an infrastructure audit call within 24 hours to walk through your current stack, deployment process, and what's actually urgent. From there we send a scoped proposal with timeline and cost before any work begins."
    }
  ],
  "software-development/blockchain-smart-contracts": [
    {
      "question": "Which blockchains do you build on?",
      "answer": "We work across EVM chains (Ethereum, Base, Polygon, Arbitrum), Solana, and other L1/L2 ecosystems depending on your use case. Chain selection is part of our architecture phase — we weigh gas economics, ecosystem maturity, and your target users before recommending one."
    },
    {
      "question": "What does your security audit process actually cover?",
      "answer": "Every contract gets an internal review pass, automated static analysis, and manual line-by-line inspection against known vulnerability classes (reentrancy, overflow, access control, oracle manipulation). For contracts holding significant value, we coordinate an independent third-party audit before mainnet."
    },
    {
      "question": "How much does smart contract development cost?",
      "answer": "Pricing depends on contract complexity, chain, and whether a third-party audit is required. A simple token or NFT contract with internal review can start in the low five figures; multi-contract protocols with external audits run higher. We scope and quote after the architecture call."
    },
    {
      "question": "How long does a typical engagement take?",
      "answer": "A single contract with internal audit typically takes 3–5 weeks. Multi-contract protocols with external audit coordination usually run 8–12 weeks, since third-party auditors have their own queue and remediation cycles."
    },
    {
      "question": "Can our smart contracts be upgraded after launch?",
      "answer": "It depends on the design you choose. We can build immutable contracts for maximum trust, or proxy/upgradeable patterns that let you patch logic later — each has trade-offs around trust assumptions and audit scope that we walk through during architecture."
    },
    {
      "question": "Do you handle regulatory or compliance considerations?",
      "answer": "We flag general regulatory considerations relevant to token design and jurisdiction as part of our tokenomics consulting, but we are not a law firm and this isn't legal advice. We recommend startups pair our technical work with qualified securities and crypto counsel in their target markets."
    },
    {
      "question": "How do you optimize contracts for gas costs?",
      "answer": "We profile gas usage during development, favor storage-efficient data structures, batch state writes, and benchmark against alternative implementations before finalizing. Gas optimization is reviewed again after the audit, since remediation fixes can change costs."
    },
    {
      "question": "What's your testing methodology?",
      "answer": "Every function ships with unit tests, and critical paths get fuzz and integration testing against a forked mainnet environment. We also run testnet deployments so your team can interact with the real contract before it goes live."
    },
    {
      "question": "Do you support wallet and exchange integrations?",
      "answer": "Yes — we build integrations with MetaMask, WalletConnect, and other major wallet providers, plus the listing and API requirements exchanges typically ask for. We also handle the front-end web3 connection layer if you need it."
    },
    {
      "question": "What happens after mainnet launch?",
      "answer": "We set up on-chain monitoring and alerting for unusual contract activity, and offer ongoing retainers for monitoring, upgrades, and incident response. We don't consider a deployment finished until it's actively watched."
    },
    {
      "question": "Can you help design our token model, not just write the code?",
      "answer": "Yes — tokenomics consulting is part of our offering. We model supply, distribution, vesting, and incentive mechanisms alongside your fundraising and product goals before any contract gets written."
    },
    {
      "question": "What if a vulnerability is found after launch?",
      "answer": "Our monitoring retainer includes an incident response path — we triage, coordinate pausing or mitigation where the contract design allows it, and manage disclosure. This is exactly why we design upgrade paths and monitoring in from the start."
    },
    {
      "question": "Why choose Motion 8 over a specialist audit firm?",
      "answer": "Standalone audit firms review code someone else wrote. We build the contracts, run our own internal audit, coordinate external review, and stay on for monitoring — one accountable team instead of a hand-off between vendors who've never met."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project and we'll set up an architecture call within 24 hours to talk through your chain, contract requirements, and timeline, then follow up with a scoped proposal and quote."
    }
  ],
  "software-development/web3-development": [
    {
      "question": "What does \"Web3 development\" actually cover, versus traditional web development?",
      "answer": "Traditional web dev builds a frontend that talks to servers and databases you control. Web3 development adds a layer that talks to public blockchains and smart contracts instead — wallets for identity, on-chain state for data, and decentralized storage for files. The frontend, UX, and product thinking are still core to the job; we're just adding a trust layer neither client nor server fully owns."
    },
    {
      "question": "Which blockchains and wallets do you support?",
      "answer": "We build most often on Ethereum and EVM-compatible chains (Polygon, Base, Arbitrum, Optimism), plus Solana for high-throughput use cases. Wallet support typically covers MetaMask, WalletConnect, Coinbase Wallet, and embedded/social-login wallets for non-crypto-native users. We'll recommend a stack based on your users, not the other way around."
    },
    {
      "question": "Do we need a smart contract already built, or can Motion 8 write that too?",
      "answer": "Either works. If contracts already exist, we build the dApp and integrations against them. If not, that work sits under our separate Blockchain & Smart Contracts service — we regularly scope both together as one engagement so contract and frontend design happen in sync."
    },
    {
      "question": "What makes Web3 UX harder than a normal app?",
      "answer": "Users have to connect a wallet, approve transactions, pay gas, and wait for confirmations — steps with no Web2 equivalent. We design around these frictions directly: clear pre-transaction summaries, gas estimates up front, optimistic UI where safe, and fallbacks for users without a wallet yet."
    },
    {
      "question": "How do you onboard non-crypto-native users into a dApp?",
      "answer": "Embedded and social-login wallets (email or Google sign-in that provision a wallet behind the scenes) let new users transact before they understand seed phrases. We layer in plain-language explainers and gas-sponsorship options so the first five minutes feel like any other app."
    },
    {
      "question": "How long does a Web3 development engagement take?",
      "answer": "A focused dApp with wallet integration and a handful of on-chain interactions typically runs 6–10 weeks. Multi-chain products, DAO tooling, or anything layered on new smart contracts run longer — we'll give you a real range once we've scoped the chain work."
    },
    {
      "question": "What does Web3 development typically cost?",
      "answer": "Cost tracks scope, not buzzwords — a wallet-gated content site is a fraction of a multi-chain DAO platform. We scope against your roadmap and give a fixed range before work starts, the same way we do for any build."
    },
    {
      "question": "How do you handle security for a Web3 product?",
      "answer": "On-chain mistakes are hard to undo, so we build defensively: signature verification on every wallet action, transaction simulation before submission, and clear confirmation states so users never sign something they didn't intend to. Any contract-level work goes through third-party audit before mainnet."
    },
    {
      "question": "What about phishing and wallet-drain risks?",
      "answer": "Most user losses in Web3 come from social engineering, not code bugs. We design transaction prompts that clearly state what's being signed and why, avoid blanket approval requests, and add domain-verification cues so users can tell your dApp from a lookalike."
    },
    {
      "question": "Will the product scale as usage grows?",
      "answer": "We keep heavy compute and data off-chain wherever possible — indexing services, caching layers, and CDN-backed decentralized storage — so only what truly needs on-chain trust touches the chain. That keeps load times and gas costs down as your user base grows."
    },
    {
      "question": "Can you help pick the right chain for our product?",
      "answer": "Yes — chain selection is part of our Discover phase. We weigh transaction cost, finality speed, ecosystem tooling, and where your target users already hold wallets, rather than defaulting to whichever chain is trending."
    },
    {
      "question": "How does this relate to your Blockchain & Smart Contracts service?",
      "answer": "Blockchain & Smart Contracts covers the on-chain layer itself — contract design, development, and audit. Web3 Development is the product layer built on top of it: the dApp, wallet flows, and frontend your users actually touch. Most companies need both, and we scope them as one coordinated engagement."
    },
    {
      "question": "Why choose Motion 8 for Web3 development?",
      "answer": "We build the product, not just the protocol integration — our Web3 engineers work alongside product and marketing from kickoff, so the dApp you ship is designed to onboard real users and prove traction, not just demonstrate that a wallet connects."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a Project below and tell us about your product and chain plans. We'll set up a scoping call, map the wallet and chain stack that fits your users, and come back with a locked scope and timeline."
    }
  ],
  "software-development/dedicated-teams": [
    {
      "question": "How is the dedicated-team model different from project-based engagements?",
      "answer": "Project-based work is scoped, priced, and delivered against a fixed brief that ends at launch. A dedicated team is ongoing capacity that sits inside your backlog and adapts as your priorities shift — there's no re-scoping every time direction changes."
    },
    {
      "question": "How is this different from hiring a freelancer?",
      "answer": "A freelancer is a single independent contractor you source, vet, and manage yourself, with no backup if they disappear mid-sprint. A Motion 8 dedicated hire is vetted by us, backed by an agency for continuity and coverage, and accountable to a delivery process — not just their own calendar."
    },
    {
      "question": "What roles are available through a dedicated team?",
      "answer": "Frontend, backend, and full-stack engineers, blockchain and smart contract developers, mobile engineers, QA, DevOps, and product/project management — individually or as a small pod built around your roadmap."
    },
    {
      "question": "How much time zone overlap will we actually have?",
      "answer": "We match hires to your working hours before onboarding starts, and every dedicated hire commits to a set overlap window with your US, UK, or Australia team — typically 4–6 hours of live overlap for stand-ups, pairing, and quick decisions."
    },
    {
      "question": "What's the minimum engagement length?",
      "answer": "Most dedicated placements start at a three-month minimum, which is enough time for a hire to onboard fully and become genuinely productive on your codebase. Longer terms are typical — most clients keep their team for a year or more."
    },
    {
      "question": "How do I stay in control of my dedicated team's day-to-day work?",
      "answer": "Your hire works inside your project board, your sprint ceremonies, and your Slack — you assign the work, review the PRs, and set the priorities. Motion 8 handles employment, performance oversight, and backup coverage in the background."
    },
    {
      "question": "How does pricing work for a dedicated team?",
      "answer": "You pay a flat monthly rate per seat based on role and seniority — no hourly tracking, no scope-change invoices. It covers recruiting, employment overhead, tooling, and management, so the rate you see is the rate you pay."
    },
    {
      "question": "Can I scale the team up or down as we grow?",
      "answer": "Yes — that's the point of the model. Add seats ahead of a funding-driven push, or wind a role down between milestones, with weeks of notice instead of a hiring or layoff cycle."
    },
    {
      "question": "What does onboarding look like once we sign on?",
      "answer": "We run a structured first two weeks — codebase walkthroughs, access provisioning, and paired tasks — so your hire is committing real work well before the onboarding period ends, not still reading documentation."
    },
    {
      "question": "How do you vet and match candidates before I meet them?",
      "answer": "Every candidate goes through a technical screen, a live coding review, and reference checks before we shortlist them against your stack and role brief. You only interview candidates who've already cleared our bar."
    },
    {
      "question": "What happens if a team member isn't the right fit?",
      "answer": "We replace them at no additional recruiting cost during an agreed fit window, and hand over a fully vetted alternative rather than leaving you to restart the search yourself."
    },
    {
      "question": "Who owns the IP, and how is confidentiality handled?",
      "answer": "You own everything your dedicated hire builds. Every engagement is covered by an NDA and an IP assignment agreement signed before onboarding begins, so there's no ambiguity once work starts."
    },
    {
      "question": "Will the team use our existing tools and workflows?",
      "answer": "Yes. Dedicated hires work inside your stack, your repo, your project management tool, and your Slack — we don't ask you to adopt ours. The goal is a hire that feels internal from day one."
    },
    {
      "question": "Why choose Motion 8 over hiring in-house or another agency?",
      "answer": "You get vetted talent in weeks instead of months of in-house recruiting, backed by an agency that shares accountability for delivery — not a marketplace that hands you a resume and walks away. We work alongside marketing and product from day one, so engineering capacity ships against real growth goals."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a project with us and we'll set up a scoping call within 24 hours to map roles, seniority, and timeline, then get you interviewing shortlisted candidates within days."
    }
  ],
  "ai-automation/ai-agents-chatbots": [
    {
      "question": "What kinds of agents and chatbots does Motion 8 build?",
      "answer": "We build customer-facing support and sales chatbots, internal-ops assistants that sit on top of your tools, and task-specific agents that take actions rather than just answer questions. Each is scoped to a real workflow, not a generic FAQ bot."
    },
    {
      "question": "What's the difference between a chatbot and an AI agent?",
      "answer": "A chatbot answers questions in a conversation. An agent can also take action — look up an order, update a record, trigger a workflow — using tools you give it access to. Most builds we ship are agents with a chat interface on top."
    },
    {
      "question": "Which LLMs do you use?",
      "answer": "We're model-agnostic and pick based on your use case, latency, and budget — typically from Anthropic, OpenAI, or open-weight models self-hosted for cost or data-residency reasons. We benchmark candidates against your real conversations, not a generic leaderboard."
    },
    {
      "question": "Can the agent support-deflect our existing tickets?",
      "answer": "Yes — we train on your historical ticket data and knowledge base to identify the highest-volume, lowest-risk tickets to automate first, then expand scope as accuracy is proven out."
    },
    {
      "question": "How does the agent connect to our existing tools and data?",
      "answer": "We integrate via API, webhook, or native connector into your CRM, helpdesk, database, or internal tools — Zendesk, HubSpot, Slack, Postgres, and custom internal systems are all common. The agent works from your live data, not a static snapshot."
    },
    {
      "question": "How do you handle data privacy and security?",
      "answer": "We scope exactly what data the agent can read and write, use provider-level data-retention opt-outs where available, and can deploy self-hosted or region-locked models when compliance requires it. Access is scoped per integration, never blanket."
    },
    {
      "question": "How do you stop the agent from hallucinating or going off-script?",
      "answer": "We ground responses in your actual documents and data via retrieval rather than relying on model memory, constrain the agent's action space to approved tools, and run an eval suite against known-good answers before and after every prompt change."
    },
    {
      "question": "What happens when the agent doesn't know the answer?",
      "answer": "Every build includes a defined escalation path — handoff to a human, a ticket created automatically, or an honest \"I don't know\" — so the agent never guesses on something it can't verify."
    },
    {
      "question": "How accurate will the agent be on day one?",
      "answer": "We set an accuracy target during scoping and don't go live until the eval suite hits it. Most launches start with a narrower scope of high-confidence use cases, then widen as real conversation data comes in."
    },
    {
      "question": "How long does it take to build and launch?",
      "answer": "A focused single-use-case agent typically ships in 3–6 weeks. Multi-tool internal-ops agents or agents integrating several systems usually run 6–10 weeks. We scope the exact timeline before kickoff."
    },
    {
      "question": "What does it cost?",
      "answer": "Cost depends on scope — number of integrations, conversation complexity, and whether ongoing monitoring is included. We give a fixed project quote after the discovery call, plus model API usage which scales with volume."
    },
    {
      "question": "Do you handle ongoing maintenance after launch?",
      "answer": "Yes — conversation review, prompt tuning, and model updates are typically handled through a monthly retainer so accuracy holds up as your product and edge cases evolve. Ad hoc support is available if you'd rather run it in-house after handoff."
    },
    {
      "question": "Can you improve or fix an agent we already have in production?",
      "answer": "Yes. We regularly take over agents built in-house or by another vendor — auditing prompts, integrations, and failure logs first, then fixing accuracy and reliability issues without a full rebuild where possible."
    },
    {
      "question": "Why Motion 8 over another AI dev shop?",
      "answer": "We're a startup-focused team that treats agent accuracy as an ongoing product, not a one-off deliverable — evals, guardrails, and monitoring ship with every build, and our product and engineering leads stay hands-on through launch and beyond."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call — we'll walk through the workflow you want to automate, the systems it touches, and give you a fixed-scope proposal and timeline within a few business days."
    }
  ],
  "ai-automation/workflow-automation": [
    {
      "question": "What kinds of processes can actually be automated?",
      "answer": "Anything rules-based and repetitive: lead routing, invoice generation, onboarding checklists, data syncing between your CRM and spreadsheets, Slack alerts for key events, and report compilation. If it follows a consistent pattern, it's usually a candidate."
    },
    {
      "question": "What tools do you build with?",
      "answer": "Mostly Zapier, Make, and n8n, chosen based on complexity, cost, and how much your team wants to self-maintain. For high-volume or highly custom logic, we build directly against APIs instead of forcing it into a no-code tool."
    },
    {
      "question": "Will this work with the tools we already use?",
      "answer": "In almost every case, yes. We integrate with your existing CRM, helpdesk, spreadsheets, and comms tools rather than asking you to switch platforms — automation should fit your stack, not replace it."
    },
    {
      "question": "What does a workflow automation project cost?",
      "answer": "It depends on the number of workflows and how many systems they touch. A single automation is typically a small fixed-fee build; a broader ops overhaul is scoped after the audit. We quote before any work starts."
    },
    {
      "question": "How long does it take to go live?",
      "answer": "A single well-defined workflow can be live in as little as a week. Multi-system automations with several integration points usually take two to four weeks, including testing against real data."
    },
    {
      "question": "What happens when a workflow fails or a source system changes?",
      "answer": "Every automation ships with error handling and alerting, so failures get flagged instead of failing silently. Our monitoring plan catches breakages from upstream tool changes and fixes them before they pile up."
    },
    {
      "question": "How reliable are no-code automations at scale?",
      "answer": "Very, when built with proper error handling, retries, and rate-limit awareness. Where a no-code platform genuinely can't keep up with volume, we say so upfront and move that piece to custom code instead."
    },
    {
      "question": "How is this different from custom software development?",
      "answer": "Workflow automation connects and extends the tools you already have; custom software builds something new from scratch. Automation is faster and cheaper — it's the right call until your process outgrows what off-the-shelf tools can do."
    },
    {
      "question": "Can automations handle sensitive or regulated data?",
      "answer": "Yes, with the right platform and access controls. We scope data sensitivity during the audit and choose tools and permission structures that match your compliance requirements."
    },
    {
      "question": "Do we need technical staff to maintain this after launch?",
      "answer": "No. We document every workflow in plain language and offer ongoing monitoring so your team doesn't need to touch the underlying logic. You can also hand it to your own team later — nothing is locked to us."
    },
    {
      "question": "How do you measure the ROI of an automation?",
      "answer": "We baseline hours spent and error rates on the manual process before building, then track time saved, throughput, and error reduction after launch, so the payback period is a number, not a guess."
    },
    {
      "question": "Can you automate across multiple departments at once?",
      "answer": "Yes. Sales, support, finance, and ops workflows often share the same underlying data, so we frequently sequence automations across teams so they reinforce each other instead of creating new silos."
    },
    {
      "question": "What if our process changes after the automation is built?",
      "answer": "Workflows are built modularly so individual steps can be updated without rebuilding the whole thing. Our monthly review call is exactly for catching process drift and adjusting before it causes errors."
    },
    {
      "question": "Why choose Motion 8 over a freelance automation builder?",
      "answer": "A freelancer builds the flow and disappears; we audit, build, document, and monitor as one engagement, backed by a team that also understands your broader dev and marketing stack, not just the automation platform."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and walk us through the process that's costing your team the most time. We'll audit it, propose the workflows worth automating first, and quote before anything is built."
    }
  ],
  "ai-automation/ai-integration": [
    {
      "question": "Can you add AI without disrupting our existing product?",
      "answer": "Yes — we work inside your current codebase and ship behind feature flags, so new AI functionality reaches a small slice of users first. Your core product and its uptime are never put at risk for the sake of a new feature."
    },
    {
      "question": "Do we need to rebuild or replatform anything first?",
      "answer": "Almost never. Most AI features — search, recommendations, summarization, chat — bolt onto a modern stack as a new service or API call. We'll flag the rare case where your architecture genuinely blocks integration before any work starts."
    },
    {
      "question": "Which AI providers and models do you work with?",
      "answer": "We're provider-agnostic — OpenAI, Anthropic, Google Gemini, and open-source models via providers like Together or self-hosted inference, depending on cost, latency, and data requirements. We recommend a stack rather than default to one."
    },
    {
      "question": "How do you decide which model or API fits our use case?",
      "answer": "During the audit phase we benchmark candidate models against your actual data on accuracy, latency, and cost per request, then recommend the option that fits your product's margins — not just the most capable model available."
    },
    {
      "question": "What data do we need to have ready before we start?",
      "answer": "It depends on the feature — some integrations need no historical data at all, others benefit from your existing product usage or content data. We audit what you have first and only ask you to collect more if a feature genuinely requires it."
    },
    {
      "question": "What if our data is messy or incomplete?",
      "answer": "Common, and rarely a blocker. Data pipeline work — cleaning, structuring, and connecting your data to the model — is part of the engagement, scoped during the audit so there are no surprises mid-build."
    },
    {
      "question": "How much does AI integration typically cost?",
      "answer": "Engagements scope to the specific feature after the audit — a single well-defined feature integration is a very different project from a multi-feature AI layer. You get a fixed-scope quote before any build work starts, plus a separate estimate of ongoing model API costs."
    },
    {
      "question": "How long does an integration take?",
      "answer": "A single, well-scoped feature typically ships in 3–6 weeks from audit to staged rollout. Multi-feature integrations or ones needing meaningful data pipeline work run longer — you'll get a real timeline once we've scoped it."
    },
    {
      "question": "How do you measure whether the AI feature is actually working?",
      "answer": "We define success metrics before we build — adoption rate, task completion, output quality score, or a downstream business metric like conversion or retention — and track them through the staged rollout, not just at launch."
    },
    {
      "question": "Will this add ongoing technical debt for our team to maintain?",
      "answer": "We build to your existing code standards and hand over documented, versioned prompts and integration code — not a black box. Most clients' teams take over day-to-day maintenance within weeks of launch."
    },
    {
      "question": "Who maintains the integration after launch — you or us?",
      "answer": "Your call. Some clients hand off fully after launch; others keep us on for ongoing tuning, cost monitoring, and model upgrades under a lighter monthly retainer. We scope whichever fits before rollout."
    },
    {
      "question": "How do you handle data security and privacy with AI providers?",
      "answer": "We use providers' enterprise/API tiers with no-training-on-your-data agreements where available, minimize what's sent to third-party models, and can route sensitive workloads to self-hosted or private-deployment models when your compliance needs require it."
    },
    {
      "question": "What happens if the model's output is wrong or low quality?",
      "answer": "Every integration ships with guardrails — confidence thresholds, fallback flows, and human-in-the-loop review where the stakes are high — plus an eval process to catch quality regressions before users do."
    },
    {
      "question": "Why Motion 8 instead of an in-house hire or freelancer?",
      "answer": "You get a full team — engineering, UX, and data — that has shipped AI features across multiple companies, without the hiring timeline or the risk of a single freelancer's bandwidth. We integrate with your existing team rather than replacing it."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call — we'll review your product and data, identify the highest-impact AI feature to start with, and send a fixed-scope proposal within 24 hours."
    }
  ],
  "ai-automation/llm-fine-tuning-rag": [
    {
      "question": "Do we need RAG, fine-tuning, or both?",
      "answer": "Most startups start with RAG: it grounds a general-purpose model in your live data without retraining, and it's cheaper and faster to update. Fine-tuning earns its cost when you need a consistent tone, a specialized task format, or behavior that retrieval alone can't teach — and the two combine well when both apply."
    },
    {
      "question": "When does fine-tuning actually make sense?",
      "answer": "When you need a specific output format at scale, a domain vocabulary the base model gets wrong, or lower latency and cost than a long RAG prompt allows. We'll tell you honestly if your use case doesn't need it — a lot of \"we need to fine-tune\" requests are solved by better retrieval instead."
    },
    {
      "question": "Which foundation models do you work with?",
      "answer": "We build on the major hosted APIs — OpenAI's GPT models, Anthropic's Claude, Google's Gemini — and on open-weight models like Llama and Mistral when you need self-hosting, data residency, or a fine-tune you fully own. The right choice depends on your latency, cost, and privacy constraints."
    },
    {
      "question": "Does our proprietary data ever train a shared model?",
      "answer": "No. We use enterprise API tiers and opt-out settings that exclude your data from provider training, and any fine-tuned weights or embeddings we produce are yours, isolated to your environment. Nothing you send us gets pooled with another client's data."
    },
    {
      "question": "Where does our data actually live?",
      "answer": "Typically in a vector database inside your own cloud account — Pinecone, pgvector, or a managed alternative — so you retain access control and audit trails. We'll match the hosting model to whatever compliance posture your startup already needs (SOC 2, HIPAA, etc.)."
    },
    {
      "question": "How much does this cost, and what drives the price?",
      "answer": "Cost scales with data volume, source complexity, and whether fine-tuning is involved — a straightforward RAG pipeline over clean documentation is far cheaper than fine-tuning across messy, multi-source data. We scope and quote after the discovery workshop, once we've seen your data."
    },
    {
      "question": "How long does a typical build take?",
      "answer": "A focused RAG pipeline over a well-defined data source usually ships in 3–5 weeks. Add fine-tuning, messier data sources, or tighter evaluation requirements and timelines extend to 6–10 weeks. We give a firm estimate once scoping is done."
    },
    {
      "question": "How do you measure accuracy before launch?",
      "answer": "We build a held-out evaluation set from real questions and score retrieval relevance, answer correctness, and hallucination rate before anything ships. You see the numbers, not just a demo that happened to work."
    },
    {
      "question": "What stops the model from hallucinating or going off-brand?",
      "answer": "Grounded retrieval with citations, confidence thresholds that trigger a fallback instead of a guess, and a guardrail layer that filters outputs before they reach the user. We tune these thresholds against your evaluation set, not a generic default."
    },
    {
      "question": "Our product data changes constantly — does the system keep up?",
      "answer": "RAG pipelines are built with a sync job that re-embeds changed content on a schedule or on webhook, so retrieval stays current without a redeploy. Fine-tuned models are refreshed on a slower cadence — we set that interval based on how fast your underlying data actually moves."
    },
    {
      "question": "Who hosts the infrastructure once it's live?",
      "answer": "Usually your own cloud account, so you keep control and predictable billing as usage scales. We can also manage hosting directly for teams that would rather not run ML infrastructure themselves — both models are on the table during scoping."
    },
    {
      "question": "What happens once retrieval or fine-tune quality drifts?",
      "answer": "Monitoring flags drops in retrieval relevance or answer quality against your baseline eval set, and we review flagged sessions monthly. Most drift traces back to new data that hasn't been indexed yet, which the sync job usually catches on its own."
    },
    {
      "question": "Why Motion 8 instead of an in-house ML hire or a generic AI vendor?",
      "answer": "You get a working pipeline in weeks instead of a multi-month hiring search, and our engineers have shipped RAG and fine-tuning across enough startup stacks to know where these projects actually break. Marketing and product sit alongside the build, so the system is scoped to a real business outcome, not a research exercise."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call and bring a sense of your data sources and the problem you want the model to solve. We'll walk through the RAG-vs-fine-tuning tradeoff for your case and follow up with a written architecture recommendation and quote within 24 hours."
    }
  ],
  "ai-automation/predictive-analytics-ml": [
    {
      "question": "What does \"predictive analytics\" actually mean for a startup?",
      "answer": "It means turning your historical data into a model that scores something before it happens — which customer will churn this month, which order is likely fraudulent, how much demand to expect next week. Instead of a dashboard that tells you what already occurred, you get a number or a flag you can act on in advance."
    },
    {
      "question": "What data do we need to have before starting?",
      "answer": "You need enough historical examples of the outcome you're predicting — past churn events, labeled fraud cases, past sales history — typically several months to a year, depending on how often the event occurs. In discovery we audit what you have and tell you honestly if there isn't enough yet to build something reliable."
    },
    {
      "question": "How long does it take to build a model?",
      "answer": "A focused single-target model — one churn score, one fraud flag — typically takes 4–7 weeks from scoping through validated deployment. Recommendation engines and multi-signal personalization systems usually run 8–12 weeks given the extra feature and pipeline work involved."
    },
    {
      "question": "What accuracy should we expect?",
      "answer": "It depends entirely on the problem and the data available, so we set a target accuracy metric during scoping — precision and recall for fraud, mean absolute error for forecasting — and don't ship until the model clears it on holdout data. We'd rather tell you a model isn't ready than ship one that looks good on paper and fails in production."
    },
    {
      "question": "What's the difference between forecasting, fraud detection, and personalization work?",
      "answer": "Forecasting predicts a number over time — demand, revenue, churn rate. Fraud and anomaly detection flags individual events as unusual against learned normal behavior. Personalization and recommendation engines rank or match content to a specific user. Each uses different model types and validation approaches, which is why we scope the target before picking a technique."
    },
    {
      "question": "What kinds of custom ML models do you build?",
      "answer": "Classification models for churn, fraud, and lead scoring; regression models for forecasting revenue, demand, or lifetime value; and clustering models for customer segmentation and anomaly baselines. We pick the model family based on the prediction target, not a default toolkit."
    },
    {
      "question": "What data privacy and security safeguards apply to these models?",
      "answer": "We scope exactly which fields the model can access, anonymize or hash identifiers where the prediction doesn't require raw PII, and can train and host inside your own cloud environment when compliance or data-residency requirements call for it."
    },
    {
      "question": "How do you validate a model before it goes live?",
      "answer": "We hold out a slice of real data the model never trains on and test performance against it, simulating how the model will behave on new, unseen cases. We also run explainability checks so you can see which signals are driving predictions, not just the accuracy score."
    },
    {
      "question": "What happens as our data changes over time — does the model still work?",
      "answer": "Model accuracy degrades as real-world patterns shift — this is called drift. Every model we deploy ships with drift monitoring that tracks prediction quality against live outcomes, so we know when performance is slipping and retrain before it becomes a problem you notice first."
    },
    {
      "question": "How does the model integrate with our existing product and data stack?",
      "answer": "Depending on how the prediction is used, we deploy as a real-time API endpoint your app calls, a batch job that scores a table nightly, or a feed into your warehouse or BI tool. We build against your existing data infrastructure — Postgres, Snowflake, BigQuery, and common event pipelines are all common integration points."
    },
    {
      "question": "Should we build a custom model or buy an off-the-shelf tool?",
      "answer": "If a generic tool already solves your exact problem well, we'll tell you to buy it — we don't build what doesn't need building. Custom models earn their cost when your data, product, or fraud patterns are specific enough that an off-the-shelf model underperforms or can't see the signals that matter to you."
    },
    {
      "question": "What does it cost?",
      "answer": "Cost depends on data readiness, model complexity, and how many prediction targets are in scope. We give a fixed project quote after reviewing your data during discovery, plus hosting and any ongoing retraining costs if you keep us on retainer."
    },
    {
      "question": "Do you handle ongoing maintenance and retraining after launch?",
      "answer": "Yes — drift monitoring, periodic retraining, and accuracy review are typically handled through a monthly retainer so the model keeps performing as your business and data evolve. We can also hand off a documented pipeline if you'd rather retrain in-house."
    },
    {
      "question": "Why Motion 8 over a generic ML vendor?",
      "answer": "We're a startup-focused team that ties every model to a business metric you already track, validates on holdout data before anything ships, and stays on for the drift monitoring most vendors treat as an afterthought. You get a model your team trusts enough to actually act on, not a report that sits in a slide deck."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call — we'll review what data you have, define the prediction target and success metric, and give you a fixed-scope proposal and timeline within a few business days."
    }
  ],
  "ai-automation/computer-vision-generative-ai": [
    {
      "question": "Which computer vision and generative AI use cases are actually worth building?",
      "answer": "The strongest fits are workflows with a clear visual signal and a repeatable decision: matching a product photo to catalog items, flagging a defect on an assembly line, pulling structured data off a scanned document, or generating on-brand imagery at volume. If the task can be described as \"look at this image and decide X,\" it's usually a good candidate."
    },
    {
      "question": "What image or video data do we need to have before starting?",
      "answer": "Ideally a sample of real images or footage from your actual product or environment, even a few hundred examples. If you don't have data yet, we can help set up capture during discovery, or bootstrap early versions with synthetic or licensed data while your own dataset grows."
    },
    {
      "question": "Should we build a custom model or use an off-the-shelf API?",
      "answer": "We start with off-the-shelf APIs whenever they clear your accuracy bar — it's faster and cheaper. We move to fine-tuning or a custom model only when generic models plateau on your specific imagery, domain, or edge cases, which is common for niche products, industrial settings, or brand-specific generation."
    },
    {
      "question": "What accuracy should we expect?",
      "answer": "It depends entirely on the task and how much labeled data is available — we set a target accuracy during scoping based on similar production systems and your risk tolerance, and don't recommend going live until the eval suite hits it."
    },
    {
      "question": "How are models evaluated before launch?",
      "answer": "We hold out a test set the model never trains on, weighted toward the edge cases and failure modes that matter most for your use case — poor lighting, unusual angles, rare defect types — and score against it before anything ships. Generative outputs are reviewed against brand and quality guidelines with the same rigor."
    },
    {
      "question": "Who owns the content and copyright for generated images or video?",
      "answer": "You own the output produced for your project. We use generation providers with commercial-use terms and flag any provider-specific IP or indemnification limits during scoping, so there are no surprises about what you can and can't do with generated assets."
    },
    {
      "question": "How do you handle data privacy for image and video data?",
      "answer": "We scope exactly what images and metadata leave your systems, use provider-level data-retention opt-outs where available, and can deploy self-hosted or region-locked models when compliance or customer imagery sensitivity requires it. Access to training data is scoped per project, never blanket."
    },
    {
      "question": "How does this integrate with our existing product and pipeline?",
      "answer": "We wire the model into your existing stack via API, batch job, or an edge-deployed model where latency requires it — connecting to your image storage, product database, or manufacturing systems directly, rather than requiring you to build a separate workflow around it."
    },
    {
      "question": "How long does a computer vision or generative AI project take?",
      "answer": "A scoped feature built on off-the-shelf models typically ships in 3–6 weeks. Projects requiring data collection, annotation, and custom fine-tuning usually run 8–14 weeks depending on data availability. We give an exact timeline after discovery."
    },
    {
      "question": "What does it cost?",
      "answer": "Cost depends on scope — whether we're integrating an existing API, fine-tuning a model, or building a full annotation and training pipeline. We give a fixed project quote after the discovery call, plus inference or generation costs that scale with usage."
    },
    {
      "question": "Do you handle ongoing maintenance and retraining after launch?",
      "answer": "Yes — accuracy monitoring, drift detection, and scheduled retraining as new data comes in are typically handled through a monthly retainer, since real-world image distributions shift over time. Ad hoc support is available if you'd rather run it in-house after handoff."
    },
    {
      "question": "Can you take over or fix a model already in production?",
      "answer": "Yes. We regularly inherit models built in-house or by another vendor — auditing the training data, evaluation approach, and failure logs first, then fixing accuracy or reliability issues without a full rebuild where possible."
    },
    {
      "question": "Why Motion 8 over a generic AI vendor?",
      "answer": "We're a startup-focused team that fine-tunes on your real imagery instead of shipping a generic API wrapper, and we treat model accuracy as an ongoing product with evals and monitoring built in — our engineering leads stay hands-on through launch and beyond."
    },
    {
      "question": "Can generative AI be used safely for customer-facing product imagery?",
      "answer": "Yes, with review steps built in — we typically pair generation with automated quality and brand-compliance checks, plus a human approval gate for anything customer-facing, so generated imagery meets the same bar as photographed or designed assets before it goes live."
    },
    {
      "question": "How do we get started?",
      "answer": "Book a scoping call — we'll walk through the visual task you want to solve, the image or video data you have available, and give you a fixed-scope proposal and timeline within a few business days."
    }
  ],
  "platform:shopify-plus": [
    {
      "question": "What is Shopify Plus, and how is it different from regular Shopify?",
      "answer": "Shopify Plus is the enterprise tier — unmetered checkout customization, native B2B/wholesale channels, multi-store architecture, and dedicated infrastructure that regular Shopify doesn't offer. It's built for brands doing serious volume who need scripting, automation, and API headroom standard plans can't provide. We help you decide whether Plus is actually warranted yet or premature."
    },
    {
      "question": "Can I migrate my existing store without losing data?",
      "answer": "Yes — we run a full audit and mapped migration plan before touching production: customers, order history, product catalog, metafields, and SEO redirects all move over intact. We stage everything in a parallel environment and validate against your live store before cutover, so there's no downtime or data loss on launch day."
    },
    {
      "question": "How fast can I launch on Shopify Plus?",
      "answer": "A standard theme-based Plus build typically launches in 4–6 weeks; a headless or highly custom checkout build runs 8–12 weeks depending on integration scope. We scope timelines against your funding runway and fundraising milestones up front, so there are no surprises mid-build."
    },
    {
      "question": "What enterprise features actually matter for a scaling startup?",
      "answer": "The ones that move the needle early are checkout scripting, custom shipping/discount logic, multi-currency, and unlimited staff accounts with granular permissions. We prioritize the handful of enterprise features that actually reduce operational drag for your team, rather than building out everything Plus offers on day one."
    },
    {
      "question": "Can you customize the checkout experience?",
      "answer": "Yes — Plus gives us full checkout.liquid or Checkout Extensibility access to add custom fields, upsells, dynamic shipping rules, and branded post-purchase flows. We build checkout customizations that lift conversion and AOV without breaking Shopify's PCI-compliant, battle-tested payment core."
    },
    {
      "question": "Do you build B2B and wholesale storefronts on Shopify Plus?",
      "answer": "Regularly — Shopify Plus's native B2B module lets us stand up company accounts, tiered price lists, quantity breaks, and net-terms invoicing on the same store as your DTC storefront. That means one platform, one inventory system, and one codebase instead of a bolted-on separate B2B site."
    },
    {
      "question": "Should we go headless with Shopify Plus, or use a standard theme?",
      "answer": "It depends on your team's need for front-end flexibility and speed — a well-built theme covers most merchants well into scale, while headless (Hydrogen or a custom Next.js front end on Storefront API) makes sense when brand experience or a fast-moving product team is a real differentiator. We'll give you a straight recommendation, not a bias toward the bigger build."
    },
    {
      "question": "What does Shopify Plus cost, and when does it make sense to upgrade?",
      "answer": "Plus pricing is revenue-based rather than a flat monthly fee, so it only makes sense once you've outgrown standard Shopify's transaction volume, app-fee ceilings, or checkout limitations. We run the numbers with you first — sometimes the right call is to stay on standard Shopify longer and put that budget into growth instead."
    },
    {
      "question": "Can Shopify Plus handle multi-currency and international expansion?",
      "answer": "Yes — Shopify Markets on Plus handles localized pricing, currency conversion, duties/tax display, and region-specific domains from a single admin. We configure market-by-market rollout so you can launch in the UK, EU, or Australia without standing up separate storefronts or teams."
    },
    {
      "question": "Can you integrate our ERP, CRM, and POS systems with Shopify Plus?",
      "answer": "Yes — we've connected Plus stores to NetSuite, SAP, HubSpot, Salesforce, and Shopify POS via native connectors and custom middleware where needed. The goal is always one source of truth for inventory, orders, and customer data across every system your team touches."
    },
    {
      "question": "What can you automate with Shopify Flow and scripts?",
      "answer": "Plenty — fraud flagging, tagging and segmentation, inventory alerts, VIP order routing, and post-purchase workflows can all run on Shopify Flow without custom code. For anything Flow can't handle, we write custom scripts and Functions so your ops team stops doing manual, repetitive work order by order."
    },
    {
      "question": "How secure is Shopify Plus under real compliance scrutiny?",
      "answer": "Shopify Plus is PCI DSS Level 1 certified out of the box, with enterprise-grade DDoS protection, automated fraud analysis, and 99.99% uptime SLA — the kind of infrastructure diligence investors and enterprise partners expect. We layer on staff permission structures and audit logging so security holds up under real scrutiny, not just a checklist."
    },
    {
      "question": "What level of support do we get after launch?",
      "answer": "Every Plus build ships with a defined post-launch support window covering bug fixes, performance monitoring, and Black Friday/Cyber Monday readiness checks. Beyond that, we offer retained monthly support so your store keeps evolving as your product and growth strategy do — not just a one-time handoff."
    },
    {
      "question": "Why choose Motion 8 to build our Shopify Plus store?",
      "answer": "We build growth infrastructure — not template stores for anyone with a credit card. That means we scope for where you'll be in 12 months, not just launch day, pairing Plus platform expertise with the marketing, automation, and integration work that actually drives revenue."
    },
    {
      "question": "How do we get started?",
      "answer": "Start a Project and we'll set up a scoping call to map your current stack, growth targets, and timeline. From there we send a fixed-scope proposal within days so you know exactly what you're getting before any commitment."
    }
  ],
  "platform:shopify": [
    {
      "question": "Is regular Shopify enough, or do we need Plus?",
      "answer": "Standard Shopify comfortably handles most early and growth-stage stores. We typically recommend Plus once order volume, checkout customization, or multi-store needs outgrow the base plan — and we'll tell you plainly if you're at that point."
    },
    {
      "question": "How much does a Shopify build cost and how long does it take?",
      "answer": "Cost and timeline scale with scope — a templated launch is quicker and leaner than a fully custom build with heavy integrations. Use the quick estimate tool above or talk to us for a number tied to your actual requirements."
    },
    {
      "question": "Can you migrate our existing store to Shopify without losing data or SEO rankings?",
      "answer": "Yes. We map products, customers, and order history ahead of cutover, and set up URL redirects so search rankings transfer instead of resetting. Migrations run on staging first, so your live store stays untouched until we're confident."
    },
    {
      "question": "Do we have to use a Shopify theme as-is, or can the design be custom?",
      "answer": "Neither is required. We can customize a proven theme for speed and budget, or design custom page layouts and sections when your brand needs more than a template allows. Most startups land somewhere in between."
    },
    {
      "question": "Will the store perform well on mobile and rank in search?",
      "answer": "Every build is mobile-first, with performance budgets and Core Web Vitals checks before launch. We also handle on-page SEO fundamentals — structured data, metadata, sitemaps — so the store is discoverable from day one."
    },
    {
      "question": "What payment gateways and third-party tools can you connect?",
      "answer": "We integrate Shopify Payments and major regional gateways, plus the app ecosystem — email, reviews, subscriptions, loyalty, and more. If you need something outside the app store, we can build a custom integration against Shopify's APIs."
    },
    {
      "question": "Is our customer and payment data secure on Shopify?",
      "answer": "Shopify is PCI DSS compliant out of the box, so we never handle raw card data directly. We layer on secure app vetting, access controls, and staging-first changes so production stays stable and locked down."
    },
    {
      "question": "What happens when we outgrow the plan we launch on?",
      "answer": "We architect stores so upgrading — more integrations, higher traffic, or a move to Shopify Plus — doesn't mean rebuilding from scratch. Theme structure and app choices are made with that runway in mind from the start."
    },
    {
      "question": "Can Shopify handle our inventory across multiple sales channels?",
      "answer": "Yes — Shopify's native channels cover online, in-person (POS), and major marketplaces, syncing inventory centrally. We configure the channels you need at launch and can add more as your sales footprint grows."
    },
    {
      "question": "Do you build subscription, bundle, or tiered-pricing models?",
      "answer": "Yes, using proven Shopify apps for subscriptions and bundling, configured and tested against your specific pricing logic. We'll flag early if a model needs a custom build rather than an off-the-shelf app."
    },
    {
      "question": "Will you connect Shopify to our ERP or CRM?",
      "answer": "We've integrated Shopify with common ERP and CRM systems to keep orders, inventory, and customer records in sync. Scope and cost depend on which system you run and how much automation you need."
    },
    {
      "question": "Who owns the store and code after launch?",
      "answer": "You do. The Shopify store, theme code, and any custom work are yours outright at handoff — there's no lock-in requiring you to stay with us for support or hosting."
    },
    {
      "question": "Do you offer support after the store goes live?",
      "answer": "Yes. Post-launch, we offer ongoing iteration and support engagements — bug fixes, new features, seasonal updates — billed separately from the initial build so you only pay for what you actually need."
    },
    {
      "question": "Why choose Motion 8 over a freelancer or a generic agency?",
      "answer": "We're used to moving at commercially-driven timelines and scoping builds that won't need to be redone at the next stage of growth. You get a dedicated team, not a single freelancer juggling other clients."
    },
    {
      "question": "How do we get started?",
      "answer": "Start with the quick cost estimate above or book a kickoff call. We'll scope your requirements, give you a fixed range, and get a locked plan in front of you within one business day."
    }
  ],
  "platform:wordpress-woocommerce": [
    {
      "question": "What is WooCommerce, exactly?",
      "answer": "WooCommerce is a free, open-source ecommerce plugin that turns a WordPress site into a full online store. It handles products, cart, checkout, and payments while WordPress handles everything around the store — content, blog, and brand pages."
    },
    {
      "question": "How does WooCommerce compare to Shopify?",
      "answer": "Shopify is faster to launch and easier to hand off, but you're renting the platform — transaction fees, template limits, and app-store lock-in follow you as you scale. WooCommerce costs more to build and needs a real dev partner, but you own the code, the data, and the economics outright. For startups planning to grow content, SEO, and custom logic together, that ownership usually pays for itself within a year or two."
    },
    {
      "question": "Is WooCommerce a good fit if content and SEO matter as much as checkout?",
      "answer": "Yes — that's the strongest argument for WooCommerce over most hosted platforms. Because it sits inside WordPress, product pages, blog content, and landing pages share the same URL structure, template system, and SEO tooling, so a content-heavy growth strategy doesn't fight the store the way it can on more checkout-first platforms."
    },
    {
      "question": "What does a WooCommerce build cost, and how long does it take?",
      "answer": "A focused store with a handful of core plugins typically runs 2–4 weeks. A fuller build with custom product logic, subscriptions, or an ERP/CRM integration is closer to 6–8 weeks. Cost tracks scope rather than a flat platform fee, so we scope it against your catalog and integrations before quoting a number."
    },
    {
      "question": "Can you migrate our existing store to WooCommerce without losing SEO rankings?",
      "answer": "Yes. We map every existing URL to its new equivalent, put 301 redirects in place before launch, and carry over metadata, structured data, and canonical tags. Rankings can dip briefly around any platform switch, but a mapped migration typically recovers within a few weeks rather than starting from zero."
    },
    {
      "question": "What happens if we migrate off Shopify or Magento — do we lose our data?",
      "answer": "No — products, customers, order history, and content are exported from the source platform and imported into WooCommerce as part of the migration, then verified line by line before the old store is retired. Nothing goes live until the data checks out."
    },
    {
      "question": "How big is the WooCommerce plugin ecosystem, and how do you choose which ones to use?",
      "answer": "There are tens of thousands of plugins available, which is a strength and a risk at the same time. We stick to a short list of well-maintained, security-audited plugins for each function — payments, shipping, SEO — rather than stacking whatever looks convenient, which keeps the site fast and reduces conflict risk."
    },
    {
      "question": "Will plugin conflicts break my site as we add more features?",
      "answer": "That's the main operational risk with WordPress, and it's manageable with discipline: we test new plugins on a staging copy before touching production, keep the plugin count lean, and document what each one does so conflicts are easy to trace instead of guessed at."
    },
    {
      "question": "What payment gateways and shipping carriers does WooCommerce support?",
      "answer": "Stripe, PayPal, and most major regional gateways connect natively or through a maintained extension, and shipping integrates with carriers like UPS, FedEx, Royal Mail, and Australia Post, plus real-time rate calculators. We configure the set that matches where your customers actually are."
    },
    {
      "question": "Can WooCommerce handle international payments and multi-currency checkout for UK/AU/US customers?",
      "answer": "Yes — multi-currency pricing, region-based tax rules, and localized checkout are standard requirements for our US/UK/Australia clients, and we set them up with vetted extensions rather than hand-rolled logic so tax compliance stays accurate as rules change."
    },
    {
      "question": "Is WooCommerce secure enough for real transaction volume?",
      "answer": "Yes, when it's hardened properly — PCI-compliant payment processing (card data never touches your server), managed hosting with a web application firewall, and a regular update cadence for core, theme, and plugins. Security here is mostly a matter of ongoing discipline, not a platform limitation."
    },
    {
      "question": "Who handles ongoing maintenance, plugin updates, and core WordPress updates after launch?",
      "answer": "We offer ongoing maintenance retainers that cover core, theme, and plugin updates, staging-tested before they touch production, plus uptime and security monitoring. Some clients prefer to hand this to an internal hire once they're established — either way, we document the setup so nothing depends on tribal knowledge."
    },
    {
      "question": "Can WooCommerce actually scale as our order volume and catalog grow?",
      "answer": "Yes, with the right hosting and architecture — managed WooCommerce hosting, database optimization, and caching handle stores with thousands of SKUs and high order volume well. We plan for your 18-month growth trajectory up front rather than rebuilding the foundation later."
    },
    {
      "question": "Why choose Motion 8 for a WooCommerce build instead of a generalist WordPress freelancer?",
      "answer": "A generalist can build a site; we build stores that have to perform — migrations that protect SEO, integrations with the CRM and ops tools you already run, and a build that's ready for the audits and due diligence that come with fundraising or acquisition."
    },
    {
      "question": "What do we need to have ready before kicking off a WooCommerce project with Motion 8?",
      "answer": "Brand assets, a rough product/catalog list, and access to any existing store or CMS you're migrating from. If you already know your payment and shipping providers, that helps us scope faster — but it's fine to work those out together during discovery."
    }
  ],
  "platform:bigcommerce": [
    {
      "question": "Why choose BigCommerce over Shopify?",
      "answer": "BigCommerce charges no transaction fees and gives you deeper native functionality out of the box, which matters once you're negotiating payment processing and running B2B alongside B2C. It's a stronger fit when you need enterprise features without stacking on paid apps."
    },
    {
      "question": "Can BigCommerce actually handle the scale we'll hit post-Series A?",
      "answer": "Yes. BigCommerce is built for high-SKU catalogs and traffic spikes without the checkout throttling some platforms impose at scale. We architect the storefront and integrations so growth doesn't force a replatform later."
    },
    {
      "question": "What does a headless BigCommerce build look like?",
      "answer": "We use BigCommerce's APIs and webhooks as the commerce engine while your frontend runs on Next.js or another framework of your choice. You get full design freedom and faster page performance without giving up BigCommerce's backend tooling."
    },
    {
      "question": "We sell wholesale and DTC — does BigCommerce support both?",
      "answer": "BigCommerce's B2B Edition runs wholesale pricing, customer groups, and quoting in the same catalog as your consumer storefront. We set up separate price lists and buyer portals so both channels operate cleanly from one back office."
    },
    {
      "question": "How do you migrate an existing store onto BigCommerce?",
      "answer": "We map your products, customer records, and order history first, then run the migration into a staging environment for full QA before cutover. Redirects are mapped so you keep existing SEO equity through the switch."
    },
    {
      "question": "Can BigCommerce connect to our ERP or CRM?",
      "answer": "Yes, via BigCommerce's open APIs we integrate NetSuite, HubSpot, Salesforce, and similar systems for real-time inventory, order, and customer sync. We've built these connections for prior clients running lean ops teams."
    },
    {
      "question": "What about fulfillment and shipping integrations?",
      "answer": "BigCommerce connects natively to ShipStation, ShipperHQ, and 3PL providers for rate shopping and label automation. We configure shipping rules by zone, weight, and channel so fulfillment stays automated as order volume grows."
    },
    {
      "question": "Is BigCommerce good for SEO?",
      "answer": "BigCommerce gives you clean URL control, built-in AMP support, and no forced app tax on core SEO features. We layer in structured data, sitemap configuration, and page-speed tuning on top of that foundation."
    },
    {
      "question": "How does BigCommerce handle payment and data security?",
      "answer": "BigCommerce is PCI DSS Level 1 certified and handles patching and infrastructure security at the platform level. We add SSO, role-based admin access, and audit logging where your compliance requirements call for it."
    },
    {
      "question": "What's the real cost difference between BigCommerce and Shopify Plus?",
      "answer": "BigCommerce's tiered plans avoid the per-transaction fee that eats into margin on high-volume Shopify stores, though app costs vary by feature set on either platform. We walk through your projected order volume to model which platform actually costs less at your scale."
    },
    {
      "question": "Can we customize the checkout experience?",
      "answer": "BigCommerce's Optimized One-Page Checkout supports custom scripts, branding, and field logic without needing an enterprise plan to unlock it. We tailor the flow to your conversion data rather than the platform default."
    },
    {
      "question": "Does BigCommerce support multi-storefront or multi-region setups?",
      "answer": "Multi-Storefront lets you run several branded storefronts — by region, brand, or channel — from one BigCommerce backend and catalog. This is a common setup for startups expanding from the US into the UK or Australia without duplicating inventory systems."
    },
    {
      "question": "How long does a typical BigCommerce build take?",
      "answer": "Timeline depends on scope, but a standard storefront build runs in weeks while headless or B2B-heavy builds take longer given the added integration work. We scope an exact timeline during discovery before any contract is signed."
    },
    {
      "question": "How do we get started?",
      "answer": "Start with a quick cost estimate or book a discovery call. We'll scope your requirements, give you a timeline and range, and move into the Discover phase once you're ready to sign."
    }
  ],
  "platform:magento": [
    {
      "question": "Is Magento the right platform for us, or is it overkill?",
      "answer": "If your catalog, pricing rules, or channel mix are already complex — or you know they will be within 12–18 months — Magento's flexibility pays for itself. For a simple single-market catalog, a lighter platform is usually the better first move."
    },
    {
      "question": "What's the difference between Magento Open Source and Adobe Commerce, and which do we need?",
      "answer": "Open Source is free, self-hosted, and covers most startup needs with the right development work. Adobe Commerce adds licensed features like B2B tooling, advanced segmentation, and managed cloud infrastructure, at a recurring cost. We'll recommend based on your catalog size, team, and budget — not by default."
    },
    {
      "question": "How deep can we customize the storefront and checkout?",
      "answer": "Very. Magento's module architecture lets us rebuild checkout flows, pricing logic, and layout without fighting the platform's defaults. If a competitor's template can't do it, there's a good chance Magento can."
    },
    {
      "question": "Can Magento integrate with our existing ERP or CRM stack?",
      "answer": "Yes — Magento's API layer is built for this kind of integration work. We've connected it to inventory, fulfillment, and CRM systems so order, customer, and stock data stay in sync without manual exports."
    },
    {
      "question": "Does Magento support B2B and wholesale ordering out of the box?",
      "answer": "Adobe Commerce ships native B2B features — company accounts, negotiated quotes, tiered and customer-group pricing. On Open Source we build equivalent functionality with extensions and custom modules, matched to how your sales team actually quotes deals."
    },
    {
      "question": "Can we run B2C and B2B from the same Magento instance?",
      "answer": "Yes, and it's one of Magento's stronger use cases. Customer groups, price lists, and storefront views let you serve retail shoppers and wholesale buyers from one backend without duplicating catalogs."
    },
    {
      "question": "Can we run multiple stores or brands from a single Magento setup?",
      "answer": "Magento's multi-store architecture is purpose-built for this — shared catalog and backend, independent storefronts, themes, and domains per brand or region. One admin, many faces."
    },
    {
      "question": "How does Magento handle multi-currency and multi-language as we expand into the UK or Australia?",
      "answer": "Currency, language, and tax rules can be scoped per store view, so a UK or AU storefront can run its own pricing, checkout copy, and compliance rules while sharing the same product data as your US site."
    },
    {
      "question": "We're migrating from Shopify or WooCommerce — how disruptive is that?",
      "answer": "We plan migrations around your live store, not against it — product, customer, and order history move in staged passes with validation at each step, and we run the new store in parallel before cutover so there's no forced downtime window."
    },
    {
      "question": "What happens to our SEO rankings during a Magento migration?",
      "answer": "URL structures, redirects, and metadata are mapped before launch, not patched after. We treat rankings as a launch-blocking checklist item, with monitoring in the weeks after go-live to catch anything that slips."
    },
    {
      "question": "How does Magento perform under high traffic or a large catalog?",
      "answer": "Magento scales well when it's tuned properly — caching layers, indexing strategy, and CDN configuration matter more than raw hosting size. We build performance budgets into the initial architecture instead of retrofitting them after a traffic spike exposes a bottleneck."
    },
    {
      "question": "Who handles security patches and PCI compliance after launch?",
      "answer": "Magento requires more active maintenance than a fully-hosted platform — security patches, extension updates, and PCI-DSS scope are ongoing responsibilities, not one-time setup tasks. We offer maintenance retainers that cover this so it doesn't fall on your internal team."
    },
    {
      "question": "Can we go headless with Magento, using React or a PWA frontend?",
      "answer": "Yes — Magento's GraphQL API supports decoupled frontends, whether that's a custom React build or a PWA storefront. It's a heavier investment than a themed storefront, so we scope it against a real need for frontend flexibility, not by default."
    },
    {
      "question": "Why choose Motion 8 over another Magento agency?",
      "answer": "We build for teams that need enterprise-grade commerce infrastructure on a lean timeline and budget, without the overhead of a legacy agency's process. Same team from discovery through post-launch scaling."
    },
    {
      "question": "What do you need from us to get a Magento project started?",
      "answer": "A sense of your catalog complexity, current platform (if any), and target markets is enough to start. We turn that into a scoped estimate and a locked plan before any development begins."
    }
  ]
};

export const getFaqs = (key: string): Faq[] => FAQ_SETS[key] ?? [];
