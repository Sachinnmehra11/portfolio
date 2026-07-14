"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Global motion configuration. `reducedMotion="user"` makes every Motion
 * component automatically honor the OS "reduce motion" setting — transforms
 * are dropped and only opacity changes remain — so we don't repeat that logic
 * in each component.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}

export default MotionProvider;
