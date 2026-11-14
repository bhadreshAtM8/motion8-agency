import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

/**
 * Mid-page prompt: a sentence, the primary CTA and a quieter link. Not a
 * heading. Same treatment as the service-page rows, shared by the pillar hubs
 * and the homepage.
 */
export function MidCta({
  text,
  dark = false,
  className = "mt-12 md:mt-16",
}: {
  text: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between md:gap-10 ${className} ${
        dark ? "border-edge-rule" : "border-edge-stone"
      }`}
    >
      <p
        className={`m-0 max-w-[46ch] text-[17px] font-bold leading-[1.5] md:text-[19px] ${
          dark ? "text-white" : "text-light-body"
        }`}
      >
        {text}
      </p>
      <div className="flex shrink-0 flex-wrap items-center gap-x-7 gap-y-4">
        <MagneticButton href="/contact" variant="primary">
          Start a Project
        </MagneticButton>
        <Link
          href="/our-work"
          className={`group py-3 text-[14px] font-bold underline decoration-1 underline-offset-[6px] transition-colors ${
            dark
              ? "text-dark-body decoration-edge-rule hover:text-terracotta-light"
              : "text-light-body decoration-edge-stone hover:text-terracotta-dark"
          }`}
        >
          See our work{" "}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
