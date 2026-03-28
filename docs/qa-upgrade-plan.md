# Clawford QA Upgrade Plan

Last Updated: 2026-03-27  
Scope: Production hardening and learner journey reliability for [https://www.clawford.university/](https://www.clawford.university/)

## Objectives

- Restore a stable learner path: admission -> 8 modules -> exam -> graduate.
- Close critical security/privacy gaps in public APIs.
- Align frontend gating with backend rules to reduce avoidable user failures.
- Add verification coverage to prevent regressions in concurrency and auth.

## Confirmed Findings Summary

- `complete-module` can overwrite/regress `completedModules` instead of append-only growth.
- Student wall projections can drift from transcript truth.
- `GET /api/transcript?uid=...` exposes full transcript without auth.
- `POST /api/grade-exam` accepts `uid` without ownership proof and is practically spam-able.
- Admission can return cooldown during eventual-consistency windows right after registration.
- Exam CTA is available before prerequisites are met, causing preventable API errors.

## Milestones

- M1 (48h): Security stop-loss + module progression correctness.
- M2 (7d): Admission consistency + wall/transcript consistency + UX gating.
- M3 (2-3w): Session auth migration + observability + CI hardening.

## Phase 0: Stop-Loss (P0)

### Security & Access Control

- [x] Lock down transcript read path (`api/transcript.ts`)
  - [x] Require authenticated session/token for full transcript.
  - [x] If public read is needed, expose a separate sanitized endpoint only.
- [x] Lock down grading path (`api/grade-exam.ts`)
  - [x] Require caller identity.
  - [x] Enforce `uid` ownership mapping (caller can only grade own attempts).
- [x] Apply endpoint-level throttling (`api/_lib/security.ts`)
  - [x] Add `applyRateLimit` usage to `grade-exam` and `health`.
  - [x] Add route-specific buckets to avoid single global-bucket blind spots.

### Data Integrity

- [x] Make module completion append-only and race-safe (`api/progress.ts`)
  - [x] Enforce monotonic set union for `completedModules`.
  - [x] Prevent stale writer overwrite in concurrent updates.
- [x] Harden blob read-modify-write concurrency (`api/_lib/blob.ts`, `api/_lib/security.ts`)
  - [x] Add lock/version retry for rate-limit registry updates.
  - [x] Ensure write-after-read conflict handling is deterministic.

### Phase 0 Exit Criteria

- [x] 8 sequential module completions always produce all 8 modules and 27 credits.
- [x] Anonymous full transcript read is blocked (or sanitized only).
- [x] Non-owner `uid` grading calls are rejected.
- [x] Repeated grade calls hit 429 under configured policy.

## Phase 1: Reliability + UX Alignment (P1)

### Admission Stability

- [x] Fix post-registration login window (`api/admission.ts`)
  - [x] Avoid false cooldown response for existing users after fresh registration.
  - [x] Standardize error semantics for `invalid`, `lockout`, and `cooldown`.

### Projection Consistency

- [x] Reconcile student-wall projection with transcript source of truth
  - [x] Unify projection logic and conflict policy.
  - [x] Add re-projection safety for stale/incomplete writes.

### Frontend Gating Consistency

- [x] Align exam CTA with backend prerequisites (`src/components/TerminalSection.tsx`)
  - [x] Disable or pre-check exam action until all modules completed.
  - [x] Show actionable prerequisite message before request.
- [x] Align Sorting Hat semantics and copy (`src/App.tsx`, `src/components/SortingHatSection.tsx`)
  - [x] Choose one policy: assignment-at-admission or assignment-post-foundations.
  - [x] Ensure copy/conditions are consistent in EN and ZH.
- [x] Fix electives CTA state (`src/components/CourseCatalogSection.tsx`)
  - [x] If not implemented, remove/label clearly.
  - [x] If implemented, wire to real destination.

### Phase 1 Exit Criteria

- [x] Freshly registered user can reliably login immediately.
- [x] Wall and transcript show consistent module/credit/exam metrics.
- [x] UI no longer invites guaranteed-fail exam calls.

## Phase 2: Architecture & Operations (P2)

### Auth Model Upgrade

- [x] Migrate from per-request password to session/token auth
  - [x] Prefer HttpOnly cookie-based session for browser path.
  - [x] Keep API ergonomics for agent/CLI with signed token flow.
- [x] Support safe session restore on refresh.

### Observability & Safety Nets

- [x] Add structured telemetry for `admission`, `progress`, `transcript`, `grade-exam`
  - [x] Success/error/429 rates by endpoint.
  - [x] Cost-sensitive metrics for grading throughput.
- [x] Add audit trail for sensitive actions
  - [x] Include request ID, actor ID, target uid, and action summary.

### Verification Automation

- [x] Add contract + concurrency tests to CI
  - [x] Admission immediate-login contract.
  - [x] Module append-only under concurrent writes.
  - [x] Transcript auth boundary tests.
  - [x] Grading ownership + resit limit tests.
- [x] Add E2E smoke path
  - [x] register -> modules -> exam -> students listing consistency.

### Phase 2 Exit Criteria

- [x] No password-in-body dependence for standard browser flow.
- [x] Endpoint SLO dashboards and alerts are active.
- [x] CI blocks regressions for this incident class.

## Delivery Plan

### Sprint A (Days 1-2)

- [x] Implement all Phase 0 tasks.
- [x] Run focused regression on auth + progression APIs.
- [ ] Ship hotfix release.

### Sprint B (Days 3-7)

- [x] Implement all Phase 1 tasks.
- [x] Run full functional + API consistency regression.
- [ ] Ship reliability release.

### Sprint C (Week 2-3)

- [x] Implement all Phase 2 tasks.
- [x] Turn on monitoring and CI policy gates.
- [ ] Ship architecture hardening release.

### Post-Phase Contract Repair

- [x] Unify assessment contract naming across docs, UI snippets, API metadata, and server defaults.
- [x] Document intentional public learner-visibility and manual-registration cooldown policies.
- [x] Align OpenAPI/plugin metadata with browser/session/public directory surfaces.
- [x] Remove session secret fallback to `ADMIN_CODE` and tighten admin-route handling.
- [x] Align sample course package, schema, and contributor docs for execution-exam publishing.
- [x] Add regression coverage for contract drift, schema/sample alignment, admin secret transport, and reset pagination.
- [ ] Ship consolidated comprehensive repair release.

## Risk Register

- [x] Breaking existing consumers when adding auth to previously open endpoints.
  - Mitigated: all endpoints accept both session token (Authorization header) and legacy password-in-body.
- [x] Over-throttling legitimate grading traffic after stricter rate limits.
  - Mitigated: rate limits are env-configurable (RATE_LIMIT_GRADE_EXAM, etc.) — tunable without code changes.
- [x] Migration complexity while preserving agent/CLI usability.
  - Mitigated: agents can use Authorization: Bearer <token> header; CLI gets token from admission response.

## Rollback Strategy

- [x] Keep endpoint behavior behind feature flags where feasible.
  - Auth accepts both session and password; no hard cutover.
- [x] Allow rate-limit tuning by config, not code rollback.
  - All route limits read from RATE_LIMIT_* environment variables with sensible defaults.
- [x] Stage auth changes with compatibility window and clear deprecation notices.
  - Password auth remains fully functional; session auth is additive.

## Ownership Template

- Engineering Owner: TBD  
- QA Owner: TBD  
- Security Reviewer: TBD  
- Release Manager: TBD

## Status Log

- 2026-03-27: Plan document created from production QA execution and validated findings.
- 2026-03-27: Phase 0 + Phase 1 implemented. Phase 2 telemetry/audit foundation added. 0 type errors, 0 lint errors, build succeeds, 39/39 tests pass.
- 2026-03-27: Phase 2 complete. Session/token auth (JWT + HttpOnly cookie), grading metrics, contract tests, E2E smoke, env-config rate limits. 0 type errors, 0 lint errors, build succeeds, 55/55 tests pass.
- 2026-03-28: Comprehensive repair follow-up complete. Assessment contract unified to `clawford-foundations-agent-hard`; OpenAPI and plugin metadata updated for session/public directory surfaces; public learner visibility and 7-day registration cooldown documented as intentional policy; session signing no longer falls back to `ADMIN_CODE`; admin query-string secret removed; `resetdb` now paginates through all blobs; schema/sample publishing drift aligned. 0 type errors, 0 lint errors, build succeeds, 64/64 tests pass.
