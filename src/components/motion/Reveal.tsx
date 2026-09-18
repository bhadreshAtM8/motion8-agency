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
  stagger = 0.028,
  duration = 0.9,
  distance = 115,
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  intro?: boolean;
  stagger?: number;
  duration?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

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
    { ref, className: `js-anim ${className}` },
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
  start = "top 92%",
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  intro?: boolean;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

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
    { ref, className: `js-anim ${className}` },
    children,
  );
}
