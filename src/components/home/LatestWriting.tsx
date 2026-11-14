import Link from "next/link";
import { SplitReveal } from "@/components/motion/Reveal";
import { Reveal } from "@/components/service/Reveal";
import { POSTS } from "@/content/posts";

const EYEBROW = "text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-dark";

/** The three most recent posts as light cards on cream. */
export function LatestWriting() {
  const latest = [...POSTS]
    .sort((a, b) => (b.updated ?? b.published).localeCompare(a.updated ?? a.published))
    .slice(0, 3);

  return (
    <Reveal as="section" className="gutter bg-cream py-16 text-light-body md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className={EYEBROW}>Latest writing</div>
          <SplitReveal as="h2" className="mt-3 text-[clamp(26px,4vw,38px)] tracking-[-0.025em]">
            Notes from the work
          </SplitReveal>
        </div>
        <Link
          href="/blog"
          className="group inline-flex min-h-11 items-center gap-2 text-[14px] font-bold text-light-body underline decoration-edge-stone decoration-1 underline-offset-[6px] transition-colors hover:text-terracotta-dark"
        >
          All articles
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <ul className="m-0 mt-10 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <li key={post.slug} data-reveal className="flex">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex w-full flex-col rounded-card border border-edge-card bg-white p-7 transition-shadow duration-300 hover:shadow-caseLight md:p-8"
            >
              <span className={EYEBROW}>{post.category}</span>
              <h3 className="mt-3 text-[20px] font-extrabold leading-[1.3] tracking-[-0.015em] transition-colors group-hover:text-terracotta-dark">
                {post.title}
              </h3>
              <p className="m-0 mt-3 flex-1 text-[15px] leading-[1.7] text-light-muted">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-terracotta-dark">
                Read the article
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
