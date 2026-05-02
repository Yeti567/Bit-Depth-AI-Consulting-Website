# DESIGN.md — Bit Depth AI Consulting

Direction: **Restrained Trade.** Warm, plain, document-like. Built to feel like a serious firm's letterhead, not a SaaS landing page.

## 1. Colors

OKLCH values are authoritative; hex are approximations for tooling that needs them.

| Role | Token | Hex | OKLCH | Use |
|---|---|---|---|---|
| Canvas | `--color-offwhite` (cream) | `#FAF7F2` | `oklch(96.5% 0.008 75)` | Body background |
| Stone | (new, inline) | `#F0ECE5` | `oklch(92% 0.006 75)` | Card/sidebar background, table stripes |
| Ink | `--color-navy` | `#1C1F26` | `oklch(20% 0.015 260)` | Primary text, dark sections |
| Ink-soft | `--color-charcoal` | `#2A2D34` | `oklch(26% 0.014 260)` | Secondary dark surface |
| Slate | `--color-slate` | `#5A5D68` | `oklch(45% 0.012 260)` | Body text, muted labels |
| Terracotta | `--color-terracotta` (accent) | `#B85A32` | `oklch(52% 0.14 40)` | Single brand accent: primary CTAs, key numbers, link color |
| Terracotta-deep | `--color-terracotta-dark` | `#8A4023` | `oklch(40% 0.13 38)` | Hover and pressed state |
| Terracotta-soft | `--color-terracotta-soft` | `#D77548` | `oklch(64% 0.13 42)` | Subtle highlights only |

Legacy aliases `--color-cyan`, `--color-cyan-dark`, `--color-cyan-glow` resolve to the terracotta tokens for back-compat. New code should use the terracotta names.
| Border | `--color-border` | `rgba(28,31,38,0.10)` | — | All standard borders |

**Strategy: Restrained.** Tinted neutrals + one accent ≤10%. Terracotta is reserved for: the primary CTA, the audit-credit number, link hovers, the eyebrow rule, and the highlighted card border on pricing or decision-tree emphasis cards. Not for full-saturation icon backgrounds, not for whole sections.

**Banned on marketing surface:** cyan `#00B4D8`, navy `#0B1F3B`, dot-grid backgrounds, radial glow gradients, glassmorphism (`backdrop-filter`). The assessment app keeps its own dark UI scoped to `.assessment-*` classes.

## 2. Typography

Single family: **Barlow** (already loaded). DM Sans is dropped from globals.

- Weights used: 400 (body), 500 (UI), 700 (headings). No 800.
- Heading scale, ratio 1.25:
  - h1: `clamp(2rem, 4.5vw, 3rem)` — capped at 48px desktop
  - h2: `clamp(1.5rem, 3vw, 2.25rem)`
  - h3: `clamp(1.15rem, 2vw, 1.4rem)`
  - h4: `1.1rem`
- Body: 17px desktop, 16px mobile. `line-height: 1.6`.
- Eyebrow: 11px, uppercase, `letter-spacing: 0.14em`, slate color, no border-pill.
- Numerals: `font-variant-numeric: tabular-nums` on prices and stats.
- Line length: 65-72ch on prose.

## 3. Elevation

One shadow, used rarely. Most cards use a 1px border on stone background, no shadow.

- `shadow-soft`: `0 1px 2px rgba(28,31,38,0.04), 0 8px 24px rgba(28,31,38,0.06)` — only on the audit-credit callout and the lead-magnet form.

No glow shadows. No 2px-cyan-ring shadows.

## 4. Components

- **Button primary** — rust background, cream text, 14px/28px padding, 6px radius (down from 8px). Hover: rust-deep background.
- **Button outline** — transparent, 1px ink border, ink text. Hover: ink background, cream text.
- **Card** — cream or stone background, 1px ink/10% border, 8px radius, no shadow. Padding 24-32px.
- **Eyebrow** — small uppercase slate text preceded by a 24px rust rule. No pill, no border, no cyan.
- **List-check** — leading rust checkmark, no background.
- **Section divider** — single 1px stone-color hairline above section, no full-bleed dark blocks.

## 5. Layout

- Container: max-width 1100px (down from 1200px) — tighter, more document-like.
- Section vertical rhythm: 96px desktop, 64px mobile.
- Sections differentiate by **rhythm and rule**, not alternating dark/light backgrounds.
- One dark section maximum per page (the final CTA).

## 6. Do's

- Use rust sparingly. If a page has more than 8-10 rust elements, cut some.
- Lead pain points and process steps with **numerals or the word**, not icon tiles.
- Set prices and stats with `tabular-nums`.
- Use sentence case for all UI labels except the eyebrow.
- Single primary CTA label per action across the whole site: **"Book an AI Audit"** for the audit purchase, **"Take the Readiness Assessment"** for the free quiz, **"Book a Discovery Call"** for the call.
- Keep section copy tight. One paragraph per section unless the section IS the long-form text.

## 7. Do Nots

- No cyan, navy, or purple-blue gradients.
- No dot grids, radial glows, glass cards on marketing surfaces.
- No side-stripe colored borders (`border-l-4` accents). Banned.
- No identical-card grids of 4+ icon+heading+text tiles.
- No hero-metric template (giant number + label + supporting stats trio).
- No gradient text. Ever.
- No em dashes in body copy. Use commas, periods, or parentheses.
- No animations on layout properties. Transform and opacity only.
- No display-font weights above 700.
- No more than one dark section per page.
