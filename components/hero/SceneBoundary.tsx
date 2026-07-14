"use client";

import { Component, type ReactNode } from "react";
import { HeroSceneFallback } from "./HeroSceneFallback";

/**
 * Error boundary around the WebGL scene. If Three.js/WebGL fails for any
 * reason (context creation, driver quirks, blocked GPU), we quietly render
 * the CSS fallback instead of letting the hero crash.
 */
export class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <HeroSceneFallback />;
    return this.props.children;
  }
}

export default SceneBoundary;
