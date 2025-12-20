import React from "react";
import { Briefcase, PenTool, Code, Megaphone } from "lucide-react";

// SolutionsSection — responsive, professional, tech‑blue theme
// Buttons fixed to the bottom of each card regardless of content length.
// Tailwind utilities used. Place below the Hero section.

export default function SolutionsSection({ onPrimaryCTAClick = () => {} }) {
  return (
    <section aria-labelledby="solutions-heading" className="py-0 bg-none w-full">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 ">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="solutions-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
          >
            We strategize, design, build and market products that drive revenue
          </h2>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* CARD: Strategy */}
          <article className="group relative   p-6 border border-white/10 bg-gray-900 rounded-4xl shadow-white hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-900 rounded-lg inline-flex ring-1 ring-sky-500">
                <Briefcase className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-sky-500">
                  We create business strategies
                </h3>
              </div>
            </div>
            <ul className="mt-4 text-sm text-white space-y-2">
              <li>
                Validate your idea, identify the right customers, and deliver a
                focused 90-day revenue plan with clear milestones.
              </li>
            </ul>
            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-semibold text-sky-500">
                Roles we provide
              </h4>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-24 overflow-hidden">
                {[
                  "Product Strategist",
                  "Market Researcher",
                  "Growth Strategist",
                  "Pricing Advisor",
                  "Launch Manager",
                ].map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full bg-none text-white border border-white/10 whitespace-nowrap"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-col items-start space-y-3">
              <div className="text-xs text-slate-500">
                Result: faster, evidence-based decisions.
              </div>
              <button
                onClick={onPrimaryCTAClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm transition-colors"
                aria-label="Request strategy review"
              >
                Request strategy review
              </button>
            </div>
          </article>

          {/* CARD: Design */}
          <article className="group relative   bg-gray-900 border border-white/10  p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out flex flex-col h-full ">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-bg-gray-900 rounded-lg inline-flex ring-1 ring-sky-500">
                <PenTool className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-sky-500">
                  We design products
                </h3>
              </div>
            </div>
            <ul className="mt-4 text-sm text-white space-y-2">
              <li>
                Get a simple design, fast user experiences and deliver tested
                prototypes with a clear style guide to improve conversion and
                satisfaction.
              </li>
            </ul>
            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-semibold text-sky-600">
                Roles we provide
              </h4>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-24 overflow-hidden">
                {[
                  "Product Designer",
                  "UX Researcher",
                  "Interaction Designer",
                  "Design Systems Lead",
                  "Usability Tester",
                ].map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full bg-none text-white border border-white/10 whitespace-nowrap"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-col items-start space-y-3">
              <div className="text-xs text-slate-500">
                Result: higher conversion and better retention.
              </div>
              <button
                onClick={onPrimaryCTAClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm transition-colors"
                aria-label="View design examples"
              >
                View design examples
              </button>
            </div>
          </article>

          {/* CARD: Build */}
          <article className="group relative   p-6 border border-white/10 bg-gray-900 rounded-4xl shadow-white hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-900 rounded-lg inline-flex ring-1 ring-sky-500">
                <Code className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-sky-500">We build products</h3>
              </div>
            </div>

            <ul className="mt-4 text-sm text-white space-y-2">
              <li>
                Get a reliable, easy-to-run software with fast delivery cycles,
                automated checks, and production-ready systems that keep uptime
                high and issues low.
              </li>
            </ul>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-semibold text-sky-500">
                Roles we provide
              </h4>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-24 overflow-hidden">
                {[
                  "Frontend Engineer",
                  "Backend Engineer",
                  "Mobile Developer",
                  "QA Engineer",
                  "Support Engineer",
                  "Technical Lead",
                ].map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full bg-none text-white border border-white/10 whitespace-nowrap"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col items-start space-y-3">
              <div className="text-xs text-slate-500">
                Result: dependable releases and stable operation.
              </div>
              <button
                onClick={onPrimaryCTAClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm transition-colors"
                aria-label="Request a health check"
              >
                Request a health check
              </button>
            </div>
          </article>

          {/* CARD: Market */}
          <article className="group relative   p-6 border border-white/10 bg-gray-900 rounded-4xl shadow-white hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col h-full">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-900 rounded-lg inline-flex ring-1 ring-sky-500">
                <Megaphone className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-sky-500">
                  We market products
                </h3>
              </div>
            </div>

            <ul className="mt-4 text-sm text-white space-y-2">
              <li>
                Get a clear messaging and focused campaigns that turn interest
                into paying customers, supported by tested messages, campaign
                assets, and a revenue-driven action plan.
              </li>
            </ul>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-semibold text-sky-500">
                Roles we provide
              </h4>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-24 overflow-hidden">
                {[
                  "Sales Engineer",
                  "Growth Marketer",
                  "Content & Comms",
                  "CRM Manager",
                  " Product Marketing Manager",
                ].map((r) => (
                  <span
                    key={r}
                    className="text-xs px-3 py-1 rounded-full bg-none text-white border border-white/10 whitespace-nowrap"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col items-start space-y-3">
              <div className="text-xs text-slate-500">
                Result: predictable acquisition and improved unit economics.
              </div>
              <button
                onClick={onPrimaryCTAClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm transition-colors"
                aria-label="Request a growth review"
              >
                Request a growth review
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
