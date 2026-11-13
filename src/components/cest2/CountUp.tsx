"use client";

import { useEffect, useRef } from "react";
import { formatBRL } from "@/lib/sst-calc";

/*
  Counts a currency value up from zero the first time it scrolls into view.
  Writes straight to the text node instead of going through React state, so
  the animation costs no re-renders. The server renders the final value.
*/
export function CountUp({ value, duration = 1400 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let frame = 0;
    el.textContent = formatBRL(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          el.textContent = formatBRL(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = formatBRL(value);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatBRL(value)}
    </span>
  );
}
