# Paperclip — S4=— → S4=C — optional prospective model-adaptation constructor (Opensiro roadmap)

**PLAN_ONLY · proposal-stage GO · research NEEDS_EVIDENCE · DRAFT — NOT PUBLISHED**

**One-sentence proposal:** Reuse Paperclip's agent configuration, AI connection router, approval and run-feedback infrastructure to expose one *optional S4-specific first-party construction path*: a developer-composed autonomous future-model adaptation actor that compares lawful alternatives and returns an actually authorized change with future-run feedback. This is not a request to implement a generic six-system VSM or current Index reclassification.

**Canonical decision receipt:** [roadmap.md](roadmap.md) — source of truth for frozen Index pins, six dispositions, target, P0/P1/P2 and decision.
**Technical companion:** [constructor-sufficiency.md](constructor-sufficiency.md) — proposed original-native composition and falsifiable acceptance, not a second public Issue.
**Working fork:** [opensiro-contributions/paperclip](https://github.com/opensiro-contributions/paperclip) · metadata branch `opensiro/meta` · existing case `.opensiro/issues/capability-roadmap-issue-pilots-20261118/`.
**Source pin:** [original Paperclip `3b978692ee72`](https://github.com/paperclipai/paperclip/commit/417802ca872e719f32ad447d7e69a8b77a802fd3) at 2026-11-19. **Assessment pin:** [accepted Paperclip Index](https://github.com/opensiro/vsm-harness-index/blob/394ce776e6945115891b8f7cc459f5a7f7d7aa39/assessments/pa/paperclip.md), reviewed 2026-11-17 against `7f9867895c4e7e9589b233a93aa9efceb0c992d0` (Profile 0.2.4 / Skills 0.3.8). Historical assessment is not automatically a grade for the newer master.

## 1. Why Opensiro and central accepted VSM assessment

Opensiro investigates whether a reusable evidence-backed organizational model can guide native harness enhancements without prescribing their implementation or inventing product weaknesses. Any cost reduction or operator usefulness is an **unmeasured hypothesis**. We first map functions and their decision owners, then choose a feasible construction target instead of forcing a VSM component everywhere.

> **ACCEPTED HISTORICAL INDEX, not current grade or a proposed after-state:**
> `S1=A · S2=A · S3=A(P) · S3*=A · S4=— · S5=P`.

**System-in-focus:** one supported OSS Paperclip company with first-party server/UI/CLI agent execution, tasks, manager hierarchy, reviews and parent board; excludes Paperclip maintainer organization, uninstalled plugins, development-only CI/evals and direct external providers without the first-party Paperclip contract. Whole-repository survey covered runtime, API/configuration, architectural docs, first-party plugin/execution routes, tests, contributor governance and live native Issues/PRs. See the bounded source map in [roadmap.md](roadmap.md).

| Function / plain-language role | Historical Index state | Current source-backed owner/closure (not a regrade) | Candidate / justified no-target / uncertainty and rank |
| --- | --- | --- | --- |
| **S1 · Operations** — agents doing primary work | A | [Agent execution/heartbeat service](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/agents.ts); autonomous agent work in the pinned historical mode | NO_TARGET; already A historically |
| **S2 · Coordination** — attenuating inter-agent conflict | A | [Task assignments, dependencies and checkout](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/issues.ts); managers use feedback | NO_TARGET; already A historically |
| **S3 · Current management** — current commitments/resources | A(P) | [Run admission](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/heartbeat/run-admission.ts), agent managers, distinct board supervisory control | DEFER optional S3 developer-composability; no mandatory C |
| **S3* · Independent review** — independent corrective feedback | A | [Execution-policy/review bootstrap](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/execution-policy-bootstrap.ts), optional reviewer stages | NO_TARGET; protect reviewer independence |
| **S4 · Future adaptation** — external/future options fed into current management | — | [AI routing](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/ai-connection-router.ts), [versioned skills](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/company-skills.ts) and config revisions are building blocks; an independent prospective agent decision/feedback closure was not established in bounded current-source review | **P0 proposed C**, not proof of current absence or a required roadmap |
| **S5 · Identity and policy** — ultimate purpose/authority | P | [Board approvals](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/approvals.ts) and goals/policy remain parent governed | NO_TARGET: legitimate parent P, not a local-policy deficit |

`A` indicates first-party agent decision/closure; `C` indicates first-party function-specific developer-composable autonomy; `P` is a supported parent-governed S3/S4/S5 mode; `A(P)` adds a distinct parent mode; `—` is defensible historical bounded absence, `?` unresolved evidence. **These are ownership categories, not quality ranks.**

**Priority rationale:** S1/S2/S3/S3* are already autonomous according to the accepted historical assessment; S5's parent decision is legitimate. S4 has a concrete, source-native composition opportunity relating to model lifecycle and current management. No new interest or demand is presumed. [Original #20848](https://github.com/paperclipai/paperclip/issues/20848) is an independently attributable **open user request**, not a maintainer commitment.

**Deliberate exclusions / methodological challenge:** parent S5 remains intentional and supported; deliberate omission of local S4 is **UNKNOWN**, not inferred from missing implementation. If maintainers intend no local prospective adaptation in Paperclip's operating boundary, record the reason and boundary/falsifier for independent Profile/Skills feedback instead of forcing a controller.
**Contributor / maintainer interests (OPTIONAL):** #20848 provides a user scenario; **maintainer interests NOT_STATED**.

**Independent 2026-11-19 evidence:** [Pinned original HEAD](https://github.com/paperclipai/paperclip/commit/417802ca872e719f32ad447d7e69a8b77a802fd3) has 17,430 tracked files; reviewed server, packages, agent, company governance, docs, tests, CI, rights and original Issue/PR candidate paths before opening old Roadmap. [Shipped Learning Agent / Reflection Coach](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/services/built-in-agents.ts) and [Reflection Coach procedure](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/built-ins/agents/reflection-coach/AGENTS.md) support internal retrospectives and gated skill changes, not proved outside/future S4. [Original #20848](https://github.com/paperclipai/paperclip/issues/20848) remains source-native P0 need. [PR #17414](https://github.com/paperclipai/paperclip/pull/17414) judge and [PR #21097](https://github.com/paperclipai/paperclip/pull/21097) router remain OPEN and must not be duplicated. Independent verdict converges with the previous case, read afterward. No native test or live provider call executed.

## 2. Selected construction hypothesis and operator outcome

**Target transition:** S4=— -> S4=C

**Scenario basis:** HYPOTHETICAL (informed by original #20848). A multi-model Paperclip company has an agent pinned to an older provider model while the provider announces a successor or retirement. The operator currently needs to compare availability, harness compatibility, permissions, execution eligibility and agent roles manually.

**P0 proposed future capability:** opt-in S4 constructor in which the developer installs an autonomous actor that can choose **HOLD**, **PROPOSE_CHANGE**, or **CANARY** after examining documented external change and Paperclip's allowed future-run options. The resulting choice must pass existing parent/manager permissions and protect in-flight runs and distinct reviewers. True later run outcome and rollback/denial evidence returns to the S4 actor and current S3 priorities, closing the prospective loop.

**Best native operator alternative:** manual provider-release review and safe agent config update, via [current revision endpoints](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/routes/agents.ts#L4299-L4426). Manual alternatives may remain cheaper; we do not invent cost savings.

**Sufficiency argument:** current configuration/router/revision/approval mechanisms provide reusable parts. The **missing proposed C-specific construction** is an explicit S4-scoped actor/option binding, legitimate future-run application bridge and feedback receipt into ongoing management. An opt-in model release notification alone would not establish an autonomous S4 function.

## 3. Existing native work versus missing construction

**Track A (existing native work):** [#20848 OPEN, ISSUE_ONLY](https://github.com/paperclipai/paperclip/issues/20848); [AI routing PR #14967 MERGED](https://github.com/paperclipai/paperclip/pull/14967); [reference router Issue #16954 OPEN](https://github.com/paperclipai/paperclip/issues/16954). [S3 run throttling PR #13379 OPEN](https://github.com/paperclipai/paperclip/pull/13379) and [S5 board-rights PR #17857 OPEN](https://github.com/paperclipai/paperclip/pull/17857) are separate neighboring work, not shipped S4 or permission to override S5.

**Track B (smallest on-top design):** provide a developer-composable **prospective S4 decision/feedback interface** on top of Track A, *not* a competing original Issue or independent VSM control plane. A matching Issue is a starting point, not a matching Issue veto.

| C-sufficiency requirement | Present or proposed native A | Minimum missing B |
| --- | --- | --- |
| Dated outside/future model-change evidence and current supported options | Existing router/skills/config, proposed #20848 notification | Source-backed optional evidence/option view with compatibility/authority boundaries |
| Autonomous function decision and actionable permitted alternatives | Config can be changed, with existing rights/rollback | First-party S4-specific installable actor port with HOLD/CANARY/PROPOSE_CHANGE |
| Future-operation effect and feedback into S3/S4 | Agent config revisions and run observability | Safe future-run application/denial record and later outcome/rollback receipt to S3 manager and S4 actor |

**Proposed C-sufficiency verdict:** PROPOSED_C_SUFFICIENT, **not shipping**, not a test pass and not a changed Index grade without separate Index review. Falsifiers: no lawful autonomous actor owner, no supported operative return path or native source already fully supplies the same constructor.

### Fresh independent re-run at current original HEAD (2026-11-19)

The historical accepted Index vector above is unchanged. The new original pin is [417802ca872e](https://github.com/paperclipai/paperclip/commit/417802ca872e719f32ad447d7e69a8b77a802fd3); the independent P0 decision preceded reading prior OpenSiro roadmap case verdicts. Whole-repository source survey included runtime/services, UI/CLI/plugins, docs, tests/CI and contributor governance; evidence boundaries are detailed in [roadmap.md](roadmap.md).

- **Existing shipped work:** Paperclip now includes a default-paused Reflection Coach that reviews recent *internal* agent trajectories, proposes skill/instruction diffs and requires an accepted interaction before a separate follow-up applies them. This is useful but is not by itself external/future S4. [Source](https://github.com/paperclipai/paperclip/blob/417802ca872e719f32ad447d7e69a8b77a802fd3/server/src/built-ins/agents/reflection-coach/AGENTS.md).
- **Original sources:** model lifecycle [#20848](https://github.com/paperclipai/paperclip/issues/20848) (issue, not shipped), learning journal [#3326](https://github.com/paperclipai/paperclip/issues/3326), open [Judge PR #17414](https://github.com/paperclipai/paperclip/pull/17414) and [router PR #21097](https://github.com/paperclipai/paperclip/pull/21097). The latter are not credited as merged capabilities.
- **Incremental P0:** add only the missing S4-specific prospective-option, developer-composed decision and observed future-run/S3 feedback binding **on top of** the shipped Paperclip tools. Keep board S5, manager S3, reviewers and active runs unchanged.
- **Decision:** GO on a credible source-native complete design, **NEEDS_EVIDENCE** on user value/native integration, `NOT_RUN` and `NOT_MEASURED`. Falsify if equivalent first-party S4 is already shipped, the composed agent cannot own a lawful choice, or future-run effect plus return-to-S3 cannot be realized.
- **Old-case comparison (consulted after decision):** the earlier model-release and template-pilot cases align on S4; the new source scan adds explicit shipped Reflection Coach versus open Judge/router work and a newer HEAD. No attribution to older case reasoning is claimed.


## 4. Priorities and minimum sufficient result

- **P0:** optional S4=C developer-composed future-adaptation vertical slice; preserve native model routes and authority.
- **P1:** exact supported native rights/compatibility, actor binding, safe future-run revision and genuine S3↔S4 feedback, then future native tests.
- **P2:** NONE required. Prior optional S3 composability is a separate hypothesis; S3 remains historically `A(P)`, never forced into `C`.

## 5. Proposed acceptance and stop gates

**Positive (NOT_RUN):** external model-change evidence plus two lawful options → composed S4 actor chooses one → manager/board-authorized config revision applied only at eligible future run → true run result and feedback changes later management and adaptation.

**Negative (NOT_RUN):** incompatible/provider-unavailable model, stale revision, absent actor, wrong company, protected reviewer or parent policy veto, running session and failed/rolled-back canary do not produce unauthorized changes or false success.

**Proposed falsifier:** existing native workflow already closes the same function-specific autonomous loop; developer actor not decisive; no real operational return. Formal matched task/cost experiment also needed for product benefit, not design GO.

**Validation state:** NOT_RUN.

## 6. Independent paths

**Original-native:** extend discussion under existing [Paperclip #20848](https://github.com/paperclipai/paperclip/issues/20848) after separate approval if useful; do not open a duplicate.
**Profile / Skills:** investigate genuine intentional S4 non-construction or other evidence-supported methodology counterexamples independently.
**Domain fork:** optional future experiment after lawful approval, not created by this PLAN_ONLY case.

## 7. Cost hypothesis

Compare manual existing model-change review with developer-composed S4 under matched real workload, implementation, review, test and maintenance effort. **Cost status: `NOT_MEASURED`**.

## 8. Decision / handoff

**Proposal-stage decision:** GO
**Research disposition:** NEEDS_EVIDENCE

GO is for a source-informed, **proposed complete C constructor design**, not real code, proven demand, current Index regrade or evidence of delivered benefit. **GO + NEEDS_EVIDENCE is valid** while future native tests remain unexecuted. P0 is not a general product mandate; current Head was sampled, and further first-party overlap/design review may falsify the proposal.

**Next permitted step:** verify the matched current original-native paths and scope with Paperclip architecture decisions before implementing any new C port. Do not implement policy/S5 machinery or open a competing external issue simply because S4 historically was `—`.

**Agent/developer handoff:** [constructor-sufficiency.md](constructor-sufficiency.md) and canonical [roadmap.md](roadmap.md) are mutually linked; all case statuses derive from the same receipt.

**Rights / publication:** MIT original, Paperclip CONTRIBUTING.md favors dedup and Discord discussion for substantial changes. Fork owner_control `ACTIVE / ALLOW` permits this source-pinned metadata work; **public fork Issues are disabled**, and no public fork Issue, original Issue/comment/PR, product change, Index grade, authority grant or demonstrated cost saving is authorized. Publication needs separate exact current-conversation approval.

**AI disclosure:** Prepared with AI assistance; no independent human technical review, original maintainer endorsement or executed native validation is claimed.
