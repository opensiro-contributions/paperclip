# Paperclip capability roadmap — comparison of historical v1 and two-level v2

**Status:** `PLAN_ONLY / DRAFT — NOT PUBLISHED`, 2026-11-18. One case, two Issue-format pilots, **no public GitHub Issue**.

## Structure

| Reviewer task | v1 — historical one-file draft | v2 — approved two-level pilot |
| --- | --- | --- |
| First read | [Seven-section full Issue](issue-v1.md) | [Short human decision Issue](issue-v2.md), eight sections; **Opensiro purpose FIRST → accepted six-function baseline SECOND → proposals THIRD** |
| Detailed agent implementation and tests | Mixed into Issue prose | [Separate complete contract](constructor-sufficiency-v2.md), linked from Issue |
| Central baseline | Inline vector | **Mandatory central starting-state vector and six-row explanation immediately after Opensiro purpose**, before proposals |
| C-first goal | Conditional/less explicit | **P0 S4 `— → C` candidate**; P1 necessary prerequisites |
| Existing S3 autonomy | S3-related improvements mixed with S4 | **S3=A(P)** remains sufficient for default roadmap; **P2-S3** is a distinct, optional developer-composable current-control feature |
| Materiality and minimal scope | Native alternative and generic checks | Shipped vs original Issues/PRs vs truly missing; explicit `NEEDS_EVIDENCE` stop |
| Constructibility and safety | Few examples in prose | Five logical S4 ports + five optional S3 ports, **10 S4 + 6 S3** positive/negative cases in the agent contract |
| Decision value | More reading to find recommendation | Operator problem, minimum candidate, rights and go/no-go visible without parsing full technical contract |

## Accepted Index as the starting point

> **`S1=A · S2=A · S3=A(P) · S3*=A · S4=— · S5=P`** — [accepted Index review, 2026-11-17](https://github.com/opensiro/vsm-harness-index/blob/975a58814b767cfca414c152480f787bfe80944b/assessments/pa/paperclip.md).

S1/S2/S3/S3* are **not mandatory `C` targets** under the approved protocol; S5 `P` retains legitimate board rights. **S4** lacks an accepted first-party outside/future adaptation path at the historical source revision and is the **P0 design candidate**, not an automatically proven current gap. **S3** already has `A(P)`: a newly requested composable current-resource interface may add developer value but is **not** `A(P) → C` as a grade progression.

**S3** means company-wide *present* resource and commitment decisions; **S4** means *outside-and-future* modelling and adaptation possibilities with a real two-way relationship to S3. A queue is not by itself S3, and a release alert is not by itself S4. The new full contract records these boundaries to avoid accidental VSM label-based implementation.

## Controlled-comparison limitations

- v1 was prepared at original Paperclip `9911b7052f602ae4bc2296ca27b05651fe4b873b`; v2 was prepared at `f5f60cfcb2a69511cb0564da0615e95f6c935251`. **Different source snapshots** mean this is a *format/readability comparison only*, not evidence that v2 discovers more real gaps.
- The Index grade belongs to its independently pinned assessment and **cannot be advanced by either draft**.
- A full developer contract is **a hypothesis of sufficient first-party composition**, not shipping or native test evidence. No measured engineering savings; the manual/built-in alternative could be better.
- Fork Issues are disabled (`has_issues=false`); this two-level package is **fork metadata only**. Historical v1 and the older model-release case remain unchanged. No external issue/comment/PR, product implementation or new Index assessment was published.

**Preferred use:** keep v2 as the **human decision surface plus separate detailed agent contract**. Revalidate current source, actual developer demand and lowest-cost original-native alternatives before selecting implementation; otherwise record `NEEDS_EVIDENCE` or `NO_USEFUL_CHANGE`.
