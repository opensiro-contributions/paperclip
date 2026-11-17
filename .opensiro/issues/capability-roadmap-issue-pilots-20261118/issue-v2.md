# Paperclip — capability integration roadmap for future agent operations

**PILOT v2 — proposed integration-roadmap Issue template · DRAFT — NOT PUBLISHED.**  
**Target if approved:** `opensiro-contributions/paperclip` GitHub Issue (currently disabled).  
**Comparison:** [v1 Issue](issue-v1.md) · [pilot comparison](comparison.md).  
**Observed:** 2026-11-18 UTC. All future work below is conditional research, **not product delivery**.

## 1. Goal

Opensiro is exploring whether **reusable organizational specifications, informed by the VSM**, help unify existing agent-harness capabilities and thereby **reduce engineering effort** versus the simplest project-native approach. The evaluation is about useful actions and cost—not satisfying every VSM box or imposing an architecture on Paperclip.

**User outcome:** a Paperclip company operator should be able to make safe choices about changes affecting future agent execution—models/compatibility, subscription capacity and strategic authority—and know the decisions take effect within existing board and review boundaries. **The unmet need and cost advantage remain hypotheses to verify.**

## 2. Evidence baseline

- **Original:** [`paperclipai/paperclip` at current master `9911b7052f60…`](https://github.com/paperclipai/paperclip/tree/9911b7052f602ae4bc2296ca27b05651fe4b873b), observed **2026-11-18**. Current behavior and alternatives must be re-checked before implementation.
- **Fork:** [`opensiro-contributions/paperclip`](https://github.com/opensiro-contributions/paperclip), actual parent `paperclipai/paperclip`, `opensiro/meta` state `ACTIVE / ALLOW`; **no third-party publication consent**. Fork currently has GitHub Issues **disabled**.
- **Case artifacts:** [`.opensiro/issues/capability-roadmap-issue-pilots-20261118/`](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118).
- **Accepted Index:** [source-pinned Paperclip assessment](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md) reviewed **2026-11-17** against `7f9867895c4e7e9589b233a93aa9efceb0c992d0`; Profile `0.2.4` / Skills `0.3.8`; `S1=A S2=A S3=A(P) S3*=A S4=— S5=P`. One-day-old review, but original HEAD has advanced: **grades are historical**, no regrade performed.
- **Boundary:** one Paperclip company and supported first-party server/UI/API, agents/tasks, management, budgets, execution policy and board. Exclude maintainers' organization, uninstalled third-party actors and private Cloud-only behavior.
- **Constraints:** [MIT](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/LICENSE); [CONTRIBUTING](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/CONTRIBUTING.md) requires dedup, native tests/disclosure and prior Discord coordination for larger core changes. No Discord outreach or CLA exception assumed.

## 3. Existing work and remaining gaps

| Capability / VSM function | Verified native source | Existing original Issues / PRs | Remaining operator outcome to establish |
| --- | --- | --- | --- |
| Future model compatibility / S4 hypothesis | [Connection router](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/server/src/services/ai-connection-router.ts) has opt-in/experimental connection selection and compatibility checks | [#20848](https://github.com/paperclipai/paperclip/issues/20848) **OPEN** model-release proposal; [#16954](https://github.com/paperclipai/paperclip/issues/16954) **OPEN** reference-router proposal; [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) **MERGED** | Independently selectable future `hold` vs compatible-change options, bounded decision authority and real next-run feedback; **not established** by routing alone |
| Subscription capacity planning / S3→possible S4 | [Current budgets and agent control](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/README.md) | [#3406](https://github.com/paperclipai/paperclip/issues/3406), [#16504](https://github.com/paperclipai/paperclip/issues/16504) **OPEN**; [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) **OPEN/unmerged**, head `43b61148378cc045ff0eda5ad0f5b754c496b4be` | Decide future capacity policy, as distinct from simply deferring a saturated run; might already be covered by native work |
| Approval decision provenance / S5 authority boundary | [Board delegation](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/docs/guides/board-operator/delegation.md) + [runtime review/approval](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/docs/guides/execution-policy.md) | [#18296](https://github.com/paperclipai/paperclip/issues/18296) **OPEN**; [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) **OPEN/unmerged**, head `b6cd49d4b6926fae61a2c68a31ce7c659b69eaa6` | Enforce which legitimate principal/channel may decide a protected strategic/approval operation, not merely record who clicked |
| Review-stage constraint / S3* | [Runtime stage participant rules](https://github.com/paperclipai/paperclip/blob/9911b7052f602ae4bc2296ca27b05651fe4b873b/docs/guides/execution-policy.md) | [PR #15265](https://github.com/paperclipai/paperclip/pull/15265) **OPEN/unmerged** (head `28183072c57ef8f035a0851aed2e03f4df9b7f77`) | **Constraint only:** proposed changes must not bypass a distinct reviewer; no new S3* feature asserted |

**Existing baseline:** manually check provider announcements, agent/model/account compatibility and permissions, update only approved configurations, monitor later runs, and use present budget/board workflows. If this is sufficient, select **no new implementation**.

## 4. Proposed development roadmap

| Priority | Concrete user capability | Reuse / smallest integration | Dependencies and decision owner | Conditional target |
| --- | --- | --- | --- | --- |
| **P0 · S4 hypothesis** | Compare an attributed future provider change with `hold`, choose an eligible option and verify later-run effect | Start from existing [#20848](https://github.com/paperclipai/paperclip/issues/20848) and shipped connection compatibility/routing. Seek first-party compare → decide → future-use stage → observe **only if a missing outcome is proven** | Company operator/authorized delegated agent; board retains reserved decisions; router eligibility and later-run telemetry | Useful native capability first; **S4=C candidate only if a real developer-composable agent decision interface with feedback ships and is independently assessed** |
| **P1 · S3/potential S4** | Set a future resource/capacity policy, not just respond to exhausted quotas | Reconcile [#3406](https://github.com/paperclipai/paperclip/issues/3406), [#16504](https://github.com/paperclipai/paperclip/issues/16504) and [PR #13379](https://github.com/paperclipai/paperclip/pull/13379). Avoid duplicating deferred scheduling | Existing S3 manager/board budget constraints; dependent only if source shows a real gap | Native capacity feedback if material, no preassigned grade |
| **P1 · authority boundary** | Specify who may decide a protected approval/strategy change and verify rejection for unauthorized actors | Evaluate [#18296](https://github.com/paperclipai/paperclip/issues/18296) alongside [PR #17857](https://github.com/paperclipai/paperclip/pull/17857); small targeted enforcement preferred | Legitimate company board/parent authority and task-level review; may be pursued independently of P0 | Narrow source-native permission improvement, **not automatic S5 advancement** |
| **P2 · integration guardrails** | Preserve reviews, compatibility, budgets and company isolation while any priority changes | Reuse existing execution policy and connection validator; no new subsystems required | Existing S1/S2/S3*/S5 controls | Negative/compatibility test obligations |

**Constructor gate (conditional):** before attempting a proposed `C`, write/verify a **separate** first-party contract: external/operational stimulus → durable options and state → *developer-composable autonomous decision owner* bound to actual rights → authorized, future-run-only action → first-party observed return to operation, with unsupported paths and negative tests. A notification, human approval or generic plugin does not prove `C`. Optional `C(P)` / `A(P)` modes are **not required stages** and must have independent evidence.

## 5. Acceptance, alternatives and stop conditions

| Gate | Expected evidence | Stop/negative result |
| --- | --- | --- |
| **Source-native dedupe** | Current HEAD code and live original issue/PR diff review, especially #20848 / #13379 / #17857 | Equivalent existing capability or accepted PR closes the task → `NO_USEFUL_CHANGE` |
| **Positive operator scenario** | Source-attributed model release, compatible `hold`/`change` options, authorized decision and *actual later run* receiving the expected effective model/config | Notification/record-only without later-run action is insufficient |
| **Unauthorized/unsafe scenario** | A non-delegated agent, stale source revision, unknown compatibility or protected-reviewer violation is rejected without affecting any future run | If authorization can be bypassed → implementation **blocked** |
| **Materiality and alternative** | Same task compared against manual config + native router, measuring time, test effort, observable functionality | Simpler native route matches outcome → prefer it, no new VSM API |
| **Future grade claim** | Shipped source, supported deployment mode and later Skills/Index review | Prototype/open PR/issue cannot be credited as `C` or changed Index grade |

## 6. Independent development paths

These can be investigated **separately** and require distinct decisions—not automatically executed together.

1. **Paperclip source-native integration:** organize existing original work first; contribute an implementation only after material need, contributor-policy checks and **separately authorized** Upstream Upgrade.
2. **Profile or Skills feedback:** only if a real source-backed ambiguity about VSM semantics or assessment tests is found; no speculative normative change.
3. **Licensed domain experiment:** a scoped separate fork experiment if necessary and permitted, with no claim of original Paperclip adoption.

**Decision preference:** start with original issue/PR reconciliation and the cheapest native solution; no automatic Discord or maintainer outreach.

## 7. Value evaluation

- **Matched native case:** operator reads provider change, checks active model eligibility/account/budget, performs approved manual change and observes the next run.
- **Matched VSM-informed case:** same input, model compatibility and authority; proposed composable future-option workflow and next-run receipt, **if separately implemented**.
- **Measure:** end-to-end operator effort, implementation/integration time, review and negative-case testing, maintenance/regression load, allowed failure/denial behavior, and identical successful future-run outcome.
- **Cost status:** `NOT_MEASURED`. No evidence yet that either route is cheaper.

## 8. Decision and handoff

**Recommendation:** `PLAN_ONLY / NEEDS_EVIDENCE`. **Next action:** compare current native source with original #20848, #3406/#16504/#13379 and #18296/#17857; record which outcomes are genuinely unmet and rank only the remaining material improvements.

**No implementation, fork GitHub Issue, external maintainer communication, product PR, grade change or cost saving is claimed.** All detailed case evidence stays in [`opensiro/meta`](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118). Before any external issue, reuse a relevant original one; a new external Issue is not a native cross-owner transfer and needs **separate exact owner approval**. A future fork Issue also needs exact approval and cannot be created while this fork's Issues are disabled.

**AI disclosure:** synthesis prepared with AI assistance. Source status and pinned references were checked; no independent human technical review, native tests, shipped capability or measured engineering advantage is claimed.
