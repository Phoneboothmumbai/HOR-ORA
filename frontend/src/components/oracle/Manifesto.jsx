import { motion } from "framer-motion";
import { ORACLE } from "@/constants/testIds";
import { MANIFESTO } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid={ORACLE.manifesto.root}
      className="relative bg-[#35251F] text-[#E9D6C7] py-24 md:py-36 overflow-hidden grain"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (02) — The Manifesto
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Five Commitments
            </span>
          </div>
        </FadeUp>

        <div className="mb-20">
          <h2 className="font-display text-[#E9D6C7] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95]">
            <LineReveal text="Why families" />
            <br />
            <span className="italic text-[#A37C3B] font-mono-serif">
              <LineReveal text="choose us." delay={0.15} />
            </span>
          </h2>
        </div>

        {/* Numbered chapters — list layout */}
        <div className="divide-y divide-[#A37C3B]/25 border-t border-[#A37C3B]/25">
          {MANIFESTO.map((m, i) => (
            <motion.div
              key={m.n}
              data-testid={ORACLE.manifesto.item(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="group py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start hover:pl-2 transition-all duration-500"
            >
              <div className="lg:col-span-2">
                <span className="chapter-num">{m.n}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-[#E9D6C7] group-hover:text-[#A37C3B] transition-colors break-words">
                  {m.title}
                </h3>
              </div>
              <div className="lg:col-span-6 lg:pt-3">
                <p className="font-sans text-[#E9D6C7]/90 leading-relaxed text-base lg:text-lg max-w-xl">
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
