import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { CONNECTIVITY, IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Location() {
  return (
    <section
      id="location"
      data-testid={ORACLE.location.root}
      className="relative bg-[#F5EBDD] text-[#2A211B] py-24 md:py-36"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (08) — Location
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Opp. NY Cinemas · Mulund East
            </span>
          </div>
        </FadeUp>

        <h2 className="font-display text-[#35251F] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-16 md:mb-20">
          <LineReveal text="A minute" />
          <br />
          <span className="italic text-[#A37C3B] font-mono-serif">
            <LineReveal text="to everywhere." delay={0.15} />
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-[#A37C3B]/40">
              <iframe
                title="Oracle Mulund East Map"
                src="https://www.google.com/maps?q=Mulund%20East%2C%20Mumbai&output=embed"
                className="absolute inset-0 w-full h-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 bg-[#35251F] text-[#E9D6C7] px-3 py-2 text-[0.6rem] tracking-widest-2 uppercase">
                <MapPin size={12} className="text-[#A37C3B]" />
                Site · Opp. NY Cinemas
              </div>
            </div>
          </motion.div>

          {/* Connectivity list */}
          <div className="lg:col-span-5">
            <div className="border-t border-[#A37C3B]/30">
              {CONNECTIVITY.map((c, i) => (
                <motion.div
                  key={c.landmark}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex items-center justify-between py-4 border-b border-[#A37C3B]/20 group hover:pl-2 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono-serif italic text-[#A37C3B] text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg md:text-xl text-[#35251F] group-hover:text-[#A37C3B] transition-colors">
                      {c.landmark}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 md:w-12 h-px bg-[#A37C3B]/40" />
                    <span className="font-sans text-sm text-[#2A211B]/75 tabular-nums">
                      {c.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
