"use client";

import Link from "next/link";
import { useRef } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { FadeIn, SplitReveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { CURTAINS, HERO } from "@/content/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const eyebrowLine = el.querySelector("[data-eyebrow-line]");

      if (prefersReducedMotion()) {
        gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
        gsap.set(eyebrowLine, { scaleX: 1 });
        return;
      }

      gsap.set(eyebrowLine, { scaleX: 0, transformOrigin: "left center" });
      const stop = onIntroDone(() => {
        gsap.to(eyebrowLine, { scaleX: 1, duration: 0.7, ease: "expo.out" });
      });

      // Background glows drift against the scroll.
      el.querySelectorAll<HTMLElement>("[data-float]").forEach((node) => {
        gsap.to(node, {
          yPercent: parseFloat(node.dataset.float ?? "0") * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Curtain panels: slide the terracotta face up, widen, dim the siblings.
      const fine = window.matchMedia("(pointer: fine)").matches;
      const cursor = el.querySelector<HTMLElement>("[data-cursor]");
      const panels = Array.from(el.querySelectorAll<HTMLElement>("[data-curtain]"));
      const cleanups: (() => void)[] = [];

      if (fine && cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0 });
        const cx = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
        const cy = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });
        const track = (event: PointerEvent) => {
          cx(event.clientX);
          cy(event.clientY);
        };
        document.addEventListener("pointermove", track);
        cleanups.push(() => document.removeEventListener("pointermove", track));
      }

      if (fine) {
        panels.forEach((panel) => {
          const face = panel.querySelector("[data-curtain-panel]");
          const enter = () => {
            gsap.to(face, { yPercent: -101, duration: 0.7, ease: "expo.out" });
            gsap.to(panel, { flexGrow: 1.9, duration: 0.7, ease: "expo.out" });
            panels.forEach((other) => {
              if (other !== panel) gsap.to(other, { opacity: 0.5, duration: 0.4 });
            });
            if (cursor) gsap.to(cursor, { scale: 1, duration: 0.4, ease: "back.out(2)" });
          };
          const leave = () => {
            gsap.to(face, { yPercent: 0, duration: 0.6, ease: "power3.inOut" });
            gsap.to(panel, { flexGrow: 1, duration: 0.6, ease: "expo.out" });
            panels.forEach((other) => gsap.to(other, { opacity: 1, duration: 0.4 }));
            if (cursor) gsap.to(cursor, { scale: 0, duration: 0.3, ease: "power2.in" });
          };
          panel.addEventListener("pointerenter", enter);
          panel.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            panel.removeEventListener("pointerenter", enter);
            panel.removeEventListener("pointerleave", leave);
          });
        });
      }

      return () => {
        stop();
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: root },
  );

  return (
    <section ref={root} className="home-hero relative overflow-hidden bg-ground">
      {/* decor */}
      <div aria-hidden className="decor-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        data-float="0.16"
        className="pointer-events-none absolute -top-[340px] left-1/2 -ml-[460px] h-[920px] w-[920px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%,rgba(228,100,42,.34),rgba(195,72,17,.08) 46%,rgba(195,72,17,0) 68%)",
        }}
      />
      <div
        aria-hidden
        data-float="-0.1"
        className="pointer-events-none absolute -right-[180px] top-[120px] h-[560px] w-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%,rgba(11,54,154,.32),rgba(11,54,154,0) 66%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[80px] top-[96px] hidden h-[300px] w-[300px] animate-ring rounded-full border border-[rgba(228,100,42,.3)] xl:block"
      >
        <span className="absolute -top-1 left-[calc(50%-4px)] h-2 w-2 rounded-full bg-terracotta-light" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[140px] top-[166px] hidden h-[180px] w-[180px] animate-ringReverse rounded-full border border-dashed border-[rgba(240,233,223,.18)] xl:block"
      />

      {/* 96px "View" cursor, scales in over a curtain */}
      <div
        data-cursor
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[250] hidden h-24 w-24 scale-0 items-center justify-center rounded-full bg-[rgba(195,72,17,.92)] text-[11px] font-extrabold uppercase tracking-[.1em] text-white lg:flex"
      >
        View
      </div>

      <div className="gutter relative pt-[130px] md:pt-[190px]">
        <div className="flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
          <span data-eyebrow-line aria-hidden className="block h-px w-11 bg-terracotta-light" />
          <SplitReveal as="span" eager className="inline-block">
            {HERO.eyebrow}
          </SplitReveal>
        </div>

        <h1 className="mt-7 max-w-[1180px] text-[clamp(38px,6.4vw,92px)] font-extrabold leading-[.95] tracking-[-0.04em] text-white">
          {HERO.lines.map((line, i) => (
            <SplitReveal as="span" eager key={i} className={`block rise-${i + 1}`}>
              {line.map((part, j) => (
                <span key={j} className={part.accent ? "text-terracotta-light" : undefined}>
                  {part.text}
                </span>
              ))}
            </SplitReveal>
          ))}
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 pb-11 md:flex-row md:items-end md:gap-16">
          <FadeIn as="p" eager className="rise-4 m-0 max-w-[460px] text-[15px] leading-[1.8] text-dark-muted">
            {HERO.lede}
          </FadeIn>
          <FadeIn eager className="rise-4 flex flex-wrap gap-3.5">
            <MagneticButton href={HERO.primaryCta.href} variant="primary">
              {HERO.primaryCta.label}
            </MagneticButton>
            <MagneticButton href={HERO.secondaryCta.href} variant="outline">
              {HERO.secondaryCta.label}
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Curtain row — the full interaction needs width, so small screens get
            a plain stacked index instead. */}
        <div className="hero-rise rise-5 hidden border-r border-t border-[rgba(240,233,223,.14)] lg:flex">
          {CURTAINS.map((panel) => (
            <Link
              key={panel.num}
              href={panel.href}
              data-curtain
              className="relative h-[360px] min-w-0 flex-1 overflow-hidden border-l border-[rgba(240,233,223,.14)]"
            >
              <Spotlight size="180px" stops="rgba(228,100,42,.3),transparent 70%" />
              <span className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="text-[11.5px] font-extrabold tracking-[.16em] text-terracotta-light">
                  {panel.num}
                </span>
                <span className="text-[19px] font-extrabold leading-[1.25] tracking-[-0.01em] text-dark-body">
                  {panel.title}
                </span>
              </span>
              <span
                data-curtain-panel
                className="absolute inset-0 flex translate-y-full flex-col justify-between bg-terracotta p-6"
              >
                <span className="flex items-baseline justify-between">
                  <span className="text-[11.5px] font-extrabold tracking-[.16em] text-white">
                    {panel.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[.1em] text-white/80">
                    {panel.meta}
                  </span>
                </span>
                <span>
                  <span className="block text-[22px] font-extrabold leading-[1.2] tracking-[-0.015em] text-white">
                    {panel.title}
                  </span>
                  <span className="mt-2.5 block text-[12.5px] leading-[1.7] text-white/90">
                    {panel.blurb}
                  </span>
                  <span className="mt-4 block text-[12.5px] font-extrabold text-white">
                    Explore →
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="hero-rise rise-5 border-t border-[rgba(240,233,223,.14)] lg:hidden">
          {CURTAINS.map((panel) => (
            <Link
              key={panel.num}
              href={panel.href}
              className="flex items-center gap-4 border-b border-[rgba(240,233,223,.14)] py-5"
            >
              <span className="text-[11.5px] font-extrabold tracking-[.16em] text-terracotta-light">
                {panel.num}
              </span>
              <span className="flex-1">
                <span className="block text-[17px] font-extrabold text-dark-body">{panel.title}</span>
                <span className="mt-1 block text-[12.5px] text-dark-muted">{panel.meta}</span>
              </span>
              <span className="text-terracotta-light">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
