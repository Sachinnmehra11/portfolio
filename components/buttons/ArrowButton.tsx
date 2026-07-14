"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

/**
 * Primary pill CTA whose arrow nudges forward on hover/focus (Motion for
 * React variants). Reused wherever a "go" action wants a little life.
 */
export function ArrowButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <MotionLink
      href={href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-canvas shadow-[var(--shadow-level-1)] transition-colors hover:bg-charcoal focus-visible:outline-none",
        className,
      )}
    >
      {children}
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex"
      >
        <ArrowRight aria-hidden className="size-4" />
      </motion.span>
    </MotionLink>
  );
}

export default ArrowButton;
