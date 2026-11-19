# Paperclip — source-native S4 C-construction technical contract

**PLAN_ONLY · PROPOSAL, not shipped · acceptance NOT_RUN · DRAFT — NOT PUBLISHED.**
**Human Issue:** [issue.md](issue.md) · **Canonical decision receipt:** [roadmap.md](roadmap.md). The receipt is the only case-level source of truth for the six-function accepted historical states, decision and priority. Do not independently reclassify current source at this later original HEAD.

**Target transition:** S4=— -> S4=C
**Proposal-stage decision:** GO
**Research disposition:** NEEDS_EVIDENCE

## 1. Function-specific construction boundary and methodology checks

**System-in-focus:** one Paperclip company, its bundled agent heartbeat/run execution, first-party task/management/reviewer modes and board authority. Original [master `417802ca872e719f32ad447d7e69a8b77a802fd3`](https://github.com/paperclipai/paperclip/commit/417802ca872e719f32ad447d7e69a8b77a802fd3) inspected 2026-11-19; accepted [Index source `7f986789...`](https://github.com/opensiro/vsm-harness-index/blob/394ce776e6945115891b8f7cc459f5a7f7d7aa39/assessments/pa/paperclip.md) reviewed 2026-11-17 is historical. Uninstalled third-party plugins, external model providers' own organizations, Paperclip maintainer work and development CI do not by themselves establish this company's functions.

**Historical six-function constraints, referenced not duplicated:** canonical [roadmap.md](roadmap.md): S1 first-party autonomous employees, S2 task/checkout coordination, S3 current company priorities/resources and separate parent board, S3* independent reviewer stage, S4 prospective adaptation candidate, S5 parent board ultimate authority. S1 and S3* are not excluded by definition from future construction in another harness; in this actual accepted Paperclip baseline they already have A. S5 P is legitimate, not permission to introduce a local policy owner.

**S4 disturbance/variety:** a provider announces a new model or retirement affecting the future suitability of a company's pinned AI agents. The actual present manager (S3) balances resources and continuity; the prospective S4 actor must evaluate outside/future options before a lawful company capability change. **Model release announcement or auto routing alone does not satisfy S4.**

**Decisive actor / counterfactual:** current deterministic [router](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/ai-connection-router.ts) filters compatible model connections but does not itself demonstrate independent prospective S4 alternative judgment. Without the proposed developer-installed function-specific autonomous actor, the same future-oriented choice should *not* occur automatically; existing manual operator and policy control still function as before.

**Authority:** an S4 agent may propose HOLD/CANARY/PROPOSE_CHANGE for configured agents, not decide company purpose, credentials, cost escalation or protected board/reviewer setup. Existing [approval service](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/approvals.ts) and [agent config revision/rollback](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/routes/agents.ts#L4299-L4426) are reuse candidates, not proof their existing signatures already accept the proposed S4 actor. Parent S5 keeps veto and operational S3 retains current scheduling.

**Intentional no-S4 design:** UNKNOWN; neither source absence nor a posted request proves a deliberate omission. Maintainer interest **NOT_STATED**; independently attributable user's original [#20848](https://github.com/paperclipai/paperclip/issues/20848) articulates one scenario, not policy or product consent.

## 2. Source-pinned baseline and parallel native Track A / on-top Track B

**Native Track A inspected:** first-party [ai-connection-router.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/ai-connection-router.ts) contains compatibility/model routing, [agent-configuration.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/agent-configuration.ts) and [agents.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/agents.ts) manage current configuration, [agents.ts HTTP route](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/routes/agents.ts#L4299-L4426) exposes revisions and rollback, [company-skills.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/company-skills.ts) manages skill versions, [routines.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/routines.ts) offers periodic work, [approvals.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/approvals.ts) owns protected approvals. Existing future prospective S4-specific closed actor port and feedback were **not identified by bounded source review**; this is not a comprehensive negative re-assessment.

**Native issue/PR overlap checked 2026-11-19:**
- [Original #20848](https://github.com/paperclipai/paperclip/issues/20848) **OPEN, ISSUE_ONLY**: proposes opt-in model release detection, compatibility-aware upgrades, safe idle canary/rollback and approvals; not shipped by issue text.
- [PR #14967](https://github.com/paperclipai/paperclip/pull/14967) **MERGED**: experimental task-pinned AI routing; [#16954](https://github.com/paperclipai/paperclip/issues/16954) **OPEN**: open-source reference router, not an S4 actor.
- [#3406](https://github.com/paperclipai/paperclip/issues/3406) **OPEN**: subscription-aware self-optimization request; adjacent current/future boundaries must be distinguished.
- [#16504](https://github.com/paperclipai/paperclip/issues/16504) **OPEN**, [PR #13379](https://github.com/paperclipai/paperclip/pull/13379) **OPEN/UNMERGED**: present-resource run throttling belongs to S3, not an already-shipped S4 closure.
- [#18296](https://github.com/paperclipai/paperclip/issues/18296) **OPEN**, [PR #17857](https://github.com/paperclipai/paperclip/pull/17857) **OPEN/UNMERGED**: board authority and policy boundaries must be preserved, not assumed shipped improvements.

| Required C linkage | Track A first-party/Issue/PR coverage | Track B minimum on-top | Proposed sufficiency / falsifier |
| --- | --- | --- | --- |
| Dated external/future model disturbance and existing eligible state | Existing model compatibility routing, agent config and optional Issue #20848; no shipped advisor inferred | Reuse native provider capability where trustworthy; opt-in dated source+compatibility summary, versioned company options | Fails if no attributable external distinction or lacks supported first-party access |
| Developer-composed S4 autonomy | No established first-party S4-specific autonomous decision owner at inspected boundary | An opt-in prospective adaptation decision actor/option port exposing HOLD/CANARY/PROPOSE_CHANGE and scope; developer wires actual autonomous agent | Fails if all decisions are hardcoded, manually prescribed or only generic model router |
| Lawful actual impact and later S3↔S4 closure | Existing revision/rollback, board approvals and run outcomes, but not bound to S4 feedback | Safe future-run apply/deny bridge + truthful actual next-run/rollback receipt to S3 manager and S4 actor | Fails if merely issues a recommendation, changes active run or never returns real operational evidence |

**Track B must reuse A**, not duplicate existing #20848 or claim the issue itself is an implementation. A later independent source/native review may find existing equivalent C and invalidate this proposal. Do not presume maintainer engagement from open user issue.

### New-HEAD independent Track A and Track B delta (2026-11-19)

- SHIPPED: Learning Agent and Reflection Coach in [built-in registry](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/built-in-agents.ts). Reflection Coach [procedure](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/built-ins/agents/reflection-coach/AGENTS.md) uses past agent trajectories, source-linked proposed skill/instruction changes and a separate accepted future run; it does not independently establish prospective external S4.
- ISSUE_ONLY: original #20848 requests model-release compatibility and safe future-run opt-in recommendations, but a GitHub issue is not an installed decision/feedback constructor.
- OPEN / unmerged PRs: #17414 head 1565a9fc4b48086732a68902c67e83fb1ef935a0 is judge/learner separation; #21097 head 8084c639f4797ee6c887ffb0605f57f63bf31f59 is current quota router, tested with fake providers and no live benchmark. Neither is complete prospect-oriented S4.
- Track B missing S4 function: source-dated outside/future change, autonomous option judgment HOLD/CANARY/PROPOSE_CHANGE through a first-party specifically S4-composable interface, bounded lawful next-run-only adaptation decision, real operational feedback/denial/rollback returned to S3. Reuse current tasks/routines, AI connection/config revision and board gates, no new competing router, judge or learning runtime.
- Counterfactual/falsifier: remove new S4 actor, retain internal coaching and existing routing. If they already choose external-future alternatives and enforce/observe subsequent S3 adaptation, P0 is redundant. A notification or a human-only config update does not qualify as C.
- Native validation scenarios all NOT_RUN: source-verified external model release, compatibility truth versus unknown, no unauthorized actions, protect in-flight runs and independent reviewers, opt-out, bounded canary and rollback, subsequent actual agent run consumes selected version and reports feedback, manual equivalent comparison.
- Rights: fork ACTIVE/ALLOW checked; internal metadata only. Public GitHub Issue/PR and original maintainer communication not approved.

## 3. Minimal complete first-party S4 C construction

The following are **logical obligations** for this one S4 vertical slice, not an API count or mandated names. An implementation may use existing native code, extend one endpoint, or several ports, but must preserve function-specific rights and closure.

| Native surface and path | Verified reusable basis | Minimum *proposed* first-party integration | Actor/rights/effect/feedback |
| --- | --- | --- | --- |
| Model-change evidence and company options | [router.ts](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/ai-connection-router.ts), [config services](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/agent-configuration.ts), official provider observations suggested by #20848 | Versioned optional S4 option case including source/date, affected agents, compatibility and missing facts, hold as a real option | The sensor does not own the organizational decision; unknown catalog or client account must fail closed |
| Autonomous S4 composition | Paperclip supports company agents and existing native mode/rights | A first-party S4-specific registration/decision interface allowing a developer-supplied autonomous actor to select an eligible alternative with reasons and scope | The actor, not a fixed cron/model router, makes a future adaptation judgment |
| Authorized apply and factual return | [revision/rollback routes](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/routes/agents.ts#L4299-L4426), [approvals](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/approvals.ts), native run observation | Scoped approve/deny, future-run-only staging, verified canary where supported, and applied/refused/failure receipts to both current manager and prospective actor | Existing board S5 rights, manager S3 commitments, reviewers and in-flight sessions preserved; no unconsented credential/access changes |

**Architectural C argument:** once the proposed actual first-party S4-specific actor and feedback construction points are supported and reachable, a developer can install the autonomous owner and close future change evaluation into legitimate later operational outcomes. The present source does **not** claim this shipped. A single native integration may satisfy multiple logical obligations; a generic routing plugin without prospective S4 context and return does not.

**P1 dependencies:** verify current original agent-config authorization and safe mutation boundaries; ensure compatibility/credentials/tenant scopes, native approval and true run feedback; derive exact API and tests from current code. **P0** is only a proposed complete eligible S4 constructor. **P2:** NONE required; optional distinct S3 developer composition would need a separate material scenario and is not A(P)→C grade ladder.

### Current-HEAD source/constructor delta — independent rerun 2026-11-19

- Canonical structured function dispositions, P0/P1/P2, single historical vector, owner and proposal `GO / NEEDS_EVIDENCE` are in **[roadmap.md](roadmap.md)**; do not duplicate or regrade them here. Original HEAD [417802ca872e719f32ad447d7e69a8b77a802fd3](https://github.com/paperclipai/paperclip/commit/417802ca872e719f32ad447d7e69a8b77a802fd3), historical accepted Index ref `7f9867895c4e7e9589b233a93aa9efceb0c992d0`.
- **SHIPPED:** `server/src/services/built-in-agents.ts` provisions Learning and default-paused Reflection Coach; `server/src/built-ins/agents/reflection-coach/AGENTS.md` demands evidence/visible diff/accepted confirmation/separate mutation run. `server/src/services/routines.ts` handles scheduled action; `company-skills.ts` and agent configurations support versioned changes; `ai-connection-router.ts` supports optional account selection; `approvals.ts`, issue-execution policy and real heartbeat state govern decision and feedback. None by itself establishes outside-and-future selection and current S3 return.
- **ISSUE_ONLY:** original #20848 model-release advisor, #3326 learning journal, #3626 external schedule/user challenge. **OPEN_PR, NOT SHIPPED:** #17414 separate Judge, #21097 OSS router, #21902 decisions API extension. Verify exact PR heads again before any code implementation.
- **MINIMUM NEW S4-FIRST-PARTY path:** a scoped source-attributed external provider change → company-compatible future-option case with HOLD and alternative → genuine developer-composed agent selecting a bounded prospective choice through a function-specific decision port → native validated future-run-only effect/denial under existing S3/S5/S3* rights → actual later-run observation and discrepancy returned to S3 and S4. There is no need to invent new general scheduling, budget, policy or audit services.
- **Actor/authority:** configured agent selects prospectively; deterministic runtime records and enforces company rights; existing CEO/manager owns S3 current commitments; board retains reserved S5 identity/strategy/credential rights. An approval/notification merely transporting a human decision is not first-party S4 C.
- **Native test design, all NOT_RUN:** controlled external signal plus two options; HOLD; compatible authorized future-run apply; incompatibility/unknown account; wrong-company/absent actor; stale/revoked choice; rejected protected reviewer/board grant; no in-flight mutation; next-run failure and feedback into S3/current task selection; ordinary operation unchanged.
- **Falsifier:** if the shipped current Paperclip provides an equivalent complete S4-specific composed-agent path, or if the actor lacks decision ownership, permissible effect or true observed S3 return, this proposal must become NO_GO / redesign. Scope of any future implementation must be validated against original Issue #20848 and native CONTRIBUTING.md before any authorized product change.


## 4. Priorities, optional alternative and stopping rules

**Preferred minimal original-native path:** first extend/reuse native #20848 and the shipped router/config/revision mechanism; consider a smaller notification-only tool if maintainers reject autonomous composition or cost/risks outweigh benefit. Do not create a parallel VSM policy/monitoring platform. Do not make S4 mandatory if Paperclip intentionally leaves future adaptation to parent/users.

**Stop gates:** current first-party S4 C construction actually already exists, function boundary is incorrectly inferred from a dev/eval service, lawful permissions cannot be met, no true supported effect and feedback can be given, or maintainers prefer a simpler manual/native route. For such cases the architectural verdict must be independently revised with evidence; no unmeasured benefit alone proves NO_GO.

## 5. Future source-native acceptance — NOT RUN

Source test runner as actually declared in `package.json` at `417802ca872e719f32ad447d7e69a8b77a802fd3`: `pnpm run test:run` (delegates to the repository's `scripts/run-vitest-stable.mjs` after workspace-link preflight). Specific files/fixtures must be **authored from real server modes**, not fabricated. No Paperclip native tests were executed by this roadmap.

| Proposed native case | Source-supported setup / future test | Observable desired result | Falsifier |
| --- | --- | --- | --- |
| S4 positive future choice | Configure one company with pinned model; external provider change is source-proven and compatible; developer-installed S4 actor chooses a lawful candidate under required approval | At next permitted run, company-approved revision is applied; observed outcome returns into S3 planning and subsequent S4 choice | Recommendation only, no real feedback, no agent-owned choice |
| S4 lawful HOLD alternative | Same outside change, actor chooses HOLD | Company unchanged; rational hold recorded and informs next decision | Hardcoded latest model switch regardless of actor |
| S4 parent / reviewer veto and stale config | Proposed change touches protected reviewer, active session, wrong principal, revoked scope or stale revision | No unauthorized current/future mutation; true denial, not false success | New interface bypasses parent S5/manager rights |
| S4 incompatibility / unsupported mode | Provider catalog lists model but connected CLI/account/runner cannot use it | Option marked ineligible/UNKNOWN; no changes, with feedback | Provider mention treated as executable permission |
| S4 canary fails / rollback | Authorized idle canary reports error or later run fails | Existing revision/rollback restores safe prior future-run config; negative feedback returned | False success, loss of existing bindings or broken in-flight run |
| Matched native baseline | Existing manual configuration and optional #20848 planned advisor path compared on same model-change task | Measure effort, correctness, regressions and maintenance separately after implementation | No incremental value versus simpler first-party workflow |

**No fixed five-port or nine-case requirement.** These are source-informed hypotheses; acceptance IDs, fixtures and actual code must be established by a separately authorized implementation. Tests `NOT_RUN`, cost `NOT_MEASURED`.

## 6. Proposal verdict, falsification, evidence ownership and handoff

**Terminal interpretation:** source-grounded proposed S4 C constructor (GO) with unexecuted future validation (NEEDS_EVIDENCE); values are derived from roadmap.md.

**GO + NEEDS_EVIDENCE is valid:** the plan sketches a complete source-informed function-specific C decision/authority/effect/return construction to investigate, without asserting a current grade, implementation, actual utility or passed native tests. Revisit GO if a decisive source-owner or authority falsifier emerges. `BLOCKED` would require an indispensable source/right fact unresolvable through permitted research; `NO_GO` would require no qualified constructor or a source-backed duplicate/impossibility, not merely missing benefit measurements.

**Primary falsifier:** current shipped source already provides equivalent first-party developer-composable S4 actor and S3-feedback path; otherwise inability to compose a legitimate autonomous future choice with an operational first-party return. **Validation:** NOT_RUN.

**Ownership of truth:** VSM Profile owns function semantics, Skills owns `A/C/P/—/?` publication notation, Index owns accepted historic Paperclip assessment, original Paperclip owns actual implementation and contribution rules, and [roadmap.md](roadmap.md) owns the case-local priority/verdict. No original changes or accepted Grade are inferred.

**Next permitted action:** original-native architecture/rights review and a separately authorized first-party test/implementation decision; no automatic repo communication. **Cost status:** NOT_MEASURED.
**Human backlink:** [issue.md](issue.md). **Receipt:** [roadmap.md](roadmap.md).

**No original external Issue/comment/PR**, fork-local public GitHub Issue/PR, product code, Index modification or authority transfer was authorized by this analysis. Fork Issues are currently disabled; any external communication requires separate exact conversational approval and original-project dedup. **AI disclosure:** AI-assisted, neither tests nor human technical endorsement claimed.
