import { SplitReveal } from "@/components/motion/Reveal";
import { Reveal } from "@/components/service/Reveal";
import { DIFFERENTIATORS } from "@/content/site";

/** Stone two-column list; rows stagger in and the numerals count up. */
export function Differentiators() {
  return (
    <Reveal as="section" className="gutter bg-stone py-16 text-light-body md:py-24">
      <div className="grid gap-10 md:grid-cols-[380px_1fr] md:gap-14">
        <div>
          <div className="text-[11.5px] font-extrabold uppercase tracking-[.16em] text-terracotta-dark">
            Why Motion 8
          </div>
          <SplitReveal
            as="h2"
            className="mt-3 text-[clamp(26px,4vw,38px)] leading-[1.2] tracking-[-0.025em]"
          >
            One accountable team. Not five disconnected vendors.
          </SplitReveal>
        </div>
        <ul className="m-0 list-none p-0">
          {DIFFERENTIATORS.map((item, i) => (
            <li
              key={item.num}
              data-reveal
              className={`grid grid-cols-[56px_1fr] items-center gap-5 border-t border-edge-stone py-6 md:grid-cols-[72px_1fr] md:py-7 ${
                i === DIFFERENTIATORS.length - 1 ? "border-b" : ""
              }`}
            >
              <span
                aria-hidden
                data-count={Number(item.num)}
                className={`text-[28px] font-extrabold tabular-nums leading-none tracking-[-0.03em] md:text-[34px] ${
                  item.tone === "blue" ? "text-blue" : "text-terracotta-dark"
                }`}
              >
                {item.num}
              </span>
              <span className="text-[18px] font-extrabold md:text-[21px]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
