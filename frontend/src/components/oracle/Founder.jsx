import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Founder() {
  return (
    <section
      id="founder"
      data-testid={ORACLE.founder.root}
      className="relative bg-[#35251F] text-[#E9D6C7] py-24 md:py-36 grain overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (09) — Leadership
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Founder image with spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#A37C3B]/30 bg-[#24160F]">
              <img
                src={IMAGES.founder}
                alt="Bhavik Somaiya - Director"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24160F] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#E9D6C7]">
                <span className="text-[#A37C3B]">[</span> Founder Portrait Placeholder <span className="text-[#A37C3B]">]</span>
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <div className="lg:col-span-7 relative">
            <Quote size={72} className="text-[#A37C3B]/30 -ml-3 mb-4" />

            <blockquote className="font-display italic text-[#E9D6C7] text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
              <LineReveal text="Success is not when we" />
              <br />
              <LineReveal text="hand over the keys." delay={0.1} />
              <br />
              <span className="text-[#A37C3B]">
                <LineReveal
                  text={"Success is when every family says\u00a0—"}
                  delay={0.25}
                />
              </span>
              <br />
              <LineReveal
                text={"\u201Cwe made the right choice.\u201D"}
                delay={0.4}
              />
            </blockquote>

            <FadeUp delay={0.6}>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-14 h-px bg-[#A37C3B]" />
                <div>
                  <div className="font-display text-xl text-[#E9D6C7]">
                    Bhavik Mahesh Somaiya
                  </div>
                  <div className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] mt-1">
                    Director · Hariom Realty
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
