import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { FLOOR_PLANS, IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function FloorPlans() {
  return (
    <section
      id="floor-plans"
      data-testid={ORACLE.floorPlans.root}
      className="relative bg-[#24160F] text-[#E9D6C7] py-24 md:py-36 grain"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (04) — Floor Plans
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Twelve typologies
            </span>
          </div>
        </FadeUp>

        <h2 className="font-display text-[#E9D6C7] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-16 md:mb-20">
          <LineReveal text="Every floor," />
          <br />
          <span className="italic text-[#A37C3B] font-mono-serif">
            <LineReveal text="drawn to scale." delay={0.15} />
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {FLOOR_PLANS.map((fp, i) => (
            <motion.a
              key={fp.id}
              data-testid={ORACLE.floorPlans.item(i)}
              href="/floor-plans/oracle-plan-placeholder.pdf"
              download={`oracle-${fp.id}-floor-plan.pdf`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block border border-[#A37C3B]/25 hover:border-[#A37C3B] bg-[#35251F] overflow-hidden transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={IMAGES.floorPlan}
                  alt={fp.label}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-45 transition-opacity duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24160F] via-[#24160F]/40 to-transparent" />

                {/* Chapter num */}
                <div className="absolute top-4 left-4 font-mono-serif italic text-[#A37C3B] text-xl">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Overlay content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-[#E9D6C7] text-xl md:text-2xl leading-tight">
                    {fp.label}
                  </div>
                  <div className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] mt-2">
                    {fp.meta}
                  </div>
                </div>

                {/* Hover download tag */}
                <div
                  data-testid={ORACLE.floorPlans.download(i)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#A37C3B] flex items-center justify-center text-[#A37C3B] bg-[#24160F]/60 group-hover:bg-[#A37C3B] group-hover:text-[#24160F] transition-all duration-300"
                >
                  <Download size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-10 font-sans text-sm text-[#E9D6C7]/75 italic">
            *PDFs shown are placeholder — full CAD-drawn plans are supplied on registered
            enquiry.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
