import useForm from "../hooks/useForm";
import { Mail, Phone, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const { form, onChange, errors, loading, sent, submit } = useForm({
    name: "",
    company: "",
    email: "",
    need: "Product Health Assessment",
    message: "",
  });

  return (
    <section
      id="contact"
      className="mt-6 rounded-3xl p-10 glass-surface border border-white/10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold">
            Ready to level up your product?
          </h3>
          <p className="mt-3 text-slate-300">
            Start with a Product Health Assessment or book a discovery call —
            we’ll map the fastest path to measurable outcomes.
          </p>

          <ul className="mt-6 text-sm text-slate-300 space-y-2">
            <li>• 30–60 minute discovery call</li>
            <li>• Concise audit with prioritized roadmap</li>
            <li>• Clear KPIs and a 90-day action plan</li>
          </ul>

          <div className="mt-6 flex gap-4 items-center">
            <div className="inline-flex items-center gap-3 p-3 rounded-xl glass-card">
              <Mail size={18} />{" "}
              <span className="text-sm">hello@proddepth.com</span>
            </div>
            <div className="inline-flex items-center gap-3 p-3 rounded-xl glass-card">
              <Phone size={18} />{" "}
              <span className="text-sm">081-359-466-26</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="bg-white/3 p-6 rounded-2xl border border-white/10"
        >
          <div className="grid gap-3">
            <label className="text-sm font-medium text-slate-200">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="border border-white/20 rounded-md p-2 bg-transparent text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40"
              placeholder="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <div className="text-xs text-rose-400">{errors.name}</div>
            )}

            <label className="text-sm font-medium text-slate-200">
              Company
            </label>
            <input
              name="company"
              value={form.company}
              onChange={onChange}
              className="border border-white/20 rounded-md p-2 bg-transparent text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40"
              placeholder="Company"
              aria-invalid={!!errors.company}
            />
            {errors.company && (
              <div className="text-xs text-rose-400">{errors.company}</div>
            )}

            <label className="text-sm font-medium text-slate-200">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              className="border border-white/20 rounded-md p-2 bg-transparent text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <div className="text-xs text-rose-400">{errors.email}</div>
            )}

            <label className="text-sm font-medium text-slate-200">
              Service
            </label>
            <select
              name="need"
              value={form.need}
              onChange={onChange}
              className="border border-white/20 rounded-md p-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40"
            >
              <option>Product Health Assessment</option>
              <option>Fractional Product Manager</option>
              <option>Product Strategy</option>
              <option>Custom engagement</option>
            </select>

            <label className="text-sm font-medium text-slate-200">
              Message (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="border border-white/20 rounded-md p-2 bg-transparent text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40"
              placeholder="How can we help?"
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 font-medium shadow"
              >
                {loading ? "Sending..." : "Request assessment"}
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="inline-flex items-center gap-2 text-sm text-emerald-300"
                  >
                    <Check size={14} /> Sent — we’ll reply within 24 hours
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
