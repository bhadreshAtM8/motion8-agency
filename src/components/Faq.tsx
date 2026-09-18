"use client";

import { useRef, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { SITE } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export type Faq = { question: string; answer: string };

const RESPONSE_STATS = [
  { value: "24h", label: "Reply time" },
  { value: "1", label: "Strategist accountable" },
  { value: "7", label: "Countries served" },
];

/**
 * FAQ list beside a sticky dark contact panel.
 *
 * Answers stay in the DOM at all times — only height animates — so crawlers and
 * assistants read every answer even while collapsed. That is deliberate: these
 * pages carry 15 Q&A pairs each and the FAQPage schema is generated from the
 * same array.
 */
export function FaqSection({
  heading = "Frequently asked questions",
  faqs,
  tone = "dark",
  panelHeading = "Still deciding?",
  panelBody = "Tell us where growth is stuck. We come back within 24 hours with what we would fix first — a plan, not a pitch deck.",
}: {
  heading?: string;
  faqs: Faq[];
  tone?: "dark" | "stone";
  panelHeading?: string;
  panelBody?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const stone = tone === "stone";

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const bodies = Array.from(el.querySelectorAll<HTMLElement>("[data-faq-body]"));
      bodies.forEach((body, i) => {
        gsap.set(body, { height: i === openIndex ? "auto" : 0, opacity: i === openIndex ? 1 : 0 });
      });

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      gsap.from(el.querySelectorAll("[data-faq]"), {
        opacity: 0,
        y: 22,
        duration: 0.7,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: { trigger: el.querySelector("[data-faq-list]"), start: "top 85%" },
      });

      gsap.from(el.querySelector("[data-panel]"), {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });

      el.querySelectorAll<HTMLElement>("[data-stat]").forEach((node) => {
        const target = parseInt(node.dataset.stat ?? "", 10);
        if (!Number.isFinite(target)) return;
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 92%" },
          onUpdate: () => {
            node.textContent = `${Math.round(counter.value)}${node.dataset.suffix ?? ""}`;
          },
        });
      });
    },
    { scope: root },
  );

  const toggle = (index: number) => {
    const el = root.current;
    if (!el) return;
    const next = openIndex === index ? -1 : index;
    setOpenIndex(next);

    const reduced = prefersReducedMotion();
    el.querySelectorAll<HTMLElement>("[data-faq-body]").forEach((body, i) => {
      const willOpen = i === next;
      gsap.to(body, {
        height: willOpen ? "auto" : 0,
        opacity: willOpen ? 1 : 0,
        duration: reduced ? 0 : 0.5,
        ease: "power3.inOut",
        onComplete: () => ScrollTrigger.refresh(),
      });
    });
    el.querySelectorAll<HTMLElement>("[data-faq-icon]").forEach((icon, i) => {
      gsap.to(icon, {
        rotate: i === next ? 180 : 0,
        duration: reduced ? 0 : 0.4,
        ease: "power3.out",
      });
    });
  };

  return (
    <section
      ref={root}
      className={`gutter py-16 md:py-24 ${stone ? "bg-stone text-light-body" : "bg-ground"}`}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
        {/* FAQ list */}
        <div>
          <SplitReveal
            as="h2"
            className={`mb-8 max-w-[760px] text-[clamp(24px,3.4vw,32px)] leading-[1.2] tracking-[-0.02em] ${
              stone ? "" : "text-white"
            }`}
          >
            {heading}
          </SplitReveal>

          <div data-faq-list>
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={faq.question}
                  data-faq
                  className="js-anim border-b transition-colors"
                  style={{
                    borderBottomWidth: open ? 1.5 : 1,
                    borderBottomColor: open ? "#C34811" : stone ? "#c7bcb0" : "#4a3d31",
                  }}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={open}
                      aria-controls={`faq-body-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-[15.5px] font-extrabold leading-[1.45] md:text-[17px] ${
                          stone ? "text-light-body" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        data-faq-icon
                        aria-hidden
                        className={`shrink-0 text-[22px] leading-none ${
                          open
                            ? "text-terracotta-light"
                            : stone
                              ? "text-light-muted"
                              : "text-dark-muted"
                        }`}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-body-${i}`} data-faq-body className="overflow-hidden">
                    <p
                      className={`m-0 max-w-[760px] pb-6 text-[13.5px] leading-[1.8] ${
                        stone ? "text-light-muted" : "text-dark-muted"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky dark contact panel */}
        <aside data-panel className="js-anim lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-card border border-[rgba(240,233,223,.14)] bg-ground p-7 md:p-8">
            <Spotlight size="300px" stops="rgba(228,100,42,.2),transparent 70%" />

            <div className="relative">
              <div className="text-[11px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
                Ask us directly
              </div>
              <h3 className="mt-3 text-[22px] leading-[1.25] tracking-[-0.02em] text-white">
                {panelHeading}
              </h3>
              <p className="m-0 mt-3.5 text-[13.5px] leading-[1.8] text-dark-muted">{panelBody}</p>

              <div className="mt-7">
                <MagneticButton href="/contact" variant="primary" className="!w-full">
                  Start a Project
                </MagneticButton>
              </div>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 block py-2 text-center text-[12.5px] text-dark-muted transition-colors hover:text-terracotta-light"
              >
                {SITE.email}
              </a>

              <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-[rgba(240,233,223,.14)] pt-6">
                {RESPONSE_STATS.map((stat) => {
                  const numeric = parseInt(stat.value, 10);
                  const suffix = stat.value.replace(String(numeric), "");
                  return (
                    <div key={stat.label} className="text-center">
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="m-0">
                        <span
                          data-stat={Number.isFinite(numeric) ? numeric : undefined}
                          data-suffix={suffix}
                          className="block text-[24px] font-extrabold tracking-[-0.02em] text-terracotta-light"
                        >
                          {stat.value}
                        </span>
                        <span className="mt-1.5 block text-[11px] uppercase leading-[1.4] tracking-[.08em] text-dark-faint">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
