import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { serviceIcons } from "@/components/service-icons";
import { services } from "@/data/services";

/*
  Server component. This used to be a client component running GSAP +
  ScrollTrigger purely to fade cards in on scroll — roughly 70KB of JavaScript
  on the homepage's critical path for a decorative reveal.

  The reveal now comes from CSS scroll-driven animations (`.svc-card`,
  `.svc-icon`, `.svc-line` in globals.css). Content is visible by default and
  only animates where the browser supports `animation-timeline`, so it can
  never get stuck invisible the way the JS version could under CPU pressure.
*/
export function AnimatedServicesGrid() {
  return (
    <section className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-16">
          <p className="scroll-reveal text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Programas e documentos
          </p>
          <div className="mt-4 flex items-center gap-8">
            <h2 className="scroll-reveal shrink-0 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Serviços principais
            </h2>
            <div aria-hidden="true" className="svc-line h-px w-full bg-white/15" />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? Check;
            const num = String(i + 1).padStart(2, "0");
            // Cards in the same grid row enter the viewport together; shifting
            // each card's animation range keeps the cascade GSAP used to give.
            const stagger = { "--stagger": `${i * 5}%` } as CSSProperties;

            return (
              <li
                key={service.slug}
                style={stagger}
                className="svc-card group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-[transform,border-color,background-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-brand-accent/25 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/40"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-4 right-5 select-none font-display text-8xl font-extrabold leading-none text-white/[0.035]"
                >
                  {num}
                </span>

                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="text-xs font-bold tracking-[0.2em] text-brand-accent"
                  >
                    {num}
                  </span>
                  <div
                    aria-hidden="true"
                    style={stagger}
                    className="svc-icon flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-[border-color,background-color,color] duration-300 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/10 group-hover:text-brand-accent"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold leading-snug text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-medium text-white/65"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-3 shrink-0 rounded-full bg-brand-accent/70"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
