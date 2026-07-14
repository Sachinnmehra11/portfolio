"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Reveal-on-scroll wrapper. Progressive enhancement:
 * - Server renders content in the visible state's markup; the `.reveal` class
 *   only hides it once JS confirms motion is allowed.
 * - Uses a single IntersectionObserver; unobserves after first reveal.
 * - Respects prefers-reduced-motion (content shown immediately, no transition).
 */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    setEnhanced(true); // apply hidden initial state only when we can animate

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as ElementType;
  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={cn(enhanced && "reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
