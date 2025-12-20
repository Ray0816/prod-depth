import { caseImages } from "../constants";

export default function InsightsCards() {
  const insights = [
    {
      title: "Markets reward teams that validate fast",
      snippet:
        "Early validation reduces risk, accelerates time-to-revenue, and ensures resources are invested where results are proven.Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.",
    },
    {
      title: "Users abandon products that feel confusing or slow",
      snippet:
        "Poor UX quietly destroys conversion and retention. Clear, fast experiences consistently outperform competitors. Poor UX quietly destroys conversion and retention. Clear, fast experiences consistently outperform competitors. Poor UX quietly destroys conversion and retention. Clear, fast experiences consistently outperform competitors.",
    },
    {
      title: "Unreliable systems now cost more than ever",
      snippet:
        "Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results. Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.",
    },
    {
      title: "Competition is accelerating — speed and clarity win",
      snippet:
        "Focused messaging and targeted campaigns help companies win customers before competitors do. Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.Teams that ship in short cycles and with strong reliability reduce downtime and deliver better results.",
    },
  ];

  return (
    <section id="why-now" className="mt-6 w-full pt-0">
      <div className="w-full px-0">
        <h3 className="text-2xl font-bold text-left px-4">
          {/* Why it matters now */}
        </h3>

        {/* ----------- MOBILE: HORIZONTAL SCROLL ----------- */}
        <div
          className="
            mt-12
            flex gap-6 overflow-x-auto px-4
            sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4
            scrollbar-hide
          "
        >
          {insights.map((item, i) => (
            <article
              key={i}
              className="
                group relative overflow-hidden border border-white/10 bg-black
                h-[420px] sm:h-[460px] lg:h-[520px]
                w-[85%] sm:w-full flex-shrink-0 sm:flex-shrink
                cursor-pointer
              "
            >
              {/* IMAGE FULL WIDTH */}
              <div className="w-full h-full relative">
                <img
                  src={caseImages[i] || caseImages[0]}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* TITLE – top-left */}
                <h4 className="absolute top-4 left-4 right-4 font-semibold text-white text-lg leading-tight z-10 shadow-slate-900 ">
                  {item.title}
                </h4>
              </div>

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 p-6 transition-opacity duration-300 flex flex-col justify-between">
                <p></p>
                <p className="text-sm text-slate-300">{item.snippet}</p>

                <button className="px-4 py-2 bg-white/10 text-white text-xs rounded-md border border-white/20 hover:bg-white/20 transition w-fit self-end">
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
