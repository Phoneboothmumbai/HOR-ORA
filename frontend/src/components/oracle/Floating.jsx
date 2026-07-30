import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { ORACLE } from "@/constants/testIds";
import { CONTACT } from "@/data/oracle";

export default function Floating() {
  const waMsg = encodeURIComponent(
    `Hello Hariom Realty, I'd like to know more about Oracle in Mulund East.`
  );

  return (
    <div className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3">
      <motion.a
        data-testid={ORACLE.floating.whatsapp}
        href={`https://wa.me/${CONTACT.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/40 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle size={22} />
      </motion.a>

      <motion.a
        data-testid={ORACLE.floating.call}
        href={`tel:+91${CONTACT.primaryPhone}`}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call sales"
        className="md:hidden w-14 h-14 rounded-full bg-[#A37C3B] text-[#24160F] flex items-center justify-center shadow-lg shadow-black/40"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
}
