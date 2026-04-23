"use client";

import { useEffect } from "react";

/**
 * Observes every element carrying a `data-reveal` attribute and toggles
 * `.is-visible` as it enters the viewport. Paired with CSS in globals.css.
 *
 * One-shot by default (element stays visible after first reveal).
 * Add `data-reveal-repeat` on an element to re-trigger on every intersection.
 */
export function ScrollRevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Respect reduced-motion: immediately flag everything visible.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            if (!el.hasAttribute("data-reveal-repeat")) io.unobserve(el);
          } else if (el.hasAttribute("data-reveal-repeat")) {
            el.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    };
    observe();

    // Re-scan when the DOM changes (client-side navigation, dynamic content).
    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
