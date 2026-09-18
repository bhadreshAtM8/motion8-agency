"use client";

import { useRef } from "react";
import { SplitReveal } from "@/components/motion/Reveal";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const PATH =
  "M30 100 C 220 10, 380 20, 520 70 S 800 130, 980 46 S 1200 20, 1300 84";

export type Step = { num: string; title: string; body: string };

/** SVG stroke drawn on scrub with a dot riding getPointAtLength (design.md §3). */
export function Process({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  steps: Step[];
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      el.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          y: 30,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 92%" },
        });
        const enter = () =>
          gsap.to(step, { y: -8, borderTopColor: "#E4642A", duration: 0.4, ease: "power3.out" });
        const leave = () =>
          gsap.to(step, { y: 0, borderTopColor: "#4a3d31", duration: 0.4, ease: "power3.out" });
        step.addEventListener("pointerenter", enter);
        step.addEventListener("pointerleave", leave);
      });

      const path = el.querySelector<SVGPathElement>("[data-draw]");
      const dot = el.querySelector<SVGCircleElement>("[data-dot]");
      if (!path) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      const state = { progress: 0 };
      gsap.to(state, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el.querySelector("[data-path-wrap]"),
          start: "top 80%",
          end: "bottom 70%",
          scrub: 0.5,
        },
        onUpdate: () => {
          gsap.set(path, { strokeDashoffset: length * (1 - state.progress) });
          if (dot) {
            const point = path.getPointAtLength(length * state.progress);
            gsap.set(dot, { attr: { cx: point.x, cy: point.y } });
          }
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="gutter bg-ground py-16 md:py-24">
      <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
        {eyebrow}
      </div>
      <SplitReveal
        as="h2"
        className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em] text-white"
      >
        {heading}
      </SplitReveal>

      <div data-path-wrap className="relative mt-10 md:mt-16">
        <svg
          viewBox="0 0 1320 130"
          className="pointer-events-none absolute -top-[18px] left-0 hidden h-[130px] w-full overflow-visible md:block"
          aria-hidden
          preserveAspectRatio="none"
        >
          <path d={PATH} fill="none" stroke="rgba(240,233,223,.12)" strokeWidth={2} strokeLinecap="round" />
          <path data-draw d={PATH} fill="none" stroke="#E4642A" strokeWidth={2} strokeLinecap="round" />
          <circle data-dot r={7} fill="#C34811" cx={30} cy={100} />
        </svg>

        <div className="relative grid gap-6 md:grid-cols-4 md:pt-[110px]">
          {steps.map((step) => (
            <div
              key={step.num}
              data-step
              className="js-anim border-t-2 border-edge-rule px-1 pt-6"
            >
              <div className="text-[12px] font-extrabold tracking-[.14em] text-terracotta-light">
                {step.num}
              </div>
              <div className="mt-2.5 text-[24px] font-extrabold text-white">{step.title}</div>
              <div className="mt-2.5 text-[13px] leading-[1.8] text-dark-muted">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
