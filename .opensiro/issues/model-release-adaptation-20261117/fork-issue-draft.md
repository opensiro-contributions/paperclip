# GitHub Issue draft — NOT PUBLISHED

**Repository:** `opensiro-contributions/paperclip` (fork)  
**Title:** research(S4): validate a composable model-adaptation decision loop  
**Publication status:** `DRAFT — NOT PUBLISHED`  
**Technical preflight:** fork has Issues disabled (`has_issues=false` on 2026-11-17).  
**Separate publication consent:** NOT GRANTED for the exact action/text.

---

## Purpose

This is an **OpenSiro fork-internal research Issue**, not a request for a Paperclip maintainer to adopt VSM or implement a particular architecture. OpenSiro is testing whether a common VSM-informed methodology can help **standardize and potentially reduce the cost of designing and improving AI-agent harnesses**. Cost reduction and user value remain hypotheses to measure—not established benefits.

**Original:** [paperclipai/paperclip](https://github.com/paperclipai/paperclip).  
**Related existing original Issue:** [#20848 — opt-in model release notifications and compatibility-aware upgrade recommendations](https://github.com/paperclipai/paperclip/issues/20848). Reuse/link that Issue for its existing scope; **do not open a duplicate external Issue**.  
**Working case:** [source-pinned roadmap](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/model-release-adaptation-20261117/roadmap.md) · [S4 constructor and acceptance contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/model-release-adaptation-20261117/constructor-acceptance.md).

## Operator problem to validate

A Paperclip company uses agent models and runner/CLI versions that may become outdated when providers announce new models, deprecations or capability/price changes. A company operator wants to compare **keep the current setting** versus a **compatible future setting**, let a suitably delegated company agent evaluate bounded alternatives, and verify that a permitted choice affects the **next eligible run**, without changing active sessions, spending limits, protected reviewers or board authority.

That operator demand is an **unvalidated research hypothesis**. A manual review of provider releases and ordinary agent configuration is the baseline; if that is sufficient, **do not build a new feature**.

## VSM hypothesis (not an asserted product deficiency)

The accepted [Index Paperclip review](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md) at original source `7f9867895c4e7e9589b233a93aa9efceb0c992d0` recorded **S4=—** (Profile 0.2.4 / Skills Methodology 0.3.8). This is a historical source-bound classification, **not** evidence that Paperclip needs a mandatory S4 controller or that newer original commits lack one.

Proposed research target: a *first-party, function-specific, developer-composable S4 decision/feedback interface*. A developer-configured autonomous actor owns future-option selection within delegated authority; a human/board retains reserved approvals. Notifications, an uninstalled generic plugin, ordinary model-setting edits or a dashboard recommendation alone do **not** establish an autonomous `C` constructor.

## Investigation / readiness gates

- [ ] Recheck original default HEAD and actual first-party model/runner/approval behavior; pin evidence, and dedupe current original issues/PRs, especially #20848.
- [ ] Confirm a real user benefit and a material delta versus the simplest native/manual workflow. If not, conclude `NO_USEFUL_CHANGE` / `NO_MATERIAL_DELTA`.
- [ ] Identify a source-native, opt-in S4-specific interface that forms **hold vs compatible candidate change** options from an externally sourced, attributable future signal; explicitly surface unknown compatibility, account eligibility and cost.
- [ ] Specify the legitimate company-scoped decision owner, composable autonomous evaluator, enforcement of reserved board/S5 approval, stale-version and revocation checks, and safe future-run-only state transition.
- [ ] Require an observation/receipt of the **actual next eligible run** and return of failures to management. A staged setting alone is not closed-loop evidence.
- [ ] If implementation is separately authorized and justified, prove the [ten acceptance scenarios AC-01–AC-10](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/model-release-adaptation-20261117/constructor-acceptance.md), including unauthorized actor, unknown compatibility, stale/revoked grants, refusal, protected reviewer, and failure feedback.
- [ ] Compare matched native vs VSM-informed engineering and operational costs; status `NOT_MEASURED` until observed.

## Scope and publication boundaries

**Now:** `PLAN_ONLY / RESEARCH`. Store all source notes, design decisions and acceptance criteria under [`.opensiro/issues/model-release-adaptation-20261117/`](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/model-release-adaptation-20261117). The fork Issue is a navigation/discussion surface; the case directory on `opensiro/meta` is the durable research record.

**Not authorized by this Issue:** product code, fork-local review PR, new external Paperclip issue, external comment/PR, Discord contact, Index regrading or delegation of protected decision rights. Those routes have separate preflights and consent gates. Keep this internal Issue open for our own research even if the original #20848 is answered.

**AI-assisted preparation:** this proposed issue text and the linked research contract were prepared with AI assistance and require independent source-native verification; no tests or shipped implementation are claimed.

**Next decision:** verify user demand and source-native overlap before deciding whether an implementation is worthwhile.
