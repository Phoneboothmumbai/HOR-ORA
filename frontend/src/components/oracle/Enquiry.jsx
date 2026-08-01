import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { ORACLE } from "@/constants/testIds";
import { CONTACT } from "@/data/oracle";
import { FadeUp, LineReveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Google Form submit placeholder - client will paste FORM_ID + entry.XXXX later.
const GOOGLE_FORM = {
  FORM_ID: "PASTE_FORM_ID_HERE",
  entries: {
    full_name: "entry.0000000001",
    mobile: "entry.0000000002",
    email: "entry.0000000003",
    property_type: "entry.0000000004",
    budget: "entry.0000000005",
  },
};

async function postToGoogleForm(data) {
  if (!GOOGLE_FORM.FORM_ID || GOOGLE_FORM.FORM_ID.startsWith("PASTE")) return;
  try {
    const form = new FormData();
    form.append(GOOGLE_FORM.entries.full_name, data.full_name);
    form.append(GOOGLE_FORM.entries.mobile, data.mobile);
    form.append(GOOGLE_FORM.entries.email, data.email);
    form.append(GOOGLE_FORM.entries.property_type, data.property_type);
    form.append(GOOGLE_FORM.entries.budget, data.budget);
    await fetch(
      `https://docs.google.com/forms/d/e/${GOOGLE_FORM.FORM_ID}/formResponse`,
      { method: "POST", mode: "no-cors", body: form }
    );
  } catch (_) {
    /* silent - Google Form is best-effort */
  }
}

const PROPERTY_OPTIONS = ["1 BHK", "2 BHK", "3 BHK"];
const BUDGET_OPTIONS = [
  "₹1.9–2.2 Cr",
  "₹2.2–2.5 Cr",
  "₹3–3.2 Cr",
  "₹3.2 Cr+",
];

export default function Enquiry() {
  const [state, setState] = useState({
    full_name: "",
    mobile: "",
    email: "",
    property_type: "",
    budget: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const change = (k) => (e) => {
    setState((s) => ({ ...s, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (!state.full_name || state.full_name.trim().length < 2) e.full_name = "Please enter your name.";
    if (!/^\d{10}$/.test(state.mobile.replace(/\s/g, ""))) e.mobile = "Enter a 10-digit mobile.";
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(state.email)) e.email = "Enter a valid email.";
    if (!state.property_type) e.property_type = "Choose a property type.";
    if (!state.budget) e.budget = "Choose a budget bracket.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Dual-save: MongoDB (primary) + Google Form (backup)
      await axios.post(`${API}/leads`, {
        full_name: state.full_name.trim(),
        mobile: state.mobile.trim(),
        email: state.email.trim(),
        property_type: state.property_type,
        budget: state.budget,
        source: "oracle_landing",
      });
      postToGoogleForm(state); // fire-and-forget
      setSuccess(true);
      toast.success("Thank you — our team will contact you shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  const waMsg = encodeURIComponent(
    `Hello Hariom Realty, I'd like to know more about Oracle in Mulund East.`
  );

  return (
    <section
      id="enquiry"
      data-testid={ORACLE.enquiry.root}
      className="relative bg-[#24160F] text-[#E9D6C7] py-14 md:py-24 lg:py-32 grain overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeUp>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]">
              (10) — Register Interest
            </span>
            <div className="flex-1 h-px bg-[#A37C3B]/25" />
            <span className="font-sans text-[0.65rem] tracking-widest-2 uppercase text-[#A37C3B]/70">
              We respond within 24 hours
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:pr-8">
            <h2 className="font-display text-[#E9D6C7] text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] mb-8">
              <LineReveal text="Reserve" />
              <br />
              <span className="italic text-[#A37C3B] font-mono-serif">
                <LineReveal text="a viewing." delay={0.15} />
              </span>
            </h2>

            <FadeUp delay={0.3}>
              <p className="font-sans text-[#E9D6C7]/85 leading-relaxed text-base md:text-lg max-w-md">
                Leave your details. A senior sales associate will personally curate a
                walkthrough of the sample flat, price cards and configuration details.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="mt-12 space-y-6 border-t border-[#A37C3B]/25 pt-8">
                <div>
                  <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1">
                    Sales Line
                  </div>
                  <a
                    href={`tel:+91${CONTACT.primaryPhone}`}
                    className="font-display text-2xl text-[#E9D6C7] hover:text-[#A37C3B] transition-colors"
                  >
                    <span className="font-sans font-light mr-1">+91</span>{CONTACT.primaryPhone}
                  </a>
                </div>
                <div>
                  <div className="font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-1">
                    Sales Office
                  </div>
                  <p className="font-sans text-[#E9D6C7]/90 text-sm leading-relaxed">
                    {CONTACT.office}
                  </p>
                  <p className="font-sans text-[#E9D6C7]/70 text-xs mt-1">
                    {CONTACT.hours}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[#A37C3B] hover:text-[#E9D6C7] font-sans text-xs tracking-widest-2 uppercase transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp instead
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  data-testid={ORACLE.enquiry.form}
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-[#35251F] border border-[#A37C3B]/30 p-6 md:p-12"
                >
                  <div className="absolute -top-3 left-8 bg-[#24160F] px-3 font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B]">
                    · Enquiry
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <Field
                      label="Full Name"
                      value={state.full_name}
                      onChange={change("full_name")}
                      error={errors.full_name}
                      testId={ORACLE.enquiry.fullName}
                      placeholder="e.g. Rhea Somaiya"
                      autoComplete="name"
                    />
                    <Field
                      label="Mobile"
                      type="tel"
                      value={state.mobile}
                      onChange={change("mobile")}
                      error={errors.mobile}
                      testId={ORACLE.enquiry.mobile}
                      placeholder="10-digit number"
                      autoComplete="tel"
                      maxLength={10}
                    />
                    <div className="md:col-span-2">
                      <Field
                        label="Email"
                        type="email"
                        value={state.email}
                        onChange={change("email")}
                        error={errors.email}
                        testId={ORACLE.enquiry.email}
                        placeholder="you@address.com"
                        autoComplete="email"
                      />
                    </div>

                    {/* Property type as segmented radio */}
                    <div>
                      <FieldLabel>Property Type</FieldLabel>
                      <div className="flex flex-wrap gap-2">
                        {PROPERTY_OPTIONS.map((p) => {
                          const stableId = `${ORACLE.enquiry.propertyType}-${p
                            .replace(" ", "-")
                            .toLowerCase()}`;
                          const isActive = state.property_type === p;
                          return (
                            <button
                              key={p}
                              type="button"
                              data-testid={stableId}
                              data-selected={isActive ? "true" : "false"}
                              aria-pressed={isActive}
                              onClick={() =>
                                setState((s) => ({ ...s, property_type: p }))
                              }
                              className={`px-4 py-2 border font-sans text-xs tracking-widest-2 uppercase transition-all duration-300 ${
                                isActive
                                  ? "border-[#A37C3B] bg-[#A37C3B] text-[#24160F]"
                                  : "border-[#A37C3B]/40 text-[#E9D6C7]/90 hover:border-[#A37C3B]"
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                      {errors.property_type && (
                        <div className="mt-2 text-[0.7rem] text-red-300 font-sans">
                          {errors.property_type}
                        </div>
                      )}
                    </div>

                    <div>
                      <FieldLabel>Budget</FieldLabel>
                      <div className="relative">
                        <select
                          data-testid={ORACLE.enquiry.budget}
                          value={state.budget}
                          onChange={change("budget")}
                          className="oracle-input-dark appearance-none pr-8 cursor-pointer bg-transparent"
                        >
                          <option value="" className="bg-[#24160F]">
                            Select bracket…
                          </option>
                          {BUDGET_OPTIONS.map((b) => (
                            <option key={b} value={b} className="bg-[#24160F]">
                              {b}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-0 top-3 text-[#A37C3B]">
                          ▾
                        </span>
                      </div>
                      {errors.budget && (
                        <div className="mt-2 text-[0.7rem] text-red-300 font-sans">
                          {errors.budget}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#A37C3B]/25 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <p className="font-sans text-[0.72rem] tracking-wide text-[#E9D6C7]/75 italic max-w-md">
                      By registering interest, you consent to be contacted regarding
                      Oracle. Your details are treated per our privacy policy.
                    </p>
                    <button
                      type="submit"
                      data-testid={ORACLE.enquiry.submit}
                      disabled={submitting}
                      className="gold-btn group inline-flex items-center justify-between gap-4 bg-[#A37C3B] hover:text-[#35251F] text-[#F5EBDD] px-8 py-5 font-sans text-xs tracking-widest-2 uppercase min-w-[240px] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{submitting ? "Sending…" : "Submit Enquiry"}</span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  data-testid={ORACLE.enquiry.success}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-[#35251F] border border-[#A37C3B]/50 p-6 md:p-14"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full border border-[#A37C3B] flex items-center justify-center mb-8"
                  >
                    <Check size={24} className="text-[#A37C3B]" />
                  </motion.div>

                  <h3 className="font-display text-4xl md:text-5xl leading-tight text-[#E9D6C7] mb-4">
                    Thank you<span className="text-[#A37C3B]">.</span>
                  </h3>
                  <p className="font-sans text-[#E9D6C7]/90 leading-relaxed max-w-md">
                    Your interest is registered. A senior sales associate from Hariom
                    Realty will personally reach out to <span className="text-[#A37C3B]">{state.email}</span> within the next
                    24 hours.
                  </p>

                  <div className="mt-10 flex flex-col md:flex-row gap-4">
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="gold-btn inline-flex items-center justify-center gap-3 bg-[#A37C3B] hover:text-[#35251F] text-[#F5EBDD] px-6 py-4 font-sans text-xs tracking-widest-2 uppercase"
                    >
                      <MessageCircle size={16} /> Continue on WhatsApp
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="inline-flex items-center justify-center gap-3 border border-[#A37C3B]/50 text-[#A37C3B] hover:text-[#E9D6C7] hover:border-[#E9D6C7] px-6 py-4 font-sans text-xs tracking-widest-2 uppercase transition-colors"
                    >
                      Email the team
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({ children }) {
  return (
    <label className="block font-sans text-[0.6rem] tracking-widest-2 uppercase text-[#A37C3B] mb-3">
      {children}
    </label>
  );
}

function Field({ label, testId, error, ...rest }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        data-testid={testId}
        className="oracle-input-dark"
        {...rest}
      />
      {error && (
        <div className="mt-2 text-[0.7rem] text-red-300 font-sans">{error}</div>
      )}
    </div>
  );
}
