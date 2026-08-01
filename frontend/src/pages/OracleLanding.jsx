import { useEffect } from "react";
import Header from "@/components/oracle/Header";
import Hero from "@/components/oracle/Hero";
import Marquee from "@/components/oracle/Marquee";
import About from "@/components/oracle/About";
import Manifesto from "@/components/oracle/Manifesto";
import Residences from "@/components/oracle/Residences";
import Gallery from "@/components/oracle/Gallery";
import Amenities from "@/components/oracle/Amenities";
import Location from "@/components/oracle/Location";
import Enquiry from "@/components/oracle/Enquiry";
import Footer from "@/components/oracle/Footer";
import Floating from "@/components/oracle/Floating";

export default function OracleLanding() {
  useEffect(() => {
    document.title = "Oracle by Hariom Realty — 2 & 3 BHK in Mulund East";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Oracle by Hariom Realty — an elegant residential address in Mulund East. 2 & 3 BHK luxury homes. MahaRERA registered. Register your interest.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const el = document.createElement("meta");
      el.name = "description";
      el.content = desc;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <main className="relative bg-[#F5EBDD] text-[#2A211B] overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Manifesto />
      <Residences />
      <Gallery />
      <Amenities />
      <Location />
      <Enquiry />
      <Footer />
      <Floating />
    </main>
  );
}
