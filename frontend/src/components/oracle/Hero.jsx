import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { BRAND, IMAGES } from "@/data/oracle";
import { LineReveal } from "./Reveal";

const FACTS = [
  { k: "Configuration", v: "2 & 3 BHK" },
  { k: "Address", v: "Mulund East" },
  { k: "Possession", v: BRAND.possession },
  { k: "MahaRERA", v: "Registered" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid={ORACLE.hero.root}
      ref={ref}
      className="relative min-h-screen bg-[#24160F] overflow-hidden grain"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.heroBg}
          alt="Oracle exterior render"
          className="w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24160F]/60 via-[#24160F]/30 to-[#24160F]/95" />
        <div className="absolute inset-0 bg-[#35251F]/20" />
      </motion.div>

      {/* Editorial frame */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="pt-28 md:pt-32 px-6 md:px-10 flex items-center justify-between text-[0.68rem] tracking-widest-2 text-[#E9D6C7]/85 font-sans uppercase"
        >
          <span>MahaRERA · {BRAND.rera}</span>
          <span className="hidden md:inline">
            An address of <span className="text-[#A37C3B]">21</span> floors
          </span>
          <span>Mulund East / 2026</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          style={{ opacity }}
          className="flex-1 flex items-center px-6 md:px-10 pt-8 pb-16"
        >
          <div className="max-w-[1400px] w-full">
            {/* Positioning line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              <div className="w-12 h-px bg-[#A37C3B]" />
              <span className="font-sans text-[0.65rem] md:text-[0.7rem] tracking-widest-2 uppercase text-[#A37C3B]">
                The Mulund of Exclusivity
              </span>
            </motion.div>

            <h1 className="font-display text-[#E9D6C7] leading-[0.9] tracking-tight text-[22vw] md:text-[16vw] lg:text-[14vw] xl:text-[13.5rem]">
              <div className="mask-line">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  className="inline-block"
                >
                  Ora
                </motion.span>
              </div>
              <div className="mask-line -mt-4 md:-mt-8">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.85, ease: [0.65, 0, 0.35, 1] }}
                  className="inline-block"
                >
                  <span className="italic text-[#A37C3B] font-mono-serif">c</span>le<span className="text-[#A37C3B]">.</span>
                </motion.span>
              </div>
            </h1>

            {/* Sub tagline */}
            <div className="mt-8 md:mt-12 max-w-3xl">
              <p
                data-testid={ORACLE.hero.tagline}
                className="font-display italic text-[#E9D6C7] text-2xl md:text-4xl leading-[1.15]"
              >
                <LineReveal
                  text="We don't just build homes."
                  delay={1.1}
                />
                <br />
                <LineReveal
                  text="We build trust."
                  delay={1.35}
                  className="text-[#A37C3B]"
                />
              </p>
            </div>

            {/* Facts strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.9 }}
              className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-[#A37C3B]/25 pt-8"
            >
              {FACTS.map((f) => (
                <div key={f.k} className="flex flex-col">
                  <span className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-2">
                    {f.k}
                  </span>
                  <span className="font-display text-[#E9D6C7] text-lg md:text-xl">
                    {f.v}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.9 }}
              className="mt-10 md:mt-14 flex flex-col md:flex-row gap-4 md:gap-6"
            >
              <button
                data-testid={ORACLE.hero.ctaPrimary}
                onClick={() => scrollTo("enquiry")}
                className="gold-btn group inline-flex items-center justify-between gap-4 bg-[#A37C3B] hover:text-[#35251F] text-[#F5EBDD] px-8 py-5 font-sans text-xs tracking-widest-2 uppercase min-w-[280px]"
              >
                <span>Register your interest</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
              <button
                data-testid={ORACLE.hero.ctaSecondary}
                onClick={() => scrollTo("floor-plans")}
                className="group inline-flex items-center justify-between gap-4 border border-[#E9D6C7]/40 text-[#E9D6C7] hover:border-[#A37C3B] hover:text-[#A37C3B] px-8 py-5 font-sans text-xs tracking-widest-2 uppercase transition-colors min-w-[280px]"
              >
                <span>Explore floor plans</span>
                <ArrowDownRight size={18} className="transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="pb-8 px-6 md:px-10 flex items-center justify-between text-[#E9D6C7]/80 font-sans text-[0.65rem] tracking-widest-2 uppercase"
        >
          <span>Scroll · Explore the residence</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#A37C3B]"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
