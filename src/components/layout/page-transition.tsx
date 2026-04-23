"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Smooth page transitions for the App Router.
 *
 * Strategy:
 *   1. Watch `usePathname()`.
 *   2. When it changes, fade the previous content out, scroll to top,
 *      then mount the new children and fade them in.
 *   3. Pure CSS — no framer-motion, no extra deps.
 *
 * The animation duration is intentionally short (260 ms) so navigation
 * feels responsive rather than cinematic.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"in" | "out">("in");
  const prevPathRef = useRef(pathname);

  // When the pathname changes, fade out, then swap children, then fade in.
  useEffect(() => {
    if (pathname === prevPathRef.current) {
      // Same route, just an in-place re-render — keep latest children.
      setDisplayChildren(children);
      return;
    }

    setStage("out");
    const t = window.setTimeout(() => {
      setDisplayChildren(children);
      // Scroll restoration before fade-in feels best.
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      prevPathRef.current = pathname;
      setStage("in");
    }, 180);

    return () => window.clearTimeout(t);
  }, [pathname, children]);

  return (
    <div
      data-page-transition
      className={
        stage === "in"
          ? "animate-page-in"
          : "opacity-0 translate-y-1 transition-[opacity,transform] duration-200 ease-out"
      }
    >
      {displayChildren}
    </div>
  );
}
