---
applyTo: "app/**/*.{ts,tsx,js,jsx,css,scss,mdx},src/app/**/*.{ts,tsx,js,jsx,css,scss,mdx},pages/**/*.{ts,tsx,js,jsx,css,scss,mdx},src/pages/**/*.{ts,tsx,js,jsx,css,scss,mdx},components/**/*.{ts,tsx,js,jsx,css,scss},src/components/**/*.{ts,tsx,js,jsx,css,scss}"
description: "Use when: creating or editing any UI component, page layout, or visual element. Goal: professional appearance, readable contrast, and full accessibility compliance."
---

# Visual Quality Instruction

This instruction has three tiers. Tier 1 and 2 are non-negotiable. Tier 3 is the design goal and should be pursued whenever it does not violate Tier 1 or 2.

## Decision Priority

1. **Tier 1 — Accessibility & Readability** (non-negotiable).
2. **Tier 2 — Responsive & Mobile-First** (non-negotiable).
3. **Tier 3 — Premium Design & Wow-Effect** (goal, yields to Tier 1 and 2).
4. Performance — never sacrifice load speed for decoration.

---

## Tier 1: Accessibility & Readability

### Contrast & Readability

1. Do not use text opacity modifiers below `/90` on dark backgrounds.
2. Use a stable hierarchy: primary headings `text-white`, body text `text-slate-300`, secondary text `text-slate-400`, fine print `text-slate-500`.
3. Eyebrow labels and metadata must remain clearly legible and should not rely on faded opacity.
4. Hover states must increase clarity, not reduce it.
5. Links must remain distinguishable from surrounding body text.
6. Aim for WCAG 2.1 AA contrast levels.

### Accessibility

1. All images need meaningful alt text unless decorative.
2. Use semantic landmarks: `main`, `header`, `footer`, `nav`, `section`, `article`, `aside`.
3. Provide visible focus states for every interactive element.
4. Use aria labels only where semantics or visible headings are insufficient.
5. Ensure keyboard navigation order is logical and complete.
6. Do not rely on color alone to communicate meaning.

### Interactive State Requirements

1. Interactive controls must define clear default, hover, focus, and disabled states.
2. Focus-visible states must be perceivable against surrounding surfaces.
3. Disabled state must remain readable while indicating non-interactive behavior.

---

## Tier 2: Responsive & Mobile-First

### Mobile Non-Negotiables

1. Design for narrow viewports first.
2. Keep touch targets large enough and well spaced.
3. Ensure text remains readable without pinch zoom.
4. Avoid horizontal scrolling, clipped content, and squeezed text blocks.
5. Keep sticky UI from obscuring critical actions.
6. Respect safe-area insets on devices with notches and home indicators.

### Mobile Interaction

1. Forms must work with mobile keyboards and autofill.
2. Primary actions should remain visible and reachable.
3. Error states must be clear and recoverable.
4. Use appropriate input types and autocomplete hints where possible.

### Layout Stability

1. Never place text or interactive elements in a flex row if they can be squeezed to an unreadable width at any viewport.
2. Headings and labels must not float beside long body text. Prefer the stacking pattern: eyebrow label, heading, subtitle/body.
3. Badges, pills, and stat cards should use `min-w-0` and overflow-safe layout rules inside grid/flex containers.
4. Use `hyphens: auto` or `hyphens-auto` for headings and long compound words when the page language supports it.
5. Avoid abrupt typography jumps between adjacent breakpoints.
6. Reserve space for media and async content. Prevent major layout shifts during hydration.

---

## Tier 3: Premium Design & Wow-Effect

The following rules define the design ambition. When any Tier 3 technique conflicts with Tier 1 or Tier 2, simplify the technique until the conflict is resolved. On mobile, prefer simpler variants of Tier 3 effects.

### Design Principles

1. Every page must look like it was designed by a professional agency, not a template.
2. Use generous whitespace — premium sites breathe. Avoid cramped layouts.
3. Establish a clear visual hierarchy: one dominant element per section, supporting elements subordinate.
4. Limit the color palette to 2–3 brand colors plus neutrals. Accent colors are used sparingly for emphasis.
5. Choose typography pairings with intention: a distinctive heading font paired with a clean body font.
6. Use a consistent spacing rhythm (e.g. 8px grid) across all components and sections.

### First Impression & Above the Fold

1. The hero section must create an immediate "wow" — bold headline, strong visual, and clear value proposition within 3 seconds.
2. Use high-quality imagery, illustrations, or subtle background treatments — never generic stock photos.
3. CTAs above the fold must be visually prominent and action-oriented.
4. Avoid visual clutter: one key message, one key action, one key visual per hero.
5. Consider subtle entrance animations (fade-in, slide-up) for hero elements — keep duration under 600ms. On mobile, reduce or skip entrance animations if they risk layout shifts.

### Interaction & Micro-Interaction Quality

1. Buttons, cards, and links must have smooth hover transitions (150–300ms ease) that feel intentional.
2. Use subtle scale, shadow-lift, or color-shift effects on interactive elements to signal interactivity.
3. Scroll-triggered animations (fade-in, parallax hints) add depth — keep them restrained and never block content. On mobile, prefer simple fade-ins over parallax.
4. Page transitions and section reveals should feel fluid, not jarring. Prefer ease-out curves.
5. Loading states must feel polished: skeleton screens or shimmer effects over raw spinners.
6. Every motion must serve a purpose (guide attention, confirm action, create continuity).

### Layout & Composition

1. Use asymmetric layouts or broken-grid compositions where appropriate to break template monotony — but fall back to single-column stacking on narrow viewports.
2. Alternate section rhythms: full-width hero → contained content → feature grid → testimonial strip. Avoid uniform block stacking.
3. Use card elevation, glassmorphism, or subtle gradients to create depth — apply one signature effect consistently, not many competing ones.
4. Negative space around key elements amplifies their importance. Do not fill every pixel.
5. Section transitions should feel seamless — use angled dividers, gradient fades, or smooth color transitions between sections rather than hard horizontal lines.

### Typography & Content Presentation

1. Headlines should be bold and attention-grabbing — use large sizes (3xl–6xl) with tight line-height for impact.
2. Body text must remain comfortable to read: 16–18px base, 1.5–1.75 line-height, max 70ch line length.
3. Use font-weight variation (light to bold) within a family to create hierarchy without adding fonts.
4. Pull quotes, statistics, and key figures deserve oversized, styled treatment to break up text walls.
5. Lists and feature grids should use custom icons or visual markers, not plain bullet points.

### Color & Surface Treatment

1. Use gradient accents and subtle color washes to add richness — avoid flat, monotone sections.
2. Dark sections interspersed with light sections create visual rhythm and perceived sophistication.
3. Shadows should be soft and layered (multiple box-shadows) for realistic depth, not harsh single-layer drops.
4. Background textures or patterns (grain, subtle mesh gradients, dot grids) add tactile quality when used sparingly.
5. Ensure brand colors are applied consistently to CTAs, accent elements, and interactive states.

### Social Proof & Trust Signals

1. Testimonials, logos, and trust badges must be visually integrated — not afterthoughts bolted onto the page.
2. Client/partner logos should be desaturated or monochrome for visual cohesion, colorized on hover.
3. Star ratings, review counts, and social proof numbers deserve prominent, styled placement near conversion points.
4. Use real photos and names where possible — avoid obvious placeholder avatars.

### Inspirational Benchmarks

1. Study the design quality of sites like Stripe, Linear, Vercel, Notion, and Apple for layout, typography, and interaction standards.
2. Adapt patterns and quality levels — never copy specific designs, assets, illustrations, or proprietary visual elements.
3. The goal is matching the perceived quality tier, not replicating any specific brand identity.

### Legal & Originality Safeguards

1. Never replicate proprietary illustrations, icon sets, or brand-specific visual elements from reference sites.
2. All imagery must be original, properly licensed, or generated — no unlicensed assets.
3. Design patterns (e.g. pricing tables, feature grids) are generic and reusable; specific visual executions are not.

---

## Conflict and Escalation

1. **Tier 1 vs Tier 3**: If a premium visual pattern conflicts with accessibility or readability, accessibility wins. Find an accessible alternative or drop the effect.
2. **Tier 2 vs Tier 3**: If a wow-effect breaks mobile usability, use a simpler mobile variant or remove the effect on narrow viewports.
3. **Performance vs Tier 3**: If an effect hurts LCP or CLS, simplify or make it progressive (load after critical content). Evaluate CSS-only alternatives before using JavaScript.
4. **Layout conflicts**: If layout style causes clipping or overlap, simplify structure before adding decoration.
5. **Uncertainty**: If state clarity or mobile behavior is uncertain, choose the simpler option.

## Verification Checklist

1. No clipping, overflow, or awkward wrapping at key mobile and desktop widths.
2. Text contrast remains readable in normal and interactive states.
3. Keyboard users can reach all controls in logical order.
4. Links and controls remain visually distinguishable without relying only on color.
5. Primary flow can be completed one-handed on mobile without hidden controls.
6. Hero section creates a strong first impression within 3 seconds.
7. Interactive elements have smooth, purposeful hover/focus transitions.
8. No section looks like an unstyled default or generic template output.
9. All visual assets are original or properly licensed.

## Definition of Done

1. Layout is visually stable and professional at mobile and desktop breakpoints.
2. Text contrast is comfortably readable without squinting.
3. Interactive elements are keyboard reachable and screen-reader safe.
4. No visual element creates overflow, clipping, or awkward wrapping on any viewport.
5. A first-time visitor would perceive the site as professionally designed and trustworthy.
6. Interactions feel smooth, intentional, and polished.
7. The design has a cohesive visual identity — not a patchwork of unrelated styles.
8. No copyrighted or unlicensed visual assets are used.
