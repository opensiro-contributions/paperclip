# Paperclip — capability roadmap for safer future agent operations

**PILOT v1 — current fork capability Issue template · DRAFT — NOT PUBLISHED.**  
**Target if approved:** `opensiro-contributions/paperclip` GitHub Issue (currently disabled).  
**Template:** [FORK_CAPABILITY_ROADMAP_ISSUE.md](https://github.com/opensiro/upstream/blob/f10b592c84a5bffe5508469c59163d2f1514d1f7/templates/FORK_CAPABILITY_ROADMAP_ISSUE.md).  
**Observation:** 2026-11-18 UTC. A fork Issue, new external Issue, feature or Index regrade **does not exist by virtue of this draft**.

## Why this Issue exists

Opensiro is testing whether reusable organizational specifications and a VSM-informed method can **standardize and reduce the cost of developing AI-agent harnesses**. This is a hypothesis, not an established saving or a requirement for every VSM function to exist.

**User outcome we want to improve:** a Paperclip company operator should be able to evaluate relevant changes affecting **future agent runs**, choose a compatible/authorized response, and verify the outcome without silently bypassing spending, review or board constraints. The operator value is **not yet independently validated**.

## Source and evidence

- **Original repository and current HEAD:** [`paperclipai/paperclip` at `9911b7052f60…`](https://github.com/paperclipai/paperclip/tree/9911b7052f602ae4bc2296ca27b05651fe4b873b) (2026-11-18 observation). The user outcomes below remain hypotheses pending current-native validation at this HEAD.
- **Working fork:** [`opensiro-contributions/paperclip`](https://github.com/opensiro-contributions/paperclip), verified parent `paperclipai/paperclip`; metadata owner control `ACTIVE / ALLOW` at this readback, not a public publication grant.
- **Durable case:** [`.opensiro/issues/capability-roadmap-issue-pilots-20261118/`](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118), metadata branch `opensiro/meta`.
- **Accepted Index baseline:** [Paperclip assessment](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md), accepted `reviewed_at=2026-11-17`, assessed source `7f9867895c4e7e9589b233a93aa9efceb0c992d0`; Profile `0.2.4` / Skills Methodology `0.3.8`; `S1=A, S2=A, S3=A(P), S3*=A, S4=—, S5=P`. Historical assessment is recent (1 day) but the original current HEAD **differs**; no automatic regrade or claim that all recent changes were reassessed.
- **System boundary:** one Paperclip company using first-party server/API/UI, goals/tasks/agents, budgets, reviews and board decisions; not the project maintainers, uninstalled plugins or private Cloud service.
- **Contribution constraints:** [MIT license](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/LICENSE), [native contributor guidelines](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/CONTRIBUTING.md) require search/dedupe, native tests/disclosure and prior Discord discussion for larger core changes. No Discord contact, no verified CLA exemption, no permission to publish an external Issue or PR. GitHub fork `has_issues=false` as observed 2026-11-18.

## What already exists?

The table distinguishes current first-party source evidence from original proposals; it is **not** a new Index assessment.

| User need / VSM function | Current implementation | Existing Issue/PR and verified status on 2026-11-18 | Remaining gap to validate |
| --- | --- | --- | --- |
| Future model/provider change response (S4 hypothesis) | [First-party connection router](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/server/src/services/ai-connection-router.ts) supports experimental, guarded connection routing, not by itself a future adaptation loop | [#20848](https://github.com/paperclipai/paperclip/issues/20848) **OPEN** (model-release notifications and compatibility recommendations); [#16954](https://github.com/paperclipai/paperclip/issues/16954) **OPEN** (OSS router proposal); [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) **MERGED** (task-pinned routing) | Whether a company can compare future alternatives, authorize a change, and observe its use in a later eligible run |
| Subscription-aware scheduling and budget policy (S3 / possible S4) | [Paperclip README](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/README.md) documents budgets and control of agents | [#3406](https://github.com/paperclipai/paperclip/issues/3406) and [#16504](https://github.com/paperclipai/paperclip/issues/16504) **OPEN**; [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) **OPEN, not merged**, head `43b61148378cc045ff0eda5ad0f5b754c496b4be` | Whether proposed deferred-run/scheduling mechanisms leave a useful **future policy** choice unmet; avoid duplicating admission |
| Decision-source authority for approvals (S5-related boundary) | [Board delegation](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/docs/guides/board-operator/delegation.md) already describes strategy approvals; [execution policy](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/docs/guides/execution-policy.md) enforces task review/approvals | [#18296](https://github.com/paperclipai/paperclip/issues/18296) **OPEN**; [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) **OPEN, not merged**, head `b6cd49d4b6926fae61a2c68a31ce7c659b69eaa6` | Whether named decision sources can be constrained across actual entry points, without re-labeling routine approvals as a new S5 grade |

**Simplest original-native alternative:** an operator reads official provider release information, checks agent/adapter/account eligibility, manually adjusts approved future agent configuration, monitors the next run, and handles budgets/review separately. If this is sufficient, **do not introduce a new controller**.

## Proposed priorities

An issue or an unmerged PR is not shipped functionality; a low historical S4 grade alone is not a reason to code.

- **P0 / optional S4 outcome:** reuse [#20848](https://github.com/paperclipai/paperclip/issues/20848) as the **existing original discussion**, not a duplicate: future model-change signal → realistic `hold` and compatible-candidate options → authorized company-scoped decision → future-run-only change → observable later-run receipt. First verify a real unmet operator task at the current original HEAD. **Not delivered, not confirmed C.**
- **P1 / S3 outcome:** compare #3406, #16504 and PR #13379 to see whether existing deferred-run work already solves subscription-capacity planning. Propose incremental future-policy feedback only if a distinct user need remains.
- **P1 / decision rights:** examine #18296 and PR #17857 for an enforceable, named authority boundary to strategy/approval decisions. Respect legitimate board rights and existing review stages; do not infer a new S5 assessment grade.
- **Optional later stages:** a first-party `C` constructor is only a *conditional* target after proving user value and a developer-composable agent decision port. `C(P)` or `A(P)` require separate supported modes, not a mandatory ladder. A human-only parent `P` can be sufficient.

**Constructor contract gate:** before treating a proposed `C` as implementation-ready, independently establish function-specific ports and durable option state, who composes/owns real autonomous decisions, delegated rights, policy enforcement, future-operation feedback, supported distribution and positive/negative native tests. Do not conflate notifications or generic plugins with constructor closure.

## How would we know it helps?

- **New action / counterfactual:** a company operator can inspect and decide between an evidenced `hold` and future compatible model option and confirm which authorized option affected a later run, not just read a notification.
- **Positive case:** an attributed provider change yields compatible options; an authorized company decision chooses a future-run-only update; an eligible later run reports its actually effective model and applied policy.
- **Negative case:** unknown compatibility, expired decision or a non-delegated actor may not change the next-run settings; budget/board/reviewer controls remain intact, with an explicit rejection receipt.
- **Dependencies/conflicts:** source-native model compatibility, real eligible accounts, original #20848, experimental router boundaries, S3 budget policy and S5 board rights.
- **No-change condition:** shipped first-party behavior or existing original work already supplies the outcome, or a matched native manual workflow is sufficient.

## Independent next steps

**Selected primary path: project-native integration research only** — review current source and overlapping issues, and propose a smallest native improvement only after a separately authorized Upgrade. Methodology feedback and a licensed experimental domain fork remain independent *possible future* choices, not current tasks.

**Cost experiment:** compare the same operator model-change scenario (manual/current-native vs any VSM-informed first-party alternative) on implementation, integration, review/testing, maintenance, compatibility and successful later-run outcome. **Status: `NOT_MEASURED`.**

## Decision / handoff

**State:** `PLAN_ONLY / NEEDS_EVIDENCE` (report labels only).  
**Next decision:** verify whether a distinct user outcome survives original #20848 and current source behavior; then decide whether native integration, an acceptance contract or **no change** is warranted.

Detailed case artifacts belong only to the [fork `opensiro/meta` case directory](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118). This is for **Opensiro fork-local discussion**, not an original-project request. External publication needs separate exact approval; no GitHub cross-owner native Issue transfer, automatic product implementation, fork-local PR, Index regrade or internal Issue closure is implied.

**AI disclosure:** source inventory and this pilot Issue were prepared with AI assistance; no independent human validation, production feature, native test run or measured saving is claimed.
