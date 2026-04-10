---
applyTo: "app/**/*.{ts,tsx,js,jsx,css,scss},src/app/**/*.{ts,tsx,js,jsx,css,scss},pages/**/*.{ts,tsx,js,jsx,css,scss},src/pages/**/*.{ts,tsx,js,jsx,css,scss},components/**/*.{ts,tsx,js,jsx,css,scss},src/components/**/*.{ts,tsx,js,jsx,css,scss},public/**/*"
description: "Use when: adding scripts, media, UI components, data fetching, and rendering logic that can affect load speed or interactivity. Goal: keep Core Web Vitals healthy, especially on mobile."
---

# Performance Instruction

## Decision Priority

1. Preserve fast, stable first render on mobile.
2. Protect interaction responsiveness.
3. Add non-critical enhancements only if cost is justified.

## Non-Negotiables

1. Favor lightweight rendering paths for initial page load.
2. Minimize render-blocking resources.
3. Use responsive images and lazy loading where appropriate.
4. Avoid unnecessary client-side JavaScript.
5. Require a clear reason before introducing heavy third-party code.

## Core Web Vitals Guardrails

1. LCP: prioritize fast hero and primary content rendering.
2. CLS: reserve dimensions for dynamic elements.
3. INP: keep interaction handlers efficient and predictable.

## Third-Party Scripts

1. Add scripts only with clear business value.
2. Prefer `defer`, `async`, or delayed loading for non-critical scripts.
3. Monitor and limit cumulative third-party impact.
4. Define graceful fallback behavior if script loading fails.
5. Self-host fonts instead of loading from external CDNs. In Next.js, use `next/font/google` or `next/font/local` which automatically self-hosts at build time. Never use `<link href="fonts.googleapis.com">` or `@import url('fonts.googleapis.com')`.

## Conflict and Escalation

1. If a feature and performance target conflict, ship the lighter variant first.
2. If impact cannot be estimated, gate rollout or defer implementation.
3. If third-party cost is high, require explicit impact note and justification.

## Verification Checklist

1. No new obvious render-blocking path was introduced.
2. Dynamic UI elements reserve space to reduce CLS risk.
3. New heavy scripts include purpose, loading strategy, and fallback.
4. Mobile-first impact was considered before merge.

## Definition of Done

1. No obvious new bottleneck in the render path.
2. Layout stability is preserved under realistic loading order.
3. Heavy scripts or media have a documented reason.
4. Mobile performance impact was considered before merge.
