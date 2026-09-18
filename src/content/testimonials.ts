/**
 * Testimonials. Real, permissioned client feedback.
 *
 * Attribution is role + industry rather than personal names. To name someone,
 * add `name` and `company` to that entry, with their written sign-off on the
 * exact wording, and the card renders them automatically.
 */

export type Testimonial = {
  quote: string;
  role: string;
  industry: string;
  /** Renders as the large bento card. */
  feature: boolean;
  name?: string;
  company?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We already had a working product and didn't want to bolt on an AI feature just because it was fashionable. Motion 8 identified two parts of the product where AI could genuinely save users time and integrated it into those workflows.",
    role: "CTO",
    industry: "B2B SaaS / Technology",
    feature: true,
  },
  {
    quote:
      "We had leads sitting in different lists with no real follow-up journey. Motion 8 mapped the customer lifecycle and built the email sequences around actual sales stages instead of sending the same newsletter to everyone.",
    role: "VP of Revenue Operations",
    industry: "Financial Services / Fintech",
    feature: false,
  },
  {
    quote:
      "We didn't want a chatbot that simply linked customers to our FAQ. Motion 8 connected the AI agent to our actual knowledge base and support workflow so it could handle useful questions before escalating to a person.",
    role: "COO",
    industry: "AI / Customer Experience Technology",
    feature: false,
  },
  {
    quote:
      "We had outgrown our original Shopify setup and needed more control over multiple storefronts and operational workflows. Motion 8 helped us move to Shopify Plus without making the transition feel like a complete rebuild.",
    role: "VP of Ecommerce",
    industry: "Fashion / Ecommerce",
    feature: false,
  },
  {
    quote:
      "Our original smart-contract requirements were full of edge cases that hadn't been thought through. Motion 8 challenged the specification, helped us tighten the logic, and built the contracts around the actual transaction flows.",
    role: "Co-Founder & CTO",
    industry: "Blockchain / Web3",
    feature: false,
  },
  {
    quote:
      "We were spending on Google and Meta but couldn't explain which campaigns were actually producing pipeline. Motion 8 rebuilt the account structure, fixed our targeting, and gave us a reporting setup our sales team could finally trust.",
    role: "VP of Growth",
    industry: "Healthcare Technology",
    feature: false,
  },
  {
    quote:
      "Our sales and operations teams were copying information between the CRM, email, spreadsheets, and internal tools every day. Motion 8 mapped the handoffs and automated the repetitive pieces without changing the way the team works.",
    role: "Director of Operations",
    industry: "Business Services / SaaS",
    feature: false,
  },
  {
    quote:
      "We knew our product was strong, but our public story was too technical. Motion 8 helped us turn the founder story, product milestones, and customer results into messaging that journalists and partners could actually understand.",
    role: "Co-Founder & CEO",
    industry: "Venture Capital / Investment",
    feature: false,
  },
  {
    quote:
      "Our social media had become a collection of disconnected posts from different people on the team. Motion 8 gave us a proper content system, consistent creative direction, and a voice that actually sounds like our company.",
    role: "Brand Director",
    industry: "Consumer Lifestyle / Retail",
    feature: false,
  },
];
