import { motion } from "framer-motion";
import {
  Trees, Armchair, Footprints, Sofa, ToyBrick, Dumbbell,
  BookOpen, Flower, Mountain, ShieldCheck, ArrowUpRight,
} from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { AMENITIES, ASSETS } from "@/data/oracle";
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
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (07) — Amenities
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/80">
              Ten reasons to slow down
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-end mb-16 md:mb-20">
          <h2 className="lg:col-span-8 font-display text-[#E9D6C7] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95]">
            <LineReveal text="A resort" />
            <br />
            <span className="italic text-[#A37C3B] font-mono-serif">
              <LineReveal text="above the city." delay={0.15} />
            </span>
          </h2>
          <div className="lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="font-sans text-[#E9D6C7]/85 text-sm md:text-base leading-relaxed">
                Ten deliberately-composed leisure zones woven between the residences —
                designed for the way Indian families actually spend their evenings
                together.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Atmosphere hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden mb-6 md:mb-8 border border-[#A37C3B]/25"
        >
          <div className="relative aspect-[21/9] md:aspect-[24/9]">
            <img
              src={ASSETS.exteriorAerial}
              alt="Oracle amenity atmosphere"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#24160F] via-[#24160F]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24160F]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-[#A37C3B]" />
                  <span className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B]">
                    Rooftop · 21st Floor
                  </span>
                </div>
                <div className="font-display text-[#E9D6C7] text-3xl md:text-5xl leading-tight">
                  A skyline of one&apos;s own.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Editorial amenity tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#A37C3B]/20 border border-[#A37C3B]/20">
          {AMENITIES.map((a, i) => {
            const Icon = ICONS[a.icon] || Sofa;
            return (
              <motion.div
                key={a.name}
                data-testid={ORACLE.amenities.item(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: (i % 5) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-[#24160F] hover:bg-[#35251F] transition-colors duration-500 aspect-square md:aspect-[4/5] flex flex-col justify-between p-5 md:p-7 overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #A37C3B 0%, transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono-serif italic text-[#A37C3B] text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={30}
                    strokeWidth={1.1}
                    className="text-[#A37C3B] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  />
                </div>

                <div className="relative">
                  <div className="font-sans text-[0.55rem] tracking-widest-2 uppercase text-[#A37C3B] mb-2">
                    — {a.tag}
                  </div>
                  <div className="font-display text-[#E9D6C7] text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-[#A37C3B] transition-colors">
                    {a.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-8 font-sans text-xs text-[#E9D6C7]/60 italic">
            Amenity photography commissioned separately — final visuals will replace
            this illustrated set closer to launch.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
