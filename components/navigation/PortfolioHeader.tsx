"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, resumeNav } from "@/content/navigation";
import { profile } from "@/content/profile";
import { Button } from "@/components/buttons/Button";
import { ThemeToggle } from "@/components/interactive/ThemeToggle";
import { SocialLink } from "./SocialLink";
import { cn } from "@/lib/cn";

/**
 * Sticky header with:
 * - scroll-spy active-section marker (IntersectionObserver on homepage sections)
 * - condensed border/shadow after scroll
 * - accessible mobile drawer (<1024px) with focus-safe open/close + Esc + scroll lock
 */
export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Condensed state on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active section (homepage only; ids may be absent elsewhere)
  useEffect(() => {
    const ids = navItems.map((i) => i.sectionId).filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close drawer on Escape; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 w-full backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200",
        "supports-[backdrop-filter]:bg-canvas/75 bg-canvas/95",
        scrolled
          ? "border-b border-hairline shadow-[var(--shadow-level-1)] supports-[backdrop-filter]:bg-canvas/90"
          : "border-b border-hairline/60",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Personal mark */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md focus-visible:outline-none"
          aria-label={`${profile.name} — home`}
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-ink text-canvas t-mono text-[13px] font-semibold">
            SM
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">
            {profile.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none",
                  isActive ? "text-ink" : "text-slate hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-green transition-opacity duration-[180ms]",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
            <SocialLink kind="github" href={profile.links.github} label="GitHub profile (opens in a new tab)" />
            <SocialLink kind="linkedin" href={profile.links.linkedin} label="LinkedIn profile (opens in a new tab)" />
          </div>
          <ThemeToggle />
          <Button href={resumeNav.href} size="md" className="hidden sm:inline-flex">
            {resumeNav.label}
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden focus-visible:outline-none"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-primary/40 lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-drawer"
            className="fixed inset-x-0 top-16 z-40 border-b border-hairline bg-canvas p-5 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-surface focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={resumeNav.href}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-canvas"
              >
                {resumeNav.label}
              </Link>
              <div className="mt-3 flex items-center gap-1">
                <SocialLink kind="github" href={profile.links.github} label="GitHub profile (opens in a new tab)" />
                <SocialLink kind="linkedin" href={profile.links.linkedin} label="LinkedIn profile (opens in a new tab)" />
                <SocialLink kind="email" href={`mailto:${profile.email}`} label={`Email ${profile.name}`} />
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

export default PortfolioHeader;
