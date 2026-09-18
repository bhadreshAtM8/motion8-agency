import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { POSTS } from "@/content/posts";
import { CTA_BAND, SITE } from "@/content/site";
import { absolute, breadcrumbSchema, buildMetadata } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export const metadata = buildMetadata({
  title: "Blog | Motion 8 Agency",
  description:
    "Working notes on growth infrastructure — search, lifecycle, product and the systems underneath — from the Motion 8 team.",
  path: "/blog",
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    name: `${SITE.name} Blog`,
    url: absolute("/blog"),
    publisher: { "@id": `${SITE.url}/#organization` },
    blogPost: POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absolute(`/blog/${post.slug}`),
      datePublished: post.published,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <JsonLd schemas={[breadcrumbSchema(crumbs), blog]} />
      <Nav solid />

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow="Writing"
          heading="Notes from the build."
          lede="What we see across product, systems and demand — written by the people doing the work, not a content team interpreting it."
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "See our work", href: "/our-work" }}
        />

        <section className="gutter bg-ground pb-16 md:pb-24">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-6 border-t border-edge-rule py-10 transition-colors hover:border-terracotta-light md:grid-cols-[200px_1fr] md:gap-12"
            >
              <div className="text-[12px] text-dark-faint">
                <div className="uppercase tracking-[.14em] text-terracotta-light">
                  {post.category}
                </div>
                <div className="mt-2">{formatDate(post.published)}</div>
                <div className="mt-1">{post.readingMinutes} min read</div>
              </div>
              <div className="max-w-[720px]">
                <h2 className="text-[clamp(22px,3vw,30px)] leading-[1.2] tracking-[-0.025em] text-white transition-colors group-hover:text-terracotta-light">
                  {post.title}
                </h2>
                <p className="m-0 mt-4 text-[14.5px] leading-[1.8] text-dark-muted">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-light">
                  Read
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
          <div className="border-t border-edge-rule" />
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
