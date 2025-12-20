import { useEffect, useState } from "react";

export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const handler = () => setReduced(m.matches);
    m.addEventListener
      ? m.addEventListener("change", handler)
      : m.addListener(handler);
    return () =>
      m.removeEventListener
        ? m.removeEventListener("change", handler)
        : m.removeListener(handler);
  }, []);
  return reduced;
}
