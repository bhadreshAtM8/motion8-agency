import type { Post } from "@/content/posts";

export const post: Post = {
  slug: "rag-vs-fine-tuning",
  title: "RAG vs fine-tuning: which one does your product actually need?",
  metaTitle: "RAG vs Fine-Tuning: Which Do You Need? | Motion 8 Agency",
  metaDescription:
    "RAG gives a model knowledge it lacks; fine-tuning changes how it behaves. How to choose on freshness, citations, latency and cost, and when to combine both.",
  excerpt:
    "Retrieval fills gaps in what a model knows; fine-tuning changes how it behaves. Most products need the first and assume they need the second.",
  published: "2026-11-14",
  readingMinutes: 7,
  category: "AI",
  intro: [
    "Choose RAG when the model is missing knowledge — your documents, policies or product data, especially facts that change. Choose fine-tuning when the model’s behaviour is the problem: it needs a fixed output format, a house tone or domain vocabulary it keeps getting wrong. Most products need retrieval first; fine-tuning is a later, narrower decision.",
    "The confusion is understandable. Both techniques get described as ways to make a general model “know your business”, and both can produce an impressive demo. They fail in very different ways in production, and picking the wrong one is an expensive way to find that out.",
    "At Motion 8 Agency, roughly four in five projects we scope turn out to need retrieval rather than tuning, including many where the brief asked for fine-tuning. Here is how to tell which group you are in.",
  ],
  sections: [
    {
      heading: "What does RAG actually do?",
      body: [
        "Retrieval-augmented generation looks up relevant passages from your own sources at query time and hands them to the model alongside the question. The model’s weights do not change; what changes is what it reads before it answers.",
        "That makes RAG the right tool for knowledge problems. Update a source document and, once the index syncs, the next answer reflects the change without retraining anything. Each answer can also link to the passage it drew on, so a support lead or compliance reviewer can check it.",
        "Most of a RAG system’s quality comes from the retrieval layer, not the model at the end of it. How documents are split, which embedding model is used, whether keyword and vector search are combined, whether results are reranked, and whether permissions and dates are filtered all shape what the model gets to read. When a RAG system disappoints, the usual cause is that it retrieved the wrong passages.",
      ],
    },
    {
      heading: "What does fine-tuning actually do?",
      body: [
        "Fine-tuning continues training a model on your examples so its default behaviour changes. It teaches the model how to respond — format, tone, task structure, vocabulary — rather than giving it a reliable store of facts.",
        "It is worth the cost in three situations: outputs must follow a strict format at high volume, the base model keeps misusing your domain’s vocabulary, or a long retrieval prompt is too slow or too expensive per call.",
        "The dataset is usually the hard part, more than its size. A modest set of carefully checked examples that covers the cases you care about tends to do more than a large, noisy one, and assembling that set properly is frequently most of the project.",
        "What fine-tuning does not do well is keep facts current. Facts absorbed into weights go stale the moment the source changes, cannot be cited, and can only be updated by training again.",
      ],
    },
    {
      heading: "How do you decide between RAG and fine-tuning?",
      body: [
        "Start with one question: is the gap in what the model knows, or in how it behaves? Knowledge gaps point to RAG; behaviour gaps point to fine-tuning. The other criteria usually confirm that first answer.",
        "Freshness. If the underlying information changes often — pricing, inventory, policies, product docs — retrieval keeps up and tuning does not. A tuned model only learns new facts when you train it again.",
        "Citations. If someone needs to verify an answer, you need RAG. A fine-tuned model can sound authoritative, but it cannot point to the passage it learned something from.",
        "Data volume and shape. RAG needs documents that actually contain the answers. Fine-tuning needs labelled input-output examples of the behaviour you want. Many teams have the first and not the second.",
        "Latency and cost per call. Retrieval adds context to every prompt, and long prompts cost time and money on every request. At high volume on a narrow task, a tuned model can beat a long retrieval prompt on both. This is the most legitimate reason to fine-tune, and the one most worth modelling with real numbers before deciding.",
        "Permissions. Retrieval can enforce document permissions at query time, so a user only gets answers drawn from what they are allowed to see. Weights cannot forget selectively.",
      ],
    },
    {
      heading: "Why do most projects need RAG rather than fine-tuning?",
      body: [
        "Because most briefs describe a knowledge problem. “The model does not know our product” is a retrieval problem, and retrieval handles it better and cheaper than training.",
        "A common pattern: a team wants to fine-tune so the model “learns” their documentation. But the documentation changes every sprint, answers need to be checkable, and different customers should see different content. Each of those requirements favours retrieval. Tuning on that corpus would produce a model that is confidently out of date within weeks.",
        "Many requests that start as “we need to fine-tune” end up solved by better retrieval — splitting documents along their structure, combining keyword and vector search, adding a reranker — or by fixing documentation that contradicts itself. If the knowledge base is thin, writing it is the first job; no model technique replaces missing content.",
      ],
    },
    {
      heading: "When should you combine RAG and fine-tuning?",
      body: [
        "Combine them when you have both a knowledge problem and a behaviour problem, which becomes common as a product matures. Retrieval supplies the facts; a tuned model presents them the way you need.",
        "Typical cases: an assistant that must answer from live documentation and also emit a strict structured output a downstream system parses; a drafting tool that cites internal sources and writes in a regulated house style; a high-volume classification step that uses retrieved context but needs to run cheaply.",
        "Sequence matters. Build the retrieval layer first, measure it, and only then decide whether tuning closes a remaining gap. Test the tuned model head to head against the untuned baseline, with the same retrieval and the same evaluation set, so it has to earn its place rather than being assumed.",
      ],
    },
    {
      heading: "What should you evaluate before choosing either?",
      body: [
        "Build the evaluation set before you build the system. Without a held-out set of real questions and agreed correct answers, there is no way to tell whether RAG, fine-tuning or a better prompt is what actually helped.",
        "Collect the questions users actually ask — from tickets, search logs, sales calls — not the ones the team imagines. Score separately whether the right passages were found, whether the answer was correct, and whether anything was invented, because each fails for different reasons and has a different fix.",
        "Run the set again after every change to document splitting, prompts or models. Regressions are common and quiet: a prompt tweak that fixes one case can break three nobody looked at.",
        "If no one can define what a correct answer looks like, pause. That use case is not ready for either technique, because there is nothing to measure against.",
      ],
    },
    {
      heading: "Who owns the embeddings, fine-tuned weights and data?",
      body: [
        "You should, and it is worth confirming in writing before work starts. Embeddings, fine-tuned weights and evaluation sets built for your product should belong to you, stay in your environment and be excluded from any shared training.",
        "The usual setup keeps the vector store in your own cloud account — pgvector, Pinecone or a managed alternative — with model calls on enterprise API tiers that exclude your data from provider training, or open-weight models such as Llama or Mistral hosted in your own VPC where data cannot leave.",
        "Ownership matters more for fine-tuning than people expect. Tuning an open-weight model gives you an artefact you fully own and can host wherever your compliance posture requires; tuning through a hosted provider keeps you inside that provider’s platform. Decide which you need before training, not after.",
      ],
    },
    {
      heading: "What does a sensible first project look like?",
      body: [
        "One use case, retrieval first, measured before anything else is added. Fine-tuning comes in only if the evaluation numbers show a behaviour gap retrieval cannot close.",
        "For Motion 8 Agency, a retrieval pipeline over one well-defined source is typically a 3–5 week build; adding fine-tuning, messy sources or strict evaluation needs typically takes it to 6–10 weeks. Week one is an audit: which sources exist, who owns them, how often they change, what users actually ask, and whether retrieval alone can answer it.",
        "Sometimes the honest outcome is that you need better documentation before you need a model. That is a useful result too, and much cheaper to learn in week one than in week eight.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is RAG better than fine-tuning?",
      answer:
        "Neither is better in general; they solve different problems. RAG supplies knowledge the model lacks, keeps it current and can cite sources. Fine-tuning changes how the model behaves — format, tone, vocabulary. For most products the gap is knowledge, so RAG comes first, and fine-tuning is added only when evaluation shows a behaviour problem retrieval cannot fix.",
    },
    {
      question: "Does fine-tuning stop an LLM from hallucinating?",
      answer:
        "Not reliably. Fine-tuning shapes how a model responds, but facts absorbed into its weights can still be recalled wrongly and cannot be traced to a source. Hallucination is better handled by retrieval with citations, a fallback when the retrieved evidence is weak, and an evaluation set that measures invented answers after every change.",
    },
    {
      question: "Can fine-tuning teach a model our product documentation?",
      answer:
        "Poorly. Documentation changes, and a tuned model only learns new facts when you train it again. It also cannot cite where an answer came from or hide content a particular user should not see. Index the documentation for retrieval instead, and reserve fine-tuning for format, tone or vocabulary problems that retrieval does not fix.",
    },
    {
      question: "Is better prompting enough before RAG or fine-tuning?",
      answer:
        "Sometimes, and it is the cheapest thing to try first. If the model already knows what it needs and only the instructions are unclear, a sharper prompt with a few worked examples may close the gap. Once it needs your private or frequently changing information, prompting alone runs out, and retrieval is the next step.",
    },
    {
      question: "How do you tell whether RAG or fine-tuning actually helped?",
      answer:
        "Measure both against the same held-out set of real user questions with agreed correct answers. Score retrieval, answer correctness and invented content separately, and compare each change with the previous baseline. Without that set, improvements are anecdotes from a demo, and you cannot tell whether a better prompt alone would have done the same.",
    },
  ],
  related: [
    { name: "LLM Fine-Tuning & RAG", href: "/ai-automation/llm-fine-tuning-rag" },
    { name: "AI Integration into Existing Products", href: "/ai-automation/ai-integration" },
    { name: "Custom AI Agents & Chatbots", href: "/ai-automation/ai-agents-chatbots" },
  ],
};
