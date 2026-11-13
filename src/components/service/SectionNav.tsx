"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export type SectionLink = { id: string; label: string };

/**
 * "On this page" anchors under the hero: scrollable chips on small screens,
 * a sticky bar under the main nav on lg. The links are plain anchors in the
 * server HTML; JS only adds the active state and the sliding underline.
 * Clicks are picked up by the Lenis handler in SmoothScroll (offset 0 here,
 * because each section carries its own scroll-margin).
 */
export function SectionNav({ items }: { items: SectionLink[] }) {
  const root = useRef<HTMLElement>(null);
  const current = useRef<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const key = items.map((item) => item.id).join("|");

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const bar = el.querySelector<HTMLElement>("[data-bar]");
      const scroller = el.querySelector<HTMLElement>("[data-scroller]");
      if (!bar || !scroller) return;

      const place = (animate: boolean) => {
        const id = current.current;
        const link = id ? el.querySelector<HTMLElement>(`a[href="#${id}"]`) : null;
        const duration = animate && !prefersReducedMotion() ? 0.45 : 0;
        if (!link) {
          gsap.to(bar, { opacity: 0, duration: duration / 2, overwrite: true });
          return;
        }
        gsap.to(bar, {
          x: link.offsetLeft,
          width: link.offsetWidth,
          opacity: 1,
          duration,
          ease: "power3.out",
          overwrite: true,
        });
        // Keep the active chip in view when the row scrolls sideways.
        const max = scroller.scrollWidth - scroller.clientWidth;
        if (max > 0) {
          const centred = link.offsetLeft - (scroller.clientWidth - link.offsetWidth) / 2;
          gsap.to(scroller, {
            scrollLeft: Math.max(0, Math.min(max, centred)),
            duration,
            ease: "power3.out",
            overwrite: true,
          });
        }
      };

      key.split("|").forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) current.current = id;
            else if (current.current === id) current.current = null;
            else return;
            setActive(current.current);
            place(true);
          },
        });
      });

      const onRefresh = () => place(false);
      ScrollTrigger.addEventListener("refresh", onRefresh);
      return () => ScrollTrigger.removeEventListener("refresh", onRefresh);
    },
    { scope: root, dependencies: [key] },
  );

  return (
    <nav
      ref={root}
      aria-label="On this page"
      className="z-[150] border-b border-edge-nav bg-ground lg:sticky lg:top-[70px] lg:bg-[rgba(27,19,13,.92)] lg:backdrop-blur-md"
    >
      <div
        data-scroller
        className="gutter overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="relative m-0 flex w-max list-none items-center gap-2 p-0 py-3 lg:gap-8 lg:py-0">
          {items.map((item) => {
            const on = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-scroll-offset="0"
                  aria-current={on ? "location" : undefined}
                  className={`block whitespace-nowrap rounded-pill border px-3.5 py-2 text-[12.5px] font-bold tracking-[.02em] transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-4 ${
                    on
                      ? "border-terracotta-light text-white"
                      : "border-edge-rule text-dark-muted hover:text-terracotta-light"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li
            aria-hidden
            data-bar
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[2px] w-0 bg-terracotta-light opacity-0 lg:block"
          />
        </ul>
      </div>
    </nav>
  );
}
