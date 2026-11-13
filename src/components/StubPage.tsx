import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PageHero, type Crumb } from "@/components/PageHero";
import { CTA_BAND } from "@/content/site";

/**
 * Shell for pages whose content is still owed (legal copy, blog posts,
 * open roles). These are noindex and kept out of sitemap.ts on purpose —
 * shipping thin pages into the index costs more than the missing URL.
 */
export function StubPage({
  crumbs,
  eyebrow,
  heading,
  lede,
  body,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  heading: string;
  lede: string;
  body: string;
}) {
  return (
    <>
      <Nav solid />
      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow={eyebrow}
          heading={heading}
          lede={lede}
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "See our work", href: "/our-work" }}
        />
        <section className="gutter bg-ground pb-20 md:pb-28">
          <p className="m-0 max-w-[640px] text-[15px] leading-[1.8] text-dark-muted">{body}</p>
        </section>
        <CtaBand
          heading={CTA_BAND.heading}
          body={CTA_BAND.body}
          ctaLabel={CTA_BAND.cta.label}
          ctaHref={CTA_BAND.cta.href}
        />
      </main>
      <Footer />
    </>
  );
}
