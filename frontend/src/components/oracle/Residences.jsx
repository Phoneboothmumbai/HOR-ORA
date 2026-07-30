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
      className="relative bg-[#F5EBDD] text-[#2A211B] py-24 md:py-36"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (03) — Residences
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Six configurations
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-end mb-14">
          <h2 className="lg:col-span-7 font-display text-[#35251F] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95]">
            <LineReveal text="Choose your" />
            <br />
            <span className="italic text-[#A37C3B] font-mono-serif">
              <LineReveal text="frame of view." delay={0.15} />
            </span>
          </h2>
          <div className="lg:col-span-5">
            <FadeUp delay={0.3}>
              <p className="font-sans text-[#2A211B]/75 leading-relaxed text-base md:text-lg">
                From an intimate 623 sq.ft. 2 BHK to a family-scale 1,150 sq.ft. 3 BHK —
                each residence at Oracle is engineered around light, air and long-view
                sightlines.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full oracle-table" data-testid={ORACLE.residences.table}>
            <thead>
              <tr>
                <th className="w-[8%]">#</th>
                <th className="w-[20%]">Type</th>
                <th className="w-[24%]">RERA Carpet Area</th>
                <th className="w-[24%]">Price</th>
                <th className="w-[24%] text-right">Enquire</th>
              </tr>
            </thead>
            <tbody>
              {CONFIGURATIONS.map((c, i) => (
                <motion.tr
                  key={i}
                  data-testid={ORACLE.residences.row(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group hover:bg-[#E9D6C7]/50 transition-colors"
                >
                  <td className="text-[#A37C3B] font-mono-serif italic text-lg">
                    0{i + 1}
                  </td>
                  <td>
                    <div className="text-2xl md:text-3xl text-[#35251F]">{c.type}</div>
                  </td>
                  <td className="text-lg text-[#2A211B]/85">{c.area} sq.ft.</td>
                  <td>
                    <div className="text-2xl text-[#35251F]">{c.priceLabel}</div>
                    <div className="font-sans text-[0.7rem] uppercase tracking-widest-2 text-[#2A211B]/50 mt-1">
                      onwards
                    </div>
                  </td>
                  <td className="text-right">
                    <button
                      data-testid={ORACLE.residences.enquireBtn(i)}
                      onClick={() => scrollTo("enquiry")}
                      className="inline-flex items-center gap-3 text-[#A37C3B] hover:text-[#35251F] font-sans text-xs tracking-widest-2 uppercase transition-colors group/btn"
                    >
                      Enquire
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {CONFIGURATIONS.map((c, i) => (
            <motion.div
              key={i}
              data-testid={ORACLE.residences.row(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="border border-[#A37C3B]/30 bg-white/40 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono-serif italic text-[#A37C3B]">0{i + 1}</div>
                <div className="text-right">
                  <div className="font-display text-2xl text-[#35251F]">{c.priceLabel}</div>
                  <div className="font-sans text-[0.6rem] uppercase tracking-widest-2 text-[#2A211B]/50">
                    onwards
                  </div>
                </div>
              </div>
              <div className="font-display text-3xl text-[#35251F]">{c.type}</div>
              <div className="font-sans text-[#2A211B]/70 mt-1">{c.area} sq.ft. RERA carpet</div>
              <button
                data-testid={ORACLE.residences.enquireBtn(i)}
                onClick={() => scrollTo("enquiry")}
                className="mt-4 w-full gold-btn border border-[#A37C3B] text-[#A37C3B] hover:text-[#35251F] px-6 py-3 font-sans text-xs tracking-widest-2 uppercase"
              >
                Enquire
              </button>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mt-10 font-sans text-sm tracking-wide text-[#2A211B]/75 italic">
            *Prices exclusive of taxes & other charges. Subject to change. 1&nbsp;BHK
            configurations available on request.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
