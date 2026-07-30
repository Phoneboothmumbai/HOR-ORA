import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight, Plus } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { BRAND, CONTACT, ASSETS } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

const LEGAL_TABS = [
  {
    id: "disclaimer",
    label: "Disclaimer",
    body: (
      <>
        <p>
          The images, renders, plans, layouts, dimensions, elevations, specifications
          and amenities depicted on this page are for representation purposes only and
          are subject to change without notice by the developer or the relevant
          authorities.
        </p>
        <p>
          Nothing on this page constitutes an offer, invitation to offer, or legal
          contract. Buyers are advised to independently verify all information,
          including MahaRERA registration details, before entering into any
          transaction. Prices are exclusive of applicable taxes and other statutory
          charges.
        </p>
        <p className="italic text-[#E9D6C7]/60">
          [Full disclaimer text — content pending from Hariom Realty. Please share
          final copy to replace this placeholder.]
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    body: (
      <>
        <p>
          When you submit an enquiry, we collect your name, mobile number, email
          address and preferred configuration solely to help our sales team respond to
          your interest in Oracle. Your information is stored securely and is never
          sold or shared with third parties for marketing purposes.
        </p>
        <p>
          You may withdraw consent or request deletion of your data at any time by
          writing to <a href={`mailto:${CONTACT.email}`} className="text-[#A37C3B] hover:underline">{CONTACT.email}</a>.
        </p>
        <p className="italic text-[#E9D6C7]/60">
          [Full privacy policy — content pending from Hariom Realty. Please share
          final copy to replace this placeholder.]
        </p>
      </>
    ),
  },
];

export default function Footer() {
  const [openTab, setOpenTab] = useState(null);
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
              <img
                src={ASSETS.oracleLogo}
                alt="Oracle by Hariom Realty"
                className="h-16 w-auto"
              />
            </div>
            <p className="font-display italic text-[#E9D6C7]/85 text-lg leading-snug max-w-xs">
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
                  <div className="font-display text-lg"><span className="font-sans font-light mr-1">+91</span>{CONTACT.primaryPhone}</div>
                  <div className="font-sans text-xs text-[#E9D6C7]/70">
                    Sales · WhatsApp
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
                <div className="font-sans text-[#E9D6C7]/90 text-sm leading-relaxed">
                  {CONTACT.office}
                  <br />
                  <span className="text-[#E9D6C7]/70">{CONTACT.hours}</span>
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
            <img
              src={ASSETS.hariomLogo}
              alt="Hariom Realty"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
            <div>
              <div className="font-display text-[#E9D6C7] text-lg leading-tight">
                Developed by {BRAND.developer}
              </div>
              <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B]">
                Building Realities
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

        {/* Legal tabs (Disclaimer + Privacy) */}
        <div className="mt-10 border-t border-[#A37C3B]/25">
          {LEGAL_TABS.map((t) => {
            const open = openTab === t.id;
            return (
              <div key={t.id} className="border-b border-[#A37C3B]/20">
                <button
                  data-testid={`footer-tab-${t.id}`}
                  onClick={() => setOpenTab(open ? null : t.id)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                  aria-expanded={open}
                >
                  <span className="font-sans text-[0.7rem] tracking-widest-2 uppercase text-[#E9D6C7]/85 group-hover:text-[#A37C3B] transition-colors">
                    {t.label}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#A37C3B]"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-4 md:pr-16 font-sans text-sm md:text-[0.95rem] text-[#E9D6C7]/85 leading-relaxed space-y-3">
                        {t.body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-sans text-[0.72rem] text-[#E9D6C7]/70 leading-relaxed">
          <p className="italic max-w-2xl">
            All images are artistic renders for representation purposes only. Prices,
            areas, specifications and amenities are subject to change without notice.
          </p>
          <p className="md:text-right">
            © {new Date().getFullYear()} {BRAND.developer}. All rights reserved.
            Designed with care in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}
