import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { cn } from "@/lib/cn";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, email: Mail } as const;

export function SocialLink({
  kind,
  href,
  label,
  className,
}: {
  kind: keyof typeof icons;
  href: string;
  label: string;
  className?: string;
}) {
  const Icon = icons[kind];
  const external = kind !== "email";
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md text-charcoal",
        "transition-colors duration-[180ms] ease-out hover:bg-surface hover:text-ink focus-visible:outline-none",
        className,
      )}
    >
      <Icon aria-hidden className="size-5" />
    </a>
  );
}

export default SocialLink;
