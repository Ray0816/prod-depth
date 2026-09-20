import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SolutionsSection from "../components/SolutionsSection";
import Journey from "../components/Journey";
import Services from "../components/Services";
import Approach from "../components/Approach";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { navLinks } from "../constants";

// animation helpers
const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};
const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } };

export default function LandingPage() {
  function scrollToJourney() {
    const el = document.getElementById("journey");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative flex flex-col items-center justify-start text-slate-50 antialiased overflow-x-hidden w-full">
      <div className="fixed inset-0 z-0 bg-black" />

      <Header navLinks={navLinks} />

      <main className="w-full mx-auto px-4 sm:px-6 pt-16 pb-12 z-10 flex flex-col ">
        <Hero
          containerVariants={container}
          itemVariants={item}
          onScrollToJourney={scrollToJourney}
        />
        <CaseStudies />
        <SolutionsSection />
        <Journey />
        <section className="mt-8  ">
          <div className="overflow-hidden glass-surface border border-white/10 shadow-2xl">
            <div className="w-full h-64 sm:h-80 md:h-96 relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="strategy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <Approach />

        <ContactForm />
        <Footer />
      </main>

      <style>
        {`/* Glass styles (moved from inline for clarity) */
.glassy-cta { position: relative; display: inline-block; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); background: linear-gradient(90deg, rgba(6,182,212,0.10), rgba(14,165,164,0.04)); border: 1px solid rgba(255,255,255,0.10); border-radius: 12px; box-shadow: 0 8px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.03); overflow: hidden; transition: transform .25s ease, box-shadow .25s ease, backdrop-filter .25s ease; }
.glassy-cta::after { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 50%, rgba(255,255,255,0.05) 100%); mix-blend-mode: overlay; pointer-events: none; opacity: 0.8; }
.glassy-cta:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(2,6,23,0.72), inset 0 1px 0 rgba(255,255,255,0.04); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.glass-card { position: relative; background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015)); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; box-shadow: 0 6px 28px rgba(2,6,23,0.55), 0 1px 0 rgba(255,255,255,0.02) inset; overflow: hidden; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: transform .28s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease, background .28s ease; }
.glass-card::before { content: ''; position: absolute; inset: -40% -40% auto auto; width: 200%; height: 120%; background: radial-gradient(ellipse at top left, rgba(255,255,255,0.05), rgba(255,255,255,0) 35%); transform: rotate(-18deg); filter: blur(18px); opacity: 0.5; pointer-events: none; mix-blend-mode: overlay; }
.glass-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(2,6,23,0.68); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
.glass-surface { position: relative; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; box-shadow: 0 20px 60px rgba(2,6,23,0.6); overflow: hidden; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
.glass-surface::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); pointer-events: none; mix-blend-mode: overlay; }
.glass-card::after, .glass-surface::before { content: ''; position: absolute; inset: 0; opacity: 0.5; pointer-events: none; mix-blend-mode: soft-light; transform: translateZ(0); }
.glass-card img { transition: transform .35s ease; }
.glass-card:hover img { transform: scale(1.03); }
@media (max-width: 768px) { .glass-card, .glass-surface, .glassy-cta { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); } }
`}{" "}
      </style>
    </div>
  );
}
