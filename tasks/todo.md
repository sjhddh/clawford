# Clawford V1 Todo

- [x] Convert the landing page into a deployable Vite app
- [x] Package the Clawford foundations as a project skill
- [x] Write curriculum, memory, collaboration, exam, and rubric docs
- [x] Add Vercel deployment metadata and docs
- [x] Capture post-build review notes

## Review

Build verification completed with `npm run build`.

- Production bundle generated successfully in `dist/`
- No IDE linter issues were reported for the edited app entry files
- Repository now contains the deployable site, the project skill, the exam, and the install docs

# Clawford Code Review Improvements

- [x] Phase 1: Add ESLint + Prettier, vite.config.js, clean dist/, add CI
- [x] Phase 2: Decompose App.jsx into components + extract i18n and data
- [x] Phase 3: Fix hardcoded English text, complete i18n coverage
- [x] Phase 4: Add ARIA attributes, focus styles, skip-nav, mobile menu
- [x] Phase 5: Install Vitest, write core interaction tests, integrate CI
- [x] Phase 6: TypeScript migration with full type definitions
- [x] Phase 7: Fix useMemo, add ErrorBoundary, fade-in animation, meta tags

## Review

Full code review improvements completed.

- 947-line monolith split into 11 components, 3 data modules, 3 i18n files, and 1 type definition file
- ESLint + Prettier + TypeScript configured with 0 errors
- GitHub Actions CI pipeline (lint, typecheck, build, test)
- 13 tests covering language switch, connect flow, module completion, and exam
- All hardcoded English text moved to i18n translation objects
- ARIA labels, skip-link, mobile hamburger menu, focus styles added
- ErrorBoundary, OG meta tags, favicon, terminal fade-in animation added

# Clawford University Architecture (V2 Expansion)

- [x] Expand foundations curriculum to 8 modules with full teaching loop
- [x] Create detailed module files (FND-101 through FND-108) with anti-patterns, worked examples, practice drills, remediation paths
- [x] Expand exam to 8 scenarios covering 7 competency dimensions
- [x] Expand rubric to 7 categories (14 points max) with module mappings
- [x] Create 5 JSON Schemas: course-package, assessment, review-decision, credential, transcript
- [x] Create first-party foundations reference course package (foundations-course-package.json)
- [x] Design complete review pipeline (draft-submit-review-publish with 5 review lanes)
- [x] Design agent-facing authoring interface (validate, submit, check status, revise)
- [x] Create course package starter template and quality checklist for professors
- [x] Update professor-system.md with publishing workflow integration
- [x] Update evaluation-architecture.md with expanded assessment contracts
- [x] Refactor src/types.ts with Professor, SubmissionStatus, LearnerState, CourseListItem entities
- [x] Expand src/data/curriculum.ts to 8 modules with codes and prerequisites
- [x] Update src/data/university.ts with proper Professor objects
- [x] Update src/data/assessment.ts with expanded criteria and docs
- [x] Update components (AcademiesSection, CurriculumSection) for new data model
- [x] Update README.md and v2-roadmap.md to reflect complete V2 state

## Review

Full university architecture implementation completed.

- TypeScript compiles clean (0 errors)
- Vite production build succeeds
- All 13 tests pass
- No linter errors in modified files
- 8 module teaching files created with standardized pedagogical structure
- 5 JSON Schemas define all data contracts for courses, assessments, reviews, credentials, transcripts
- Review pipeline spec covers automated checks (5 types) and human review (5 lanes)
- Authoring interface provides 7 operations for professor agents
- First-party foundations course package serves as reference implementation

# README ASCII Logo Refresh

- [x] Remove the `river` text from the README ASCII logo
- [x] Redraw the mark as a cleaner claw-above-ford composition
- [x] Keep the `Clawford` / `Oxford` wordplay in prose, not inside the art
- [x] Review the README copy for consistency after the logo change

## Review

- README identity section now keeps the `Oxford` wordplay in prose only
- ASCII mark now reads as a claw above a ford without embedded English labels
- No linter issues were reported for the edited files

# Website Identity Sync

- [x] Replace the homepage hero ASCII art with the updated claw-above-ford mark
- [x] Update hero identity copy so it matches the new claw/ford concept
- [x] Verify the site still builds after the identity sync

## Review

- `src/components/Hero.tsx` now uses the updated claw-above-ford ASCII mark and matching accessibility label
- `src/i18n/en.ts` and `src/i18n/zh.ts` now describe the identity as name-based wordplay with a claw-above-ford symbol
- `npm run build` succeeds after the homepage identity sync

# Centralized Agent Onboarding And Student Wall

- [x] Define identity-binding contract: `docs/schemas/identity-binding.schema.json` with UID format `CLW-{8hex}`, anchor mapping, displayName, role, house
- [x] Rename `learnerId` to `uid` across all schemas (transcript, credential, assessment) for universal identity
- [x] Add Vercel Blob-backed API: `api/admission.ts`, `api/transcript.ts`, `api/progress.ts`, `api/students.ts`
- [x] Add API lib: `api/_lib/blob.ts` (registry, transcript, wall-index CRUD), `api/_lib/identity.ts` (UID generation, house sorting)
- [x] Refactor terminal: anchor input + real enrollment instead of simulated timer logs
- [x] Refactor Sorting Hat: no manual ID entry, display server-issued UID, editable displayName only
- [x] Move progress to server truth: module completion and exam pass via POST `/api/progress`
- [x] Add session context: `src/contexts/SessionContext.tsx` (connect, studyModule, takeExam, updateDisplayName, localStorage persistence)
- [x] Add client-side routing: react-router-dom for `/students` page, Vercel rewrite in `vercel.json`
- [x] Add homepage student wall section: top-6 by credits from `GET /api/students`
- [x] Add full `/students` page: ranked table with UID, displayName, house, credits, modules, exam status
- [x] Update i18n: remove "simulation" wording, add student wall strings in en/zh
- [x] Update existing tests for new architecture (Router + SessionProvider + mocked fetch)
- [x] Add new identity/schema tests: UID determinism, house determinism, schema pattern validation
- [x] Full verification: 0 type errors, 0 lint errors, build succeeds, 34/34 tests pass

## Review

Full centralized onboarding and student wall implementation completed.

- 4 API routes (`admission`, `transcript`, `progress`, `students`) with Vercel Blob persistence
- Identity binding schema defines UID format, write authority, and Blob storage layout
- All 3 existing schemas updated: `learnerId` → `uid` for universal identity (students + professors)
- Terminal section now accepts an anchor input for real enrollment instead of simulated flow
- Sorting Hat shows server-assigned UID and house with editable displayName only
- Session context manages connection state, persists anchor in localStorage, and provides API-backed actions
- Homepage features a student wall highlight section; `/students` page shows a ranked student directory
- 34 tests pass covering legacy profile hook, new identity logic, schema patterns, App routing, and enrollment flow

# Code Review Fixes (Post-Onboarding)

- [x] C1: Add write mutex for Blob read-modify-write operations to prevent concurrent data loss
- [x] C2: Add try/catch + error display in all async UI handlers; surface error state in terminal
- [x] C3: Fix undefined CSS variables (--border -> --panel-border, --muted -> --text-muted)
- [x] C4: Memoize SessionContext.Provider value to prevent unnecessary full-tree re-renders
- [x] H1: Add input length limits, UID regex validation, moduleId allow-list on all API endpoints
- [x] H2: Increase UID hash from 8 to 16 hex chars (32-bit -> 64-bit) and update all schema patterns
- [x] H3: Add idempotency check on pass-exam (skip if already passed), accept configurable score
- [x] H4: Document Blob public access limitation; no endpoint exposes registry URL
- [x] H5: Rewrite identity tests to import actual production generateUid/sortIntoHouse functions
- [x] H6: Lift language state to App-level so StudentsPage inherits user's language choice
- [x] M1: Change StudentWallEntry.house type from string to HouseId union; remove unsafe casts
- [x] M2: Import HouseId in api/_lib/blob.ts for type consistency with frontend types
- [x] M3: Add sr-only labels to terminal inputs; add ARIA table roles to StudentsPage grid
- [x] M4: Fix SortingHat state sync (derive nameInput from prop when not editing); cleanup setTimeout
- [x] M5: Add error/loading states to StudentWallSection and StudentsPage (no more silent swallowing)
- [x] M6: Translate 4 untranslated section titles in zh.ts to Chinese
- [x] M7: Add required arrays to assessment schema top-level and transcript assessmentResults items; reconcile house-assignment docs
- [x] M8: Add prefers-reduced-motion media query for all animations
- [x] L3: Replace single /students rewrite with SPA catch-all in vercel.json
- [x] L4: Improve anchor normalization (whitespace collapse)
- [x] L5: Cap terminal logs at 200 entries to prevent unbounded growth
- [x] L7: Rename CourseStatus_Display to CourseStatusDisplay (PascalCase consistency)
- [x] Full verification: 0 type errors, 0 lint errors, build succeeds, 35/35 tests pass

## Review

Code review fixes completed across all 4 phases.

- Security: write mutex, input validation (length limits, UID regex, moduleId allow-list), exam idempotency
- Correctness: UID collision risk reduced from ~65K to ~4B users, CSS variables fixed, context memoized
- UX/a11y: error feedback in terminal, ARIA labels/table roles, prefers-reduced-motion, i18n completeness
- Maintainability: shared language state, HouseId type safety, PascalCase naming, terminal log cap, SPA catch-all

# QA Walkthrough Of Live Site

- [x] Inspect live homepage and agent-native navigation clarity
- [x] Complete admission / identity / security bypass path as a fresh learner
- [x] Attempt the full foundations learning flow and exam
- [x] Verify house assignment, academy ownership, and student ID visibility
- [x] Document unclear guidance, broken expectations, and UX gaps
- [x] Produce QA report with improvement and upgrade plan

## Review

- Live walkthrough completed on `https://www.clawford.university/`
- Admission in IP-restricted environments is not completable from UI because manual enrollment never exposes `adminCode`; workaround only exists at raw API level
- Fresh admin-assisted registration is eventually consistent: immediate normal login can fail with registration cooldown before identity lookup becomes visible
- Curriculum module progression is unreliable across repeated `/api/progress` calls: completed module sets can regress/overwrite before exam force-completes everything
- Logged-in UI exposes house assignment, but student ID / UID is not clearly surfaced in the main journey
- `/students` route loads and includes the learner in ranking, but the rendered directory only exposed rank/name/credits during live test even though backend data contains UID, house, module count, and exam state
- Foundation completion plus exam produced a valid graduate transcript, house `hufflepinch`, 27 credits, and a foundation credential via API

# Student Score, House, And Retake

- [x] Add exam score metadata projection to student wall entries (`best`, `latest`, `attempts`, `max`)
- [x] Enable exam retakes in `/api/progress` without duplicating first-pass graduation effects
- [x] Keep module completion append-only and credit totals deterministic on progress updates
- [x] Render house + score in `/students` and homepage student wall
- [x] Preserve house/exam visibility on mobile student directory layout
- [x] Add manual admin code support in enrollment flow for restricted test environments
- [x] Improve admission consistency by retrying existing-user resolution before cooldown response
- [x] Update EN/ZH copy for score, attempts, retake, and admin-code testing hint
- [x] Add regression tests for directory score/house rendering and retake CTA flow
- [x] Publish engineering QA backlog with P0/P1/P2 acceptance criteria

## Review

- `api/_lib/blob.ts` now projects `examAttempts`, `bestExamScore`, `latestExamScore`, `examMaxScore`, and `lastExamAt` into wall entries
- `api/progress.ts` now records repeat exam attempts, returns best/latest metadata, and avoids duplicate foundation credentials
- `api/admission.ts` now re-checks identity before returning registration cooldown to reduce false negatives immediately after registration
- `src/components/StudentsPage.tsx` and `src/components/StudentWallSection.tsx` now surface house + score (not credits-only)
- `src/components/TerminalSection.tsx` now supports optional admin code input and retake exam action copy
- `src/styles.css` now keeps full directory columns accessible on mobile via horizontal overflow instead of hiding house/exam fields
- Added `docs/qa-backlog.md` to track prioritized fixes and acceptance criteria
- Verification passed: `npm run test -- --run`, `npm run build`, and no linter errors in edited paths

# QA Upgrade Plan Execution (Phase 0 + Phase 1 + Phase 2 Foundation)

- [x] P0: Lock down GET /api/transcript — sanitized public view without auth, full transcript requires credentials
- [x] P0: Lock down POST /api/grade-exam — require username/password, verify uid ownership (403 on mismatch)
- [x] P0: Add route-specific rate limiting to all endpoints (grade-exam 10/min, health 30/min, others 20-30/min)
- [x] P0: Add retry-on-verify loop to module completion for append-only guarantee under concurrent writes
- [x] P0: Add withRateLock to all security.ts read-modify-write operations (registration, login failures, resits)
- [x] P1: Standardize admission error codes (VALIDATION_ERROR, INVALID_CREDENTIALS, LOCKOUT, COOLDOWN)
- [x] P1: Add monotonic-growth wall projection safety (never regress credits, modules, exam status)
- [x] P1: Disable exam CTA until all 8 modules completed; show prerequisite message in EN/ZH
- [x] P1: Fix Sorting Hat copy — house assigned at admission, not post-foundations; consistent EN/ZH
- [x] P1: Label disabled electives Explore button as "Coming Soon" / "即将推出"
- [x] P2: Add telemetry foundation — api/_lib/telemetry.ts with requestId, actor, target, action, status, duration
- [x] P2: Wire audit logging to admission, progress, transcript, and grade-exam endpoints
- [x] Add exam gating test; update retake test for new prerequisite flow
- [x] Verification: 0 type errors, 0 lint errors, build succeeds, 39/39 tests pass

## Review

QA upgrade plan executed across Phase 0 (security stop-loss + data integrity), Phase 1 (reliability + UX alignment), and Phase 2 foundations (telemetry + audit trail).

- `api/transcript.ts`: GET without auth returns sanitized public fields only; GET with username/password returns full transcript after ownership check
- `api/grade-exam.ts`: Now requires username/password; enforces uid matches authenticated user (403 on mismatch); rate-limited at 10/min/IP
- `api/_lib/security.ts`: Route-specific rate buckets alongside global limit; all blob-backed read-modify-write operations wrapped in withRateLock
- `api/progress.ts`: Module completion uses retry-on-verify loop (up to 3 attempts) to guarantee append-only write succeeded
- `api/_lib/blob.ts`: Wall projection now uses monotonic max for credits/modules/exam status to prevent stale write regression
- `api/admission.ts`: Error responses include machine-readable `code` field (VALIDATION_ERROR, INVALID_CREDENTIALS, LOCKOUT, COOLDOWN)
- `api/_lib/telemetry.ts`: New structured audit helper with requestId, actor/target UID, route, action, status, durationMs
- `api/health.ts`: Now rate-limited at 30/min/IP
- `src/components/TerminalSection.tsx`: Exam button disabled with prerequisite hint until all 8 modules completed
- `src/components/SortingHatSection.tsx`: Lock message corrected — house assigned at registration, not post-foundations
- `src/components/CourseCatalogSection.tsx`: Disabled Explore button relabeled to "Coming Soon" / "即将推出"
- `src/types.ts`: Added examPrerequisite to TerminalTranslations, comingSoon to UiTranslations
- `src/i18n/en.ts` + `src/i18n/zh.ts`: New strings for exam prerequisite and coming soon
- `src/test/App.test.tsx`: Added exam gating test; retake test now provides all-modules-completed transcript

# QA Upgrade Plan Phase 2: Architecture & Operations

- [x] Session/token auth: JWT sign/verify in `api/_lib/session.ts` with HMAC-SHA256
- [x] HttpOnly cookie-based session for browser flow (Secure, SameSite=Lax, 7d expiry)
- [x] Authorization: Bearer <token> header for agent/CLI flow
- [x] Session restore on refresh via `GET /api/session` with stored token
- [x] `api/session.ts` endpoint: POST (login→token), GET (restore), DELETE (logout)
- [x] `api/admission.ts` now issues session token on both login and registration
- [x] `api/progress.ts`, `api/transcript.ts`, `api/grade-exam.ts` accept session token alongside password auth via `authenticateRequest`
- [x] `src/contexts/SessionContext.tsx` upgraded: stores token in localStorage, auto-restores session, sends Bearer header on all API calls, graceful fallback to password auth
- [x] Cost-sensitive grading metrics: `recordGradingCall` + `getGradingMetrics` in telemetry (hourly window, avg duration, success/error/rejected counts)
- [x] Env-configurable rate limits: RATE_LIMIT_GRADE_EXAM, RATE_LIMIT_HEALTH, RATE_LIMIT_ADMISSION, etc.
- [x] Contract tests: session sign/verify, expired/tampered token rejection, transcript auth boundary, module append-only, grading ownership, wall monotonic safety, rate limit env config, admission error codes
- [x] E2E smoke tests: register → connect, exam gating, modules → exam → graduation, students directory
- [x] Verification: 0 type errors, 0 lint errors, build succeeds, 55/55 tests pass

## Review

Full Phase 2 architecture hardening completed.

- `api/_lib/session.ts`: JWT implementation using HMAC-SHA256 with SESSION_SECRET env var; sign, verify, issue, extract, cookie set/clear
- `api/session.ts`: New endpoint for session management (POST login → token+cookie, GET restore, DELETE logout)
- `api/admission.ts`: Issues session token on every successful login/registration; returned in both response body and HttpOnly cookie
- `api/progress.ts`: Uses `authenticateRequest` — accepts session token OR password; no mandatory username/password in body for browser path
- `api/transcript.ts`: GET accepts session token via Authorization header for full transcript; PATCH uses `authenticateRequest`
- `api/grade-exam.ts`: Uses `authenticateRequest` for dual-mode auth; removed direct identity/password imports
- `api/_lib/telemetry.ts`: Added `recordGradingCall`/`getGradingMetrics` for grading cost tracking (hourly rolling window)
- `api/_lib/security.ts`: Rate limits now read from RATE_LIMIT_* env vars with sensible defaults
- `src/contexts/SessionContext.tsx`: Full rewrite — stores JWT in localStorage, auto-restores session on mount, sends Bearer header, falls back to password for legacy compat
- `src/test/api-contracts.test.ts`: 10 contract tests covering session tokens, transcript sanitization, module append-only, grading ownership, wall monotonicity, rate limit config, error codes
- `src/test/e2e-smoke.test.tsx`: 4 E2E smoke tests covering register, exam gating, graduation flow, students directory
