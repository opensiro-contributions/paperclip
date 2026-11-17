# Paperclip — S4=C capability integration roadmap (Opensiro pilot v2)

**PLAN_ONLY · NEEDS_EVIDENCE · DRAFT — NOT PUBLISHED.**  
**Destination, if separately approved:** public GitHub Issue at `opensiro-contributions/paperclip` (GitHub Issues currently disabled).  
**Template:** [Opensiro Upstream approved v2](https://github.com/opensiro/upstream/blob/e18aaccaed261cfc7493e2c894e1c12fb9594d60/templates/FORK_CAPABILITY_ROADMAP_ISSUE.md) · **Acceptance contract:** [local S4 sufficiency contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md).  
**Observation date:** 2026-11-18 UTC. **This is a design target, not a published Issue, product change, proven grade or verified saving.**

## 1. Goal

Opensiro tests whether source-native integration of reusable organizational capabilities, informed by the Viable System Model (VSM), can standardize and reduce the cost of engineering AI-agent harnesses. Neither cost advantage nor maintainer demand is established.

**Operator counterfactual:** after a provider announces a model deprecation, release or material compatibility change, an operator of one Paperclip company should be able to **configure a bounded autonomous agent to compare `hold` with compatible future alternatives, let it exercise a delegated S4 option-selection right, enforce protected approvals, and verify that the authorized choice actually affected a subsequent eligible agent run**. Today an operator can inspect vendor release notes and manually adjust settings; the incremental value of a new first-party workflow must be verified.

**Default target:** `S4: — → candidate C`, not an automatic assessment result. Functions with accepted `A`/`A(P)` or `C`/`C(P)` are **excluded from mandatory C engineering**. Legitimate `S5=P` board authority is preserved.

## 2. Evidence baseline

- **Original source:** [`paperclipai/paperclip@f5f60cfcb2a69511cb0564da0615e95f6c935251`](https://github.com/paperclipai/paperclip/commit/f5f60cfcb2a69511cb0564da0615e95f6c935251) on original `master`, observed 2026-11-18. Current-source inspection here is focused, **not** a complete semantic re-assessment.
- **Accepted Index assessment:** [Paperclip pinned assessment](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md); assessment blob `238863a500491b7851fa90478ae64b2471acb219`, `review_ref=7f9867895c4e7e9589b233a93aa9efceb0c992d0`, `reviewed_at=2026-11-17`, Profile `0.2.4`, Skills `0.3.8`. Vector: **`S1=A; S2=A; S3=A(P); S3*=A; S4=—; S5=P`**. Review age: **1 calendar day**. Source `master` has since advanced; the accepted vector is historical, not a verdict about all new commits.
- **Working fork:** [`opensiro-contributions/paperclip`](https://github.com/opensiro-contributions/paperclip), verified parent `paperclipai/paperclip`; fork-local state `ACTIVE / ALLOW` on `opensiro/meta` observed for this metadata write, not permission for a public Issue/PR. **`has_issues=false`**.
- **Case record:** [`.opensiro/issues/capability-roadmap-issue-pilots-20261118/`](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118); no new `.opensiro/contributions/` record for plan-only work.
- **System boundary:** one Paperclip company in the supported OSS first-party server, API, UI, agents, goals/tasks, runtime routing, budget, execution-policy review and board. Exclude the maintainer's development organization, uninstalled plugin actors and private Cloud extensions.
- **Contributor rights:** [MIT](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/LICENSE); [CONTRIBUTING](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/CONTRIBUTING.md) requires issue/PR dedupe, tests and AI disclosure, with prior Discord discussion for larger core changes. **No Discord or maintainer outreach. CLA exemptions not verified.** No code or external publication consent is inferred.

## 3. Existing work and remaining gaps

| VSM function / operator need | Shipped first-party source (at pinned HEAD) | Original Issues/PRs and live state at observation | Remaining operator outcome |
| --- | --- | --- | --- |
| **S4 / prospective model adaptation** | [Experimental AI connection routing service](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/ai-connection-router.ts) and [router operating contract](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/doc/connections/AI-CONNECTION-ROUTERS.md) provide capability/authorization checks and connection selection; routers are flag-gated and plugin-owned, not a demonstrated source-attributed external/future-option decision loop | [#20848](https://github.com/paperclipai/paperclip/issues/20848) **OPEN**, notifications/compatibility-aware model upgrades; [#16954](https://github.com/paperclipai/paperclip/issues/16954) **OPEN**, OSS router proposal; [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) **MERGED**, task-pinned routing | First-party, company-scoped **signal → options → developer-composed agent decision → authorized future-use change → actual later-run feedback** |
| **S3 / present resource regulation** | Existing company budget/agent control documented by [board delegation](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/docs/guides/board-operator/delegation.md); accepted baseline `S3=A(P)` | [#3406](https://github.com/paperclipai/paperclip/issues/3406), [#16504](https://github.com/paperclipai/paperclip/issues/16504) **OPEN**; [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) **OPEN/unmerged** at `43b61148378cc045ff0eda5ad0f5b754c496b4be` | **No mandatory S3→C target.** Reuse existing budget and concurrency constraints as S4 eligibility and enforcement dependencies |
| **S5 / reserved strategic authority** | [Board strategy approval lifecycle](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/docs/guides/board-operator/delegation.md) and [approval routes](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/routes/approvals.ts); accepted baseline `S5=P` | [#18296](https://github.com/paperclipai/paperclip/issues/18296) **OPEN** decision-source constraints; [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) **OPEN/unmerged** at `b6cd49d4b6926fae61a2c68a31ce7c659b69eaa6` | **No automatic S5 change.** S4 agent must not acquire reserved board powers; existing authority gaps are dependency questions only |
| **S3* / independent review** | [Execution policy](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/docs/guides/execution-policy.md) enforces distinct review and approval stages; accepted baseline `S3*=A` | [PR #15265](https://github.com/paperclipai/paperclip/pull/15265) **OPEN/unmerged** at `28183072c57ef8f035a0851aed2e03f4df9b7f77` | Keep reviewer separation intact. No S3* constructor target |

**Native baseline:** operator reads model-release announcements, checks configured model/provider/account/adapter compatibility, performs an approved manual future-use update and observes the next run. This may be enough: **if it achieves the same outcome at lower cost, prefer `NO_USEFUL_CHANGE`**.

## 4. VSM capability targets and prioritized development plan

**Target matrix — required C sufficiency analysis**

| Function | Historical Index | Current-source evidence / uncertainty | Target | Minimum necessary changes | Sufficiency status |
| --- | --- | --- | --- | --- | --- |
| **S4** | `—` | Experimental router checks model eligibility and authorization but does not, from inspected paths, establish the complete first-party outside/future → choice → operation feedback loop; full-source equivalence audit pending | **`C` design candidate** | Reuse native router/agent/board primitives and [#20848](https://github.com/paperclipai/paperclip/issues/20848) discussion; add attributable future signal, persisted `hold/change` options, S4-specific developer-composable decision port, authority-constrained future-use bridge and actual later-run observation | **`NEEDS_EVIDENCE`** pending current-source overlap, demand and integration feasibility; **no shipped/Index-confirmed `C`** |
| S1 / S2 / S3 / S3* | `A` / `A` / `A(P)` / `A` | Latest Index baseline is dated; preserve native task, coordination, resource and reviewer invariants | **Excluded from mandatory `C` targets** | None for C; only cross-function compatibility tests needed by S4 | Historical autonomous modes are **not** logically proof of generic constructors, but this route does not require them |
| S5 | `P` | Human board controls purpose/strategy; later source/authority differences not fully audited | Preserve `P`; **no present S5=C mandate** | Ensure S4 agent cannot mint or bypass board authority. An optional S5 constructor needs separately established demand/authority | **Legitimate parent `P` remains; do not alter Index** |

**P0 — S4 C-constructor sufficiency target:** propose only a *minimal* supported first-party route in which a developer can compose an autonomous S4 evaluator and bind a lawful option-selection right, from an external model-change signal through next-run evidence. **P0 is the outcome, not the first operation in implementation order.**

**P1 — necessary enabling integration:** company-scoped eligibility and grants, adapter/model/version compatibility, reserved board/approval enforcement, stale/revoked decision rejection, and later-run effective-state receipts. **P1 prerequisites execute before P0 can be delivered.** Original #3406/#16504/#18296 and PR #13379/#17857 are overlap/dependency evidence only: they do **not** all have to merge for S4=C.

**P2 — optional:** canary/rollback and richer future capacity forecasting, or an independently evidenced S4 parent mode `C(P)`, **only** if users need them. No universal `C → C(P) → A(P)` progression; no `A → C` conversion requirement.

| Priority | User-facing deliverable | Reuse → missing change | Actual dependencies | Decisive owner and acceptance |
| --- | --- | --- | --- | --- |
| P1.1 | Reliable candidate eligibility before an S4 choice | Existing router compatibility checks → source-attributed future signal and durable compatible `hold/change` case | Provider evidence, available adapter/account, company scope; [#20848](https://github.com/paperclipai/paperclip/issues/20848) dedupe | First-party source provenance + explicit unknown/incompatible refusal |
| P1.2 | Safe delegation to future-option evaluator | Existing Paperclip agents + board/approval policy → **new S4-specific decision/feedback port**, scoped decision grant, snapshot versioning | Existing S3 budgets, S3* reviewer, S5 board; do not adopt unmerged PRs as shipped | Developer composes *real* autonomous actor; unauthorized/revoked/stale decisions fail closed |
| P1.3 | Effect and observed feedback | Existing agent/run lifecycle → **future-run-only stage/apply and effective-run receipt** | Actual supported run entry points, state/compatibility checks | Applied or rejected decision appears in a subsequent eligible run and feeds back to S3/operator |
| **P0** | **Construct a bounded S4 agent to choose among future operating options** | P1.1 + P1.2 + P1.3, validated as one first-party reachable pathway | All P1 gates; native delta and distribution validation | Positive/negative end-to-end examples demonstrate the precise S4 mapping required for a *possible subsequent `C` assessment* |
| P2 | Optional canary, rollback or parent S4 mode | [#20848](https://github.com/paperclipai/paperclip/issues/20848) possibilities → independent case | P0 utility and rights; independent new evidence | Separate acceptance; **not necessary** for initial `C` target |

**C sufficiency contract:** [`constructor-sufficiency-v2.md`](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md) provides the five required first-party logical ports, user and developer counterfactuals, owner/authority mapping, complete combined-change coverage and positive/negative scenarios. **Port names are conceptual, not existing APIs.** Full reachability, native implementation and actual usability remain unverified. A complete *design* cannot prove shipped `C`.

**Sufficiency verdict:** **`NEEDS_EVIDENCE` for implementation readiness**. The proposed five-part design is conditionally sufficient **if** it is delivered as accessible first-party function-specific composition rather than a generic extension and survives native real-run tests; original maintainer demand, current HEAD overlap, actual source fit and measured costs are not yet established.

## 5. Acceptance, alternatives and stop conditions

| Gate | Evidence required for the pilot hypothesis | No-change / negative case |
| --- | --- | --- |
| Source-native overlap | Inspect current `master`, model/account router and any newer proposal or merged alternative; dedupe [#20848](https://github.com/paperclipai/paperclip/issues/20848) | Shipped path already provides the complete user task → `NO_USEFUL_CHANGE` |
| Positive C path | A supplied, dated future release change produces `hold` and compatible future option; **developer-composed autonomous evaluator** selects a scoped option; run pipeline reflects authorized future-use revision and yields later-run receipt | Notification, mocked UI decision or manual-only action **is not a C proof** |
| Negative rights/compatibility | Wrong-company agent, unknown compatibility, revoked grant, stale option and protected reviewer all fail without unauthorized next-run mutation | Unenforced decisions / missing observation → `NEEDS_EVIDENCE` or implementation blocked |
| Material operator value | The full native workaround and proposed constructor solve a *matched scenario*; measure changed user action, engineering/review/maintenance costs | Same outcome via smaller native change → reject new constructor |
| Index evidence | Actually shipped first-party supported deployment and independent Skills/Index review | Issue/contract/open PR cannot itself change `S4=—` |

## 6. Independent development paths

1. **Original-native integration, preferred only if qualified:** first contribute information to the [existing #20848](https://github.com/paperclipai/paperclip/issues/20848) scope (no new external publication now); if a new C-specific interface is actually justified, plan one minimal source-native implementation through a separately authorized Upstream Upgrade, with product-native tests and contributor policy.
2. **Profile or Skills feedback:** only for a reproducible methodology ambiguity; no Profile/Skills change implied.
3. **Scoped domain fork:** only with legal permissions and a distinct domain hypothesis; original maintainers need not adopt it.

**Selected route now:** plan-only, verified source/Issue/PR gap analysis and design sufficiency. No code change, PR or communication authorized by this Issue.

## 7. Value evaluation

**Matched native/manual task:** after the same provider model-change record, an operator confirms eligibility, checks S3 budget/S5 rights, stages an approved future model configuration and verifies the next eligible run.  
**Matched VSM-informed task:** the same input and policies, but a developer-composed bounded S4 decision agent uses first-party compare/choose/stage/observe primitives.  
**Record:** implementation and integration effort, review/native test effort, maintenance and regression burden, decision validity, compatibility and effective later-run result. **`NOT_MEASURED`** — no cost advantage claimed.

## 8. Decision and handoff

**`PLAN_ONLY / NEEDS_EVIDENCE`.** Proposed **P0 `S4: — → candidate C`**, with P1 eligibility/rights/feedback prerequisites. Already-`A` functions are excluded from mandatory C changes; `S5=P` rights remain protected.

**Next:** verify demand and exact current HEAD overlap; map all five proposed ports to source locations; decide whether the native workaround suffices. If the complete C path is materially useful, then separately authorize actual implementation and tests. If not, record `NO_USEFUL_CHANGE`—do not implement a controller for a grade.

Full source and acceptance documentation: [case contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md). Original [#20848](https://github.com/paperclipai/paperclip/issues/20848) already covers part of the outcome; do not duplicate it. The fork GitHub Issue is **not created** (`has_issues=false`); public fork Issue and every original Issue/comment/PR require **separate exact current-conversation approval**. No cross-owner issue transfer, automatic PR, Index regrading, delegated authority or cost result follows.

**AI disclosure:** Prepared with AI assistance using pinned original source and GitHub state. No independent human review, implementation, executed native tests or established cost reduction is claimed.
