import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Marquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const items = [
    "The Mulund of Exclusivity",
    "★",
    "Oracle by Hariom Realty",
    "★",
    "We build trust",
    "★",
    "MahaRERA Registered",
    "★",
  ];

  return (
    <div
      ref={ref}
      className="relative bg-[#24160F] py-10 md:py-14 border-y border-[#A37C3B]/25 overflow-hidden"
    >
      <motion.div style={{ x }} className="marquee">
        <div className="marquee-track">
          {[...items, ...items, ...items].map((t, i) => (
            <span
              key={i}
              className={`font-display text-4xl md:text-6xl lg:text-7xl whitespace-nowrap ${
                t === "★"
                  ? "text-[#A37C3B]"
                  : i % 2
                  ? "text-[#E9D6C7] italic"
                  : "text-[#E9D6C7]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
