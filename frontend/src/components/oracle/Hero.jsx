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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
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
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Oracle exterior render"
          className="w-full h-[115%] object-cover object-center"
        />
        {/* Compound overlay: dark left column for text, subtle everywhere else */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#24160F]/95 from-0% via-[#24160F]/55 via-45% to-[#24160F]/25 to-100%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24160F]/85 via-transparent to-[#24160F]/60" />
      </motion.div>

      {/* Editorial content — left column */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="pt-28 md:pt-32 px-6 md:px-10 flex items-center justify-between text-[0.68rem] tracking-widest-2 font-sans uppercase"
        >
          <span className="text-[#E9D6C7]">
            <span className="text-[#A37C3B]">·</span> MahaRERA · {BRAND.rera}
          </span>
          <span className="text-[#E9D6C7]/70 hidden md:inline">
            Mulund East / 2026
          </span>
        </motion.div>

        {/* Main content zone */}
        <motion.div
          style={{ opacity }}
          className="flex-1 flex items-center px-6 md:px-10 py-12"
        >
          <div className="max-w-[720px] w-full">
            {/* Positioning line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="flex items-center gap-4 mb-8 md:mb-10"
            >
              <div className="w-12 h-px bg-[#A37C3B]" />
              <span className="font-sans text-[0.7rem] md:text-[0.75rem] tracking-widest-2 uppercase text-[#A37C3B]">
                The Mulund of Exclusivity
              </span>
            </motion.div>

            {/* Wordmark — sized to fit left column */}
            <h1 className="font-display text-[#E9D6C7] leading-[0.9] tracking-tight text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw] xl:text-[9rem]">
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
              <div className="mask-line -mt-2 md:-mt-4">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.85, ease: [0.65, 0, 0.35, 1] }}
                  className="inline-block"
                >
                  <span className="italic text-[#A37C3B] font-mono-serif">c</span>
                  le<span className="text-[#A37C3B]">.</span>
                </motion.span>
              </div>
            </h1>

            {/* Tagline */}
            <div className="mt-6 md:mt-10 max-w-xl">
              <p
                data-testid={ORACLE.hero.tagline}
                className="font-display italic text-[#E9D6C7] text-xl md:text-3xl lg:text-4xl leading-[1.15]"
              >
                <LineReveal text="We don't just build homes." delay={1.1} />
                <br />
                <LineReveal
                  text="We build trust."
                  delay={1.35}
                  className="text-[#A37C3B]"
                />
              </p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.9 }}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                data-testid={ORACLE.hero.ctaPrimary}
                onClick={() => scrollTo("enquiry")}
                className="gold-btn group inline-flex items-center justify-between gap-4 bg-[#A37C3B] hover:text-[#35251F] text-[#F5EBDD] px-7 py-4 font-sans text-xs tracking-widest-2 uppercase"
              >
                <span>Register your interest</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
              <button
                data-testid={ORACLE.hero.ctaSecondary}
                onClick={() => scrollTo("residences")}
                className="group inline-flex items-center justify-between gap-4 border border-[#E9D6C7]/50 bg-[#24160F]/40 backdrop-blur-sm text-[#E9D6C7] hover:border-[#A37C3B] hover:text-[#A37C3B] px-7 py-4 font-sans text-xs tracking-widest-2 uppercase transition-colors"
              >
                <span>Explore residences</span>
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom facts strip — full-width, on dark backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9 }}
          className="relative"
        >
          {/* dark base for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#24160F] via-[#24160F]/90 to-transparent" />

          <div className="relative px-6 md:px-10 pb-6 md:pb-8 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t border-[#A37C3B]/40 pt-5">
              {FACTS.map((f, i) => (
                <div key={f.k} className="flex flex-col">
                  <span className="font-sans text-[0.58rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1.5">
                    0{i + 1} · {f.k}
                  </span>
                  <span className="font-display text-[#E9D6C7] text-base md:text-lg lg:text-xl">
                    {f.v}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="mt-5 flex items-center justify-between text-[#E9D6C7]/70 font-sans text-[0.62rem] tracking-widest-2 uppercase">
              <span>Scroll · Explore the residence</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#A37C3B]"
              >
                ↓
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
