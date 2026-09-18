"use client";

import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import { DIFFERENTIATORS } from "@/content/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function Differentiators() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-list]").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 26,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="gutter bg-stone py-16 text-light-body md:py-[88px]">
      <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
        <SplitReveal as="h2" className="text-[clamp(24px,3.4vw,32px)] leading-[1.25] tracking-[-0.02em]">
          One accountable team. Not five disconnected vendors.
        </SplitReveal>
        <div>
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={item.num}
              data-list
              className={`js-anim grid grid-cols-[48px_1fr] items-center gap-5 border-t border-edge-stone py-6 md:grid-cols-[64px_1fr] md:py-7 ${
                i === DIFFERENTIATORS.length - 1 ? "border-b" : ""
              }`}
            >
              <span
                className={`text-[14px] font-extrabold ${
                  item.tone === "blue" ? "text-blue" : "text-terracotta"
                }`}
              >
                {item.num}
              </span>
              <span className="text-[18px] font-extrabold md:text-[21px]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
