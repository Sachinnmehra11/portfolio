"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Light/dark theme toggle. The initial theme is set before paint by the
 * no-flash script in the root layout (localStorage → system preference),
 * so this button only flips + persists the choice. Both icons render and
 * CSS shows the correct one per [data-theme], which avoids a hydration
 * mismatch (the server can't know the resolved theme).
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — choice simply won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      title="Toggle theme"
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md text-charcoal",
        "transition-colors duration-[180ms] ease-out hover:bg-surface hover:text-ink focus-visible:outline-none",
        className,
      )}
    >
      <Moon aria-hidden className="theme-icon-to-dark size-5" />
      <Sun aria-hidden className="theme-icon-to-light size-5" />
    </button>
  );
}

export default ThemeToggle;
