"use client";

import { Printer } from "lucide-react";

/** Opens the browser print dialog for the on-screen résumé view. */
export function PrintButton({ label = "Print" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-hairline bg-transparent px-5 text-sm font-medium text-ink transition-colors hover:bg-surface hover:border-stone focus-visible:outline-none"
    >
      <Printer aria-hidden className="size-4" />
      {label}
    </button>
  );
}

export default PrintButton;
