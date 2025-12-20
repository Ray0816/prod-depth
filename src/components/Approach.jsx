export default function Approach() {
  return (
    <section id="approach" className="mt-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold">How we add value</h3>
        <p className="mt-3 text-slate-300">
          Consulting-grade rigor meets product speed. Outcome-focused,
          evidence-driven and built to scale — reducing risk and accelerating
          impact.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-6">
          {[
            ["Outcome focus", "Metric-driven plans"],
            ["Repeatability", "Toolkits & playbooks"],
            ["Speed", "Rapid sprints"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex-1 p-6 rounded-2xl glass-card text-center"
            >
              <div className="text-xs text-slate-300">{k}</div>
              <div className="font-semibold text-white mt-2">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
