/**
 * Typed design-token object. Mirrors styles/tokens.css so tokens are
 * available to TypeScript/JS (e.g. for inline SVG artwork or JSON-LD theming).
 * CSS remains the runtime source of truth via custom properties.
 */

export const colors = {
  brandGreen: "#00d4a4",
  brandGreenDeep: "#00b88f",
  brandGreenSoft: "#e9fbf6",
  brandBlue: "#3772cf",
  brandWarning: "#e7a43a",
  brandError: "#e45454",
  accentOrange: "#f47c55",

  primary: "#0b0b0c",
  onPrimary: "#ffffff",
  canvas: "#ffffff",
  canvasDark: "#0a0d0c",
  surface: "#f5f7f6",
  surfaceSoft: "#fafaf9",
  surfaceCode: "#111816",
  hairline: "#e6e8e7",
  hairlineSoft: "#eef0ef",
  hairlineDark: "#29312f",

  ink: "#111312",
  charcoal: "#303735",
  slate: "#5e6966",
  steel: "#7a8582",
  stone: "#9aa39f",
  muted: "#b7beba",
  onDark: "#ffffff",
  onDarkMuted: "rgba(255,255,255,0.66)",

  heroSkyFrom: "#8ec9f2",
  heroSkyTo: "#f8f1e6",
  heroDarkFrom: "#073f3b",
  heroDarkTo: "#6ed8b9",
} as const;

export const space = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  sectionSm: 48,
  section: 64,
  sectionLg: 96,
  hero: 120,
} as const;

export const radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const;

export const shadow = {
  level0: "none",
  level1: "0 1px 2px rgba(0,0,0,0.04)",
  level2: "0 4px 12px rgba(0,0,0,0.08)",
  level3: "0 24px 48px -8px rgba(0,0,0,0.12)",
  brandTinted: "0 8px 24px rgba(0,212,164,0.08)",
} as const;

export const motion = {
  control: 180,
  reveal: 320,
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeInOut: "cubic-bezier(0.65, 0.05, 0.36, 1)",
} as const;

export const typography = {
  heroDisplay: { size: 72, weight: 600, lineHeight: 1.05, tracking: "-2px" },
  displayLg: { size: 56, weight: 600, lineHeight: 1.1, tracking: "-1.5px" },
  heading1: { size: 48, weight: 600, lineHeight: 1.1, tracking: "-1px" },
  heading2: { size: 36, weight: 600, lineHeight: 1.2, tracking: "-0.5px" },
  heading3: { size: 28, weight: 600, lineHeight: 1.25 },
  heading4: { size: 22, weight: 600, lineHeight: 1.3 },
  heading5: { size: 18, weight: 600, lineHeight: 1.4 },
  bodyMd: { size: 16, weight: 400, lineHeight: 1.6 },
  bodySm: { size: 14, weight: 400, lineHeight: 1.5 },
  caption: { size: 13, weight: 400, lineHeight: 1.4 },
  microUpper: { size: 11, weight: 600, lineHeight: 1.4, tracking: "0.5px" },
} as const;

export const tokens = { colors, space, radius, shadow, motion, typography } as const;
export default tokens;
