# Sachin Mehra — Portfolio Design System

A calm, technical, documentation-inspired system for an experienced .NET / Angular
software engineer. Two modes work together: **marketing** (atmospheric hero,
editorial type, generous whitespace) and **technical** (dark code-style panels,
monospace labels, structured grids).

The runtime source of truth is CSS custom properties in
[`styles/tokens.css`](styles/tokens.css), mirrored as a typed object in
[`lib/tokens.ts`](lib/tokens.ts) and mapped to Tailwind utilities via `@theme` in
[`styles/globals.css`](styles/globals.css).

---

## Principles

1. **Restraint over decoration.** Mint green is an accent, never a wash. One
   primary action per viewport. Borders before shadows.
2. **Structure is the aesthetic.** Grids, hairlines, monospace metadata, and
   consistent spacing do the visual work — not effects.
3. **Truthful content.** Every claim traces to verified résumé facts. Engineering
   rationale is labeled as general explanation, not fabricated outcomes.
4. **Accessible by default.** WCAG 2.2 AA targets, full keyboard support, visible
   focus, reduced-motion honored, 44px touch targets.

---

## Color

### Brand
| Token | Value | Use |
| --- | --- | --- |
| `--brand-green` | `#00D4A4` | Primary accent: active markers, focus ring, status dots, checkmarks |
| `--brand-green-deep` | `#00B88F` | Accent text/hover on light surfaces (contrast-safe) |
| `--brand-green-soft` | `#E9FBF6` | Accent tag backgrounds, subtle fills |
| `--brand-blue` | `#3772CF` | Informational, secondary diagram routes |
| `--brand-warning` | `#E7A43A` | Caution states, mockup accents |
| `--brand-error` | `#E45454` | Errors, required-field markers, destructive |
| `--accent-orange` | `#F47C55` | Sparingly, mockup window dots |

### Core & text
Near-black `--primary #0B0B0C` on `--canvas #FFFFFF`. Text ramp:
`--ink → --charcoal → --slate → --steel → --stone → --muted`. Dark technical
surfaces use `--surface-code #111816` with `--on-dark` / `--on-dark-muted`.

### Mint discipline
✅ Primary CTA, active nav marker, project status dot, focus ring, checkmarks,
small architecture accents.
❌ Full-page backgrounds, long body text, every icon, every card, multiple CTAs
in one viewport.

---

## Typography

- **Inter** — headings, body, UI, buttons, labels.
- **Geist Mono** — code, tech tags, metadata labels, dates, architecture labels.
- **Instrument Serif (italic)** — accent-only exception, used for the single
  hero greeting line ("Hey, I'm Sachin"). Not used anywhere else — the rest of
  the site stays two-typeface per the original system.

Scale is implemented as component classes (`.t-hero-display`, `.t-h1…h5`,
`.t-subtitle`, `.t-body`, `.t-body-sm`, `.t-caption`, `.t-micro-upper`,
`.t-mono`). The hero uses fluid `clamp()` sizing: 72 → 36px across desktop → small
mobile. Body copy is constrained to `--reading-max: 720px`.

---

## Spacing, radius, shadow, motion

- **Spacing** — 4px base scale (`--space-xxs`…`--space-hero: 120px`). Major
  sections `96px`, dense sections `64px`, hero `~120px`.
- **Radius** — `xs 4` → `xxl 24`, `full 9999` (pills for buttons/status).
- **Shadow** — `level-1/2` for cards, `level-3` **only** on the hero mockup,
  `brand-tinted` for occasional mint glow. Prefer 1px hairline borders otherwise.
- **Motion** — `180ms` control transitions, `320ms` reveals, ease-out entrances.
  All motion is disabled under `prefers-reduced-motion`. Reveals are progressive
  enhancement: content is visible if JS never runs.

---

## Hero variant

The homepage hero uses a warm, personality-forward pivot (`.hero-atmosphere-warm`,
peach/cream gradient) instead of the cooler default `.hero-atmosphere`, paired
with a large framed portrait (real background retained, no cutout — see
`components/content/HeroPortrait.tsx`). Truthful stats (years experience,
featured-case-study count) are derived from real content data, never
hardcoded or fabricated. The rest of the site keeps the original cooler
mint/near-black system; the warm variant is scoped to the hero only.

## Layout

- Max content width `1280px` (`.container-page`), reading width `720px`.
- Gutters: 32 / 24 / 20px (desktop / tablet / mobile).
- Homepage alternates content widths for rhythm; project cards are large split
  case studies, not a gallery.
- Project detail uses a documentation layout: sticky metadata rail (left),
  reading column (center), scroll-spy TOC (right, xl+).

---

## Components

Foundations (`Container`, `Section`, `Stack`, `Cluster`, `Grid`, `Divider`,
`VisuallyHidden`) · Navigation (`PortfolioHeader` with scroll-spy + accessible
drawer, `SocialLink`, `Footer`) · Buttons (`Button` variants primary/accent/
secondary/ghost, `CopyButton`, `PrintButton`) · Cards (`ProjectCard`,
`Timeline`, `SkillGroup`, `PrincipleCard`, `EducationCard`, `MockupFrame`) ·
Content (`SectionHeading`, `Eyebrow`, `Prose`, `TechTag`, `StatusBadge`,
`MetadataList`, `Breadcrumbs`, `CaseStudySection`, `PreviousNextProject`,
`TableOfContents`) · Projects (`HeroArtwork`, `ProjectMockup`,
`ArchitectureDiagram`, `CaseStudyView`) · Interactive (`Reveal`, `ContactForm`).

### Button styling
- Primary: near-black bg, white text, pill.
- Accent: mint bg, near-black text, pill.
- Secondary: transparent, hairline border, pill.
- Ghost: compact, 8px radius.
- ≥44px mobile / ~40px desktop height; mint focus ring with offset.

---

## Do / Don't

**Do** — keep tags monospace and mostly neutral; use dark panels for
architecture; animate 1–2 elements per view; group skills by capability.

**Don't** — add skill percentage bars, fake testimonials/logos/metrics, live-demo
buttons without a real URL, purple gradients, glassmorphism overload, or the phone
number on public pages.

---

## Extending

1. Add a token to `styles/tokens.css`, mirror it in `lib/tokens.ts`, and (if it
   needs a utility) map it under `@theme` in `styles/globals.css`.
2. Add content to the typed files in `content/` — pages read data, never hardcode
   copy.
3. New sections compose foundations + content primitives and wrap in `Reveal`.
4. Keep new claims traceable to verified facts; use configurable placeholders when
   information is missing (see `profile.config`).
