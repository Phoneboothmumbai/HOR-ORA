import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { ASSETS } from "@/data/oracle";

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "residences", label: "Residences" },
  { id: "amenities", label: "Amenities" },
  { id: "location", label: "Location" },
  { id: "enquiry", label: "Enquire" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      data-testid={ORACLE.header.root}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#24160F]/92 backdrop-blur-xl border-b border-[#A37C3B]/25"
          : "bg-gradient-to-b from-[#24160F]/70 via-[#24160F]/40 to-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-3 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 leading-none"
        >
          <img
            src={ASSETS.oracleLogo}
            alt="Oracle by Hariom Realty"
            className="h-10 md:h-12 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={ORACLE.header.nav(n.id)}
              onClick={() => scrollTo(n.id)}
              className="group relative font-sans text-[0.72rem] tracking-widest-2 uppercase text-[#E9D6C7]/85 hover:text-[#A37C3B] transition-colors"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#A37C3B] transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          data-testid={ORACLE.header.ctaEnquire}
          onClick={() => scrollTo("enquiry")}
          className="hidden lg:inline-flex gold-btn items-center gap-3 border border-[#A37C3B] bg-[#A37C3B]/15 backdrop-blur-sm text-[#E9D6C7] hover:text-[#35251F] px-6 py-3 font-sans text-[0.7rem] tracking-widest-2 uppercase transition-colors"
        >
          Register Interest
          <span className="w-6 h-px bg-current" />
        </button>

        {/* Mobile toggle */}
        <button
          data-testid={ORACLE.header.mobileMenuToggle}
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden text-[#E9D6C7] p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid={ORACLE.header.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#24160F] border-t border-[#A37C3B]/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.id}
                  data-testid={`mobile-${ORACLE.header.nav(n.id)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  onClick={() => scrollTo(n.id)}
                  className="text-left font-display text-[#E9D6C7] text-2xl border-b border-[#A37C3B]/15 pb-4 flex items-center justify-between"
                >
                  <span>{n.label}</span>
                  <span className="text-[#A37C3B] font-sans text-xs">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
              <button
                data-testid={`mobile-${ORACLE.header.ctaEnquire}`}
                onClick={() => scrollTo("enquiry")}
                className="mt-2 gold-btn border border-[#A37C3B] text-[#A37C3B] hover:text-[#35251F] px-6 py-4 font-sans text-xs tracking-widest-2 uppercase"
              >
                Register Interest
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
