import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { Nav } from "@/components/Nav";
import { PILLARS } from "@/content/pillars";

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <main id="main" className="gutter flex min-h-[70vh] flex-col justify-center bg-ground py-24">
        <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
          404
        </div>
        <h1 className="mt-5 max-w-[800px] text-[clamp(34px,6vw,72px)] leading-[.98] tracking-[-0.04em] text-white">
          That page moved, or never existed.
        </h1>
        <p className="mt-6 max-w-[460px] text-[15px] leading-[1.8] text-dark-muted">
          Nothing is broken on your end. Try one of the three pillars, or tell us what you were
          looking for.
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <MagneticButton href="/" variant="primary">
            Back home
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Contact us
          </MagneticButton>
        </div>

        <div className="mt-14 grid gap-x-10 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
            >
              <span className="text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                {pillar.shortName}
              </span>
              <span className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
