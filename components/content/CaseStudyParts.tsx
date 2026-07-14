import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/* Breadcrumbs ------------------------------------------------------------- */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 t-caption text-steel">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-ink focus-visible:outline-none">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight aria-hidden className="size-3.5" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* CaseStudySection — anchored, separated content block -------------------- */
export function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 border-t border-hairline pt-10">
      <h2 id={`${id}-h`} className="t-h3 mb-4 text-ink">
        {title}
      </h2>
      <div className="reading-measure flex flex-col gap-4 t-body text-charcoal">{children}</div>
    </section>
  );
}

/* PreviousNextProject ----------------------------------------------------- */
export function PreviousNextProject({
  prev,
  next,
}: {
  prev?: { name: string; slug: string };
  next?: { name: string; slug: string };
}) {
  return (
    <nav aria-label="More projects" className="grid grid-cols-1 gap-4 border-t border-hairline pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col gap-1 rounded-xl border border-hairline bg-canvas p-5 transition-colors hover:border-stone focus-visible:outline-none"
        >
          <span className="inline-flex items-center gap-1.5 t-caption text-steel">
            <ArrowLeft aria-hidden className="size-3.5" /> Previous
          </span>
          <span className="t-body-sm font-semibold text-ink">{prev.name}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col items-end gap-1 rounded-xl border border-hairline bg-canvas p-5 text-right transition-colors hover:border-stone focus-visible:outline-none sm:col-start-2"
        >
          <span className="inline-flex items-center gap-1.5 t-caption text-steel">
            Next <ArrowRight aria-hidden className="size-3.5" />
          </span>
          <span className="t-body-sm font-semibold text-ink">{next.name}</span>
        </Link>
      )}
    </nav>
  );
}
