export default function Journey() {
  return (
    <section id="journey" className="mt-6">
      <div
        className="glass-card border border-white/10 rounded-2xl p-6"
        style={{ width: "80vw", maxWidth: "1400px" }}
      >
        <div className="mb-4 text-center">
          <h4 className="text-xl font-semibold md:text-6xl">Client journey</h4>
          <p className="mt-2 text-l text-slate-300 max-w-24xl mx-auto md:text-3xl">
            We create business strategies, design products, build and
            market them.
          </p>
        </div>

        <div className="hidden md:block">
          {/* SVG flow: kept intact for maintainability */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 360"
            role="img"
            aria-labelledby="pmJourneyTitle"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMin meet"
          >
            <title id="pmJourneyTitle">
              Product Manager client journey: Discovery, Strategy, Design,
              Build, Launch, Growth
            </title>
            <defs>
              <style>{`.t{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight:600; font-size:14px; fill:#0B1A2B}.muted{font-family:Inter, system-ui; font-weight:400; font-size:12px; fill:#6B7280}.stage-bg{fill:#E8F1FF; rx:14}.blue{fill:#0B5FFF}.arrow{fill:none; stroke:#C7D8FF; stroke-width:3}`}</style>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <path d="M0,0 L10,3.5 L0,7 z" fill="#C7D8FF" />
              </marker>
            </defs>

            <path
              className="arrow"
              d="M80 60 C260 60 340 60 520 60 C700 60 780 60 960 60 C1140 60 1320 60 1400 60"
              markerEnd="url(#arrowhead)"
            />

            {/* Top row */}
            <g transform="translate(40,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t " style={{ fontSize: 18 }}>
                  Discovery
                </text>
                <text x="0" y="56" className="muted">
                  “You understood our pain.”
                </text>
              </g>
            </g>
            <g transform="translate(260,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t" style={{ fontSize: 18 }}>
                  Strategy
                </text>
                <text x="0" y="56" className="muted">
                  Clear product direction
                </text>
              </g>
            </g>
            <g transform="translate(480,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t" style={{ fontSize: 18 }}>
                  Design
                </text>
                <text x="0" y="56" className="muted">
                  Solution takes shape
                </text>
              </g>
            </g>
            <g transform="translate(700,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t" style={{ fontSize: 18 }}>
                  Build
                </text>
                <text x="0" y="56" className="muted">
                  We see steady progress
                </text>
              </g>
            </g>
            <g transform="translate(920,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t" style={{ fontSize: 18 }}>
                  Launch
                </text>
                <text x="0" y="56" className="muted">
                  Product goes live
                </text>
              </g>
            </g>
            <g transform="translate(1140,20)">
              <rect width="200" height="110" className="stage-bg" rx="14" />
              <g transform="translate(14,14)">
                <circle cx="20" cy="20" r="20" className="blue" />
                <text x="52" y="26" className="t" style={{ fontSize: 18 }}>
                  Growth
                </text>
                <text x="0" y="56" className="muted">
                  We see results
                </text>
              </g>
            </g>

            {/* Bottom row: PM operations */}
            <g transform="translate(40,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Research
              </text>
              <text x="18" y="52" className="muted">
                User &amp; market research
              </text>
            </g>
            <g transform="translate(260,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Strategy &amp; Roadmap
              </text>
              <text x="18" y="52" className="muted">
                Prioritization
              </text>
            </g>
            <g transform="translate(480,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Design &amp; Validate
              </text>
              <text x="18" y="52" className="muted">
                UX &amp; prototypes
              </text>
            </g>
            <g transform="translate(700,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Build &amp; Coordinate
              </text>
              <text x="18" y="52" className="muted">
                Sprints &amp; QA
              </text>
            </g>
            <g transform="translate(920,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Launch &amp; Iterate
              </text>
              <text x="18" y="52" className="muted">
                Rollout &amp; feedback
              </text>
            </g>
            <g transform="translate(1140,160)">
              <rect
                width="200"
                height="200"
                rx="12"
                fill="#FFFFFF"
                stroke="#E6EEF9"
              />
              <text x="18" y="28" className="t" style={{ fontSize: 18 }}>
                Measure &amp; Grow
              </text>
              <text x="18" y="52" className="muted">
                Analytics &amp; experiments
              </text>
            </g>
          </svg>
        </div>

        <div className="md:hidden mt-6 grid grid-cols-1 gap-4">
          {[
            {
              title: "Discovery",
              subtitle: "“You understood our pain.”",
              meta: "PM — User & market research",
            },
            {
              title: "Strategy",
              subtitle: "Clear product direction",
              meta: "PM — Prioritization & roadmap",
            },
            {
              title: "Design",
              subtitle: "Solution takes shape",
              meta: "PM — UX validation & prototypes",
            },
            {
              title: "Build",
              subtitle: "We see steady progress",
              meta: "PM — Sprints & QA",
            },
            {
              title: "Launch",
              subtitle: "Product goes live",
              meta: "PM — Rollout & feedback",
            },
            {
              title: "Growth",
              subtitle: "We see results",
              meta: "PM — Analytics & experiments",
            },
          ].map((s, idx) => (
            <div
              key={s.title}
              className="p-4 rounded-xl bg-white/4 border border-white/6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8F1FF] flex items-center justify-center text-[#0B5FFF] font-semibold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{s.title}</div>
                  <div className="text-sm text-slate-300">{s.subtitle}</div>
                  <div className="mt-2 text-xs text-slate-400">{s.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
