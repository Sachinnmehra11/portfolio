import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Browser/app window chrome wrapper for original UI mockups.
 * `elevated` applies the level-3 shadow — reserved for the hero mockup.
 */
export function MockupFrame({
  label = "preview.app",
  elevated = false,
  className,
  children,
}: {
  label?: string;
  elevated?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-canvas",
        elevated ? "shadow-[var(--shadow-level-3)]" : "shadow-[var(--shadow-level-1)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-surface-soft px-4 py-2.5">
        <span aria-hidden className="size-2.5 rounded-full bg-accent-orange" />
        <span aria-hidden className="size-2.5 rounded-full bg-brand-warning" />
        <span aria-hidden className="size-2.5 rounded-full bg-brand-green" />
        <span className="t-mono ml-2 text-[12px] text-steel">{label}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

export default MockupFrame;
