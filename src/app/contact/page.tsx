import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/content/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata = buildMetadata({
  title: "Contact Motion 8 | Start a Project",
  description:
    "Tell us where growth is stuck. We reply within 24 hours with a first read on what we would fix — not a pitch deck.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
      <Nav solid />

      <main id="main">
        <PageHero
          crumbs={crumbs}
          eyebrow="Start a project"
          heading="Tell us where it's stuck."
          lede="We reply within 24 hours, usually with a first read on what we would fix rather than a calendar link. No pitch deck until there's something worth pitching."
          primary={{ label: "hello@motion8agency.co", href: `mailto:${SITE.email}` }}
          secondary={{ label: "See our work", href: "/our-work" }}
        />

        <section className="gutter bg-ground pb-20 md:pb-28">
          <div className="grid gap-12 md:grid-cols-[340px_1fr] md:gap-14">
            <div>
              <h2 className="text-[clamp(22px,3vw,28px)] leading-[1.25] tracking-[-0.02em] text-white">
                Ready to build your growth infrastructure?
              </h2>
              <dl className="mt-10 space-y-6 text-[13.5px]">
                <div>
                  <dt className="text-[11.5px] uppercase tracking-[.14em] text-dark-faint">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-bold text-dark-body transition-colors hover:text-terracotta-light"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11.5px] uppercase tracking-[.14em] text-dark-faint">
                    Offices
                  </dt>
                  <dd className="mt-1.5 font-bold text-dark-body">{SITE.offices}</dd>
                </div>
                <div>
                  <dt className="text-[11.5px] uppercase tracking-[.14em] text-dark-faint">
                    Response time
                  </dt>
                  <dd className="mt-1.5 font-bold text-dark-body">Within 24 hours</dd>
                </div>
              </dl>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
