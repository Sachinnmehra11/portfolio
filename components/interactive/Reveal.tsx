"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "li" | "span";

/**
 * Scroll-reveal wrapper built on Motion for React. Fades + lifts content in
 * once, when it enters the viewport. Honors prefers-reduced-motion globally
 * via MotionConfig (see MotionProvider) — reduced motion keeps opacity only.
 *
 * API is unchanged from the previous IntersectionObserver version so all
 * existing call sites keep working.
 */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: RevealTag;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const MotionTag = motion[as];

  return (
    <MotionTag
      // @ts-expect-error — ref type varies by tag; runtime is correct.
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
