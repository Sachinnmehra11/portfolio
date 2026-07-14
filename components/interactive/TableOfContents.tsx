"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Sticky in-page table of contents with scroll-spy for case-study pages. */
export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="flex flex-col gap-2">
      <span className="t-micro-upper text-steel">On this page</span>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block rounded-md border-l-2 py-1 pl-3 t-body-sm transition-colors focus-visible:outline-none",
                  isActive
                    ? "border-brand-green font-medium text-ink"
                    : "border-hairline text-slate hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TableOfContents;
