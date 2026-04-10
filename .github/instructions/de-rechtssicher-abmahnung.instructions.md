---
applyTo: "app/**/*.{ts,tsx,js,jsx,md,mdx},src/app/**/*.{ts,tsx,js,jsx,md,mdx},pages/**/*.{ts,tsx,js,jsx,md,mdx},src/pages/**/*.{ts,tsx,js,jsx,md,mdx},components/**/*.{ts,tsx,js,jsx},src/components/**/*.{ts,tsx,js,jsx},public/**/*,README.md"
description: "Use when: creating or editing pages for German users, SEO content that references laws, taxes, health, finance, legal pages, forms, tracking, cookies, affiliate disclosure blocks, monetization features, ad slots, sponsored blocks, or conversion elements. Goal: legally safer implementation for Germany, policy-safe monetization, and reduced abmahnung risk."
---

# Germany Legal-Safety & Monetization Instruction

This instruction is the single authority for legal safety, trust, disclosure, and monetization rules. It reduces legal risk but is not legal advice. When legal certainty is required, recommend review by a qualified lawyer in Germany.

## Decision Priority

1. Legal and policy safety.
2. User trust, transparency, and informed consent.
3. Accessibility and usability.
4. Revenue and conversion optimization.

## Core Principle

Prefer conservative, transparent, and verifiable implementations. If legality is uncertain, do not invent legal claims. Mark the uncertainty and recommend legal review.

## High-Risk Trigger Topics

1. Legal obligations, rights, or enforceability statements.
2. Tax treatment, deductible claims, or filing guidance.
3. Medical efficacy, diagnosis, prevention, or treatment claims.
4. Financial return promises or risk-minimizing guarantees.

## Mandatory Guardrails

1. Keep required legal pages present and easy to reach: Impressum and Datenschutzerklaerung.
2. Do not state legal, tax, medical, or financial claims as facts without a source or clear caveat.
3. Avoid absolute promises in SEO or monetization copy.
4. For affiliate or sponsored content, require clear and visible disclosure near the relevant section.
5. For user data collection, minimize data, state purpose, and avoid unnecessary tracking.
6. For cookies or non-essential tracking, require consent handling before execution.
7. Do not suggest dark patterns such as forced consent, hidden opt-out, or misleading CTAs.
8. Ensure ad labels are recognizable and separated from editorial content.
9. Avoid copying legal text from unknown sources; prefer project-owned templates or legal review.
10. If a request materially increases legal risk, flag the risk before implementation.

## Impressum Requirements

The Impressum must be reachable within two clicks from every page (typically via persistent footer link labeled "Impressum"). It must contain at minimum:

1. Full legal name of the site operator (person or company).
2. Full postal address (no PO box).
3. Email address and at least one additional direct contact method (phone or contact form).
4. For businesses: Handelsregisternummer and Registergericht, if applicable.
5. USt-IdNr. (VAT ID) if assigned, even for Kleinunternehmer if they have one.
6. For regulated professions (Heilberufe, Rechtsanwälte, Steuerberater): professional chamber, title, and applicable regulations.
7. If content is journalistic/editorial: name of the responsible person (Verantwortlicher i.S.d. § 18 Abs. 2 MStV).
8. Never generate placeholder Impressum content — prompt the user to fill in real data or flag it as incomplete.

## Cookie Consent & Consent Banner

1. No non-essential cookies or tracking may execute before the user gives explicit consent (opt-in, not opt-out).
2. The "Reject" or "Only essential" option must be visually equally accessible as the "Accept" option — same size, same prominence, same click-depth. Both buttons must have comparable visual weight: similar background contrast, font weight, and color saturation. Do not use a bright/filled button for "Accept" and a ghost/transparent button for "Reject" — this constitutes a dark pattern (Nudging).
3. No pre-ticked checkboxes for optional cookie categories.
4. Cookie walls (blocking content until consent) are not permitted.
5. Consent must be revocable at any time — provide a persistent way to change cookie preferences (e.g. footer link "Cookie-Einstellungen").
6. The consent banner must clearly state what categories of cookies/tracking are used and their purpose.
7. Consent choices must be stored and respected — do not re-prompt on every page load.
8. Technically essential cookies (session, CSRF, consent-state) do not require consent but must be listed in the Datenschutzerklaerung.

## Third-Party Embeds & External Resources

1. YouTube, Vimeo, Google Maps, and similar embeds transmit visitor IP addresses to third-party servers. Use a 2-click solution or consent-first pattern: show a placeholder with an explanation and a "Load content" button — only load the actual embed after explicit user action.
2. Social media share buttons must not transmit data on page load. Use Shariff or similar privacy-safe implementations, or simple share-links that open in a new tab.
3. Do not load JavaScript libraries (jQuery, Bootstrap, etc.) from external CDNs — self-host or use bundled packages. Every external request leaks visitor IP.
4. Do not embed external iframes, widgets, or pixels that contact third-party servers without prior consent.
5. When implementing consent-first embeds, the placeholder must have similar dimensions to the embed to prevent CLS.

## Price Display & E-Commerce (Preisangabenverordnung)

If the site displays prices to consumers:

1. All prices must include VAT (Bruttopreise) and be labeled "inkl. MwSt." or equivalent.
2. Shipping costs must be stated or clearly linked near each price ("zzgl. Versandkosten" with link to shipping info).
3. For products sold by quantity (weight, volume), display the Grundpreis (price per unit).
4. Strikethrough/original prices must be the lowest price of the last 30 days (Omnibus-Richtlinie).

## Order Button & Checkout (Buttonlösung)

If the site has any purchase or subscription flow:

1. The final order button must be labeled "zahlungspflichtig bestellen" or a clearly equivalent phrase ("kaufen", "kostenpflichtig bestellen"). It must not be ambiguous (avoid "weiter", "bestätigen", "abschicken" for payment steps).
2. Immediately before the order button, display a clear summary: item, price (inkl. MwSt.), shipping, and total.
3. For subscriptions, clearly state the recurring cost and billing interval.

## Newsletter & Email Marketing

1. Newsletter signup must use Double Opt-in: send a confirmation email with a verification link before adding the address to any list.
2. The signup form must clearly state what the user is subscribing to and how often.
3. Every email must contain a working unsubscribe link.
4. Do not add checkbox consent for newsletters as a precondition for unrelated actions (e.g. form submission, account creation).
5. Do not pre-check the newsletter signup checkbox.

## Barrierefreiheit (BFSG — since June 2025)

The Barrierefreiheitsstärkungsgesetz requires accessibility for B2C digital services:

1. Websites offering products or services to consumers must meet WCAG 2.1 AA or equivalent (EN 301 549).
2. This is reinforced by the visual-quality instruction (Tier 1) — treat accessibility as a legal requirement, not just best practice.
3. When building forms, checkout flows, or interactive tools: ensure screen reader compatibility, keyboard operability, and sufficient contrast.
4. Provide an accessibility statement ("Erklärung zur Barrierefreiheit") if required for the project scope. The statement should describe known limitations, alternative contact options, and a feedback mechanism.
5. Since June 2025, enforcement is active with Bußgelder up to 100.000 €. Treat BFSG compliance as a legal obligation, not optional.

## EU Online Dispute Resolution (ODR)

For B2C sites that sell goods or services online:

1. Include a link to the EU Online Dispute Resolution platform: `https://ec.europa.eu/consumers/odr/`.
2. Place this link in the Impressum or a dedicated "Streitschlichtung" section.
3. State whether the operator is willing or obligated to participate in dispute resolution.

## Image & Asset Copyright (Urheberrecht)

1. Never use images, icons, illustrations, or other assets without verifiable licensing rights.
2. Stock photos require valid license — reference the source and license type if legally needed.
3. Screenshots of other websites or apps may violate Urheberrecht — avoid or use only with permission.
4. AI-generated images are usable but copyright status may be uncertain — note this when relevant.
5. Do not hotlink images or assets from external sites.
6. When generating placeholder content, use clearly marked sample images and flag them for replacement.

## Trust & Content Integrity

1. Avoid fake urgency, fear tactics, or manipulative copy.
2. Add caution language for high-stakes (YMYL) topics.
3. Claims must be specific, non-deceptive, and proportionate to evidence.
4. Comparative or superlative claims need support or softer wording.
5. For legal, medical, tax, or financial claims, add a short risk note and conservative caveat.
6. Do not present calculators or estimations as binding legal or financial advice.

## Required Risk Note Format For Risky Changes

1. Risk note: one sentence naming the concrete legal risk.
2. Assumptions: bullet list of legal assumptions that are unverified.
3. Safer option: one lower-risk implementation alternative.
4. Review recommendation: ask for qualified legal review if impact is high.

## Monetization Rules

1. Keep user value primary and monetization secondary.
2. Avoid deceptive placements, accidental-click bait, or hidden labels.
3. Separate editorial and monetized elements visually.
4. Keep ads distinguishable from navigation and core actions.
5. Keep monetized CTAs truthful, specific, and non-manipulative.
6. Do not let above-the-fold mobile ad density dominate core content.
7. Avoid disruptive interstitial patterns unless strictly necessary.
8. Place disclosures directly adjacent to monetized blocks, not only in global footers.
9. Reserve ad slot dimensions to reduce CLS.
10. Load ad and partner scripts in a way that limits render blocking.
11. Guard against script failures with graceful fallback behavior.

## Technical and Privacy Checks

1. Keep legal page indexing strategy consistent across robots, canonicals, and sitemap where relevant.
2. Ensure forms include purpose limitation and only required fields.
3. Avoid loading third-party scripts before consent where legally required.
4. Make retention and deletion expectations explicit when relevant.
5. Never load fonts from external CDNs (e.g. Google Fonts via fonts.googleapis.com) — this transmits visitor IP addresses to third parties without consent and violates DSGVO. Always self-host fonts or use `next/font`.
6. Never load external resources (analytics, maps, embeds, CDN assets) that transmit user data before explicit consent, unless the resource can be self-hosted.
7. All pages collecting user input (forms, checkout, login) must be served over HTTPS. Do not create form actions pointing to HTTP URLs.
8. Contact forms must state the purpose of data collection and link to the Datenschutzerklaerung.

## Review Protocol for Risky Changes

1. Add short risk notes in the response.
2. List assumptions that need legal confirmation.
3. Prefer the lowest-risk implementation option where possible.
4. Recommend legal review for high-impact changes.

## Conflict and Escalation

1. If legal certainty and growth goals conflict, choose legal certainty.
2. If conversion tactics reduce trust or clarity, prefer the lower-pressure option.
3. If placement is ambiguous, label content as sponsored or affiliate explicitly.
4. If a monetization element threatens usability, reduce density or move it below core content.
5. If compliance status is unclear, pause risky implementation and document assumptions.
6. If uncertainty remains after best effort, propose the safer fallback and legal review.

## Verification Checklist

1. Impressum is reachable within 2 clicks from every page and contains all required fields (or flags missing fields).
2. Datenschutzerklaerung link is reachable from primary navigation or footer.
3. Non-essential tracking or cookie scripts are not executed before consent.
4. Cookie banner offers equally prominent accept and reject options — no dark patterns.
5. Affiliate and sponsored disclosures are visible near affected blocks.
6. High-risk claims include caveat language and no absolute guarantees.
7. Each monetized block has a visible local disclosure.
8. Ads are visually distinct from editorial and navigation components.
9. Core user task remains possible without accidental ad interaction.
10. Ad slots reserve dimensions to avoid major CLS shifts.
11. No external CDN, font, embed, or widget loads without consent or self-hosting.
12. YouTube/Maps/social embeds use 2-click or consent-first pattern.
13. Prices (if displayed) include MwSt. and link to shipping information.
14. Order buttons use legally compliant labeling if a purchase flow exists.
15. Newsletter signup uses Double Opt-in if email collection exists.
16. Forms served over HTTPS with purpose statement and Datenschutz link.
17. Consent banner reject/accept buttons have comparable visual weight (no bright vs ghost button disparity).
18. YMYL calculators and tools include explicit "Keine Rechtsberatung" or equivalent disclaimer.
19. Accessibility statement present if BFSG applies to the project scope.

## Definition of Done

1. No unverifiable legal or financial claims were introduced.
2. Required disclosures are present and understandable.
3. Consent and tracking behavior matches the intended legal posture.
4. Legal pages and links remain reachable with complete required content.
5. Any unresolved legal ambiguity is explicitly called out.
6. Ad and affiliate blocks do not degrade core page usability.
7. No obvious policy-risk pattern is introduced.
8. No third-party resource transmits user data without consent or self-hosting.
9. All images and assets have verifiable licensing.
