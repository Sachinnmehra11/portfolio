import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* Eyebrow — small mono label above headings ------------------------------- */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "t-mono inline-flex items-center gap-2 text-brand-green-deep",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-brand-green" />
      {children}
    </span>
  );
}

/* SectionHeading — eyebrow + title + optional lead ------------------------ */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "start",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="t-h2 text-ink text-balance">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "t-subtitle text-slate max-w-2xl text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* Prose — constrained readable body copy ---------------------------------- */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reading-measure flex flex-col gap-4 t-body text-charcoal [&_strong]:font-semibold [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* TechTag — monospace technology label ------------------------------------ */
export function TechTag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "dark";
}) {
  const tones = {
    default: "bg-surface border-hairline text-charcoal",
    accent: "bg-brand-green-soft border-transparent text-brand-green-deep",
    dark: "bg-surface-code border-hairline-dark text-on-dark",
  } as const;
  return (
    <span
      className={cn(
        "t-mono inline-flex items-center rounded-md border px-2.5 py-1 text-[13px]",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

/* StatusBadge — project status pill --------------------------------------- */
export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-soft px-3 py-1 t-caption font-medium text-slate">
      <span aria-hidden className="size-1.5 rounded-full bg-brand-green" />
      {children}
    </span>
  );
}

/* MetadataList — mono label/value pairs (project rail) -------------------- */
export function MetadataList({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="t-micro-upper text-steel">{item.label}</dt>
          <dd className="t-body-sm text-charcoal">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
