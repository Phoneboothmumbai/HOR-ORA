import { motion } from "framer-motion";
import { ORACLE } from "@/constants/testIds";
import { IMAGES } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

// Layout: asymmetric magazine grid with spotlight framing
export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid={ORACLE.gallery.root}
      className="relative bg-[#F5EBDD] text-[#2A211B] py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-14">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (05) — Gallery
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              Sample flats
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-end mb-16">
          <h2 className="lg:col-span-8 font-display text-[#35251F] text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95]">
            <LineReveal text="Interiors, framed" />
            <br />
            <span className="italic text-[#A37C3B] font-mono-serif">
              <LineReveal text="like memories." delay={0.15} />
            </span>
          </h2>
          <div className="lg:col-span-4">
            <FadeUp delay={0.2}>
              <p className="font-sans text-[#2A211B]/70 text-sm md:text-base leading-relaxed">
                Every material chosen for how it will look in six years, not just today.
                A slow, deliberate visual language.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Row 1 */}
          <GalleryTile
            i={0}
            src={IMAGES.gallery[0]}
            label="Master Bedroom"
            frame="002"
            className="col-span-12 md:col-span-8 aspect-[16/10]"
          />
          <GalleryTile
            i={1}
            src={IMAGES.gallery[1]}
            label="Foyer"
            frame="003"
            className="col-span-12 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-full"
          />
          {/* Row 2 */}
          <GalleryTile
            i={2}
            src={IMAGES.gallery[2]}
            label="Living"
            frame="004"
            className="col-span-6 md:col-span-4 aspect-[3/4]"
          />
          <GalleryTile
            i={3}
            src={IMAGES.gallery[3]}
            label="Dining"
            frame="005"
            className="col-span-6 md:col-span-4 aspect-[3/4]"
          />
          <GalleryTile
            i={4}
            src={IMAGES.gallery[4]}
            label="Kitchen"
            frame="006"
            className="col-span-12 md:col-span-4 aspect-[3/4]"
          />
          {/* Row 3 */}
          <GalleryTile
            i={5}
            src={IMAGES.gallery[5]}
            label="Balcony View"
            frame="007"
            className="col-span-12 aspect-[21/9]"
          />
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ i, src, label, frame, className }) {
  return (
    <motion.figure
      data-testid={ORACLE.gallery.item(i)}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden bg-[#35251F] group ${className}`}
    >
      <motion.img
        src={src}
        alt={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#24160F]/70 via-transparent to-transparent" />
      <div className="absolute top-4 left-4 flex items-center gap-2 text-[#E9D6C7] font-sans text-[0.6rem] tracking-widest-2 uppercase">
        <span className="w-4 h-px bg-[#E9D6C7]" />
        {label}
      </div>
      <div className="absolute bottom-4 right-4 font-mono-serif italic text-[#E9D6C7]/90 text-lg">
        · {frame}
      </div>
    </motion.figure>
  );
}
