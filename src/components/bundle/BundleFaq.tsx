"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is $399 really the total price?",
    answer:
      "Yes. $399 is the full price for everything listed above. Hosting is free for life — no renewal fees, no surprise invoices.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can migrate and upgrade your existing content, modernizing the layout onto our blazing-fast Next.js stack, setting up proper local SEO, AEO & GEO search indexation, and refreshing your logo and visual guidelines — without disrupting your current domain.",
  },
  {
    question: "What does AEO/GEO actually mean for my business?",
    answer:
      "Traditional SEO targets conventional Google search rankings. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) structure your website schema and content so that conversational AI assistants — like ChatGPT, Google Gemini, Perplexity, and Siri — cite and recommend your local business when users ask for services in your area.",
  },
  {
    question: "How long does it take?",
    answer:
      "Once you submit the 5-minute intake form, our engineering and design team typically completes the website build, logo suite, brand kit, and search configurations in 7–14 business days, after which we walk you through a live review before publishing.",
  },
  {
    question: "Is there a catch?",
    answer:
      "None. We leverage modern edge architecture (which eliminates recurring server infrastructure overhead for static sites) and our proprietary in-house design frameworks. We don't lock you into expensive retainers or proprietary website builders. Your code, assets, and domain belong 100% to you.",
  },
];

export function BundleFaq({ faqs }: { faqs?: FaqItem[] } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const items = faqs && faqs.length > 0 ? faqs : FAQS;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "liquid-glass-card border-[#F95721]/40 shadow-[0_15px_35px_-10px_rgba(249,87,33,0.3)]"
                : "liquid-glass-inner hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
            >
              <span className="text-base sm:text-lg font-bold text-white">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 border-[#F95721]/50 bg-[#F95721]/20 text-[#FF7A29]"
                    : "border-white/10 bg-white/[0.04] text-neutral-400"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-white/[0.08]">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
