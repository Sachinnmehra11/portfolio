"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/cn";
import { useMediaQuery, useMounted } from "@/components/interactive/useMediaQuery";
import { HeroSceneFallback } from "./HeroSceneFallback";
import { SceneBoundary } from "./SceneBoundary";

// Code-split the WebGL scene: SSR disabled, loaded only when this client
// component mounts (desktop only), with the CSS fallback shown meanwhile.
const HeroScene3D = dynamic(() => import("./HeroScene3D"), {
  ssr: false,
  loading: () => <HeroSceneFallback />,
});

/**
 * Decides whether to render the WebGL scene (desktop) or the static CSS
 * fallback (mobile / pre-mount), and gates the render loop to the viewport.
 */
export function HeroScene({ className }: { className?: string }) {
  const mounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "150px" });

  // Below 768px (or before hydration) never create a WebGL context.
  if (!mounted || !isDesktop) {
    return (
      <div className={cn("pointer-events-none", className)}>
        <HeroSceneFallback />
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("pointer-events-none", className)}>
      <SceneBoundary>
        <HeroScene3D active={inView} />
      </SceneBoundary>
    </div>
  );
}

export default HeroScene;
