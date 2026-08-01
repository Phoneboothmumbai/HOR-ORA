import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { CONFIGURATIONS } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Residences() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="residences"
      data-testid={ORACLE.residences.root}
      className="relative bg-[#F5EBDD] text-[#2A211B] py-14 md:py-24 lg:py-32"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (03) — Residences
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/80">
              Two configurations
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 items-end mb-10 md:mb-16">
          <h2 className="lg:col-span-7 font-display text-[#35251F] text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95]">
            <LineReveal text="Choose your" />
            <br />
            <span className="italic text-[#A37C3B] font-mono-serif">
              <LineReveal text="frame of view." delay={0.15} />
            </span>
          </h2>
          <div className="lg:col-span-5">
            <FadeUp delay={0.3}>
              <p className="font-sans text-[#2A211B]/85 leading-relaxed text-base md:text-lg">
                Two thoughtfully-crafted configurations, engineered around light, air
                and long-view sightlines.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Two editorial pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {CONFIGURATIONS.map((c, i) => (
            <motion.div
              key={c.type}
              data-testid={ORACLE.residences.row(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-[#35251F] text-[#E9D6C7] p-7 md:p-10 lg:p-12 overflow-hidden border border-[#A37C3B]/30"
            >
              {/* Corner ornament */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle, #A37C3B 0%, transparent 65%)",
                }}
              />

              {/* Index + tag */}
              <div className="relative flex items-start justify-between mb-8 md:mb-14">
                <span className="font-mono-serif italic text-[#A37C3B] text-2xl md:text-3xl">
                  0{i + 1}
                </span>
                <span className="font-sans text-[0.6rem] md:text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] text-right">
                  · {c.tag}
                </span>
              </div>

              {/* Configuration type — big + bold */}
              <div className="relative">
                <div className="font-display text-[#E9D6C7] leading-[0.9] text-6xl md:text-7xl lg:text-[7rem] font-semibold tracking-tight">
                  {c.type}
                </div>
              </div>

              {/* Divider */}
              <div className="relative gold-line my-6 md:my-8" />

              {/* Price row */}
              <div className="relative flex flex-wrap items-baseline gap-2 md:gap-3 mb-4">
                <span className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B]">
                  Starting
                </span>
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="font-display font-bold text-[#A37C3B] text-4xl md:text-5xl lg:text-6xl leading-none">
                    ₹{c.priceValue}
                  </span>
                  <span className="font-display font-semibold text-[#A37C3B] text-2xl md:text-3xl leading-none">
                    {c.priceUnit}
                  </span>
                </div>
                <span className="font-sans text-[#E9D6C7]/85 text-sm md:text-base italic">
                  onwards*
                </span>
              </div>

              {/* Caption */}
              <p className="relative font-sans text-[#E9D6C7]/80 leading-relaxed text-sm md:text-base mb-8 md:mb-10 max-w-md">
                {c.caption}
              </p>

              {/* CTA */}
              <button
                data-testid={ORACLE.residences.enquireBtn(i)}
                onClick={() => scrollTo("enquiry")}
                className="relative gold-btn group/btn inline-flex items-center justify-between gap-4 border border-[#A37C3B] bg-[#A37C3B]/10 backdrop-blur-sm text-[#E9D6C7] hover:text-[#35251F] w-full md:w-auto md:min-w-[240px] px-6 py-4 font-sans text-xs tracking-widest-2 uppercase transition-colors"
              >
                <span>Enquire on {c.type}</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </button>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mt-8 md:mt-10 font-sans text-sm tracking-wide text-[#2A211B]/75 italic">
            *Prices exclusive of taxes & other charges. Subject to change. Detailed
            pricing and unit-wise availability shared on registered enquiry.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
