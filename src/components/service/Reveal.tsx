"use client";

import { createElement, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Tag = "div" | "section" | "ul" | "ol";

/**
 * Scroll reveals for server-rendered children. Nothing is hidden in the HTML:
 * the start state is applied here, after hydration, so the content is fully
 * visible without JS and untouched under prefers-reduced-motion.
 *
 * Children opt in with data attributes:
 *   data-reveal         fade up (y 28), batched with a 0.07s stagger
 *   data-reveal-x="40"  slide in from that x offset, once
 *   data-count="6"      count 00 → 06 on enter (final text stays in the HTML)
 */
export function Reveal({
  as = "div",
  id,
  className,
  children,
}: {
  as?: Tag;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-reveal]", el);
      if (rows.length) {
        gsap.set(rows, { opacity: 0, y: 28 });
        ScrollTrigger.batch(rows, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.07,
              overwrite: true,
            }),
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal-x]", el).forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          x: parseFloat(panel.dataset.revealX ?? "0"),
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]", el).forEach((node) => {
        const target = parseInt(node.dataset.count ?? "", 10);
        if (!Number.isFinite(target)) return;
        const final = node.textContent ?? "";
        const proxy = { value: 0 };
        const write = () => {
          node.textContent = String(Math.round(proxy.value)).padStart(2, "0");
        };
        gsap.to(proxy, {
          value: target,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 92%", once: true },
          onStart: write,
          onUpdate: write,
          onComplete: () => {
            node.textContent = final;
          },
        });
      });
    },
    { scope: root },
  );

  return createElement(as, { ref: root, id, className }, children);
}
