---
name: abmahnung-audit
description: "Use when: auditing legal safety of German websites, reviewing Abmahnung risk, checking DSGVO compliance, verifying Impressum completeness, cookie consent patterns, or ensuring German legal requirements are met. Trigger phrases: Abmahnung, abmahnsicher, legal audit, Rechtscheck, DSGVO audit, Impressum check, Cookie compliance, German legal review, Abmahnrisiko."
---

# Abmahnung Risk Audit Skill

## Purpose

Systematically audit a website project against known German Abmahnung risks, identify gaps in the `de-rechtssicher-abmahnung.instructions.md`, and produce concrete updates to minimize legal exposure.

This skill does NOT provide legal advice. It reduces common, well-documented risks. For legal certainty, always recommend qualified legal review.

## When to Use

- Before launching a new German-facing website
- After major feature additions (shop, newsletter, embeds, forms)
- Periodically to check against evolving Abmahnung trends
- When updating the shared `de-rechtssicher-abmahnung.instructions.md`

## Audit Workflow

### Phase 0: Update Risk Database

Before running the audit, refresh the risk database to catch new developments.

#### 0.1 — Check for Law Name Changes First

Before any web search, verify these known law renames that generate active Abmahnungen:

| Old Name | New Name | Since | Abmahnung Risk |
|---|---|---|---|
| TMG (§ 5 TMG) | DDG (§ 5 DDG) | 14.05.2024 | Hoch — veraltete Gesetzesangabe im Impressum |
| TTDSG | TDDDG | 14.05.2024 | Mittel — veraltete Nennung in DSE |
| Telemedien | Digitale Dienste | 14.05.2024 | Niedrig |

If any instruction file or risk entry still uses old names, update them before proceeding.

#### 0.2 — Web Research

Search for current developments. Run queries in parallel where possible:

| Query | Focus |
|---|---|
| `"Abmahnung Website" [current year] aktuell` | General trends and top causes |
| `"DSGVO Urteil" [current year] BGH OLG neu` | New data protection court rulings |
| `"TDDDG Cookie" Urteil [current year]` | Consent/cookie enforcement |
| `"PAngV Preisangaben Urteil" [current year]` | Pricing regulation updates |
| `"BFSG Barrierefreiheit" Abmahnung [current year]` | Accessibility enforcement |
| `"UWG Abmahnung" Online Shop [current year] neue Fälle` | Unfair competition cases |
| `"Dark Patterns" Abmahnung UWG [current year]` | Dark pattern enforcement |
| `"KI Kennzeichnung" Pflicht [current year] UWG` | AI content labeling |
| `"DDG" OR "Digitale-Dienste-Gesetz" Abmahnung Impressum` | DDG enforcement |
| `Händlerbund Abmahnstudie OR "Top Abmahnungen" [current year]` | Aggregated statistics |

#### 0.3 — Evaluate Each Finding

For each finding, answer:
1. **Confirmed obligation?** — Binding court ruling, enacted law, or regulatory guidance only. Exclude speculation.
2. **Applicable?** — Does it apply to commercial, B2C, German-facing websites?
3. **Already covered?** — Check existing IDs in `abmahnung-risks.md`. Do not duplicate.
4. **Severity?** — **Hoch** (häufig abgemahnt, hohe Bußgelder) / **Mittel** (zunehmend, konkrete Urteile) / **Niedrig** (bekannt, selten durchgesetzt).

Only add entries for confirmed, applicable, not-yet-covered risks.

#### 0.4 — Update the Risk Database

**New risks** — add to the appropriate category table:
```
| XXX-## | [Risk name] | [Law/ruling with case number] | [Concrete implementation requirement] |
```
Assign the next sequential ID within the category. If no category fits, add a new section.

**Outdated entries** — update Legal Basis and Implementation Requirement; add `*(aktualisiert: [reason])*`.

**Law renames** — update category headers, table entries, and inline notes consistently.

#### 0.5 — Finalize and Report

1. Update `Last updated:` date at the top of `abmahnung-risks.md`.
2. Report to the user: entries added / updated / renamed, categories changed, any risks needing legal review.
3. Proceed to Phase 1.

### Phase 1: Load Current State

1. Read the current `de-rechtssicher-abmahnung.instructions.md` from `.github/instructions/`.
2. Read the [Abmahnung risk database](./references/abmahnung-risks.md) to get the full list of known risk categories.
3. Read `copilot-instructions.md` to check which legal rules are in the always-on layer.

### Phase 2: Gap Analysis

For each risk category in the database, check:

1. **Covered?** — Is this risk explicitly addressed in the instruction file?
2. **Specific enough?** — Is the rule actionable, or is it too vague to prevent violations?
3. **Technically enforceable?** — Can Copilot realistically follow this rule when generating code?
4. **Up to date?** — Has the legal landscape changed (new court rulings, new laws) since the rule was written?

Produce a gap table:

| Risk Category | Severity | Currently Covered | Gap Description |
|---|---|---|---|
| ... | Hoch/Mittel/Niedrig | ✅ Ja / ⚠️ Teilweise / ❌ Nein | What's missing |

### Phase 3: Research Updates

For each gap or partially covered risk:

1. Identify the specific legal basis (law, court ruling, regulation).
2. Determine the concrete implementation requirement for a website.
3. Formulate an actionable rule that Copilot can follow when generating code.
4. Draft the rule in the same format as existing rules (numbered list items).

### Phase 4: Update Instructions

1. Add new rules to the appropriate section of `de-rechtssicher-abmahnung.instructions.md`.
2. If a rule belongs in the always-on `copilot-instructions.md`, add it there too.
3. Update the Verification Checklist and Definition of Done sections.
4. If new sections are needed, follow the existing document structure (section → numbered rules → verification → definition of done).

### Phase 5: Report

Present a summary to the user:

1. **Gaps found** — List of risks that were not covered or inadequately covered.
2. **Rules added** — List of new rules with their rationale.
3. **Rules updated** — List of existing rules that were strengthened or clarified.
4. **Remaining risks** — Risks that cannot be fully mitigated through instructions (e.g., require legal review of specific content).
5. **Recommendation** — Whether professional legal review is advisable for the specific project.

## Quality Standards

1. Every new rule must name the specific legal risk it addresses.
2. Rules must be concrete and actionable — not "be careful with X" but "do Y specifically".
3. Prefer conservative implementations — if two approaches exist, choose the safer one.
4. Do not invent legal requirements — only codify well-documented, established obligations.
5. When the legal situation is genuinely unclear, say so and recommend legal review.
6. Keep rules technology-aware — reference specific implementation patterns (e.g., `next/font`, 2-click embeds) where helpful.

## Conflict Resolution

1. If a new rule conflicts with an existing instruction (e.g., premium design wants external fonts), legal safety wins.
2. If a rule would be overly restrictive for edge cases, note the exception explicitly.
3. Never weaken an existing rule unless the legal basis has changed.

## After the Audit

1. Ask the user if they want to sync the updated instructions to target repos.
2. Recommend which risks need project-specific legal review beyond what instructions can cover.
