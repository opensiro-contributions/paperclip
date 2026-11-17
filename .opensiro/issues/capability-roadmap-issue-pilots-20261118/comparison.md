# Paperclip Issue template pilots — controlled comparison

**Canonical storage:** `opensiro-contributions/paperclip@opensiro/meta:.opensiro/issues/capability-roadmap-issue-pilots-20261118/`.

**Status:** `PLAN_ONLY / DRAFT — NOT PUBLISHED`. **Observed:** 2026-11-18. These are **two alternative Issue bodies for the same case**, not two improvement candidates, published GitHub Issues or new assessments.

- **[Pilot v1 — current fork Issue template](issue-v1.md)** follows the seven sections in [`FORK_CAPABILITY_ROADMAP_ISSUE.md`](https://github.com/opensiro/upstream/blob/f10b592c84a5bffe5508469c59163d2f1514d1f7/templates/FORK_CAPABILITY_ROADMAP_ISSUE.md).
- **[Pilot v2 — proposed capability integration roadmap](issue-v2.md)** follows the eight-section plan proposed in chat, *not* a protocol amendment or the existing roadmap file.

## Same factual input

- Original [`paperclipai/paperclip@9911b705…`](https://github.com/paperclipai/paperclip/commit/9911b7052f602ae4bc2296ca27b05651fe4b873b); accepted [Index assessment](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md) at `7f986789…` (2026-11-17).
- Same P0: model/provider future-change choice grounded in original [#20848](https://github.com/paperclipai/paperclip/issues/20848), with shipped experimental router as a lower-level native baseline.
- Same P1a: subscription/capacity planning grounded in [#3406](https://github.com/paperclipai/paperclip/issues/3406), [#16504](https://github.com/paperclipai/paperclip/issues/16504), [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) (still unmerged at observation).
- Same P1b: authority for protected approvals grounded in [#18296](https://github.com/paperclipai/paperclip/issues/18296), [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) (still unmerged at observation).
- Same evidence restrictions: no unaccepted `C`, no automatic Index grade, no assumed cost advantage, no direct original maintainer communication.

## Format assessment

| Criterion | v1 — existing template | v2 — proposed integration template |
| --- | --- | --- |
| Short initial case/problem | Explicit first user outcome, simple `P0/P1` bullet priorities | Broader cross-function operator outcome |
| Original Issues/PRs | One evidence matrix, priorities in prose | Evidence matrix **plus** integration/dependency table |
| Ability to see what to reuse | Requires following issue links and prose | Explicit `existing proposal → missing capability → smallest integration` in one row |
| Authority and safety | Narrative acceptance examples | Per-priority named authority and negative/stop gate table |
| Next steps | One selected primary route (other routes held) | Three explicitly independent optional routes |
| C target | Conditional constructor requirement in prose | Same requirement; explicit dependency and no-grade gate |
| Ease of maintenance | Less tabular detail, fewer links to update | Richer but longer; all issue status/head fields need refresh |
| Appropriate use | Quick screening of one selected need | Coordinating several related Issues/PRs across S3/S4/S5 |

**Recommendation for evaluating these pilots:** prefer **v2** when the objective is to *organize existing original Issues/PRs into a reviewable capability-development sequence* and record why a bounded contribution adds real value. Keep **v1** for quicker first-pass proposals that have one primary outcome. This comparison is about *readability and traceability*, **not** verified engineering savings or a result of user testing.

## Source / authority boundaries

No public fork GitHub Issues exist for these drafts. The verified fork currently has `has_issues=false`; we did **not** enable it. Separate exact approval is needed to open any public fork Issue and again for any original external Issue. The original [#20848](https://github.com/paperclipai/paperclip/issues/20848) already covers much of P0; do not open a duplicate. Neither pilot modifies or replaces the earlier model-release roadmap, its technical contract, Paperclip product code or Upstream's canonical templates.
