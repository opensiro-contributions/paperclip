# Paperclip S4 → proposed C: v2 constructor sufficiency and acceptance contract

**Canonical storage:** `opensiro-contributions/paperclip@opensiro/meta:.opensiro/issues/capability-roadmap-issue-pilots-20261118/`.

**Status:** `PLAN_ONLY / NEEDS_EVIDENCE`, prepared 2026-11-18. **DRAFT — NOT PUBLISHED.** Conceptual construction contract; **not shipped**, not a completed implementation, test result, verified deficiency, Index reassessment or additional original maintainer request. **Issue:** [v2](issue-v2.md). This contract belongs to this case, not to the historical Paperclip roadmap that may be retired.

## 1. Boundary, state, user and developer counterfactual

- One **Paperclip company** in its supported first-party OSS operational mode: scoped agents, tasks/heartbeats, budgets, optional execution review and parent board approval. Exclude the original repo's development organization, uninstalled plugins, external provider agents acting outside Paperclip and private Cloud service.
- **Original current HEAD:** [`f5f60cfcb2a69511cb0564da0615e95f6c935251`](https://github.com/paperclipai/paperclip/commit/f5f60cfcb2a69511cb0564da0615e95f6c935251), observed 2026-11-18. **Accepted Index:** [Paperclip](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md), reviewed 2026-11-17 at `7f9867895c4e7e9589b233a93aa9efceb0c992d0`: `S4=—`. The accepted historical state is not an automatic claim about the newest HEAD.
- **User task:** operator wants to respond to external/future changes in a company's eligible agent models, compare `hold` to a supported candidate, allow a scoped agent to select an alternative only within its existing delegated authority and observe how a subsequent agent run actually behaves.
- **Simplest native baseline:** manual provider release note → adapter/account eligibility review → authorized future configuration edit → actual later-run inspection. First test whether this already provides comparable value before asserting a new product need.
- **Developer composition counterfactual:** remove the S4 decision agent: source-native signal, option snapshot, authority validation, future-run bridge and observation **remain available**, but no autonomous S4 agent owns the option-selection decision. Attach a separately configured bounded Paperclip agent: its different lawful option choices must cause different subsequent, first-party observable company operating outcomes. If only the core autonomously decides, independently consider `A`; if only the human parent has a closed S4 path, independently consider `P`. No shortcut from generic hooks to `C`.

## 2. Verified existing baseline versus still-proposed change

| Part | Evidence at current source | Scope of reuse / uncertainty |
| --- | --- | --- |
| Per-task provider/model and account compatibility | [First-party router](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/ai-connection-router.ts) implements opt-in routing, compatibility and authorization checks; [contract](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/doc/connections/AI-CONNECTION-ROUTERS.md) describes default-off/plugin-scoped selection and state/pins | Reuse checks, not an already present S4 outside/future choice owner. Full current source overlap and public deployment tests **pending** |
| Company operation and board authority | [Board delegation](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/docs/guides/board-operator/delegation.md) and [approval routes](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/routes/approvals.ts) | Bound any future-run choice to actual delegated rights, preserve reserved strategy/hiring/budget authority |
| Independent review | [Execution policy](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/docs/guides/execution-policy.md) | Do not change reviewer identity, grant rights through router decisions or silently mutate ongoing tasks |
| Source-native overlapping discussion | [Original Issue #20848](https://github.com/paperclipai/paperclip/issues/20848) **OPEN**; [#16954](https://github.com/paperclipai/paperclip/issues/16954) **OPEN**; [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) **MERGED** | Reuse the discussion and shipped primitives. An Issue or merged routing PR is not proof of a future adaptation loop |
| Potential policy dependencies | [#3406](https://github.com/paperclipai/paperclip/issues/3406), [#16504](https://github.com/paperclipai/paperclip/issues/16504), [#18296](https://github.com/paperclipai/paperclip/issues/18296) **OPEN**; [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) and [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) **OPEN/unmerged** | No whole-PR dependency assumed. Use current S3/S5 safeguards, add only the minimal missing checks necessary for a *specific* S4 flow |

**Current-source gap statement is provisional:** the inspected router and documentation do not by themselves close an independent S4 outside/future → decision → later operation loop. Search and reconcile all relevant original implementation paths and maintainer changes before finalizing a product gap.

## 3. Proposed minimum S4 first-party construction ports

The labels below are **logical interfaces, not current Paperclip filenames, APIs or guaranteed source locations**. They may be merged into fewer native endpoints if the semantics remain independently accessible and testable.

| Proposed port | Input → output/state | Actual S4 owner / failure or authorization boundary | P0/P1 coverage |
| --- | --- | --- | --- |
| **A. `ReleaseSignalSource`** | Dated provider model release/deprecation/capability/cost record, source URL, observed/effective time, tenant scope, digest → persisted attributable signal | Deterministic source validation; a source feed does **not** autonomously select future options | **P1 required new path**, optionally operator-imported official manifest; not a mandatory live poller |
| **B. `AdaptationCaseStore`** | Company current model/adapter/account/budget and active-run revision + external signal → versioned `hold` / compatible candidate option set, unknowns, expiry and associated current/possible future impact | Native compatibility checks restrict options; inaccessible or unknown eligible model must not become an actionable selection | **P1 required new path**, reuse first-party router checking when source-native fit is proved |
| **C. `S4DecisionPort`** | Versioned options + company-scoped delegated evaluation right → `hold` / `candidate` / `reject` / `defer` decision, reason, decision principal, expected revision | **Developer composes a real autonomous decision agent** using supported first-party execution; agent owns the substantive S4 option choice. Deterministic core verifies delegation and does not silently decide | **P1 required new S4-specific path**; generic routing hook not enough |
| **D. `FutureRunCapabilityBridge`** | Authorized decision, current generation, compatibility and rights evidence → staged approved **future-use only** change, safe rejection or rollback decision | Enforce S3 budget/resource and S5 board policies; no active-run mutation, wrong-company access, secret exposure, reviewer bypass, stale/revoked grants | **P1 required new bridge**, reuse existing versioned settings and approvals only after exact source investigation |
| **E. `S3ReturnAndObservation`** | Next eligible first-party run effective model/config and applied revision → persisted success/failure/denial receipt and returned decision feedback | An unexecuted ticket or a dashboard recommendation is **not closure**; S3/operator must receive the outcome for subsequent management | **P1 required new observation/feedback path** using actual supported agent-run lifecycle |

**Proposed sufficiency argument, conditional not verified:** together A+B establish *outside/future sensing plus real selectable company operating alternatives*, C supplies a **first-party S4-specific developer-composable autonomous decisive actor**, D enforces the lawful adaptation into **subsequent operations**, and E closes feedback to S3. Every component must be first-party reachable in the declared standard OSS distribution. Omitting **any** of the five links prevents asserting this particular C-target construction path as sufficient. A future independent Skills/Index review owns the grade.

The *minimum design target* excludes provider-web scraping, a separate policy engine, compulsory automatic rollouts, canary/rollback UI, migration of all open scheduling PRs, and transferring S5 board decisions to a model.

## 4. Priority and dependency decisions

- **P0:** deliver the *full S4 construction pathway*, not merely a notification. This is a **design target**, currently `NEEDS_EVIDENCE`.
- **P1A:** attributed future signal and versioned option store (ports A+B).
- **P1B:** developer-composable autonomous decision actor with scoped authority (port C).
- **P1C:** future-run commit and actual observed operation receipt (ports D+E).
- **P1 tests:** first-party mode reachability, default-off router/eligible account compatibility, actual board/reviewer/budget isolation, stale/idempotency handling. These dependencies **may execute before P0**.
- **P2 optional:** richer release feeds, canary, rollback, cost optimization, or separately proven parent S4 mode `C(P)`. No mandatory `C(P)` or `A(P)`; **`S1/S2/S3/S3*` accepted `A` modes and `S3=A(P)` are not default C targets**. Preserve legitimate `S5=P`.

## 5. Source-native acceptance matrix (proposed, not run)

| Scenario | Trigger / configured actor | Required first-party observable result | If absent |
| --- | --- | --- | --- |
| **AC-01 Positive later-run closure** | Trusted provider signal; developer-composed S4 agent chooses compatible candidate within delegation | Durable versioned choice; authorized future-only setting applied; *actual next eligible run* confirms effective candidate and sends feedback to operator/S3 | No complete S4=C witness |
| **AC-02 Autonomous choice, not mere transport** | Same options but evaluator chooses `hold` | Subsequent run stays on current authorized configuration; other option decision yields different legal outcome | A generic callback or hardcoded resolver is insufficient |
| **AC-03 Missing composed actor** | Evaluator not installed/configured | First-party decision port remains composable but no invented autonomous choice or unauthorized change | Cannot claim a generic hook as C |
| **AC-04 Parent authority** | Agent proposes a protected board-level policy change | Existing legitimate parent S5 decides; no agent-minted authorization; reject or defer until approved | Authority boundary broken |
| **AC-05 Cross-company authorization** | Agent or signal from a different company | No case read/decision/config mutation across company boundary | Deployment safety blocked |
| **AC-06 Unknown compatibility or entitlement** | Model not supported, account inaccessible, client version incompatible | Unknowns exposed; actionable candidate refused; `hold` remains available | Unproven native integration |
| **AC-07 Stale/revoked decision** | Model configuration revision changed or agent grant revoked after option creation | Optimistic concurrency/rights check rejects; safe current config remains | Decision enforcement broken |
| **AC-08 Active-session isolation** | Proposed change while agent task/session is running | Existing running task/pin/credentials/reviewer state unaffected; only next eligible run changed | Current operation corrupted |
| **AC-09 Failed future run** | Authorized change staged but run fails or does not apply | Receipt reports actual failure, no fabricated success; owner can hold/retry/repair | Missing feedback closure |
| **AC-10 Native reachability and alternatives** | Supported self-hosted install, router flag on/off, native manual baseline | Real developer composes S4 agent via shipped supported interfaces; tests measure operator outcome against simpler native path; if equal, report `NO_USEFUL_CHANGE` | Constructor not deployable or not useful |

**Validation needed before implementation-ready:** exact original code/PR/diff mapping for every planned port, partner-approved or source-native demand signal, what first-party Paperclip plugin/agent execution mechanism will expose port C, enforcement on every supported mutation/entry path, native tests with actual later-run evidence, and legal/CLA/formality preflight. Existing original #20848 is **not** a shipping receipt.

## 6. Falsification, exclusions and evidence ownership

This plan **must be rejected or narrowed** if any of the following is observed: shipped native code already implements the outcome; a simple manual/routing change produces equivalent user value for lower total effort; the proposed company/agent right cannot be legitimately delegated; supported OSS deployment cannot expose the function-specific interface; next-run feedback cannot be observed or safely enforced; maintainer scope or license/formalities disallow work. Record `NO_USEFUL_CHANGE`, `NEEDS_EVIDENCE` or `IMPLEMENTATION_BLOCKED` rather than inventing an S4 controller.

The Index owns accepted `S4=—` until a fresh independently assessed shipping revision; Profile owns S4 semantics; Skills owns the C threshold. This draft, a GitHub Issue, fork metadata or an unmerged PR **does not upgrade the grade**.

**No product code or native tests were run as part of this plan. No original Issue/PR/comment or public fork Issue has been published.**

**AI disclosure:** This case-local research contract was prepared with AI assistance and requires independent current-source verification.
