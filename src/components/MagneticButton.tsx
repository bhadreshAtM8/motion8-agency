"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Variant = "primary" | "outline" | "dark" | "navOutline";

const BASE =
  "relative inline-flex items-center justify-center overflow-hidden rounded-pill font-bold";

const VARIANTS: Record<Variant, { shell: string; fill: string; label: string }> = {
  primary: {
    shell: "bg-terracotta text-white shadow-cta px-[34px] py-[17px] text-[14.5px]",
    fill: "bg-terracotta-dark",
    label: "text-white",
  },
  outline: {
    shell:
      "border-[1.5px] border-[rgba(240,233,223,.32)] text-dark-body px-8 py-[15.5px] text-[14.5px]",
    fill: "bg-[#f0e9df]",
    label: "",
  },
  dark: {
    shell: "bg-ground text-white px-11 py-5 text-[15.5px]",
    fill: "bg-blue",
    label: "text-white",
  },
  navOutline: {
    shell: "border-[1.5px] border-terracotta text-white px-[22px] py-[11px] text-[12.5px]",
    fill: "bg-terracotta",
    label: "text-white",
  },
};

/**
 * Magnetic pull + bottom-up fill wipe + scale 1.04 (design.md §3 "Buttons").
 * The outline variant's label flips to ink as the cream fill arrives.
 */
export function MagneticButton({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const styles = VARIANTS[variant];
  const flipsLabel = variant === "outline";

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const fill = el.querySelector<HTMLElement>("[data-fill]");
      const label = el.querySelector<HTMLElement>("[data-label]");
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

      const move = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        xTo((event.clientX - (rect.left + rect.width / 2)) * 0.28);
        yTo((event.clientY - (rect.top + rect.height / 2)) * 0.5);
      };
      const enter = () => {
        if (fill) gsap.to(fill, { scaleY: 1, duration: 0.45, ease: "power3.out" });
        if (label && flipsLabel) gsap.to(label, { color: "#241B14", duration: 0.3 });
        gsap.to(el, { scale: 1.04, duration: 0.4, ease: "power3.out" });
      };
      const leave = () => {
        xTo(0);
        yTo(0);
        if (fill) gsap.to(fill, { scaleY: 0, duration: 0.35, ease: "power2.in" });
        if (label && flipsLabel) gsap.to(label, { color: "#f0e9df", duration: 0.3 });
        gsap.to(el, { scale: 1, duration: 0.4, ease: "power3.out" });
      };

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
      };
    },
    { scope: ref },
  );

  const inner = (
    <>
      <span
        data-fill
        aria-hidden
        className={`absolute inset-0 origin-bottom scale-y-0 ${styles.fill}`}
      />
      <span data-label className={`relative ${styles.label}`}>
        {children}
      </span>
    </>
  );

  const classes = `${BASE} ${styles.shell} ${className}`;

  if (href) {
    return (
      <Link ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-60`}
    >
      {inner}
    </button>
  );
}
