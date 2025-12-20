import React from "react";

export default function DottedGlobe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="
          relative w-[520px] h-[520px]
          md:w-[760px] md:h-[760px]
          opacity-30 md:opacity-45
          animate-globe-rotation
        "
        style={{ transform: "rotateX(22deg)" }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>

            <pattern
              id="dots"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.3" fill="#7dd3fc" />
            </pattern>
          </defs>

          {/* outer sphere glow */}
          <circle cx="250" cy="250" r="240" fill="url(#glow)" />

          {/* dotted sphere */}
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="215"
            fill="url(#dots)"
            fillOpacity="0.6"
          />

          {/* longitude lines */}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={`lon-${i}`}
              cx="250"
              cy="250"
              rx={230 - i * 12}
              ry={Math.max(30, 215 - i * 25)}
              stroke="#60a5fa"
              strokeOpacity="0.12"
              strokeWidth="1"
              fill="none"
            />
          ))}

          {/* latitude rings */}
          {[...Array(6)].map((_, i) => {
            const offset = 80 + i * 25;
            return (
              <ellipse
                key={`lat-${i}`}
                cx="250"
                cy="250"
                rx={230}
                ry={offset}
                stroke="#93c5fd"
                strokeOpacity="0.12"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      <style>{`
        @keyframes globeRotate {
          0% { transform: rotateX(22deg) rotateY(0deg); }
          100% { transform: rotateX(22deg) rotateY(360deg); }
        }
        .animate-globe-rotation {
          animation: globeRotate 42s linear infinite;
        }
      `}</style>
    </div>
  );
}
