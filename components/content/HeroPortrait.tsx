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

/**
 * Circular avatar used on small screens, where the large framed portrait
 * would dominate the viewport. Face-focused crop via object-position.
 */
export function HeroPortraitCircle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative size-28 shrink-0 overflow-hidden rounded-full border border-hairline shadow-[var(--shadow-level-2)] ring-4 ring-canvas/60",
        className,
      )}
    >
      <Image
        src="/images/sachin-portrait-large.jpg"
        alt="Sachin Mehra"
        fill
        sizes="112px"
        className="object-cover object-[50%_15%]"
        priority
      />
    </div>
  );
}

/**
 * Large framed hero photo (real background retained — no cutout, per
 * available tooling). Sized prominently but kept in a soft-cornered,
 * bordered frame rather than a full silhouette treatment.
 */
export function HeroPortraitLarge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[7/9] w-full max-w-[420px] overflow-hidden rounded-3xl border border-hairline shadow-[var(--shadow-level-3)]",
        className,
      )}
    >
      <Image
        src="/images/sachin-portrait-large.jpg"
        alt="Sachin Mehra"
        fill
        sizes="(min-width: 1024px) 420px, 0px"
        className="object-cover"
        // Shown only at lg+; lazy so mobile (circle avatar) doesn't fetch it.
        loading="lazy"
      />
    </div>
  );
}

export default HeroPortrait;
