# Paperclip — source-native model-lifecycle S4 roadmap, independent v0.18.2 follow-up

**Snapshot:** 2026-11-20 source-first re-evaluation of one existing stable case, with historical 2026-11-17 proposal retained by Git history and dated legacy companion; **PLAN_ONLY / HYPOTHETICAL**. No implementation, native test result, external publication, Index regrade or human/maintainer acceptance. Protocol Upstream 0.18.2. Source-first verdict [sealed before historical read](https://github.com/opensiro/upstream/issues/58#issuecomment-7047762363); reservation [#58](https://github.com/opensiro/upstream/issues/58#issuecomment-7047668460).

## Identity and pins

- Original repository: paperclipai/paperclip
- Original HEAD: f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb
- Observed at: 2026-11-20
- Accepted Index assessment: https://github.com/opensiro/vsm-harness-index/blob/a3fcf7c156ef4d1132680890bc11544681fd30c0/assessments/pa/paperclip.md
- Accepted assessment blob SHA: af4238a8690bc0b8ee09b0896481799a506ec7eb
- Accepted review ref: 7f9867895c4e7e9589b233a93aa9efceb0c992d0
- Accepted reviewed at: 2026-11-17
- System in focus: One Paperclip company and the deployed first-party server, provider/harness adapters, agents, work/heartbeat loops, current management, reviewers, config policy and board; not maintainers, private cloud or uninstalled actors.
- Accepted VSM vector: S1=A · S2=A · S3=A(P) · S3*=A · S4=— · S5=P
- Accepted Profile / Skills Methodology: Profile 0.2.4 / Skills Methodology 0.3.8, per current accepted Index.
- Result: PLAN_ONLY
- Receipt contract: proposal-gate
- Repository-wide source map: Current first-party agent runs heartbeat.ts; S2 execution issue-execution-policy.ts; S3 agent-configuration.ts; S3* approvals.ts; S4 adapter registry.ts, routes/agents.ts, adapter model audit 2026-11-18; S5 doc/PRODUCT.md and board policy; source links and statuses below.
- Priority rationale: S4 is the only qualified source-specific incomplete future-choice construction; preserve existing autonomous S1/S2/S3/S3* and legitimate S5 parent policy rather than forcing grade improvements.
- S1 disposition: NO_TARGET — first-party agent work and subsequent task returns already owned; do not regrade.
- S2 disposition: NO_TARGET — first-party issue policy and coordination semantics already available; no independent missing C scope proven.
- S3 disposition: DEFER — management of current resource commitments exists, autonomous and parent-governed modes remain accepted.
- S3* disposition: NO_TARGET — first-party separate reviewer/approval route; protect independence.
- S4 disposition: P0 — source-native external model lifecycle detection/options, developer-composed decisive owner, future-run effect and return currently not proven as a full autonomous loop.
- S5 disposition: NO_TARGET — legitimate board/parent purpose and approval authority stays reserved.
- Target transition: S4=— -> S4=C
- P0: Company-scoped developer-composable prospective model-lifecycle choice, authorized future-run configuration effect and linked subsequent-run observation.
- P1 dependencies: Dated provenance, model/CLI/account compatibility checks, genuine per-agent and board permission, active-run/session and version fences, independent reviewer exclusion and native test proof.
- P2 optional: NONE
- Proposed C construction: Optional source-native S4 case/decision bridge atop shipped model refresh, agent configuration/revision and heartbeat receipt; autonomous configured S4 owner selects retain/hold/stage and Paperclip enforces rights before future-run application.
- C sufficiency falsifier: Existing first-party autonomous S4 future-choice/feedback already closes the exact task, or guarded future-run model update with original native rights cannot be achieved.
- Scenario basis: HYPOTHETICAL
- Proposal-stage decision: GO
- Research disposition: NEEDS_EVIDENCE
- Proposed validation: Source-pinned positive retain-vs-stage choice with actual next-run model and feedback, and missing/stale/revoked/incompatible/parent-denied negative tests; compare manual native baseline.
- Validation state: NOT_RUN
- Proposal falsifier: An authorized agent cannot be composed into a source-specific future-choice loop, or no actual later-run operational effect and feedback can be observed.
- External issue: DRAFT — NOT PUBLISHED
- Cost status: NOT_MEASURED

The accepted Index snapshot remains the only accepted classification. Original main advancement since accepted review: [compare accepted review_ref to current pinned HEAD](https://github.com/paperclipai/paperclip/compare/7f9867895c4e7e9589b233a93aa9efceb0c992d0...f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb). No current-HEAD regrade. Historical source 2026-11-17 had original HEAD 904c01d1a3a16de817792432d5d5a24f6e4bde12 and an earlier Index permalink at 975a588; prior classification and design conclusions are historical comparison, not substitutes for source-first v0.18.2 review.

## Rights and authority

- Original [LICENSE](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/LICENSE): MIT; [CONTRIBUTING](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/CONTRIBUTING.md): dedup, native tests, disclosure, substantive roadmap discussion, source-native PR template. Actual contributor-specific CLA or DCO exemption NOT_VERIFIED.
- Matched fork: opensiro-contributions/paperclip on opensiro/meta. Fork .opensiro/state.json checked ACTIVE / ALLOW at source-first admission and before canonical write; metadata only. No external original issue/PR/comment, fork-public Issue/PR, product code or Discord contact authorized.
- Board/parent S5 authority is not autonomously delegated by a model-update constructor. Existing per-agent model changes may require explicit consent; [agent configuration](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/services/agent-configuration.ts) and [agent_config:update](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/routes/agents.ts) remain the relevant first-party bounds. No protected reviewer model mutation.

## Existing work / overlap

| Native surface / prior work | Observed status | What is and is not covered |
| --- | --- | --- |
| [Adapter registry](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/adapters/registry.ts), [model refresh test](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/__tests__/adapter-model-refresh-routes.test.ts), [GET adapter models](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/routes/agents.ts) | SHIPPED | Discover/refresh compatible model names; does not decide prospective company portfolio choices |
| [Agent configuration](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/services/agent-configuration.ts), [public MCP update](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/services/public-mcp/expanded-capabilities.ts), [heartbeat](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/server/src/services/heartbeat.ts) | SHIPPED primitives | Config consent, revision and future-run semantics exist; prospective source-attributed S4 choice→effective run receipt not verified |
| [2026-11-18 first-party manual audit](https://github.com/paperclipai/paperclip/blob/f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb/doc/adapter-model-audit-2026-11-18.md) | SHIPPED documentation | Model releases/CLI gates catalogued, saved assignments explicitly not migrated |
| [Original #20848](https://github.com/paperclipai/paperclip/issues/20848) | OPEN ISSUE_ONLY | Opt-in source/compatibility-aware advisor and optional canary; no shipped full autonomous chooser |
| [Original #16658](https://github.com/paperclipai/paperclip/issues/16658), [#10125](https://github.com/paperclipai/paperclip/issues/10125) | OPEN ISSUE_ONLY | Editable catalog and protection of model configuration are overlapping prerequisites, not finished S4 |
| [Original draft PR #22185](https://github.com/paperclipai/paperclip/pull/22185) | OPEN DRAFT / UNMERGED | Codex App Server model discovery from current CLI/account; not future-choice owner |
| [Original #3374](https://github.com/paperclipai/paperclip/issues/3374), [#3317](https://github.com/paperclipai/paperclip/issues/3317) | OPEN ISSUE_ONLY | Reactive quota or rate-limit fallback belongs to a different current-run/control disturbance |
| Prior [legacy constructor-acceptance.md](constructor-acceptance.md) and [fork-issue-draft.md](fork-issue-draft.md) | HISTORICAL / UNPUBLISHED | 2026-11-17 five logical ports and ten test cases remain archived as optional design material, not a fixed protocol pattern or current publication consent |

The earliest historical #58 Wave2 [read-only v0.17 report](https://github.com/opensiro/upstream/issues/58#issuecomment-7011950077) and latest [source-first v0.18.2 seal](https://github.com/opensiro/upstream/issues/58#issuecomment-7047762363) are distinct. No output from the former was imported into the fresh six-function selection; earlier case read happened only after the seal.

## Function ownership

- S1: real first-party autonomous agents execute company tasks and produce later effects via heartbeat and issue state; accepted S1=A.
- S2: issue execution policy and management coordination enforce occupancy/ordering across concurrent agents; accepted S2=A.
- S3: manager and board-controllable current resource assignment, budget and configuration; accepted S3=A(P).
- S3*: independent reviewer selection/approval/revision path; accepted S3*=A. Protect reviewer from self-downgrade under a model migration.
- S4: shipped catalog refresh, ordinary alerts and manual release audits are evidence/scheduling transport, not a dedicated developer-composable autonomous external/future decision actor returning a later company-level capability outcome. Accepted S4=— is preserved pending independent future Index review.
- S5: board legitimately retains purpose and strategic policy authority; accepted S5=P and not a target for delegation.
- No owner status is inferred from repository commit co-location, a test fixture, CI agent, optional uninstalled plugin, third-party model reasoning or original maintainers' organization.

## Capability priority

**P0:** One optional Paperclip source-native S4 constructed decision loop for prospective model lifecycle. A source-dated new/sunset model signal affects the future portfolio of a real company's agents; a developer-composed company actor chooses retain, hold or compatible stage, and an existing authorized pathway applies only at an eligible future run boundary. The real resolved-model/run outcome is linked to its decision. The changed capability is *choice among future operations and returned feedback*, not additional model IDs.

**P1:** Reuse existing adapter discovery, CLI/model compatibility and agent config/revisions; prove per-agent account entitlement and board policy, config revision expected version, stale signal, running-work preservation, independent reviewer protection, and effective next-run correlation. Future native test proof is indispensable to a shipped claim, but here NOT_RUN.

**P2:** NONE. Current S3/S3*/S5 safeguards are constraints, not separate optional new implementation grades.

**Minimum coherent architecture:** a dated and deduplicated prospective company S4 case (at least retain/hold/stage alternatives) → real developer-bound autonomous choice → first-party existing auth/board and config revision guard → next eligible-run change or hold → linked actual effective-model/denial/failure feedback. Physical API count is not prescribed. A generic callback or isolated model release notification without a rightfully decisive actor and downstream effect is incomplete. The native manual model selection is the matched alternative.

**C-sufficiency verdict:** PROPOSED_C_SUFFICIENT — proposal-stage GO / NEEDS_EVIDENCE, design only. A complete *proposed* C path is plausible from the combination of native Track A and minimum missing Track B; there is no shipped C witness or new Index state.

## Parallel contribution-on-top review

- Evaluation object: Current Paperclip prospective model-lifecycle S4 constructor at master f4a3f85b89b2dae7889b0a9c7fee07ed47b554cb, existing stable case model-release-adaptation-20261117.
- Existing-work overlap: Current model catalog refresh, version-specific adapter checks, authorized agent updates, board/configuration revisions, native runs and open original Issue #20848; no new competing original Issue required.
- Our on-top contribution: Optional company-scoped future-model evidence/choice and guarded change/returned-run-result bridge, with a developer-composed S4 decision owner; source-specific ports only when native paths are insufficient.
- Incremental benefit: HYPOTHETICAL future preparedness and safer optional model portfolio choice; no product adoption, savings, human demand or performance proof.
- Decision scope: Only architecture sufficiency for S4 C at proposal stage; existing accepted assessment and source code untouched.

## Implementation options

1. **Track A native baseline:** Keep provider release research manual, refresh adapter catalog, inspect actual CLI/account compatibility, change selected agent under existing company authorization and watch a later run. No extra autonomous mechanism is necessary when the operator prefers this.
2. **Track B optional source-native bridge:** Prefer a minimal Paperclip plugin or installed company actor plus source-specific S4 case identity and guarded versioned configuration/return if Paperclip's live SDK/permission hooks can actually close every link. If not, the smallest Paperclip server-native guard/correlation addition in existing owned modules is needed; no generic multi-harness S4 framework.
3. **Falsification:** If current native code already supplies this complete source-specific autonomous decision and later-use feedback, choose NO_USEFUL_CHANGE and no duplicate. If no lawful S4 owner can be composed without breaking parent rights, do not ship a misleading C label.
4. **Permission:** Any product code/forward publication requires a different authorized task and exact current-conversation approval. No external Issue/PR or fork-public PR is created by this metadata update.

## Specification and domain alternatives

- Profile and Skills semantics unchanged; a true counterexample can be raised separately and only after proving live first-party source.
- A legitimate S5 parent board review/approval may remain required before any future model change; parent governance is not a missing S5 mode.
- Continue with original #20848 instead of duplicating its idea; use native configuration and scheduled manual checks where this simpler workflow suffices.
- Domain fork code experiment not authorized here; no product changes or fork-public PR.

## Cost experiment

Compare one matched release/sunset task in the actual Paperclip environment: source release evidence, compatibility check and approved manual change versus proposed S4 actor and guarded native bridge. Count source ingestion, engineering, tests, review, integration, ongoing maintenance, operator steps, model errors and rollback. **No measured cost or improved productivity is claimed.**

## Delivery and publication

- Plan status: PLAN_ONLY / HYPOTHETICAL; research NEEDS_EVIDENCE; proposal-stage GO; selected S4 historical — to proposed C only.
- Result: PLAN_ONLY
- External issue: DRAFT — NOT PUBLISHED
- Cost status: NOT_MEASURED
- Tests: Native Paperclip tests NOT_RUN. Two Upstream structural template validators must pass locally before metadata persistence and after SHA readback; they validate document structure only.
- Canonical storage: opensiro-contributions/paperclip@opensiro/meta, four files README.md, issue.md, constructor-sufficiency.md, roadmap.md; old constructor-acceptance.md and unpublished fork-issue-draft.md are historical read-only research context.
- Historical attribution: 2026-11-17 old roadmap version [fork at pre-rerun commit](https://github.com/opensiro-contributions/paperclip/blob/4de32c7f8ce783796498324ec8e973c2f4a353c0/.opensiro/issues/model-release-adaptation-20261117/roadmap.md), original HEAD 904c01d1a3a16de817792432d5d5a24f6e4bde12, original source-first 2026-11-20 decision separate [#58 seal](https://github.com/opensiro/upstream/issues/58#issuecomment-7047762363). The historical five-port/ten-case example is no longer a mandated design template.
- Rights: No original public Issue/comment/PR, fork-public Issue/PR, code modification, auto-approval or independent Index grade change; proposal only.
