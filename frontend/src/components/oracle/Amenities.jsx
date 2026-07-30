import { motion } from "framer-motion";
import {
  Trees, Armchair, Footprints, Sofa, ToyBrick, Dumbbell,
  BookOpen, Flower, Mountain, ShieldCheck,
} from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { AMENITIES, IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

const ICONS = {
  trees: Trees, armchair: Armchair, footprints: Footprints, sofa: Sofa,
  "toy-brick": ToyBrick, dumbbell: Dumbbell, "book-open": BookOpen,
  flower: Flower, mountain: Mountain, "shield-check": ShieldCheck,
};

export default function Amenities() {
  return (
    <section
      id="amenities"
      data-testid={ORACLE.amenities.root}
      className="relative bg-[#24160F] text-[#E9D6C7] py-24 md:py-36 overflow-hidden grain"
    >
      {/* Background image ghost */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={IMAGES.amenityBg}
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24160F] via-[#24160F]/70 to-[#24160F]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (07) — Amenities
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Ten reasons to slow down
            </span>
          </div>
        </FadeUp>

        <h2 className="font-display text-[#E9D6C7] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] mb-16 md:mb-20">
          <LineReveal text="A resort" />
          <br />
          <span className="italic text-[#A37C3B] font-mono-serif">
            <LineReveal text="above the city." delay={0.15} />
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#A37C3B]/20 border border-[#A37C3B]/20">
          {AMENITIES.map((a, i) => {
            const Icon = ICONS[a.icon] || Sofa;
            return (
              <motion.div
                key={a.name}
                data-testid={ORACLE.amenities.item(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#24160F] hover:bg-[#35251F] p-6 md:p-8 aspect-square flex flex-col justify-between transition-colors duration-500"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-serif italic text-[#A37C3B] text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={28}
                    className="text-[#A37C3B] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="font-display text-lg md:text-xl leading-tight group-hover:text-[#A37C3B] transition-colors">
                  {a.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
