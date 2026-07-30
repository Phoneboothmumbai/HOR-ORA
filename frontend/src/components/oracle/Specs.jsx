import { motion } from "framer-motion";
import { ORACLE } from "@/constants/testIds";
import { SPECS } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Specs() {
  return (
    <section
      id="specifications"
      data-testid={ORACLE.specs.root}
      className="relative bg-[#35251F] text-[#E9D6C7] py-24 md:py-36 grain"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (06) — Specifications
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Named brands only
            </span>
          </div>
        </FadeUp>

        <h2 className="font-display text-[#E9D6C7] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-16">
          <LineReveal text="What's in the walls" />
          <br />
          <span className="italic text-[#A37C3B] font-mono-serif">
            <LineReveal text="matters more." delay={0.15} />
          </span>
        </h2>

        <div className="border-t border-[#A37C3B]/30">
          {SPECS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-[#A37C3B]/20 group hover:pl-2 transition-all duration-500"
            >
              <div className="md:col-span-1 font-mono-serif italic text-[#A37C3B] text-xl">
                0{i + 1}
              </div>
              <div className="md:col-span-3">
                <div className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1">
                  Category
                </div>
                <div className="font-display text-lg md:text-2xl text-[#E9D6C7]">{s.category}</div>
              </div>
              <div className="md:col-span-4">
                <div className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1">
                  Specification
                </div>
                <div className="font-sans text-[#E9D6C7]/80 leading-relaxed">{s.spec}</div>
              </div>
              <div className="md:col-span-4">
                <div className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1">
                  Brand
                </div>
                <div className="font-display italic text-lg text-[#E9D6C7] group-hover:text-[#A37C3B] transition-colors">
                  {s.brand}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
