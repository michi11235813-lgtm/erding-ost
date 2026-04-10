# Shared Copilot Standards Template

Use this content as a base layer in target repositories.

## How It Works

- `.github/copilot-instructions.md` is always active for every Copilot interaction (workspace-level).
- `.github/instructions/*.instructions.md` are loaded automatically when editing files matching their `applyTo` patterns (supports both `app/` and `src/app/` project structures).
- This template can be merged into the repo's `AGENTS.md` for additional enforcement.

## Shared Principles

1. Prefer the smallest change that solves the problem.
2. Keep behavior deterministic and easy to validate.
3. Prefer readable, maintainable solutions over clever complexity.
4. Do not break public behavior without noting it explicitly.

## Shared Instruction Lookup

Every UI, content, or page-level change must be checked against the relevant instruction files before completion.

| Trigger | Instruction file |
|---|---|
| Any UI component, layout, visual element, mobile layout, or interaction | `.github/instructions/visual-quality.instructions.md` |
| Any page for German users, legal/privacy/tracking/affiliate/monetization work | `.github/instructions/de-rechtssicher-abmahnung.instructions.md` |
| Any indexable page, metadata, structured data, or internal links | `.github/instructions/seo.instructions.md` |
| Any script, media, UI component, or rendering logic affecting speed | `.github/instructions/performance.instructions.md` |
| Any user-facing copy, landing page, FAQ, or educational content | `.github/instructions/content-quality.instructions.md` |

When multiple triggers apply, all relevant instruction files apply simultaneously.

## Shared UI Quality Gate

1. Layout must remain professional and visually stable.
2. Contrast must stay comfortably readable.
3. Interactive elements must be keyboard reachable.
4. Screen reader semantics must remain sound.
5. Long text must not overflow or wrap in unreadable ways.
6. Legal/privacy-sensitive and monetization changes must use conservative, disclosure-safe defaults.
7. Search-facing changes must preserve intent clarity and indexing consistency.
