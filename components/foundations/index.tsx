import { createElement, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/* Container — centered max-width with responsive gutters                     */
/* -------------------------------------------------------------------------- */
export function Container({
  as = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return createElement(as, { className: cn("container-page", className) }, children);
}

/* -------------------------------------------------------------------------- */
/* Section — vertical rhythm wrapper with optional id anchor                   */
/* -------------------------------------------------------------------------- */
type SectionSpacing = "hero" | "lg" | "md" | "sm";

const sectionPadding: Record<SectionSpacing, string> = {
  hero: "py-[clamp(72px,12vw,120px)]",
  lg: "py-[clamp(64px,10vw,96px)]",
  md: "py-[clamp(48px,8vw,64px)]",
  sm: "py-[clamp(32px,6vw,48px)]",
};

export function Section({
  id,
  spacing = "lg",
  className,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: {
  id?: string;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(sectionPadding[spacing], "scroll-mt-24", className)}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Stack — vertical flow with token gap                                        */
/* -------------------------------------------------------------------------- */
const gapScale: Record<string, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5",
  xl: "gap-6",
  xxl: "gap-8",
};

export function Stack({
  gap = "md",
  className,
  children,
}: {
  gap?: keyof typeof gapScale;
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("flex flex-col", gapScale[gap], className)}>{children}</div>;
}

/* -------------------------------------------------------------------------- */
/* Cluster — horizontal wrap group                                             */
/* -------------------------------------------------------------------------- */
export function Cluster({
  gap = "sm",
  className,
  children,
}: {
  gap?: keyof typeof gapScale;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-wrap items-center", gapScale[gap], className)}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Grid — responsive columns                                                   */
/* -------------------------------------------------------------------------- */
const colsScale: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function Grid({
  cols = 3,
  className,
  children,
}: {
  cols?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4", colsScale[cols], className)}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Divider                                                                     */
/* -------------------------------------------------------------------------- */
export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-hairline", className)} />;
}

/* -------------------------------------------------------------------------- */
/* VisuallyHidden — accessible-only text                                       */
/* -------------------------------------------------------------------------- */
export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}
