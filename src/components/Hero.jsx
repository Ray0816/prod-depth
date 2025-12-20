import { motion } from "framer-motion";
import TechMeshBackground from "./TechMeshBackground";

export default function Hero({
  containerVariants,
  itemVariants,
  onScrollToJourney,
}) {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden flex items-center justify-center w-full"
      style={{ height: "70vh", minHeight: "70vh" }}
    >
      {/* Background (absolute so it will not affect height) */}
      <TechMeshBackground />

      <div className="text-center max-w-3xl mx-auto flex flex-col gap-6 relative z-10 px-6">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="font-extrabold leading-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block">CONCEPT</span>

          <span className="block text-base sm:text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#fbfbfb] via-[#d9e8fa] to-[#60a5fa]">
            TO
          </span>

          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#7dd3fc] via-[#6aa0e7] to-[#60a5fa]">
            REVENUE
          </span>

          <div className="mt-4 max-w-xl mx-auto text-base sm:text-lg md:text-xl bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7dd3fc] via-[#6aa0e7] to-[#60a5fa]">
            We transform business ideas into measurable results through
            tech-driven solutions
          </div>
        </motion.h1>

        <div className="mt-8 flex items-center justify-center gap-6 sm:gap-16 flex-col sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full  font-medium shadow-lg  bg-sky-600"
          >
            See what we do
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-slate-200"
          >
            Contact our expert
          </a>
        </div>
      </div>
    </section>
  );
}
