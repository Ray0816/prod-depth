export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "ProdDepth helped us turn a confused roadmap into a clear plan — our ARR grew significantly.",
      who: "VP Product, Fintech",
    },
    {
      quote:
        "Their fractional PMs integrated with our teams fast and shipped high-value work.",
      who: "GM, SaaS",
    },
    {
      quote:
        "The Product Health Assessment exposed low-hanging wins that doubled onboarding conversion.",
      who: "Head of Growth",
    },
  ];
  return (
    <section className="mt-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold">What clients say</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="p-6 rounded-2xl glass-card border border-white/10"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-xs text-slate-300">{t.who}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
