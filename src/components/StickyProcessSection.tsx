"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function StickyProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(latest * processSteps.length))
    );
    setActive(index);
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${processSteps.length * 100}vh` }}
    >
      <div className="bg-grid-technical sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Metodologia CEST
          </span>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Como a CEST organiza a SST da sua empresa
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col gap-1 lg:col-span-2">
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex items-center gap-4 rounded-lg px-4 py-3.5 text-left transition-colors duration-300",
                    active === index ? "bg-white/10" : "hover:bg-white/5"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300",
                      active === index
                        ? "bg-brand-accent text-brand-dark"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors duration-300 sm:text-base",
                      active === index ? "text-white" : "text-white/50"
                    )}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative min-h-[160px] lg:col-span-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <span className="font-display text-5xl font-extrabold text-brand-accent/30">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {processSteps[active].title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {processSteps[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
