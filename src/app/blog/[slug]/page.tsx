import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { getPost, POSTS } from "@/content/posts";
import { CTA_BAND } from "@/content/site";
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const others = POSTS.filter((item) => item.slug !== post.slug);

  return (
    <>
      <JsonLd
        schemas={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path,
            published: post.published,
            updated: post.updated,
            section: post.category,
          }),
          faqSchema(post.faqs),
        ]}
      />
      <Nav solid />

      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow={`${post.category} — ${post.readingMinutes} min read`}
          heading={post.title}
          lede={post.excerpt}
          primary={{ label: "Start a Project", href: "/contact" }}
          secondary={{ label: "More writing", href: "/blog" }}
        />

        <article className="gutter bg-ground pb-16 md:pb-24">
          <div className="max-w-[720px]">
            <p className="m-0 border-t border-edge-rule pt-6 text-[12px] uppercase tracking-[.14em] text-dark-faint">
              Published {formatDate(post.published)}
              {post.updated && ` · Updated ${formatDate(post.updated)}`}
            </p>

            {post.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 mt-6 text-[17px] leading-[1.75] text-dark-body"
              >
                {paragraph}
              </p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className="mt-14">
                <h2 className="text-[clamp(22px,3vw,28px)] leading-[1.25] tracking-[-0.02em] text-white">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="m-0 mt-5 text-[15px] leading-[1.85] text-dark-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <FaqSection heading="Questions on this" faqs={post.faqs} tone="stone" />

        <section className="gutter bg-ground py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
                Related services
              </h2>
              <div className="mt-7">
                {post.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
                  >
                    <span className="text-[15px] font-bold text-dark-body transition-colors group-hover:text-terracotta-light">
                      {item.name}
                    </span>
                    <span className="text-dark-faint transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-light">
                Keep reading
              </h2>
              <div className="mt-7">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="group block border-t border-edge-rule py-5 transition-colors hover:border-terracotta-light"
                  >
                    <span className="text-[11.5px] uppercase tracking-[.14em] text-dark-faint">
                      {other.category}
                    </span>
                    <span className="mt-1.5 block text-[15px] font-bold leading-[1.4] text-dark-body transition-colors group-hover:text-terracotta-light">
                      {other.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
