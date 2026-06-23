"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type FAQItem = { question: string; answer: string };

export function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-graphite/10 rounded-2xl border border-graphite/10 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <RevealOnScroll key={item.question} delay={index * 0.05}>
            <div>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-brand-dark sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-graphite/70">
                  {item.answer}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
