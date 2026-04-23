"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface Props {
  children: React.ReactNode;
  direction?: Direction;
  /** Trigger delay in ms — use for stagger on sibling items. */
  delay?: number;
  /** Animation duration in ms. Default 700. */
  duration?: number;
  /** How much of the element should be visible before triggering. Default 0.15. */
  threshold?: number;
  /** Allow replay when element leaves & re-enters viewport. Default false (one-shot). */
  repeat?: boolean;
  /** Which HTML element to render. Default "div". */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

const fromTransform: Record<Direction, string> = {
  up: "translate3d(0, 24px, 0)",
  down: "translate3d(0, -24px, 0)",
  left: "translate3d(24px, 0, 0)",
  right: "translate3d(-24px, 0, 0)",
  fade: "translate3d(0, 0, 0)",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  repeat = false,
  as = "div",
  className,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced motion preference.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) io.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, repeat]);

  const Tag = as as keyof React.JSX.IntrinsicElements;
  // @ts-expect-error dynamic tag + ref
  return (
    <Tag
      ref={ref as never}
      className={cn("will-change-transform", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : fromTransform[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
