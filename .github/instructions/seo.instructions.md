---
applyTo: "app/**/*.{ts,tsx,js,jsx,md,mdx},src/app/**/*.{ts,tsx,js,jsx,md,mdx},pages/**/*.{ts,tsx,js,jsx,md,mdx},src/pages/**/*.{ts,tsx,js,jsx,md,mdx},content/**/*.{md,mdx},README.md"
description: "Use when: creating or editing indexable pages, metadata, structured data, internal links, content hubs, category pages, and SEO landing pages. Goal: stronger search intent match, crawl clarity, and ranking resilience."
---

# SEO Execution Instruction

## Decision Priority

1. User intent match and helpfulness.
2. Crawl/index consistency.
3. Content differentiation and site architecture.
4. Ranking optimization tactics.

## Non-Negotiables

1. Keep one clear primary intent per page.
2. Use unique, non-generic title and meta description for each indexable URL.
3. Maintain semantic heading hierarchy with one clear H1.
4. Add context-relevant internal links to related pages.
5. Avoid thin content by ensuring each page delivers substantial, task-solving value.
6. Ensure pages targeting related intents still differ meaningfully in scope, examples, structure, and user outcome.
7. Ensure internal links are relevant and useful, not excessive.
8. Ensure all internal links point to the intended destination.

## Anti-Cannibalization Checks

1. Define the primary intent and audience for each target URL.
2. Confirm the page differs materially from adjacent intent pages.
3. Consolidate or re-scope pages that overlap too heavily.

## Metadata and Indexing

1. Ensure canonical handling is consistent.
2. Keep robots directives aligned with intended indexing behavior.
3. Avoid mixed signals across canonical, robots, sitemap, and internal links.
4. Exclude utility or legal pages from indexing when strategy requires it.
5. When content on an existing page changes materially, update any route freshness metadata in the same change if the project uses such a system.

## Google Search Console Readiness

Every project must be indexable and verifiable without extra configuration:

1. Generate and expose a `sitemap.xml` covering all indexable URLs — register it in Search Console after launch.
2. Provide a `robots.txt` with intentional allow/disallow rules; never accidentally block crawlers from indexable content.
3. Ensure canonical tags are present and consistent — no page should be indexable without a self-referencing canonical or explicit noindex.
4. Use the appropriate Search Console verification method (`<meta name="google-site-verification">` or DNS TXT record) — do not block verification paths via robots.txt.
5. Structured data must be valid (no schema errors) — validate before launch.

## Favicon & Social Preview

Every project ships with a complete favicon and Open Graph setup:

1. **Favicon** — provide `favicon.ico` (32×32) and `apple-touch-icon.png` (180×180); link both in `<head>`.
2. **Open Graph** — every indexable page must have: `og:title`, `og:description`, `og:image` (min 1200×630px), `og:url`, `og:type`.
3. **Twitter Card** — add `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`.
4. The OG image must be an absolute URL — relative paths are not valid.
5. Do not use placeholder or lorem ipsum content in og:description — write real, page-specific copy.
6. Favicon and OG images must be self-hosted — never hotlinked from external services.

## Structured Data

1. Add schema only when the visible content supports it.
2. Keep structured data factually aligned with visible content.
3. Avoid schema spam or inflated claims.
4. For local businesses, include `schema.org/LocalBusiness` with name, address, telephone, url — this pre-wires Google My Business integration.

## Quality Guardrails

1. Avoid duplicate templates with near-identical copy.
2. Do not over-optimize by repeating exact-match phrases unnaturally.
3. Prefer practical examples, constraints, and edge-case guidance.
4. If two pages are too similar, consolidate or re-scope them instead of publishing overlapping thin variants.

## Conflict and Escalation

1. If SEO tactics conflict with clarity, prioritize user comprehension.
2. If indexing signals conflict, resolve canonical and robots consistency before launch.
3. If page intent is unclear, postpone publishing until scope is narrowed.

## Verification Checklist

1. Exactly one H1 is present and matches the page intent.
2. Title and meta description are unique for the indexable URL.
3. Internal links added are context-relevant and not broken.
4. Canonical, robots, sitemap intent, and internal linking do not send mixed signals.
5. sitemap.xml exists and includes all indexable URLs.
6. robots.txt is present and does not accidentally block indexable content.
7. Every indexable page has og:title, og:description, og:image (absolute URL, ≥1200×630px), og:url, og:type.
8. Twitter Card tags are present (twitter:card, twitter:title, twitter:description, twitter:image).
9. favicon.ico and apple-touch-icon.png are linked in `<head>`.
10. Structured data (if present) is valid and matches visible on-page content.

## Definition of Done

1. Intent, title, description, H1, and body copy are aligned.
2. Indexing directives are intentional and consistent.
3. Internal links were added or validated.
4. Structured data, if present, matches on-page content.
5. Content quality and differentiation are strong enough to support indexing.
