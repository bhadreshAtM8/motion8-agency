"use client";

import { createElement, useRef, type ReactNode } from "react";
import {
  fontsReady,
  gsap,
  SplitText,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";

type Tag = "h1" | "h2" | "h3" | "p" | "div" | "span";

/**
 * Per-word masked reveal (design.md §3, `data-split`). Hero headings join the
 * intro timeline; everything else fires at `top 88%`.
 */
export function SplitReveal({
  as = "h2",
  children,
  className = "",
  intro = false,
  eager = false,
  stagger = 0.028,
  duration = 0.9,
  distance = 115,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  intro?: boolean;
  /** Above-the-fold text: visible in the first paint (CSS rise), never
      gated on hydration — keeps the LCP element off the JS critical path. */
  eager?: boolean;
  stagger?: number;
  duration?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || eager) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }

      let split: SplitText | null = null;
      let tween: gsap.core.Tween | null = null;
      let stop = () => {};
      let cancelled = false;

      const build = async () => {
        await fontsReady();
        if (cancelled) return;

        gsap.set(el, { visibility: "visible" });
        split = SplitText.create(el, { type: "words", mask: "words" });
        // Word masks clip at the line box; give descenders room without
        // changing the heading's height.
        if (split.masks?.length) {
          gsap.set(split.masks, { paddingBottom: "0.18em", marginBottom: "-0.18em" });
        }
        gsap.set(split.words, { yPercent: distance });

        const play = () => {
          if (cancelled || !split) return;
          tween = gsap.to(split.words, {
            yPercent: 0,
            duration,
            stagger,
            ease: "expo.out",
          });
        };

        if (intro) {
          stop = onIntroDone(play);
        } else {
          tween = gsap.to(split.words, {
            yPercent: 0,
            duration,
            stagger,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        }
      };

      build();

      return () => {
        cancelled = true;
        stop();
        tween?.kill();
        split?.revert();
      };
    },
    { scope: ref },
  );

  return createElement(
    as,
    { ref, className: `${eager ? "hero-rise" : "js-anim"} ${className}` },
    children,
  );
}

/** Fade + y on `top 92%` (design.md §3 "Body, stats, steps, rows"). */
export function FadeIn({
  as = "div",
  children,
  className = "",
  y = 24,
  delay = 0,
  intro = false,
  eager = false,
  start = "top 92%",
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  intro?: boolean;
  eager?: boolean;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || eager) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { visibility: "visible", opacity: 1, y: 0 });
        return;
      }

      gsap.set(el, { visibility: "visible", opacity: 0, y });

      if (intro) {
        const stop = onIntroDone(() => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" });
        });
        return stop;
      }

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start },
      });
    },
    { scope: ref },
  );

  return createElement(
    as,
    {
      ref,
      className: `${eager ? "hero-rise" : "js-anim"} ${className}`,
      style: eager && delay ? { animationDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
