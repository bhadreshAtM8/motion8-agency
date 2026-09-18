"use client";

import { useRef } from "react";
import { TICKER } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Seamless modifier-wrapped loop. Scroll velocity drives timeScale and row
 * skew, both decaying after 140ms idle (design.md §3). Skew sits on the rows,
 * never the bar, so the terracotta edge stays straight.
 */
export function Ticker({ seconds = 26 }: { seconds?: number }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const rows = Array.from(el.querySelectorAll<HTMLElement>("[data-row]"));
      if (!rows.length) return;

      const width = rows[0].offsetWidth;
      if (!width) return;

      const loop = gsap.to(rows, {
        x: -width,
        duration: seconds,
        ease: "none",
        repeat: -1,
        modifiers: { x: (value) => `${parseFloat(value) % width}px` },
      });

      const skewTo = gsap.quickTo(rows, "skewY", { duration: 0.6, ease: "power3" });
      let idle: ReturnType<typeof setTimeout>;

      const trigger = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          loop.timeScale(gsap.utils.clamp(-4, 4, 1 + velocity / 900) || 1);
          skewTo(gsap.utils.clamp(-5, 5, velocity / 260));
          clearTimeout(idle);
          idle = setTimeout(() => {
            skewTo(0);
            loop.timeScale(1);
          }, 140);
        },
      });

      return () => {
        clearTimeout(idle);
        trigger.kill();
        loop.kill();
      };
    },
    { scope: root, dependencies: [seconds] },
  );

  const row = (key: string) => (
    <div
      key={key}
      data-row
      className="inline-flex shrink-0 gap-10 pr-10 text-[12.5px] font-extrabold uppercase tracking-[.14em] text-white"
    >
      {TICKER.map((item) => (
        <span key={item} className="flex items-center gap-10 whitespace-nowrap">
          {item}
          <span aria-hidden>●</span>
        </span>
      ))}
    </div>
  );

  return (
    <div ref={root} className="overflow-hidden whitespace-nowrap bg-terracotta py-[18px]">
      {row("a")}
      {row("b")}
    </div>
  );
}
