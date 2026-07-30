import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { BRAND, CONTACT } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      data-testid={ORACLE.footer.root}
      className="relative bg-[#24160F] text-[#E9D6C7] grain overflow-hidden"
    >
      {/* Big display footer word */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-16">
        <FadeUp>
          <h2 className="font-display leading-[0.85] text-[22vw] md:text-[16vw] lg:text-[13rem] text-[#A37C3B]/25 select-none pointer-events-none">
            <LineReveal text="ORACLE." />
          </h2>
        </FadeUp>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Column 1: brand */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <div className="font-display text-3xl text-[#E9D6C7] tracking-widest-2">
                ORACLE
              </div>
              <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mt-1">
                By {BRAND.developer}
              </div>
            </div>
            <p className="font-display italic text-[#E9D6C7]/70 text-lg leading-snug max-w-xs">
              We don&apos;t just build homes. <br />
              <span className="text-[#A37C3B]">We build trust.</span>
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[#A37C3B]/40 hover:border-[#A37C3B] hover:bg-[#A37C3B] hover:text-[#24160F] text-[#A37C3B] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-[#A37C3B]/40 hover:border-[#A37C3B] hover:bg-[#A37C3B] hover:text-[#24160F] text-[#A37C3B] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: reach */}
          <div className="md:col-span-4">
            <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-6">
              Reach
            </div>
            <div className="space-y-5">
              <a
                href={`tel:+91${CONTACT.primaryPhone}`}
                className="group flex items-start gap-3 hover:text-[#A37C3B] transition-colors"
              >
                <Phone size={16} className="mt-1 text-[#A37C3B]" />
                <div>
                  <div className="font-display text-lg">+91 {CONTACT.primaryPhone}</div>
                  <div className="font-sans text-xs text-[#E9D6C7]/50">
                    also · 7567906906 · 7567784784
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-start gap-3 hover:text-[#A37C3B] transition-colors"
              >
                <Mail size={16} className="mt-1 text-[#A37C3B]" />
                <div className="font-display text-lg">{CONTACT.email}</div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#A37C3B] flex-shrink-0" />
                <div className="font-sans text-[#E9D6C7]/80 text-sm leading-relaxed">
                  {CONTACT.office}
                  <br />
                  <span className="text-[#E9D6C7]/50">{CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: RERA */}
          <div className="md:col-span-4">
            <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-6">
              MahaRERA
            </div>
            <div className="flex items-start gap-5">
              {/* QR placeholder */}
              <div className="w-24 h-24 md:w-28 md:h-28 border border-[#A37C3B]/40 bg-[#35251F] flex items-center justify-center relative flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "repeating-conic-gradient(#A37C3B 0% 25%, #35251F 0% 50%)",
                      backgroundSize: "12px 12px",
                      opacity: 0.35,
                    }}
                  />
                </div>
                <div className="relative font-sans text-[0.55rem] tracking-widest-2 uppercase text-[#A37C3B] text-center px-2">
                  QR
                  <br />
                  Placeholder
                </div>
              </div>
              <div>
                <div className="font-display text-[#E9D6C7] leading-tight">
                  Reg. No.
                </div>
                <div className="font-display text-[#A37C3B] text-lg mt-1">
                  {BRAND.rera}
                </div>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-3 font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B] hover:text-[#E9D6C7] transition-colors"
                >
                  Verify on MahaRERA <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer strip */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#A37C3B]/25 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#A37C3B] flex items-center justify-center">
              <span className="font-display text-[#A37C3B]">H</span>
            </div>
            <div>
              <div className="font-display text-[#E9D6C7] text-lg leading-tight">
                {BRAND.developer}
              </div>
              <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B]">
                Building Realities · Est.
              </div>
            </div>
          </div>

          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-3 font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#E9D6C7]/70 hover:text-[#A37C3B] transition-colors"
          >
            Back to top
            <span className="w-8 h-px bg-[#A37C3B] transition-all group-hover:w-12" />
            <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
              ↑
            </motion.span>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-[0.65rem] text-[#E9D6C7]/40 leading-relaxed italic">
          <p>
            [PLACEHOLDER — client to provide disclaimer text]. Images used in this
            landing page are indicative and for representation purposes only. Prices,
            areas, specifications and amenities are subject to change without notice.
          </p>
          <p className="md:text-right">
            © {new Date().getFullYear()} {BRAND.developer}. All rights reserved. Designed
            with care in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}
