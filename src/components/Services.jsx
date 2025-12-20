import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

export default function Services() {
  const reduceMotion = useReducedMotion();
  const items = [
    [
      "Market & User Research",
      "Surveys, interviews and analytics to uncover high-leverage user needs.",
    ],
    [
      "Product Strategy & Vision",
      "Clear strategy and a differentiated USP aligned to business goals.",
    ],
    [
      "Product Roadmap Development",
      "Prioritised roadmaps balancing discovery, delivery and impact.",
    ],
    [
      "Product Analytics & Optimization",
      "Dashboards and experiments that drive measurable improvements.",
    ],
  ];
  return (
    <section id="services" className="mt-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Core Product Management Services</h3>
        <p className="mt-3 text-slate-300">
          End-to-end capability from discovery to GTM and continuous
          optimisation — each service mapped to measurable outcomes.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map(([title, desc]) => (
          <motion.div
            whileHover={!reduceMotion ? { y: -6 } : undefined}
            className="p-6 rounded-2xl glass-card border border-white/10"
            key={title}
          >
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
