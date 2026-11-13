"use client";

import { useEffect } from "react";

/*
  The only JavaScript the entrance animations need. One observer for every
  `.fx-auto` block on the page, so the sections themselves stay server
  components and ship no code.

  Server HTML carries no `data-state` (final state, fully visible). This arms
  each block to "out" and flips it to "in" once it is on screen — so with JS
  off, or if hydration fails, nothing is ever left hidden.
*/
export function FxObserver() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.state = "in";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll<HTMLElement>(".fx-auto").forEach((el) => {
      el.dataset.state = "out";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
