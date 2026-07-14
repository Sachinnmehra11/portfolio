import { cn } from "@/lib/cn";

/**
 * Lightweight CSS stand-in for the 3D scene. Shown on mobile (where WebGL is
 * disabled) and as the loading placeholder before the R3F canvas mounts.
 * Pure CSS — no WebGL, no JS animation loop.
 */
export function HeroSceneFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]",
        className,
      )}
    >
      {/* deep radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,#0d2a25_0%,#08161300_70%)]" />
      {/* central orb */}
      <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#12433b,#071512_70%)] shadow-[0_0_60px_-10px_rgba(0,212,164,0.4)]" />
      {/* faint mint nodes */}
      {[
        "left-[22%] top-[28%]",
        "left-[76%] top-[34%]",
        "left-[18%] top-[68%]",
        "left-[80%] top-[70%]",
        "left-[50%] top-[16%]",
        "left-[50%] top-[86%]",
      ].map((pos) => (
        <span
          key={pos}
          className={cn(
            "absolute size-2 rounded-full bg-brand-green/70 shadow-[0_0_10px_2px_rgba(0,212,164,0.5)]",
            pos,
          )}
        />
      ))}
    </div>
  );
}

export default HeroSceneFallback;
