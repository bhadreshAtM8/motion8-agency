"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FOOTER_COLUMNS, SITE, SOCIALS } from "@/content/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const FOOTER_HEADINGS = ["Company", "What we run", "Legal", "Get in touch"];

const ICONS: Record<string, string> = {
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 1-.02 5.001A2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.09V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4V9Z",
  Instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.34a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.42a2.92 2.92 0 1 1 0-5.84 2.92 2.92 0 0 1 0 5.84Zm5.73-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z",
  X: "M17.53 3H20.5l-6.49 7.42L21.75 21h-5.99l-4.69-6.13L5.7 21H2.73l6.94-7.93L2.25 3h6.14l4.24 5.6L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z",
  YouTube:
    "M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41a2.51 2.51 0 0 0-1.77 1.78A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z",
};

export function Footer() {
  const root = useRef<HTMLElement>(null);
  const socials = SOCIALS.filter((s) => s.href);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      gsap.set(el.querySelectorAll(".js-anim"), { visibility: "visible" });
      if (prefersReducedMotion()) return;

      gsap.from(el.querySelectorAll("[data-col]"), {
        opacity: 0,
        y: 22,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });

      gsap.from(el.querySelector("[data-wordmark]"), {
        yPercent: 110,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: el.querySelector("[data-wordmark-mask]"), start: "top 95%" },
      });

      gsap.from(el.querySelectorAll("[data-social]"), {
        opacity: 0,
        scale: 0.6,
        duration: 0.5,
        stagger: 0.06,
        ease: "back.out(2)",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="relative overflow-hidden bg-ground pt-16 text-white md:pt-20">
      <div className="gutter relative flex flex-col items-center text-center">
        <Link href="/" aria-label={`${SITE.name} — home`} className="flex items-center gap-[9px]">
          <Image src="/brand/icon.png" alt="" width={350} height={350} className="h-8 w-8" />
          <span className="text-[19px] font-extrabold tracking-[-0.02em]">{SITE.name}</span>
        </Link>

        <p className="mt-5 max-w-[420px] text-[13.5px] leading-[1.8] text-dark-muted">
          {SITE.tagline}. One accountable team across product, systems and demand — {SITE.offices}.
        </p>

        {socials.length > 0 && (
          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                data-social
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(240,233,223,.16)] text-dark-muted transition-colors duration-300 hover:border-terracotta-light hover:text-terracotta-light"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  <path d={ICONS[social.label] ?? ICONS.LinkedIn} />
                </svg>
              </a>
            ))}
          </div>
        )}

        <div className="mt-14 grid w-full grid-cols-2 gap-x-8 gap-y-10 border-t border-edge-rule pt-12 text-left sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column, i) => (
            <div key={i} data-col className="js-anim flex flex-col">
              <span className="mb-3 text-[11px] font-extrabold uppercase tracking-[.14em] text-terracotta-light">
                {FOOTER_HEADINGS[i]}
              </span>
              {column.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit max-w-full break-words py-1.5 text-[13px] text-dark-muted transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center gap-3 border-t border-edge-rule pt-7 text-[11.5px] uppercase tracking-[.08em] text-dark-faint sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-block py-2 transition-colors hover:text-terracotta-light"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      {/* Oversized wordmark, masked reveal on scroll */}
      <div data-wordmark-mask className="mt-10 overflow-hidden px-2 md:mt-14">
        <div
          data-wordmark
          aria-hidden
          className="select-none text-center text-[clamp(64px,19vw,260px)] font-extrabold leading-[0.82] tracking-[-0.05em] text-white/[0.07]"
        >
          MOTION 8
        </div>
      </div>
    </footer>
  );
}
