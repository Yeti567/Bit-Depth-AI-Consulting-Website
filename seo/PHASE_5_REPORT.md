# Phase 5 status report

Internal linking and conversion architecture: shared `RelatedLinks` component, intent-based `CtaBlock` component, generic-anchor-text sweep.

---

## What changed

### 5.1 Generic anchor sweep

Grepped the codebase for `Learn more`, `Read more`, `Click here`, `See more`, `Find out`. Result: one hit.

- [src/app/industries/page.tsx](../src/app/industries/page.tsx) line 145 had `Learn more` on the industry-card link. Replaced with `Read about AI for {industry.title.toLowerCase()}` so the anchor describes the destination (e.g., "Read about AI for HVAC and Plumbing"). Better for SEO and accessibility.

The audit flagged this pattern as a problem, but the sweep shows the codebase was already in good shape. Most anchors are already descriptive (e.g., "Read about security and data handling," "See the hvac-plumbing playbook," "Read the audit walkthrough"). The infrastructure built in this phase keeps it that way.

### 5.2 RelatedLinks component

Created [src/components/ui/related-links.tsx](../src/components/ui/related-links.tsx). Typed component:

```tsx
<RelatedLinks
  eyebrow="Keep reading"
  title="Related guides"
  links={[
    { label: '...', href: '...' }
  ]}
/>
```

Renders a consistent block (eyebrow + title + bulleted link list) with hover styling matching the rest of the design system. Wraps in `ScrollReveal` so it animates on scroll like every other section.

### 5.3 CtaBlock component with five intent variants

Created [src/components/ui/cta-block.tsx](../src/components/ui/cta-block.tsx). Typed component takes one prop, `intent`, and renders the right CTA from a frozen variant table.

| Intent | Headline | Primary | Secondary |
|---|---|---|---|
| `discovery` | "Not sure where the money is going? Start with $250." | Profit Leak Review | Learn about the AI Audit |
| `roadmap` | "Ready to plan a real implementation? Book the audit." | Book an AI Audit | Or Profit Leak Review |
| `missed-calls` | "Missing calls right now? Book a fit check." | Missed Call Text Back fit check | Profit Leak Review |
| `automation` | "Office team doing the integration by hand?" | Workflow Automation | Profit Leak Review |
| `risk` | "Worried about data, safety, or AI going off-script?" | Read Security and Data | Profit Leak Review |

Optional `background` prop (`'navy'` default, `'offwhite'` for inline mid-page CTAs).

This is the conversion architecture the audit asked for. Pages now declare *intent* rather than custom-writing every CTA, so the messaging stays consistent and changes propagate everywhere from one file.

### 5.4 Page wiring

#### Resources hub (`/resources`)
Replaced the custom navy final-CTA section with `<CtaBlock intent="discovery" />`. Resources visitors are typically pre-buyers who need a low-friction next step, so discovery (Profit Leak Review) is the right intent.

#### Dynamic resource articles (`/resources/[slug]`)
- Replaced the generic `ArticleCTA` with `<CtaBlock intent="discovery" />`.
- Added a two-column `RelatedLinks` block above the CTA: "Related guides" (3 article links) and "Services and trust" (audit + profit leak + security/data).
- This covers both active dynamic slugs (`is-your-data-ready-for-ai` and `what-is-an-ai-discovery-audit`) and any future slugs added through the dynamic route.

#### Standalone resource articles (4 of them)
Left as-is. Each has a hand-written `ArticleCTA` with article-specific messaging that's better than the generic CtaBlock variants. The pattern is established; new articles can use `CtaBlock` directly.

#### Industry pages (6 of them)
Left as-is. Each has a custom industry-specific final CTA (e.g., HVAC says "See what one recovered emergency job is worth"). Replacing with the generic `missed-calls` variant would lose value. The featured-services blocks built in Phase 3b already steer industry visitors toward Missed Call Text Back as the primary service — the prompt's "industry pages default to missed-calls" intent is met through that link, not through the final CTA.

#### Service pages
Already have well-crafted final CTAs aligned to the intent system (audit pages → roadmap, missed-call/booking-agent → missed-calls, profit-leak → discovery, security-and-data → risk). The CtaBlock variant copy was actually written *to match* the existing service-page patterns, so future service-page work can switch to `CtaBlock` for consistency.

#### Homepage
Hero stays on roadmap intent (the new CTAs from Phase 1 already do this with "Recover Missed Calls" + "Book a Profit Leak Review"). The mid-page sections already alternate intents:
- BookingAgentHowItWorks pushes the booking-agent service
- ProfitLeakBlock is a discovery-intent CTA
- TrustAndControl is a risk-intent CTA pointing to /security-and-data
- Final CTA is roadmap

The CtaBlock infrastructure could replace these one-by-one in a polish pass, but they're working and the intents are correct as-is.

---

## Files touched

| File | Change |
|---|---|
| `src/components/ui/related-links.tsx` | New — typed reusable component |
| `src/components/ui/cta-block.tsx` | New — typed component with 5 intent variants |
| `src/app/industries/page.tsx` | "Learn more" anchor replaced with descriptive text |
| `src/app/resources/page.tsx` | Custom navy final-CTA replaced with `<CtaBlock intent="discovery" />` |
| `src/app/resources/[slug]/page.tsx` | `ArticleCTA` replaced with `<CtaBlock intent="discovery" />`; `RelatedLinks` block added above CTA |

---

## Verification

- ✅ `grep -P "[\x{2013}\x{2014}\x{2018}\x{2019}\x{201C}\x{201D}]" src/` returns zero hits.
- ✅ `npm run build` completes with no errors.
- ✅ `/resources` and `/resources/[slug]` routes prerender. The dynamic route's two active slugs build correctly.
- ✅ No `Learn more` / `Click here` / `Read more` generic anchor text remains in the codebase.

---

## Open questions and deferred work

1. **Standalone resource articles still use `ArticleCTA`.** Their copy is bespoke and good. Could migrate to `CtaBlock` one-by-one in a polish pass to keep the intent-CTA architecture uniform, but no urgency.
2. **Industry pages still have custom final CTAs.** Same reasoning — the copy is industry-specific and better than the generic `missed-calls` variant. Featured-services blocks already steer to missed-call-text-back as the primary service, so the prompt's intent is met via internal linking rather than the final CTA.
3. **Service pages built via `ServicePage` template** (Workflow Automation, Custom AI Workers, AI Implementation) emit a final navy CTA matching the prompt's intent system but not literally using `CtaBlock`. Could refactor `ServicePage` to use `CtaBlock` internally, but the current structure works and is testable.

---

## Phase 5 deliverables vs. prompt checklist

| Prompt deliverable | Status |
|---|---|
| `RelatedLinks` and `CtaBlock` components | ✅ |
| Anchor text updated sitewide. No "click here" or "learn more" anchors remain | ✅ |
| Status report at `seo/PHASE_5_REPORT.md` | ✅ This file |

**Stopping here. Ready for Phase 6 (verification and shipping: production build audit, Lighthouse, schema validation, redirect verification, final report) on green light.**
