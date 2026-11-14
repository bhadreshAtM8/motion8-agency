import type { ServiceDetailMap } from "./types";

export const AI_AUTOMATION_DETAILS: ServiceDetailMap = {
  "ai-automation/ai-agents-chatbots": {
    h1: "AI Agent & Chatbot Development Company",
    tagline: "Assistants that know your business and know when to stop.",
    intro: [
      "Motion 8 Agency is an AI agent and chatbot development company that builds support, sales and internal-operations assistants grounded in your own documentation, tickets and product data. A chatbot answers questions; an agent can also act — look up an order, update a CRM record, open a ticket — through tools you explicitly grant it. Most of what we ship is an agent with a chat interface on top, scoped to one workflow with real volume rather than a general-purpose FAQ bot.",
      "The model is rarely the hard part. What decides whether an agent helps or embarrasses you is retrieval quality, the boundaries on what it is allowed to write, and the escalation path for the moment it is out of its depth. We tune a confidence threshold with you, below which the agent hands over to a person with the full conversation, the sources it retrieved and its own uncertainty attached, so nobody has to ask the customer to repeat themselves.",
      "Before anything goes live we build an evaluation set from your real conversation history, agree an accuracy target and model the inference cost per resolved conversation. Launch starts narrow — the high-volume, low-risk question types — and widens only when the evaluation numbers and live transcripts justify it. We are model-agnostic, choosing between Anthropic, OpenAI and self-hosted open-weight models on your data, latency and budget rather than on leaderboards.",
    ],
    deliverables: [
      {
        title: "Ticket and conversation audit",
        body: "Historical tickets and chat logs clustered by intent and volume, so the first release targets questions that are frequent, well documented and low-risk — and the ones that should stay with humans are named in writing.",
      },
      {
        title: "Grounded knowledge layer",
        body: "Help-centre content, internal documentation and live product or order data indexed with hybrid search and reranking. Answers cite the passage they came from, and gaps in the source material are reported back rather than papered over by the model.",
      },
      {
        title: "Scoped tool access",
        body: "Connections to your helpdesk, CRM, order system or internal APIs with read and write access separated. Refunds, cancellations and record changes sit behind explicit confirmation steps and scoped permissions.",
      },
      {
        title: "Human handover design",
        body: "Escalation rules, confidence thresholds and the handover payload — conversation, retrieved sources and the reason the agent stopped — routed into the queue your team already works from.",
      },
      {
        title: "Evaluation suite and monitoring",
        body: "A regression set that runs on every prompt, model or retrieval change, plus post-launch review of flagged conversations, escalation rate and cost per resolved conversation.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Pull ticket history, map intents by volume and risk, and confirm which systems the agent needs to read from and write to. The output is one scoped use case and a list of what stays human.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Agree data access, permission boundaries and the accuracy target. Build the evaluation set from real conversations and model inference cost per conversation before the build starts.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–6",
        body: "Ship the first use case to a limited slice of traffic with escalation live from day one. Scope widens only once evaluation and transcript review support it; the next use case waits until this one is measured.",
      },
      {
        phase: "Track",
        duration: "Monthly from launch",
        body: "Accuracy against the evaluation set, escalation quality, cost per resolved conversation and hours returned to the team — reported monthly, including the conversations that went wrong.",
      },
    ],
    goodFit: [
      "Support or ops teams where a recurring set of questions about orders, accounts or policies fills a large share of the queue",
      "Companies whose answers exist somewhere — a helpdesk, a wiki, a spreadsheet — even if they need consolidating first",
      "Teams that tried an off-the-shelf bot, removed it after confident wrong answers, and want the escalation path done properly",
      "Products that need an agent to act inside your systems, not just answer, with permissions you control",
    ],
    notFit: [
      "Teams wanting a fully autonomous agent with no human escalation on consequential decisions",
      "Very low-volume queues where evaluation and upkeep would outweigh the hours an agent could return",
      "Anyone after a generic chat widget with no access to real data behind it",
    ],
    stack: [
      "Anthropic Claude",
      "OpenAI GPT models",
      "Open-weight models (Llama, Mistral)",
      "LangGraph",
      "LlamaIndex",
      "pgvector",
      "Python",
      "Zendesk and HubSpot APIs",
    ],
    engagement:
      "A focused single-use-case agent typically ships in 3–6 weeks; multi-tool agents integrating several systems usually run 6–10 weeks. You get a fixed project quote after the discovery call, with model API usage scaling with volume, and post-launch tuning is available on a monthly retainer.",
    relatedCases: ["support-automation-with-escalation"],
    relatedPosts: ["ai-customer-support-agent-build-vs-buy", "rag-vs-fine-tuning"],
  },

  "ai-automation/workflow-automation": {
    h1: "Business Workflow Automation Services",
    tagline: "Hours back, every week, quietly.",
    intro: [
      "Our business workflow automation services take repetitive operational work — lead routing, invoice handling, data entry between systems, onboarding checklists, report compilation — and make it run on its own, with error handling and monitoring built in from the start. The best first candidates are usually the processes that quietly consume days each month and survive only because nobody has had a free week to fix them.",
      "Discovery ranks candidate processes on hours returned against build cost, using a baseline of how long the manual version takes and how often it goes wrong. It regularly concludes that some ideas on the list are not worth automating, and we say so. Where rules alone fail — invoices in five layouts, free-text emails, scanned forms — a language model handles extraction or classification as one step inside an otherwise deterministic workflow, with schema validation on its output and a human review queue for low-confidence cases.",
      "We build in n8n, Make or Zapier when orchestration is straightforward and move to custom Python services when volume, reliability or data sensitivity justify it: the cheapest tool that survives the load, not the most impressive one. Every workflow fails loudly and safely — retries with backoff, a dead-letter queue, alerting to a named owner and a documented manual fallback — and one workflow goes live and gets measured before the second one starts.",
    ],
    deliverables: [
      {
        title: "Process audit and ROI ranking",
        body: "Each candidate process mapped step by step with current hours, error rate and frequency recorded, then ranked on hours returned against build and running cost.",
      },
      {
        title: "Workflows in your existing tools",
        body: "Automations across your CRM, helpdesk, finance tools, spreadsheets and internal systems, built in n8n, Make, Zapier or custom code depending on volume and sensitivity — no platform migration required.",
      },
      {
        title: "Document and unstructured-data steps",
        body: "Model-based extraction and classification for inputs rules cannot handle, with validation on every output and a confidence threshold that routes uncertain cases to a person.",
      },
      {
        title: "Failure handling and alerting",
        body: "Retries, idempotent writes where the target systems allow it, dead-letter queues, alerts to a named owner and a written manual fallback for each workflow.",
      },
      {
        title: "Plain-language runbook",
        body: "What each workflow does, which systems it touches and how to pause it, documented so your team can own it later without reverse-engineering the logic.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Walk through the processes costing the most time, baseline hours and error rates, and agree which single workflow goes first.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Confirm system access and API limits, decide where a model step is genuinely needed, define validation rules and the failure path, and estimate cost per run including any inference.",
      },
      {
        phase: "Publish",
        duration: "Weeks 1–4",
        body: "A single well-defined workflow can be live in about a week; multi-system automations take two to four weeks including testing against real data. The next workflow starts once this one is measured.",
      },
      {
        phase: "Track",
        duration: "Monthly",
        body: "Hours returned, error rate, failure alerts and cost per run reported monthly, with a review of any process changes that mean a workflow needs updating.",
      },
    ],
    goodFit: [
      "Operations, finance, sales or support teams with a high-frequency process that follows a consistent pattern",
      "Companies whose tools do not talk to each other, so someone copies data between them by hand",
      "Teams whose last no-code automation broke silently and who want one built with proper error handling",
      "Founders who want the payback period as a number before committing to a build",
    ],
    notFit: [
      "Processes still changing week to week — automate once the process has settled, not before",
      "One-off or quarterly tasks where the build cost will never be repaid in hours",
      "Problems that are really missing software, which custom development will serve better than stitched-together tools",
    ],
    stack: [
      "n8n",
      "Make",
      "Zapier",
      "Python",
      "OpenAI and Anthropic APIs",
      "Postgres",
      "AWS Lambda",
      "Slack alerting",
    ],
    engagement:
      "A single, well-defined workflow can be live in as little as a week; multi-system automations usually take two to four weeks including testing against real data. Every build is quoted before work starts, and ongoing monitoring is available after launch.",
    relatedCases: ["support-automation-with-escalation"],
    relatedPosts: ["marketing-automation-stack-by-stage"],
  },

  "ai-automation/ai-integration": {
    h1: "AI Integration Services for Existing Products",
    tagline: "AI features your users would actually miss.",
    intro: [
      "Our AI integration services add language-model and machine-learning features — search, summarisation, drafting, classification, recommendations, in-product assistants — to the product you already ship, inside your existing codebase and without a replatform. Adding AI is the easy decision; the useful one is choosing the single feature whose latency, running cost and failure modes are worth carrying.",
      "We start from a real user problem and work backwards: what the feature must do, how good it has to be before anyone would use it, and what happens when it is wrong. Candidate models — frontier models from OpenAI, Anthropic or Google for hard reasoning, smaller or open-weight models for high-volume narrow tasks — are benchmarked on your actual data for accuracy, latency and cost per request, and that projection is in front of you before anyone commits to a build.",
      "Features ship behind feature flags to a small slice of users first, with an evaluation harness running on every prompt or model change so quality is measured rather than judged by feel. Every feature degrades gracefully: confidence thresholds, human review on consequential actions, easy correction paths and a fallback to the deterministic behaviour that existed before. Features that break badly when the model misses do not ship.",
    ],
    deliverables: [
      {
        title: "Feature scoping",
        body: "A shortlist of candidate features judged against user problems, data availability and the cost of a wrong output, narrowed to the one worth building first with a written success metric.",
      },
      {
        title: "Model benchmark and cost model",
        body: "Candidate models tested on your data for accuracy, latency and cost per use, with caching, routing of cheap tasks to cheap models and hard rate limits designed in to keep the bill predictable.",
      },
      {
        title: "Evaluation harness",
        body: "A versioned test set scored on every change to prompts, retrieval or model version, so regressions surface in CI rather than in support tickets.",
      },
      {
        title: "Production integration",
        body: "The feature built to your code standards as a service or API call, with versioned prompts, observability on latency and errors, and documentation your team can maintain.",
      },
      {
        title: "Degradation and fallback paths",
        body: "Defined behaviour for timeouts, provider outages, low-confidence outputs and user corrections, so the product keeps working when the model does not.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Review the product, the data it holds and the user problems on the roadmap; agree the single feature to build first and how success will be measured.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Benchmark candidate models, model cost per use, decide exactly what data the model may see, and build the evaluation set before writing feature code.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–6",
        body: "Build and release behind a flag to a small cohort, widening as adoption, quality and cost hold up. The second feature waits until the first is measured.",
      },
      {
        phase: "Track",
        duration: "Monthly",
        body: "Adoption, task completion, output quality, latency and cost per use reported monthly, alongside any model upgrades worth testing against the evaluation set.",
      },
    ],
    goodFit: [
      "Product teams with a live product, real users and a specific problem a model could take on",
      "Engineering teams who want a working AI feature in their codebase without hiring an ML team first",
      "Companies that need a cost-per-use projection before committing to a feature that scales with usage",
      "Teams with data-residency constraints that may call for self-hosted or region-locked models",
    ],
    notFit: [
      "Roadmaps where the goal is to say the product has AI rather than to solve a user problem",
      "Products without enough usage yet to tell whether a feature is helping",
      "Features where a wrong output is costly and there is no room for review, correction or fallback",
    ],
    stack: [
      "OpenAI API",
      "Anthropic API",
      "Google Gemini API",
      "Open-weight models (Llama, Mistral)",
      "TypeScript and Node.js",
      "Python",
      "pgvector",
      "LaunchDarkly or in-house feature flags",
    ],
    engagement:
      "A single, well-scoped feature typically ships in 3–6 weeks from audit to staged rollout. You get a fixed-scope quote before any build work starts, plus a separate estimate of ongoing model API costs.",
    relatedCases: ["support-automation-with-escalation"],
    relatedPosts: ["rag-vs-fine-tuning"],
  },

  "ai-automation/llm-fine-tuning-rag": {
    h1: "RAG & LLM Fine-Tuning Services",
    tagline: "Answers grounded in your knowledge, with receipts.",
    intro: [
      "Our RAG and LLM fine-tuning services ground a language model in your own knowledge — documentation, policies, contracts, product data, support history — so answers come from your sources and cite the passage they used. The two techniques solve different problems: retrieval supplies facts the model was never trained on, while fine-tuning changes how it behaves. Roughly four in five projects we scope need retrieval and not tuning, even when the brief says otherwise.",
      "The quality of a RAG system is decided long before the model is called. Chunking that respects document structure, embeddings suited to your vocabulary, hybrid keyword and vector search, reranking, and metadata filters for permissions and freshness matter more than which model sits at the end. A sync job re-embeds changed content on a schedule or webhook, so retrieval stays current without a redeploy, and low retrieval confidence triggers a fallback instead of a guess.",
      "Fine-tuning earns its cost when you need a consistent output format at scale, domain vocabulary the base model gets wrong, or lower latency and cost than a long retrieval prompt allows. Several hundred high-quality examples usually beat tens of thousands of noisy ones, and building that dataset properly is part of the work. Before launch we score retrieval relevance, answer correctness and hallucination rate on a held-out set of real questions. Data stays where your compliance requires: your cloud on enterprise API tiers with training disabled, or open-weight models inside your own VPC.",
    ],
    deliverables: [
      {
        title: "Source audit and document pipeline",
        body: "An inventory of sources, owners, access rules and update frequency, then ingestion with structure-aware chunking, embedding and a sync job for changed content.",
      },
      {
        title: "Retrieval layer",
        body: "Hybrid search with reranking and metadata filtering in pgvector, Pinecone or a managed alternative inside your own cloud account, with document permissions enforced at query time.",
      },
      {
        title: "Citation-backed answering",
        body: "Responses linked to the source passage they came from, a fallback when retrieval confidence is low, and output filtering before anything reaches the user.",
      },
      {
        title: "Fine-tuning, where warranted",
        body: "Dataset design and curation, training on hosted or open-weight models, and a head-to-head comparison against the untuned baseline so the tuning has to prove its cost.",
      },
      {
        title: "Evaluation set and regression testing",
        body: "Held-out real questions scored for retrieval relevance, answer correctness and hallucination rate, rerun on every change to chunking, prompts or models.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Map the sources, who owns them and how often they change; collect the questions users actually ask; decide whether retrieval alone answers the problem.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Agree data location and access controls, build the evaluation set, set accuracy and fallback thresholds, and estimate cost per query.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–5",
        body: "Ship the retrieval pipeline for one use case and measure it before adding another. Fine-tuning, messier sources or stricter evaluation extend the build to 6–10 weeks.",
      },
      {
        phase: "Track",
        duration: "Monthly",
        body: "Retrieval relevance, answer quality, hallucination rate and cost per query reported monthly, with flagged sessions reviewed and stale or unindexed content traced back to source.",
      },
    ],
    goodFit: [
      "Teams whose answers depend on specific, current internal knowledge rather than general knowledge",
      "Support, sales engineering or operations functions spending hours searching documents for the same answers",
      "Companies with compliance requirements that dictate where data and embeddings may live",
      "Products needing a consistent output format or domain behaviour that prompting alone has not delivered",
    ],
    notFit: [
      "Teams set on fine-tuning to teach a model facts that change — retrieval handles that better and cheaper",
      "Knowledge bases so thin or contradictory that the first job is writing the documentation, not indexing it",
      "Use cases where nobody can say what a correct answer looks like, so there is nothing to evaluate against",
    ],
    stack: [
      "LlamaIndex",
      "LangGraph",
      "pgvector",
      "Pinecone",
      "OpenAI and Anthropic APIs",
      "Open-weight models (Llama, Mistral)",
      "Hugging Face Transformers",
      "Python",
    ],
    engagement:
      "A focused RAG pipeline over a well-defined data source usually ships in 3–5 weeks; fine-tuning, messier sources or tighter evaluation requirements extend that to 6–10 weeks. Scoped and quoted after discovery, once we have seen your data.",
    relatedCases: ["support-automation-with-escalation"],
    relatedPosts: ["rag-vs-fine-tuning"],
  },

  "ai-automation/predictive-analytics-ml": {
    h1: "Predictive Analytics & Custom ML Model Development",
    tagline: "Forecasts that admit what they do not know.",
    intro: [
      "Predictive analytics and custom machine learning models turn your historical data into scores and forecasts you can act on in advance: which accounts are likely to churn, how much demand to expect next week, which leads deserve a sales call, what a customer is likely to be worth. A single confident number is rarely what a decision needs, so every model we ship reports its uncertainty alongside the prediction and comes with a plan for when it drifts.",
      "The first question is whether your data supports the model at all. A short feasibility phase looks at event volume, how many outcomes you have actually observed, label quality and how much the world has changed since the data was collected. Sometimes the honest answer is no, and the right advice is to fix instrumentation and revisit in two quarters. When the answer is yes, we report the achievable baseline on holdout data and let you decide whether it clears the bar for the decision the model is meant to inform.",
      "The model family follows the target — classification for churn, fraud and lead scoring, regression for demand and lifetime value, clustering for segmentation — and we usually start with gradient-boosted trees before anything heavier. Validation uses a time-based holdout the model never saw, plus explainability checks so you can see which signals drive a prediction. Deployment is a real-time API, a nightly batch job or a feed into your warehouse, with drift monitoring and a retraining schedule attached from day one.",
    ],
    deliverables: [
      {
        title: "Data feasibility assessment",
        body: "Your data reviewed against the target you want to predict, with leakage checks, a baseline model and a written go or no-go before any modelling promise is made.",
      },
      {
        title: "Target and metric definition",
        body: "The prediction target, the decision it informs and the metric it is judged on — precision and recall, calibration, mean absolute error — agreed before training starts.",
      },
      {
        title: "Model build and validation",
        body: "Feature pipelines from your warehouse or event data, models validated on time-based holdouts, calibrated probabilities and per-prediction explanations.",
      },
      {
        title: "Deployment as a monitored service",
        body: "Versioned models served as an API, batch scoring job or warehouse table, logging inputs, predictions and eventual outcomes so live performance can be measured.",
      },
      {
        title: "Drift detection and retraining",
        body: "Alerts when input distributions or live accuracy move past agreed thresholds, and a scheduled retraining pipeline that compares each candidate against the model in production.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Weeks 1–2",
        body: "Feasibility on your data: event volume, outcome counts, label quality and a baseline. It ends with an honest recommendation, including when the answer is not yet.",
      },
      {
        phase: "Structure",
        duration: "Weeks 2–3",
        body: "Define the target, the success metric and the decision it feeds; agree which fields the model may access and which identifiers are hashed or excluded.",
      },
      {
        phase: "Publish",
        duration: "Weeks 4–7",
        body: "Train, validate on holdout data and deploy one single-target model where it is actually used. Recommendation and multi-signal systems typically run 8–12 weeks.",
      },
      {
        phase: "Track",
        duration: "Monthly",
        body: "Live accuracy against outcomes, calibration, drift, serving cost and the business metric the model supports, reported monthly, with retraining when thresholds are crossed.",
      },
    ],
    goodFit: [
      "Companies with months to years of history on the outcome they want to predict, in a warehouse or database we can query",
      "Teams with a specific decision — retention outreach, inventory, sales prioritisation, fraud review — waiting on a better signal",
      "Growth and finance leads who want error bars alongside a forecast",
      "Revenue teams whose lead scoring was invented in a meeting and needs replacing with something validated",
    ],
    notFit: [
      "Early products without enough observed outcomes yet — the model would learn noise",
      "Problems a generic off-the-shelf tool already solves well, which we will tell you to buy instead",
      "Teams expecting a guaranteed accuracy figure before anyone has looked at the data",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "dbt",
      "BigQuery or Snowflake",
      "AWS SageMaker",
      "MLflow",
    ],
    engagement:
      "A focused single-target model typically takes 4–7 weeks from scoping through validated deployment; recommendation and multi-signal systems usually run 8–12 weeks. A fixed project quote follows the data review, with hosting and retraining available on retainer.",
    relatedCases: ["b2b-saas-demand-engine"],
    relatedPosts: ["marketing-automation-stack-by-stage"],
  },

  "ai-automation/computer-vision-generative-ai": {
    h1: "Computer Vision & Generative AI Development",
    tagline: "Vision and generation at production volume.",
    intro: [
      "Computer vision and generative AI development covers two kinds of pipeline: models that look at images, video or documents and decide something — detection, classification, segmentation, OCR — and models that produce images or video at volume. The gap between a convincing demo and a working system is the input: real pipelines see blurred phone photos, poor lighting, unusual angles and overnight batches in the tens of thousands.",
      "We start with off-the-shelf APIs and pre-trained foundation models whenever they clear your accuracy bar, because that is faster and cheaper. Fine-tuning comes in when generic models plateau on your imagery, which is common for niche products, industrial settings and brand-specific generation; a few hundred well-labelled examples often beats training from scratch, and we can run the labelling process if you do not have one. Evaluation uses a held-out set weighted toward the failure modes that matter to you — rare defect types, edge cases, bad captures — rather than the average image.",
      "Production work is mostly inference engineering: batching, quantisation, choosing between cloud GPUs and on-device or edge deployment, and measuring the accuracy you trade for speed instead of assuming it. Where errors are expensive, a human review queue sits behind a confidence threshold. For generative work, model licensing and training-data provenance affect what you can commercially use, so we build on models whose terms permit your use case, add automated brand and quality checks, and put a human approval gate on anything customer-facing.",
    ],
    deliverables: [
      {
        title: "Task and data assessment",
        body: "The visual decision defined precisely, representative samples gathered from your real environment, and existing APIs tested against them before anything custom is built.",
      },
      {
        title: "Vision pipelines",
        body: "Detection, classification, segmentation and OCR connected to your image storage, product database or operational systems via API, batch job or edge deployment.",
      },
      {
        title: "Generative image and video workflows",
        body: "Generation at volume with prompt and reference controls, automated quality and brand-compliance checks, and a human approval gate for customer-facing output.",
      },
      {
        title: "Labelling and fine-tuning",
        body: "Labelling guidelines, managed annotation and fine-tuning on your imagery where generic models plateau, compared against the baseline so the custom work has to earn its place.",
      },
      {
        title: "Inference optimisation and review queues",
        body: "Batching, quantisation and edge deployment where latency or privacy require it, plus confidence-based routing to human review where mistakes are costly.",
      },
    ],
    timeline: [
      {
        phase: "Audit",
        duration: "Week 1",
        body: "Define the visual task, collect representative samples including the bad ones, and test off-the-shelf models against them to set a baseline.",
      },
      {
        phase: "Structure",
        duration: "Weeks 1–2",
        body: "Agree the accuracy target, evaluation set, review thresholds, image handling and licensing position, and model cost per image or per generation.",
      },
      {
        phase: "Publish",
        duration: "Weeks 3–6",
        body: "Ship one pipeline on existing models into production and measure it before the next. Projects needing data collection, annotation and custom fine-tuning usually run 8–14 weeks.",
      },
      {
        phase: "Track",
        duration: "Monthly",
        body: "Accuracy on the held-out set and live samples, review-queue volume, throughput and cost per image reported monthly, with retraining as the image distribution shifts.",
      },
    ],
    goodFit: [
      "Teams with a repeatable visual decision — matching products to a catalogue, flagging defects, extracting fields from documents",
      "Ecommerce and content teams needing on-brand imagery at volumes manual production cannot reach",
      "Products where images should stay on-device or inside your network for latency or privacy reasons",
      "Teams with a vision model already in production that is underperforming and needs an audit",
    ],
    notFit: [
      "Visual tasks without labelled examples or an agreed pass/fail standard to test the model against",
      "High-stakes visual decisions where you want no human review at all",
      "Generative use cases that depend on rights the available models’ licences cannot grant",
    ],
    stack: [
      "PyTorch",
      "OpenCV",
      "Ultralytics YOLO",
      "Hugging Face Transformers",
      "Stable Diffusion and FLUX",
      "ONNX Runtime",
      "AWS SageMaker",
      "Python",
    ],
    engagement:
      "A scoped feature built on off-the-shelf models typically ships in 3–6 weeks; projects needing data collection, annotation and custom fine-tuning usually run 8–14 weeks. A fixed project quote follows discovery, with inference or generation costs scaling with usage.",
    relatedCases: [],
    relatedPosts: [],
  },
};
