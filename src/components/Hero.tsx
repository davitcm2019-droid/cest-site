"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const floatingTerms = [
  { label: "PGR", className: "left-[6%] top-[18%]" },
  { label: "PCMSO", className: "right-[8%] top-[14%]" },
  { label: "LTCAT", className: "left-[12%] top-[68%]" },
  { label: "PPP", className: "right-[14%] top-[60%]" },
  { label: "eSocial SST", className: "left-[2%] top-[44%]" },
  { label: "Treinamentos", className: "right-[2%] top-[40%]" },
  { label: "Laudos", className: "left-[22%] top-[86%]" },
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-dark"
    >
      <motion.div
        style={{ y: yBack }}
        className="bg-grid-technical pointer-events-none absolute inset-0"
      />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-28 sm:px-6 lg:px-8"
      >
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-accent opacity-0 animate-fade-up"
        >
          <ShieldCheck className="h-4 w-4" />
          {siteConfig.fullName}
        </div>

        <h1
          style={{ animationDelay: "0.1s" }}
          className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] text-white opacity-0 animate-fade-up sm:text-5xl lg:text-6xl"
        >
          Segurança do Trabalho com responsabilidade técnica e gestão prática
        </h1>

        <p
          style={{ animationDelay: "0.2s" }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 opacity-0 animate-fade-up sm:text-lg"
        >
          A CEST auxilia empresas na elaboração, revisão e gestão de
          documentos, laudos, treinamentos, eSocial SST e programas
          ocupacionais, garantindo mais conformidade, prevenção e organização
          para sua empresa.
        </p>

        <div
          style={{ animationDelay: "0.3s" }}
          className="mt-9 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row"
        >
          <Link
            href="/contato"
            className="group flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-brand-dark shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {siteConfig.ctas.primary}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/servicos"
            className="flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
          >
            Conhecer serviços
          </Link>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yFront }}
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {floatingTerms.map((term, index) => (
          <span
            key={term.label}
            style={{ animationDelay: `${0.4 + index * 0.07}s` }}
            className={`absolute rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/70 opacity-0 backdrop-blur-sm animate-fade-up ${term.className}`}
          >
            {term.label}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
