# Paperclip capability roadmap Issue pilot comparison — approved v2

**Canonical storage:** `opensiro-contributions/paperclip@opensiro/meta:.opensiro/issues/capability-roadmap-issue-pilots-20261118/`.  
**Status:** `PLAN_ONLY / DRAFT — NOT PUBLISHED` (updated 2026-11-18). This is a comparison of **Issue presentation and sufficiency obligations**, not a measurement of engineering savings or a double-reviewed Index assessment.

## What each draft represents

- [v1](issue-v1.md): original, now **historical**, seven-section format focused on operator problem, existing native issues/PRs, optional P0/P1 and one selected research path. Pinned Paperclip source `9911b705…`; preserved for comparison.
- [v2](issue-v2.md): **approved default v2 pilot** on Paperclip `f5f60cf…`, with eight sections and mandatory VSM target matrix, **S4 C sufficiency**, P0 goal / P1 required prerequisites / P2 optional modes, integration order, rights, and tests. Backed by [self-contained construction contract](constructor-sufficiency-v2.md).
- The original default branch advanced between v1 and v2. Both share the same historical accepted Index vector and key original issue/PR questions, but **source snapshots differ**. Therefore the comparison is qualitative; it cannot prove one format found more true gaps without an identical-source blind review.

## Capability assessment for this pilot

| Function | Accepted Index baseline (2026-11-17) | v2 engineering target | Why |
| --- | --- | --- | --- |
| S1 | `A` | **Exclude mandatory C work** | A already implements an autonomous first-party operating path, although A does **not** imply C |
| S2 | `A` | **Exclude mandatory C work** | Existing autonomous coordination; no invented need for a different constructor |
| S3 | `A(P)` | **Exclude mandatory C work**; reuse budget limits as dependencies | Existing agent-owned and parent current-control modes; protect both |
| S3* | `A` | **Exclude mandatory C work**; preserve independent review | No C conversion required by this roadmap |
| **S4** | **`—`** | **P0 `C` target, `NEEDS_EVIDENCE`** | Existing experimental router is not sufficient by itself; a real agent-composable future-adaptation decision/feedback loop must be shown |
| S5 | `P` | **Preserve legitimate parent authority** | Board rights are S4 safety boundaries, not an automatic S5=C upgrade |

## Format and traceability

| Decision task | v1 | Approved v2 |
| --- | --- | --- |
| User demand and native workaround | Included | Included and linked directly to **C target materiality** |
| Original current behavior and Issue/PR dedupe | One table | Table + **target sufficiency coverage**; original issue #20848 still open |
| Clarity that existing `A` needs no mandatory `C` | Implicit / absent | **Explicit exemption**, without pretending `A=C` |
| Explicit S4 `— → C` goal | Conditional prose | **Mandatory target row**, with source-native evidence and unresolved claims |
| Distinguish target from required prerequisites | P0/P1 topic list | **P0 constructor outcome; P1 necessary enabling work; P2 optional modes** |
| Why the combined set is sufficient | Not demonstrated | **Five logical first-party ports**: source signal, options, composable agent choice, authorized next-run effect, feedback |
| Falsifiable native acceptance | A few positive/negative descriptions | **10 proposed acceptance scenarios**, including missing actor, parent rights, revoked/stale state and actual next-run observation |
| Readiness / grade certainty | General `PLAN_ONLY` | **`NEEDS_EVIDENCE` explicitly**, no unearned shipped `C` |
| Maintenance burden | Shorter | Longer; requires source pin, live PR head/status refresh and contract revalidation |

**Recommendation:** use **v2** for this pilot's selected goal: a source-backed path to a verifiable first-party `C` constructor, not a miscellaneous VSM-inspired feature list. v1 can remain a quick general research illustration, but it is **not** the approved C-first roadmap template.

## Next gate

Validate user value and present source overlap for [#20848](https://github.com/paperclipai/paperclip/issues/20848) at the new pinned original master; map each proposed first-party port to an actual original-native integration point; check the current company authority and default-off routing deployment. If all requirements are feasible and material, separately authorize native implementation; otherwise report `NO_USEFUL_CHANGE`/`NEEDS_EVIDENCE`. No assumption that all related S3/S5 PRs must merge.

**No public fork Issue or external Paperclip Issue/PR published.** The verified working fork has `has_issues=false`; any public action requires its own current-conversation exact consent. No product code, old roadmap, canonical Upstream template or Index grade was changed by this pilot.
