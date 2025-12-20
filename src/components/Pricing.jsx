export default function Pricing() {
  return (
    <section id="pricing" className="mt-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Pricing & engagement</h3>
        <p className="mt-3 text-slate-300">
          Transparent, outcome-aligned pricing. Short engagements up to retained
          fractional leadership.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <div className="text-xs text-slate-300">Starter</div>
            <div className="mt-2 text-2xl font-bold">$6,500</div>
            <div className="mt-3 text-sm text-slate-300">
              Product Health Assessment + 90-day plan
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <div className="text-xs text-slate-300">Scale</div>
            <div className="mt-2 text-2xl font-bold">$12,000 / month</div>
            <div className="mt-3 text-sm text-slate-300">
              Fractional PM (20 hours / week) + playbooks
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <div className="text-xs text-slate-300">Enterprise</div>
            <div className="mt-2 text-2xl font-bold">Custom</div>
            <div className="mt-3 text-sm text-slate-300">
              Dedicated leadership, custom SLAs and on-site support available.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
