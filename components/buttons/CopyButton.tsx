"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Copy-to-clipboard control. Announces success via an ARIA live region.
 * Falls back gracefully if the Clipboard API is unavailable.
 */
export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className,
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  async function handleCopy() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Legacy fallback
        const el = document.createElement("textarea");
        el.value = value;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently no-op; email remains visible for manual copy.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md border border-hairline px-3 py-2 text-sm font-medium text-charcoal",
        "transition-colors duration-[180ms] ease-out hover:bg-surface hover:text-ink focus-visible:outline-none",
        className,
      )}
    >
      {copied ? (
        <Check aria-hidden className="size-4 text-brand-green-deep" />
      ) : (
        <Copy aria-hidden className="size-4" />
      )}
      <span>{copied ? copiedLabel : label}</span>
      <span aria-live="polite" className="sr-only">
        {copied ? `${value} copied to clipboard` : ""}
      </span>
    </button>
  );
}

export default CopyButton;
