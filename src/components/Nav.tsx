"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { NAV, SITE } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";

/**
 * Fixed and transparent over the C2 hero, pre-filled on subpages. Compacts
 * past 60px: padding down, ground at 92%, logo to .86 (design.md §2).
 */
export function Nav({ solid = false }: { solid?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useGSAP(
    () => {
      const el = bar.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      let stop = () => {};
      if (!solid) {
        gsap.set(el, { opacity: 0, y: -24 });
        stop = onIntroDone(() =>
          gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }),
        );
      }

      const compact = gsap
        .timeline({ paused: true })
        .to(el, {
          paddingTop: 13,
          paddingBottom: 13,
          backgroundColor: "rgba(27,19,13,.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 30px rgba(27,19,13,.34)",
          duration: 0.4,
          ease: "power2.out",
        })
        .to("[data-logo]", { scale: 0.86, duration: 0.4, ease: "power2.out" }, 0);

      if (solid) compact.progress(1);
      else {
        ScrollTrigger.create({
          start: 60,
          end: 99999,
          onToggle: (self) => (self.isActive ? compact.play() : compact.reverse()),
        });
      }

      return stop;
    },
    { scope: root, dependencies: [solid] },
  );

  useGSAP(
    () => {
      if (!menu.current) return;
      menuTl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { display: "flex" })
        .fromTo(
          menu.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" },
        )
        .from(
          "[data-menu-link]",
          { yPercent: 120, opacity: 0, duration: 0.6, stagger: 0.06, ease: "expo.out" },
          "-=.25",
        )
        .from("[data-menu-foot]", { opacity: 0, y: 14, duration: 0.4 }, "-=.3");
    },
    { scope: root },
  );

  const setMenu = (next: boolean) => {
    const tl = menuTl.current;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
    if (!tl) return;
    if (next) tl.play();
    else {
      tl.eventCallback("onReverseComplete", () => gsap.set(menu.current, { display: "none" }));
      tl.reverse();
    }
  };
  const toggle = () => setMenu(!open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenu(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // setMenu only touches refs and state setters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div ref={root}>
      <header
        ref={bar}
        className={`fixed inset-x-0 top-0 z-[200] ${
          solid ? "border-b border-edge-nav bg-[rgba(27,19,13,.92)] backdrop-blur-md" : ""
        }`}
        style={{ paddingTop: 26, paddingBottom: 26 }}
      >
        <div className="gutter flex items-center justify-between gap-6">
          <Link
            href="/"
            data-logo
            aria-label={`${SITE.name} — home`}
            className="flex shrink-0 items-center gap-[9px] py-2 text-white"
          >
            <Image src="/brand/icon.png" alt="" width={350} height={350} className="h-[27px] w-[27px]" />
            <span className="text-[17.5px] font-extrabold tracking-[-0.02em]">Motion 8</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-navlink
                  className={`group relative pb-[3px] text-[12.5px] font-bold tracking-[.02em] transition-colors ${
                    active ? "text-terracotta-light" : "text-dark-nav hover:text-terracotta-light"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-terracotta-light transition-transform duration-[400ms] ease-brand ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton
              href="/contact"
              variant="navOutline"
              className="min-h-11 max-sm:!px-4 max-sm:!py-[9px] max-sm:!text-[12px]"
            >
              Start<span className="sr-only sm:not-sr-only"> a Project</span>
            </MagneticButton>

            <button
              ref={toggleRef}
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-10 -mr-1 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-[2px] w-6 bg-dark-body transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-dark-body transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-dark-body transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: the bar carries a GSAP transform, and a transformed
          ancestor re-anchors position:fixed to itself. */}
      <div
        ref={menu}
        id="mobile-menu"
        className="fixed inset-0 z-[190] hidden flex-col justify-center bg-ground px-6 lg:!hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV.map((link) => (
            <span key={link.href} className="block overflow-hidden">
              <Link
                href={link.href}
                data-menu-link
                onClick={toggle}
                className="block py-2 text-[clamp(26px,7vw,40px)] font-extrabold tracking-[-0.03em] text-white"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <div
          data-menu-foot
          className="mt-10 flex flex-col items-start gap-5 border-t border-edge-rule pt-8 text-[13px] text-dark-muted"
        >
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.offices}</span>
          <MagneticButton href="/contact" variant="primary" className="!px-7 !py-3.5">
            Start a Project
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
