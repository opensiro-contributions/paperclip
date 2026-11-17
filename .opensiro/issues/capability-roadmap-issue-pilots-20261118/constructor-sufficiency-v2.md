# Paperclip v2 — S4 proposed C and independent S3 developer-composable control contracts

**Canonical storage:** `opensiro-contributions/paperclip@opensiro/meta:.opensiro/issues/capability-roadmap-issue-pilots-20261118/`.

**Status:** `PLAN_ONLY / NEEDS_EVIDENCE`, prepared 2026-11-18. **DRAFT — NOT PUBLISHED.** Conceptual construction contract; **not shipped**, not a completed implementation, test result, verified deficiency, Index reassessment or additional original maintainer request. **Issue:** [v2](issue-v2.md). This contract belongs to this case, not to the historical Paperclip roadmap that may be retired. It contains **two distinct designs**: **P0 S4 `— → candidate C`** and the **explicitly requested P2-S3 constructor extension** alongside existing `S3=A(P)`. Neither is shipped or a new accepted grade.

## 1. Boundary, state, user and developer counterfactual

### Central accepted baseline — source of all target decisions

> **ACCEPTED INDEX · 2026-11-17 · assessed original `7f986789…`**  
> **`S1=A  ·  S2=A  ·  S3=A(P)  ·  S3*=A  ·  S4=—  ·  S5=P`**  
> This is the **initial diagnosis**, not a proposed after-state. It is reviewed under Profile **0.2.4** and Skills **0.3.8**; the original repository advanced afterward.

| Function | Confirmed historical owner/closure | Consequence for this contract |
| --- | --- | --- |
| **S1=A** | Autonomous operational agents | No mandatory S1 constructor task |
| **S2=A** | Autonomous coordination | Do not bypass existing unit coordination/ownership |
| **S3=A(P)** | Autonomous CEO/manager current control **and** separate legitimate parent control | **Already autonomous.** The new S3 port is a *separately requested developer-composability feature*, **not `A(P) → C`** |
| **S3*=A** | Autonomous independent review | Preserve reviewer separation |
| **S4=—** | No sufficiently evidenced first-party external/future adaptation loop at reviewed ref | **Primary S4=C candidate** |
| **S5=P** | Ultimate-policy closure belongs to parent/board | Preserve reserved policy and approval rights |

**Do not convert the publication states into a maturity ladder:** an autonomous `A` does not prove `C` developer construction; `A(P)` is not an unimplemented S3. Any proposed additional constructor must show a **new user/developer capability** independent of the Index grade.

- One **Paperclip company** in its supported first-party OSS operational mode: scoped agents, tasks/heartbeats, budgets, optional execution review and parent board approval. Exclude the original repo's development organization, uninstalled plugins, external provider agents acting outside Paperclip and private Cloud service.
- **Original pinned review HEAD:** [`f5f60cfcb2a69511cb0564da0615e95f6c935251`](https://github.com/paperclipai/paperclip/commit/f5f60cfcb2a69511cb0564da0615e95f6c935251), observed 2026-11-18. A later `master` was checked at [`f05b90508abc…`](https://github.com/paperclipai/paperclip/commit/f05b90508abc5e25861c402c5f16d5f505929903); referenced budgets, dispatch and CEO files still match pinned blobs, while the issues service advanced. Reinspect newer changes before an implementation-ready claim. **Accepted Index:** [Paperclip](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md), reviewed 2026-11-17 at `7f9867895c4e7e9589b233a93aa9efceb0c992d0`: `S4=—`. The accepted historical state is not an automatic claim about the newest HEAD.
- **Primary S4 user task:** operator wants to respond to external/future changes in a company's eligible agent models, compare `hold` to a supported candidate, allow a scoped agent to select an alternative only within its existing delegated authority and observe how a subsequent agent run actually behaves.
- **S3 optional additional user task:** in a company with multiple active S1 agent commitments and limited current budget/capacity, a developer wants to install a **custom bounded S3 resource controller** that can weigh `hold`, `defer`, `reprioritize` and lawful `reassign` options, choose an enforceable intervention and observe the effect without rewriting built-in CEO policy. **Need and absent native alternative must still be demonstrated.**
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
- **P2-S3 explicit additional product feature:** separately investigate a function-specific **S3 composability constructor** for current company resource/priority interventions. It is a *user-requested extension*, not the default C-first obligation: **accepted `S3=A(P)` remains a valid already-autonomous owner arrangement**. The test is whether developers can compose a different bounded current-control agent using first-party ports, without bypassing native CEO, S2 coordination or parent S5 rights. See §5.
- **Other P2 optional:** richer S4 release feeds, canary, rollback, cost optimization, or separately proven parent S4 mode `C(P)`. No mandatory `C(P)` or `A(P)` or transition `A(P) → C`; **S1/S2/S3* accepted A modes are not default C targets.** Preserve legitimate `S5=P`.

## 5. Additional S3 constructor proposal — explicitly requested

**Purpose:** offer **developer-composable current operational control** over already-existing Paperclip company commitments, without substituting a new Index classification for the accepted **`S3=A(P)`**. This is a **P2-S3 independent product hypothesis**, not a prerequisite for S4 and not a demand that an existing autonomous S3 loop be converted or removed.

**Native evidence to reuse:** [CEO's current priority/assignment workflow](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/onboarding-assets/ceo/HEARTBEAT.md), [existing budget enforcement](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/budgets.ts), [issue ownership and mutation service](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/services/issues.ts) and [run-dispatch decision gates](https://github.com/paperclipai/paperclip/blob/f5f60cfcb2a69511cb0564da0615e95f6c935251/server/src/modules/run-dispatch/domain/policy.ts). Competing source-native proposals: [#3406](https://github.com/paperclipai/paperclip/issues/3406) (usage/efficiency feedback and CEO reviews), [#16504](https://github.com/paperclipai/paperclip/issues/16504) (time-window admission) and [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) (subscription deferral; **OPEN/unmerged** at observation). None of these is credited as shipping a developer-composable S3 agent. The actual first-party integration gaps need independent inspection.

### Proposed *new features* — minimum S3 construction ports

Names are **not existing routes or packages**. One implementation may combine ports as long as every first-party function-specific construction property remains separately testable.

| Proposed first-party feature | Inputs / output and user-level value | Decisive owner and boundaries | Source-native reuse / missing change |
| --- | --- | --- | --- |
| **S3-1 · `S3PressureSnapshot`** | Live company budget/capacity, agent active work, priority and two competing commitments → versioned, company-scoped *current* operational disturbance snapshot | Snapshot is data, not the decision owner; deterministic read under existing company boundaries | Reuse budget, issue and run data; **new function-specific conflict/pressure view** if no equivalent exists |
| **S3-2 · `S3InterventionOptions`** | A versioned conflict produces `hold`, `defer`, `reprioritize` and allowed `reassign` alternatives, with constraints, affected tasks and projected next-run consequences | Options must exclude protected board policies, already owned/leased tasks and incompatible assignments; don't conflate S2 technical coordination with S3 resource-choice rights | Reuse issue priority/ownership and budget policy; **new explicit S3 current-control option model** |
| **S3-3 · `S3DecisionPort`** | Developer binds a *real autonomous Paperclip agent* as a scoped decision owner for this S3 case and submits its selected option, reason and expected revision | A single reconstructable **decisive S3 owner** per intervention: built-in manager **or** configured S3 controller, never simultaneous competing writers; bounded delegation validated by first-party policy | Existing agent/CEO execution; **new selectable, composable S3-specific decision interface**, not a generic webhook or scheduler callback |
| **S3-4 · `S3ActionBridge`** | Valid decision → atomic, authorized current control operation: e.g. defer a not-yet-admitted run, adjust permitted priority or reassign a safely unclaimed task | Apply through real native task/budget/dispatcher invariants; refuse stale claims, board-reserved budget increase, cross-company mutation or bypassed S3*/S2 ownership | Reuse native budget/issue/dispatch enforcement; **new verified mapping of S3 decision to a supported operation** |
| **S3-5 · `S3FeedbackReceipt`** | Resulting task owner/priority, deferred/admitted run and resource condition → durable applied/refused receipt and feedback to next company management operation | A logged recommendation with no changed operation is **not function closure**. Actual subsequent dispatch/task state must witness the intervention | Reuse task/run receipts where first-party supported; **new end-to-end S3 intervention outcome** if existing channels do not expose it |

**Design sufficiency argument:** S3-1 captures a *current* company regulatory disturbance, S3-2 forms selectable resource/priority interventions, S3-3 delegates the **decisive S3 choice** to a developer-composed agent through a real first-party port, S3-4 enforces it inside existing operational rights and S3-5 closes the loop with observed **subsequent current operations**. All five links must be supported in one first-party operating/deployment boundary, not test-only code or an uninstalled plugin. The candidate demonstrates a *constructor-capability extension*, **not** an automatic `S3=C` regrade or a claim of broader maturity than `S3=A(P)`.

**Native alternative / materiality gate:** existing Paperclip CEO/manager can already inspect budgets, reprioritize and coordinate assignments. Unless a developer can demonstrate a genuinely new ability—**compose an independent company-specific S3 decision policy/agent without modifying Paperclip core or circumventing authority**—this proposed constructor is unnecessary; return `NO_USEFUL_CHANGE` for **S3 only**. Do not copy the S4 future-model lifecycle to S3, or mistake a queue/rate-limit gate (S2 or deterministic enforcement) for the S3 decisional owner.

### Independent S3 acceptance matrix — proposed, not run

| Scenario | Native task / actor | Required observable result | Failure condition |
| --- | --- | --- | --- |
| **AC-S3-01 · Composed allocator** | Two agents compete for the same company run capacity and different task priorities; configured developer S3 agent sees alternatives | Its lawful `defer` or `reprioritize` choice passes real first-party enforcement; subsequent task/run disposition matches chosen option and receipt | A static scheduler/CEO prompt makes all decisions without the configured actor |
| **AC-S3-02 · Different lawful choice** | Same state, composed allocator chooses `hold` | Both current task rights remain, and receipt shows why no mutation occurred; compare with lawful alternate decision | Hardcoded action despite submitted choice |
| **AC-S3-03 · No configured S3 agent** | Remove S3 controller from the supported installation | Port remains constructible but cannot invent another independent autonomous owner; native built-in S3 continues under its own existing documented mode | Generic webhook is the only source of choice or fallback silently acquires forbidden rights |
| **AC-S3-04 · Task ownership / race** | Stale resource snapshot or another agent already owns a leased task | Version/owner checks refuse reassign or duplicate admission and return conflict receipt | Two owners execute the same task |
| **AC-S3-05 · Board / cross-tenant boundary** | Scoped S3 allocator requests higher board-reserved budget or accesses another company | Parent S5 decision remains reserved; reject unauthorized change without altering active budgets or reviewer assignments | Synthetic autonomy or bypassed rights |
| **AC-S3-06 · Real closure and native comparison** | Authorized current-priority intervention affects a *subsequent real run* | First-party receipt shows applied/refused decision and subsequent task/resource outcome; compare same case to existing CEO/manual policy | Only a dashboard notification; simpler native alternative equally sufficient |

**C-style S3 construction criterion:** a *first-party function-specific* decision/feedback interface, reachable in an actual supported deployment, must let an independent developer attach a real autonomous S3 agent, choose among lawful current-control alternatives and observe enforced outcomes. Passing this test could demonstrate **constructor capability for a separate mode**, but **does not require changing the already-confirmed `A(P)` grade to `C`**. An independent Skills/Index review determines how any additional supported mode is represented.

**Separate readiness verdict:** `NEEDS_EVIDENCE` for S3. Confirm whether current first-party services already expose equivalent composable intervention paths, that there is genuine developer demand and that the design can be deployed without stealing the current built-in manager's authority. **No new Index S3 grade**: accepted `A(P)` remains the historical baseline, regardless of this proposed constructor.

## 6. S4 source-native acceptance matrix (proposed, not run)

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

## 7. Falsification, exclusions and evidence ownership

This plan **must be rejected or narrowed** if any of the following is observed: shipped native code already implements the outcome; a simple manual/routing change produces equivalent user value for lower total effort; the proposed company/agent right cannot be legitimately delegated; supported OSS deployment cannot expose the function-specific interface; next-run feedback cannot be observed or safely enforced; maintainer scope or license/formalities disallow work. Record `NO_USEFUL_CHANGE`, `NEEDS_EVIDENCE` or `IMPLEMENTATION_BLOCKED` rather than inventing an S4 controller.

The Index owns accepted **`S4=—` and `S3=A(P)`** at the reviewed source until a new independently assessed shipping revision; Profile owns S3/S4 semantics; Skills owns the C threshold. A new S3 construction path could be useful *alongside* existing autonomy but does not imply its published grade should be replaced by `C`. This draft, a GitHub Issue, fork metadata or an unmerged PR **does not upgrade the grade**.

**No product code or native tests were run as part of this plan. No original Issue/PR/comment or public fork Issue has been published.**

**AI disclosure:** This case-local research contract was prepared with AI assistance and requires independent current-source verification.
