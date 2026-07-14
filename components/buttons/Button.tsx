import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium text-sm leading-none " +
  "transition-[background,color,border-color,box-shadow,transform] duration-[180ms] ease-out " +
  "select-none disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline-none active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-canvas rounded-full hover:bg-charcoal shadow-[var(--shadow-level-1)]",
  accent:
    "bg-brand-green text-primary rounded-full hover:bg-brand-green-deep font-semibold",
  secondary:
    "bg-transparent text-ink border border-hairline rounded-full hover:bg-surface hover:border-stone",
  ghost: "bg-transparent text-charcoal rounded-md hover:bg-surface hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  // 44px min touch target on mobile, ~40px feel on desktop
  md: "min-h-11 sm:min-h-10 px-5 py-2.5 sm:py-2",
  lg: "min-h-12 px-7 py-3",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string;
    external?: boolean;
  };

function Content({ loading, children }: { loading: boolean; children: ReactNode }) {
  return (
    <>
      {loading && <Loader2 aria-hidden className="size-4 animate-spin" />}
      {children}
    </>
  );
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if ("href" in props && props.href !== undefined) {
    const {
      variant = "primary",
      size = "md",
      loading = false,
      className,
      children,
      href,
      external,
      ...rest
    } = props;
    const externalProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};
    const classes = cn(base, variants[variant], sizes[size], className);

    // Downloads and external links use a plain anchor (avoids next/link
    // prefetch/routing on static assets and off-site URLs).
    if (external || "download" in rest) {
      return (
        <a href={href} className={classes} {...externalProps} {...rest}>
          <Content loading={loading}>{children}</Content>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        <Content loading={loading}>{children}</Content>
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    loading = false,
    className,
    children,
    ...rest
  } = props;
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      aria-busy={loading || undefined}
      {...rest}
    >
      <Content loading={loading}>{children}</Content>
    </button>
  );
}

export default Button;
