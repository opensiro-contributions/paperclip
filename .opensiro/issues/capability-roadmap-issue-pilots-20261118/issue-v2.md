# Paperclip — S4 construction roadmap + optional S3 composability (v2)

**Opensiro pilot · PLAN_ONLY / NEEDS_EVIDENCE · DRAFT — NOT PUBLISHED**  
**Two-level package:** this **human decision Issue** + [complete agent/developer contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md) (source mapping, five ports per function, 10 S4 and 6 S3 proposed acceptance scenarios).

## 1. Why Opensiro and central accepted VSM assessment

Opensiro tests whether reusable, Viable System Model (VSM)-informed organization specifications can **standardize AI-agent harness development and reduce the total cost of implementation, integration and maintenance**. Through source-backed upstream roadmaps, we structure **existing and proposed native features** into a shared methodology, seeking capabilities developers can reuse or compose rather than duplicating ad-hoc solutions. **Reduced cost and user demand remain hypotheses, not proven outcomes; Paperclip does not have to adopt VSM.**

### Central starting point — accepted Index, not the target

> **STARTING POINT — ACCEPTED INDEX, NOT THE TARGET**  
> **`S1=A  ·  S2=A  ·  S3=A(P)  ·  S3*=A  ·  S4=—  ·  S5=P`**  
> [Accepted Paperclip assessment](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md), reviewed **2026-11-17** at `7f986789…` (Profile 0.2.4 / Skills 0.3.8). These are historical function-specific owner states; the proposed features do **not** change them.

| VSM function | Index | Meaning for this pilot |
| --- | --- | --- |
| S1 · Operations | **`A`** | Autonomous work; no mandatory C work |
| S2 · Coordination | **`A`** | Prevent destructive interference; retain owner/lock rules |
| **S3 · Current management** | **`A(P)`** | Existing agent-managed resources + parent mode; **optional developer-composability**, not a missing function |
| S3* · Independent review | **`A`** | Protect reviewer independence |
| **S4 · Future adaptation** | **`—`** | **P0 C candidate**; no accepted first-party prospective loop at reviewed revision |
| S5 · Identity/policy | **`P`** | Keep board's reserved ultimate authority |

**Pins:** accepted [Index](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md), assessment blob `238863a500491b7851fa90478ae64b2471acb219`, reviewed 2026-11-17 at `7f986789…`; original [Paperclip `f5f60cfcb2…`](https://github.com/paperclipai/paperclip/commit/f5f60cfcb2a69511cb0564da0615e95f6c935251) was separately inspected on 2026-11-18. Original `master` has advanced: re-check before implementation. Boundary is **one Paperclip company in supported first-party OSS mode**, excluding uninstalled plugins and Paperclip maintainers' organization.

## 2. Proposed user capabilities and decision

**Primary P0 / S4:** investigate the smallest useful first-party **`C` constructor** for an agent that can assess an *external/future* model change, choose among `hold` and plausible adaptation options, and return an authorized change to subsequent company operations **with actual feedback to S3**. A notification or router alone is **not** S4 closure.

**Separate P2-S3 proposal:** allow a developer to compose a **bounded current-resource S3 agent** that can decide how to resolve competing company commitments (e.g. defer/reprioritize/safe reassign) and observe the implemented result. **S3 already is `A(P)`**; this optional product feature is **not `A(P) → C`** or a compulsory grade improvement.

## 3. Existing native work vs missing capability

| Topic | What exists / relevant original proposals | Residual gap to prove |
| --- | --- | --- |
| **S4** | Experimental [connection router](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/ai-connection-router.ts); [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) merged; model-release [#20848](https://github.com/paperclipai/paperclip/issues/20848) open | *Developer-composable S4 decision* about future alternatives, lawful capability change and observed later-run result |
| **S3** | CEO/manager task and budget controls, [budget enforcement](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/budgets.ts); [#3406](https://github.com/paperclipai/paperclip/issues/3406) and [#16504](https://github.com/paperclipai/paperclip/issues/16504) open; [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) open/unmerged | *Independent developer-composed S3 resource decision* beyond existing CEO and static throttling |
| **Safety** | Existing board, task ownership and review; [#18296](https://github.com/paperclipai/paperclip/issues/18296) and [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) open/unmerged | Enforce existing S2/S3*/S5 boundaries; **not a new S5 goal** |

Original Issue/PR titles are **not proof of implemented interfaces**, and not all PRs are required dependencies. The actual shipped/missing split needs a current-source audit.

## 4. Proposed priority and minimum sufficient result

| Priority | Outcome | Conditional minimum construction path |
| --- | --- | --- |
| **P0 — S4** | Developer can compose prospective adaptation agent | **External signal → future options → scoped S4 agent decision → authorized future-operation change → actual outcome fed back to S3** |
| **P1 — enables P0** | Safety and functioning first-party integration | Reuse existing compatibility, state, agent, board and run primitives; add only missing function-specific decision, enforcement and observation interfaces |
| **P2-S3 — optional** | Compose a new current-management agent | **Company-wide current pressure → permissible resource options → scoped S3 agent decision → enforceable task/budget intervention → observed run/task receipt** |

**S3 and S4 are not interchangeable:** S2 handles interference/coordination; **S3 regulates current company-wide commitments and resources**; **S4 models environmental change and possible futures in a two-way relation with S3**; S5 governs identity and reserved policy. Neither a queue nor a model-release alert alone satisfies these functions.

The [full contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md) spells out five *proposed* first-party logical ports for each path. **Design coverage is conditional, not demonstrated shipped `C`.**

## 5. Acceptance / stop gates

| Required evidence | Fail-closed/no-change condition |
| --- | --- |
| **S4:** developer-composed agent autonomously selects among justified future alternatives, authorized later run uses the chosen capability, S3 receives feedback | Notification, plugin hook or manual edit only; no real run receipt |
| **S3:** developer-composed agent selects company-wide *current* allocation response; task/run outcome confirms decision | Only S2 queue coordination, built-in CEO action or disconnected recommendation |
| **Both:** legitimate actor and source revision, tenant/budget/reviewer/board checks, supported OSS availability | Stale, untrusted, cross-company or reserved decision changes state |
| **Materiality:** comparison against simplest built-in CEO/manual router workflow, exact native diff | Equivalent native solution or no demonstrable user demand → `NO_USEFUL_CHANGE` |

**All 16 proposed tests are unexecuted.** Evidence of a supported constructor is not a new Index grade: a later independent assessment owns any classification.

## 6. Independent paths

**Preferred research:** reconcile shipped source and existing Paperclip Issues/PRs, then decide whether the minimal original-native integration is justified. Profile/Skills feedback or a domain fork are **independent, optional paths**, not automatic work.

## 7. Cost hypothesis

Compare the same task with native/manual and proposed S4 or S3 solutions, **separately**: operator outcome, implementation/integration, native tests, review, maintenance and safety. **`NOT_MEASURED`**; no proven cost saving.

## 8. Decision / handoff

**Decision now: `PLAN_ONLY / NEEDS_EVIDENCE`.** Do not commit to building both features. Validate **S4 P0 first**; evaluate S3 P2 only on a separate demonstrated developer need. For each proposed port, mark **shipped / already proposed / truly missing**, and select the smallest materially useful source-native change.

**Agent/developer handoff:** [complete construction/acceptance contract](https://github.com/opensiro-contributions/paperclip/blob/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118/constructor-sufficiency-v2.md); [case directory](https://github.com/opensiro-contributions/paperclip/tree/opensiro/meta/.opensiro/issues/capability-roadmap-issue-pilots-20261118). This is an internal **draft file**, not a public Issue. Public fork GitHub Issues are disabled; external Issue/PR, code implementation and Index regrade are not authorized by this plan. Paperclip [MIT](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/LICENSE) and [CONTRIBUTING](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/CONTRIBUTING.md) remain applicable.

**AI disclosure:** prepared with AI assistance; no independent human validation, executed native tests or cost measurements claimed.
