# Phase 4 status report

Local SEO and trust signals: NAP block sitewide, Barriere BC location page, LocalBusiness JSON-LD.

---

## What changed

### 4.1 NAP block

#### Footer (sitewide)

Updated [src/components/layout/site-footer.tsx](../src/components/layout/site-footer.tsx) brand column to include a proper NAP block as a semantic `<address>` element:

```
BitDepth AI Consulting Ltd.
Barriere, BC, Canada
+1 (780) 832-5158
blake@bitdepthaiconsulting.com
Serving the Greater Toronto Area, Golden Horseshoe, British Columbia, Alberta, and remote across Canada.
```

The phone link uses `tel:+17808325158` so it dials directly on mobile. The email link is a `mailto:`. The bottom-bar copyright line was also updated from "Serving the GTA, Golden Horseshoe, and across Canada" to "Based in Barriere, BC. Serving Canada." which matches the actual operational footprint.

The Company column in the footer was tightened: removed the duplicate `mailto:` link (now in the NAP block) and added a "Barriere, BC" link to the new location page.

#### Contact page

Updated [src/app/contact/page.tsx](../src/app/contact/page.tsx) "Direct contact" sidebar:
- Phone moved to the top (was missing before)
- Phone, email, and LinkedIn now wrapped in a semantic `<address>` element
- "Ontario presence" block renamed to "Where we are based" and now describes Barriere, BC as the home base with quarterly Ontario travel for client work
- Inline link to the new Barriere BC location page
- "Regions served" reordered: Barriere/BC interior first, then Alberta, then Ontario regions

### 4.2 Location landing page

Created [src/app/locations/barriere-bc-ai-consulting/page.tsx](../src/app/locations/barriere-bc-ai-consulting/page.tsx) — **single Barriere BC location page** rather than the five Ontario/Calgary cities the prompt suggested, per Blake's confirmation that Barriere is the actual base.

Page structure (~870 body words, in the prompt's 600-900 target):
1. Hero with H1 naming Barriere and the offer
2. Local context (3 paragraphs covering Barriere's location, why BitDepth runs from there, BC interior trade reality)
3. Industries served (4 vertical links with descriptions: HVAC/plumbing, electrical, roofing/ICI, field services)
4. Common projects from this base (3 paragraphs on engagement patterns)
5. Featured services (all 6 services as a 2-column link grid)
6. Local FAQ (5 questions covering location, geographic scope, remote-delivery model, in-person availability, and "why Barriere")
7. Final CTA to audit and Profit Leak Review

The page is honest about the geography. It does not pretend Barriere is a major business hub. It explains the operational reality: lean firm, low overhead, pricing kept accessible, mostly Ontario clients delivered remotely, in-person travel scheduled when it makes sense.

### 4.3 LocalBusiness JSON-LD

The Barriere location page emits a custom `LocalBusiness` schema as `ProfessionalService` with:
- `@id` scoped to the page (not the global org)
- `parentOrganization` reference to `https://bitdepthaiconsulting.com/#organization` (the global org schema in `app/layout.tsx`)
- `address` with `addressLocality: Barriere`, `addressRegion: BC`, `addressCountry: CA`
- `telephone: +1-780-832-5158`
- `email: blake@bitdepthaiconsulting.com`
- `areaServed`: Barriere, Kamloops, BC, AB, ON, Canada
- `priceRange: $$`
- `founder`: Blake Cowan

The page also emits `FAQPage` JSON-LD for the 5 local FAQs, and `BreadcrumbList` JSON-LD via the existing component.

### 4.4 Sitemap

`/locations/barriere-bc-ai-consulting` added to [src/app/sitemap.ts](../src/app/sitemap.ts) with priority 0.7.

---

## Files touched

| File | Change |
|---|---|
| `src/components/layout/site-footer.tsx` | Added NAP block as semantic `<address>` in brand column; removed duplicate email link; added Barriere link to Company column; updated copyright tagline |
| `src/app/contact/page.tsx` | Phone added to direct-contact sidebar; "Where we are based" block now references Barriere BC and links to the new location page; regions list reordered |
| `src/app/locations/barriere-bc-ai-consulting/page.tsx` | **New** — full location page with 7 sections, custom LocalBusiness + FAQ + Breadcrumb JSON-LD |
| `src/app/sitemap.ts` | + `/locations/barriere-bc-ai-consulting` |

---

## Verification

- ✅ `grep -P "[\x{2013}\x{2014}\x{2018}\x{2019}\x{201C}\x{201D}]" src/` returns zero hits.
- ✅ `npm run build` completes with no errors.
- ✅ `/locations/barriere-bc-ai-consulting` is in the build output as a static prerendered route.
- ✅ Banned-words sweep clean (caught and replaced one "end-to-end" hit during drafting).
- ✅ Phone number renders as a `tel:` link on mobile.

---

## Open questions and deferred work

1. **Off-site NAP consistency.** The audit flagged that BitDepth's social bios still describe the firm in oil/gas/manufacturing terms, and that the Facebook handle appears mistyped (`bitpathconsultingltd`). **Off-site work for Blake**: update LinkedIn, YouTube, Facebook, and any directory listings to match the new NAP block exactly. Use the same wording on every platform.
2. **Google Business Profile.** The audit recommends creating or claiming a GBP for BitDepth. **Off-site work for Blake**. Recommended categories per the audit: Business Management Consultant, Computer Consultant, Marketing Consultant, Software Company. Service-area business model with Barriere, BC as the primary location and the BC interior + Alberta + Ontario as the service area.
3. **Single location page, by design.** The prompt suggested five location pages (Toronto, GTA, Hamilton, Kitchener-Waterloo, Calgary). Blake confirmed Barriere, BC is the location. Building five Ontario/Calgary doorway pages would be the wrong move because BitDepth does not have a physical presence in any of those cities. The audit explicitly warned against thin doorway pages. Recommend keeping it as one honest Barriere page until there is a real reason to add a city-specific page (e.g., BitDepth opens a Calgary office, or a specific industry case study originates from a named city).
4. **Phone number live verification.** Once deployed, dial 780-832-5158 from a phone you do not have stored as a contact and confirm it rings through to Blake. Standard footgun; worth a 2-minute test post-deploy.

---

## Phase 4 deliverables vs. prompt checklist

| Prompt deliverable | Status |
|---|---|
| Footer NAP block deployed sitewide | ✅ |
| Contact page NAP block prominent | ✅ |
| Five unique location pages live, sitemapped, schemaed | ⚠️ One Barriere BC page (not five) per Blake's direction. Schemaed and sitemapped. |
| LocalBusiness JSON-LD per location with `parentOrganization` link to main org `@id` | ✅ |
| Status report at `seo/PHASE_4_REPORT.md` | ✅ This file |

**Stopping here. Ready for Phase 5 (internal linking and conversion architecture: kill "click here" / "learn more" anchors, build `RelatedLinks` component, build `CtaBlock` component with intent variants) on green light.**
