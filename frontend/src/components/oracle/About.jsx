import { motion } from "framer-motion";
import { ORACLE } from "@/constants/testIds";
import { IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="overview"
      data-testid={ORACLE.about.root}
      className="relative bg-[#F5EBDD] text-[#2A211B] py-14 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        {/* Section eyebrow */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-10 md:mb-10 md:mb-16">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (01) — The Address
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left: Big display heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display leading-[0.95] text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] text-[#35251F]">
              <LineReveal text="More than" />
              <br />
              <span className="italic text-[#A37C3B] font-mono-serif">
                <LineReveal text="a home." delay={0.15} />
              </span>
              <br />
              <LineReveal text="A lifestyle" delay={0.3} />
              <br />
              <LineReveal text="of consequence." delay={0.45} />
            </h2>
          </div>

          {/* Right: Copy + image */}
          <div className="lg:col-span-5 lg:pl-8 lg:pt-12">
            <FadeUp delay={0.4}>
              <p className="font-sans text-[#2A211B]/85 leading-relaxed text-base md:text-lg mb-8">
                Welcome to <span className="text-[#523B24] font-medium">Oracle</span>, an
                elegant residential address by Hariom Realty, thoughtfully designed for
                families who seek more than just a home — a lifestyle of comfort,
                connection, and class.
              </p>
              <p className="font-sans text-[#2A211B]/75 leading-relaxed text-sm md:text-base">
                Situated in the serene yet well-connected neighbourhood of Mulund East,
                Oracle combines sophisticated design with functional family spaces —
                offering a perfect blend of urban convenience and peaceful living.
              </p>
            </FadeUp>

            <FadeUp delay={0.6} className="mt-10 grid grid-cols-3 gap-4 border-t border-[#A37C3B]/25 pt-6">
              {[
                { k: "Floors", v: "20" },
                { k: "Homes", v: "Bespoke" },
                { k: "Rera", v: "Verified" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display italic text-[#A37C3B] text-3xl">{s.v}</div>
                  <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#2A211B]/60 mt-1">
                    {s.k}
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>

        {/* Below: editorial image with spotlight frame */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-24 relative"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-[#35251F]">
            <img
              src={IMAGES.aboutLiving}
              alt="Living room interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Clipped frame with number label */}
            <div className="absolute top-6 left-6 flex items-center gap-3 text-[#E9D6C7] font-sans text-[0.6rem] tracking-widest-2 uppercase">
              <span className="w-6 h-px bg-[#E9D6C7]" />
              <span>Living Room · Sample Flat</span>
            </div>
            <div className="absolute bottom-6 right-6 font-display italic text-[#E9D6C7] text-lg md:text-2xl">
              Frame 001
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
