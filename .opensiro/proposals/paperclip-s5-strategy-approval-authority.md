# RFC (fork-local): board-reserved CEO strategy approval authority

Status: LOCAL_RESEARCH_PROPOSAL — **not implemented, not tested, not published as an issue or PR**.
Scope: **Paperclip S5** (parent-board identity and strategic-policy decisions).
Original: https://github.com/paperclipai/paperclip at `c41ca4a9922dbd6dd84c43ba4371a111706b4d5c`.
Working fork: https://github.com/opensiro-contributions/paperclip
Provenance: **ASSESSMENT_INFORMED**, not ASSESSMENT_DERIVED.
OpenSiro method: use the Viable System Model to identify who owns a decisive organizational choice, its feedback path, and a source-native material limitation. The VSM label is a hypothesis tool, not proof that the fix works or that a different autonomy grade is earned.

## Capability delta (operator story)

A company board can reserve approval of the CEO's **company strategy** for selected authorized board members and trusted authentication channels, while continuing to use API-key automation for routine approvals and administration.

Before: the approved `approve_ceo_strategy` path has a generic board-actor check; the app does not expose a documented per-strategy, per-approver authentication policy across both REST and plugin-mediated resolution.

After (proposed): if the board explicitly enables a strategy-decision reservation, an ineligible identity/channel cannot approve, reject or request revision of the CEO's strategic proposal. Eligible decisions continue through Paperclip's existing strategy gate and normal agent wake-up/resumption. When unset, the policy leaves default behavior unchanged.

This is not merely attribution or a new toggle. The concrete new operator action is to **reserve the final strategic decision right without disabling other board automation**.

## VSM mapping / authority

- S5 decisive authority: the company parent **board**, which sets company goals and legitimately accepts/rejects the CEO's strategic direction.
- Existing downstream enforcement: Paperclip approval service, existing board-policy gate and the CEO's normal continuation; these are supporting mechanisms, **not separate S3/S1 Upgrade targets**.
- Preserve legitimate human/board ownership. Do **not** convert S5 to a new autonomous agent or assign ultimate-policy discretion to a plugin.
- Material effect: eligible strategic decisions can return to govern execution; an ineligible decision does not alter strategic approval state or release the CEO's strategic gate.

## Source-pinned evidence and dedup

1. `server/src/routes/approvals.ts`: REST approve/reject/request-revision uses `assertBoard(req)` and company access; does not show approval-type-specific selected principal/source enforcement.
   https://github.com/paperclipai/paperclip/blob/c41ca4a9922dbd6dd84c43ba4371a111706b4d5c/server/src/routes/approvals.ts
2. `server/src/routes/authz.ts`: authenticated actors distinguish `session`, `board_key`, `mcp_oauth`, `cloud_tenant` and `local_implicit`; this is a **channel**, not proof a human physically acted.
   https://github.com/paperclipai/paperclip/blob/c41ca4a9922dbd6dd84c43ba4371a111706b4d5c/server/src/routes/authz.ts
3. `server/src/services/plugin-host-services.ts`: plugin-mediated `approvals.decide` uses an active member identity and a service-level decision path. A REST-only guard would leave a distinct decision surface.
   https://github.com/paperclipai/paperclip/blob/c41ca4a9922dbd6dd84c43ba4371a111706b4d5c/server/src/services/plugin-host-services.ts
4. `docs/guides/board-operator/approvals.md`: initial CEO strategy requires board approval before moving tasks into progress.
   https://github.com/paperclipai/paperclip/blob/c41ca4a9922dbd6dd84c43ba4371a111706b4d5c/docs/guides/board-operator/approvals.md

Overlaps: [#18296](https://github.com/paperclipai/paperclip/issues/18296) already asks for decision-source attribution and optionally restricts decision makers; [#13037](https://github.com/paperclipai/paperclip/issues/13037) covers interaction-resolution provenance; PR [#10972](https://github.com/paperclipai/paperclip/pull/10972) covers scoped board keys, PR [#17275](https://github.com/paperclipai/paperclip/pull/17275) plugin actor-source information, PR [#21648](https://github.com/paperclipai/paperclip/pull/21648) local operator credentials. **Do not open a duplicate upstream issue.** Re-read overlapping work before any implementation/publication.

The existing fork branch `feat/approval-decision-source-s5` stores a source-attribution patch only. It does not itself implement this strategic decision reservation and remains a separate contribution record.

## Proposed minimal architecture (not a patch yet)

- Define a **board-set, company-scoped** optional policy for strategic approval decisions only. Possible fields: designated active user principals; allowed authenticated channels; explicit supported deployment modes. The initial default is **no extra restriction**.
- Apply the authoritative policy at the common decision boundary used by REST, board/plugin actions and other native writers, with a trusted server-side actor context. Never accept an `actorUserId` supplied by a plugin as independent proof of a browser-session decision.
- Evaluate the policy for approve, reject and revision request; identify any other paths that can transition a strategy approval. Check the policy again on mutation so a stale authorization cannot race a policy change.
- Deny absent/untrusted actor context under a restricted policy. Do not silently fall back to `board` or interpret `local_implicit` as a verified human.
- Keep existing idempotency, audit and agent wake-up semantics. Failed authorization must neither mutate approval state nor queue work. The board can remove the restriction using an audited privileged action.
- An authenticated `session` attests an accepted channel but **does not itself attest physical human presence**. If a stronger human-presence guarantee is needed, that is a different security requirement.

## Static acceptance criteria / future implementation contract

1. Protected `approve_ceo_strategy`: an authorized principal + accepted channel may resolve and the normal CEO continuation remains available.
2. An unauthorized principal, disallowed channel or missing actor context is **denied without a decision write, activity-as-approved or agent wake**.
3. The plugin path cannot bypass the restriction by supplying a claimed member identity.
4. Other approval types remain resolvable by the existing board automation under the same configuration.
5. Config absent = original behavior (compatibility); enabling/disabling policy is audited and restricted to appropriate board authority.
6. Concurrent policy/decision changes and idempotent retries have a documented fail-closed outcome.
7. Distinguish `auth source`, authenticated principal, delegated authority and physical human presence in UI/docs and audit.

**Evidence status:** code-reading only. No live VSM end-to-end scenarios, native tests, typecheck, build, or CI were executed for this RFC. This is a design hypothesis, not a security guarantee or a ready-to-merge patch.

## Delivery boundary and next step

Local-only documentation and tracking in `opensiro-contributions/paperclip@opensiro/meta`; never place `.opensiro` on the product branch. No comment, issue, review or PR in `paperclipai/paperclip`; no Discord. No fork-local PR created by this RFC. If code work is later authorized and qualified, prepare a separate product branch, source-native evidence, an exact diff and complete PR text; the applicable fork-local public review gate still requires independent consent.
