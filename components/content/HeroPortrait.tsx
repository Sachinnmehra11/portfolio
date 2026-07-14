import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Framed portrait avatar for the hero. Kept modest in size per the design
 * system's "avoid huge portrait photography" guidance — a personal touch
 * alongside the copy, not a replacement for the architecture artwork.
 */
export function HeroPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative size-20 shrink-0 overflow-hidden rounded-2xl border border-hairline shadow-[var(--shadow-level-2)] sm:size-24",
        className,
      )}
    >
      <Image
        src="/images/sachin-portrait.jpg"
        alt="Sachin Mehra"
        fill
        sizes="(min-width: 640px) 96px, 80px"
        className="object-cover"
        priority
      />
    </div>
  );
}

export default HeroPortrait;
