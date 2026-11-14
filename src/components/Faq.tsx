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
 * Answers stay in the DOM at all times, so crawlers and assistants read every
 * answer even while collapsed. Collapse is pure CSS (grid-template-rows
 * 0fr → 1fr), so the server-rendered state is already the resting state and
 * nothing snaps shut on hydration. Several answers can be open at once.
 */
export function FaqSection({
  id,
  heading = "Frequently asked questions",
  faqs,
  tone = "dark",
  panelHeading = "Still deciding?",
  panelBody = "Tell us where growth is stuck. We come back within 24 hours with what we would fix first — a plan, not a pitch deck.",
}: {
  id?: string;
  heading?: string;
  faqs: Faq[];
  tone?: "dark" | "stone";
  panelHeading?: string;
  panelBody?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const [openSet, setOpenSet] = useState<ReadonlySet<number>>(() => new Set());
  const stone = tone === "stone";

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

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
        scrollTrigger: { trigger: el.querySelector("[data-panel]"), start: "top 88%" },
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
    setOpenSet((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section
      ref={root}
      id={id}
      className={`gutter py-16 md:py-24 ${id ? "scroll-mt-36 " : ""}${
        stone ? "bg-stone text-light-body" : "bg-ground"
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-8">
        <SplitReveal
          as="h2"
          className={`max-w-[760px] text-[clamp(26px,4vw,38px)] leading-[1.2] tracking-[-0.025em] lg:col-start-1 ${
            stone ? "" : "text-white"
          }`}
        >
          {heading}
        </SplitReveal>

        {/* Dark contact panel: above the list on small screens, sticky rail on lg */}
        <aside data-panel className="js-anim order-last lg:order-none lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
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

        {/* FAQ list */}
        <div data-faq-list className="lg:col-start-1 lg:row-start-2">
          {faqs.map((faq, i) => {
            const open = openSet.has(i);
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
                      aria-hidden
                      className={`shrink-0 text-[22px] leading-none transition-transform duration-[400ms] ease-brand ${
                        open
                          ? `rotate-180 ${stone ? "text-terracotta" : "text-terracotta-light"}`
                          : stone
                            ? "text-light-muted"
                            : "text-dark-muted"
                      }`}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-body-${i}`}
                  data-faq-body
                  className={`grid transition-[grid-template-rows,visibility] duration-500 ease-brand ${
                    open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                  }`}
                  onTransitionEnd={(event) => {
                    if (event.propertyName === "grid-template-rows") ScrollTrigger.refresh();
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`m-0 max-w-[760px] pb-6 text-[15px] leading-[1.75] md:text-[16px] ${
                        stone ? "text-light-muted" : "text-dark-muted"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
