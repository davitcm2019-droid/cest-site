"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceIcons } from "@/components/service-icons";
import { services } from "@/data/services";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Eyebrow fades up
      gsap.from(".svc-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".svc-heading",
          start: "top 82%",
        },
      });

      // Title slides up
      gsap.from(".svc-title", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".svc-heading",
          start: "top 82%",
        },
      });

      // Divider line draws from left
      gsap.from(".svc-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".svc-heading",
          start: "top 82%",
        },
      });

      // Cards stagger in
      gsap.from(".svc-card", {
        y: 56,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 78%",
        },
      });

      // Card number accent reveals from left
      gsap.from(".svc-num", {
        x: -12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 78%",
        },
      });

      // Icon scale-in
      gsap.from(".svc-icon", {
        scale: 0.5,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 78%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="svc-heading mb-16">
          <p className="svc-eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Programas e documentos
          </p>
          <div className="mt-4 flex items-center gap-8">
            <h2 className="svc-title shrink-0 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Serviços principais
            </h2>
            <div className="svc-line h-px w-full bg-white/15" />
          </div>
        </div>

        {/* Grid */}
        <div className="svc-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? Check;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div
                key={service.slug}
                className="svc-card group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/25 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/40"
              >
                {/* Ghost number background */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-4 right-5 select-none font-display text-8xl font-extrabold leading-none text-white/[0.035]"
                >
                  {num}
                </span>

                {/* Top row: number + icon */}
                <div className="flex items-center justify-between">
                  <span className="svc-num text-xs font-bold tracking-[0.2em] text-brand-accent">
                    {num}
                  </span>
                  <div className="svc-icon flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all duration-400 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/10 group-hover:text-brand-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="mt-6 text-lg font-bold leading-snug text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="mt-auto space-y-2 border-t border-white/10 pt-5 mt-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-medium text-white/65"
                    >
                      <span className="h-px w-3 shrink-0 rounded-full bg-brand-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
