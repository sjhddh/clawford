# Clawford Pan Test Review

Date: 2026-03-27  
Target: `https://www.clawford.university/` and `https://www.clawford.university/CLAWFORD.md`

## Overview

This review covers the public Clawford University learner journey and agent integration path starting from `CLAWFORD.md`, then verifies key behaviors against the repository implementation.

Method used:

- live black-box checks against production homepage and public/hidden API routes
- contract review of `CLAWFORD.md`, `openapi.json`, and `.well-known/ai-plugin.json`
- white-box inspection of frontend flow, auth/session code, progress/assessment handlers, publishing docs, and course package schemas

Scope covered:

- homepage and learner-facing UI states
- admission and session flows
- courses, course graph, transcript, students directory
- assessment state machine contract
- professor publishing path and sample course package

Constraints encountered:

- a production registration attempt from this environment immediately hit the 7-day IP cooldown, so I could not safely run a brand-new full account lifecycle through `start -> submit -> finalize`
- the browser environment already had a live Clawford tab with persisted session state, so I avoided write actions there to prevent mutating an existing learner account

## Coverage Matrix

| Area | Source | Result |
|---|---|---|
| Public homepage copy and CTAs | live site + browser snapshot | covered |
| Agent quickstart and contract | live `CLAWFORD.md` + local `CLAWFORD.md` + `public/openapi.json` | covered |
| Admission/session endpoints | live `/api/admission`, `/api/session` | partially covered |
| Course discovery | live `/api/courses`, `/api/course-graph`, `/api/courses/{id}` | covered |
| Transcript and student directory | live `/api/transcript`, `/api/transcript-self`, `/api/students` | covered |
| Assessment endpoints | live unauthenticated boundary checks + code review | partially covered |
| Hidden/ops endpoints | live `/api/grade-exam`, `/api/resetdb`, `/api/health` + code review | covered |
| Professor publishing path | docs + runtime code + sample package + schema | covered |

## Findings

### 1. Public learner progress visibility is an explicit product choice and should be documented as such

Severity: Low  
Type: Improvement

Observed behavior:

- `GET /api/students` is public and returns `uid`, `displayName`, `house`, `currentState`, `totalCredits`, `completedModules`, `examPassed`, `examAttempts`, `bestExamScore`, `latestExamScore`, `examMaxScore`, `lastExamAt`, `credentials`, and `enrolledAt`
- `GET /api/transcript?uid=...` is also public and returns a learner summary with `displayName`, `house`, `currentState`, `totalCredits`, `completedModules`, `examPassed`, `credentials`, and `enrolledAt`
- this makes learner progression intentionally observable to anonymous users once a `uid` is known

Live evidence:

- `curl https://www.clawford.university/api/students`
- `curl https://www.clawford.university/api/transcript?uid=<known-uid>`

Implementation evidence:

```15:18:/Users/JiahaoRBC/Git/clawford/api/students.ts
    const wall = await getWallIndex();

    res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate=10");
    return res.status(200).json(wall);
```

```68:84:/Users/JiahaoRBC/Git/clawford/api/transcript.ts
  if (auth && auth.uid === uid) {
    audit.log({ action: "read-full", actorUid: uid, targetUid: uid, status: "success", statusCode: 200 });
    return res.status(200).json(transcript);
  }

  audit.log({ action: "read-public", targetUid: uid, status: "success", statusCode: 200 });
  return res.status(200).json({
    uid: transcript.uid,
    displayName: transcript.displayName,
    house: transcript.house,
    currentState: transcript.currentState,
    totalCredits: transcript.foundationsStatus.totalCreditsEarned,
    completedModules: transcript.foundationsStatus.completedModules.length,
```

Impact:

- the `/students` page is effectively a public leaderboard with stable identifiers
- external agents and reviewers can inspect learner progression without authentication
- this is acceptable if the product goal is public academic visibility, but it should be treated as an intentional policy rather than an accidental side effect

Recommendation:

- document clearly that learner progress is public by design
- define which fields are intentionally public and keep that list stable across `/api/students`, `/students`, and `/api/transcript`
- if the public wall is meant to be permanent product behavior, consider adding an explicit public-profile policy page rather than treating it like an implicit implementation detail

### 2. Assessment contract drifts across live UI, public API metadata, and server defaults

Severity: High  
Type: Docs/Spec Drift

Observed behavior:

- live homepage quickstart snippet uses `assessmentId: "clawford-foundations-agent-hard"`
- `/api/courses` and `/api/course-graph` also advertise `clawford-foundations-agent-hard`
- local canonical `CLAWFORD.md` instructs agents to start `clawford-foundations-practicum`
- server code defaults to `clawford-foundations-practicum` when no `assessmentId` is provided

Live evidence:

- homepage snippet at [Clawford University](https://www.clawford.university/)
- `curl https://www.clawford.university/api/courses`
- `curl https://www.clawford.university/api/course-graph`

Implementation evidence:

```37:40:/Users/JiahaoRBC/Git/clawford/api/assessments/start.ts
  const assessmentId =
    typeof req.body?.assessmentId === "string" && req.body.assessmentId.trim()
      ? req.body.assessmentId.trim()
      : DEFAULT_ASSESSMENT_ID;
```

```10:10:/Users/JiahaoRBC/Git/clawford/api/assessments/start.ts
const DEFAULT_ASSESSMENT_ID = "clawford-foundations-practicum";
```

```31:38:/Users/JiahaoRBC/Git/clawford/shared/course-catalog.ts
  { code: "FND-101", credits: 2, prerequisites: [], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-102", credits: 4, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-103", credits: 3, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-104", credits: 5, prerequisites: ["FND-101", "FND-103"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-105", credits: 3, prerequisites: ["FND-101", "FND-103"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-106", credits: 3, prerequisites: ["FND-103", "FND-105"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-107", credits: 2, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-108", credits: 5, prerequisites: ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107"], assessmentIds: ["clawford-foundations-agent-hard"] },
```

Impact:

- agent integrations can choose the wrong assessment id depending on which source they trust
- black-box clients following the live homepage or course metadata do not match the server default and the local canonical playbook
- this undermines the “OpenAPI is the contract” promise

Recommendation:

- pick one assessment id and update all of: homepage snippet, `CLAWFORD.md`, `shared/course-catalog.ts`, and any grading configs
- add a contract test that compares `CLAWFORD.md` quickstart IDs against `openapi.json` examples and `shared/course-catalog.ts`

### 3. Registration cooldown is an intentional anti-abuse policy, but should be surfaced more explicitly to operators and testers

Severity: Low  
Type: Improvement

Observed behavior:

- a first registration attempt from this environment returned:
  - `{"error":"Registration cooldown active. One registration per IP every 7 days.","code":"COOLDOWN",...}`
- this happened before any successful local learner run in this review, which means shared egress IPs can block repeated QA or evaluator signups by design

Live evidence:

- `POST https://www.clawford.university/api/admission` with a fresh username returned `429 COOLDOWN`

Implementation evidence:

```124:141:/Users/JiahaoRBC/Git/clawford/api/admission.ts
    const ip = getClientIp(req);
    if (!admin) {
      const regCheck = await canRegister(ip);
      if (!regCheck.allowed) {
        // Blob index can be eventually consistent right after registration.
        // Re-check identity before returning cooldown to avoid false negatives.
        const maybeExisting = await lookupByUsername(normalized);
        if (maybeExisting) {
          return loginResponse(maybeExisting);
        }
        return res.status(429).json({
          error: "Registration cooldown active. One registration per IP every 7 days.",
          code: "COOLDOWN",
          retryAfter: regCheck.retryAfter,
        });
      }
    }
```

```152:168:/Users/JiahaoRBC/Git/clawford/api/_lib/security.ts
// ---- Registration cooldown (7 days per IP) ----

export async function canRegister(
  ip: string,
): Promise<{ allowed: boolean; retryAfter?: string }> {
  const reg = await readRateLimits();
  const record = reg.registrations[ip];
  if (!record) return { allowed: true };

  const elapsed = Date.now() - new Date(record.lastAt).getTime();
  if (elapsed < REGISTRATION_COOLDOWN_MS) {
```

Impact:

- repeated QA, evaluator, or shared-network signups may be blocked intentionally
- external testers can misclassify this as platform instability if the policy is not surfaced clearly

Recommendation:

- document this as an explicit admission policy in `CLAWFORD.md`, the homepage manual registration section, and evaluator guidance
- if this restriction is expected in production, provide clearer messaging for testers and operators about how to obtain or reuse a valid account

### 4. Public API contract is incomplete and hides real integration surfaces

Severity: Medium  
Type: Docs/Spec Drift

Observed behavior:

- `openapi.json` only models the Bearer auth path
- implementation also accepts session cookie auth and deprecated username/password-in-body auth on several routes
- `POST /api/session` exists and works as a login endpoint but is not present in OpenAPI
- `GET /api/students`, `GET /api/health`, `POST /api/grade-exam`, `POST /api/resetdb`, and `POST /api/backfill-student-wall` are real endpoints but not represented in OpenAPI

Live evidence:

- `curl -i -X POST https://www.clawford.university/api/session ...` returns `401 INVALID_CREDENTIALS`, proving the undocumented route exists
- `curl https://www.clawford.university/api/health` returns `200`
- `curl -i -X POST https://www.clawford.university/api/grade-exam ...` returns `401 AUTH_REQUIRED`
- `curl -i -X POST https://www.clawford.university/api/resetdb` returns `403 Admin access required`

Implementation evidence:

```20:28:/Users/JiahaoRBC/Git/clawford/api/session.ts
  try {
    if (req.method === "POST") {
      return handleLogin(req, res, audit);
    }
    if (req.method === "GET") {
      return handleRestore(req, res, audit);
    }
    if (req.method === "DELETE") {
```

```107:123:/Users/JiahaoRBC/Git/clawford/api/_lib/session.ts
export async function authenticateRequest(
  req: VercelRequest,
): Promise<{ uid: string; username: string; method: "session" | "password" } | null> {
  const session = extractSession(req);
  if (session) {
    return { uid: session.uid, username: session.username, method: "session" };
  }

  const body = req.body ?? {};
  const username = body.username;
  const password = body.password;
```

Impact:

- agent developers relying on OpenAPI as the source of truth do not see all supported or exposed behavior
- undocumented routes increase operational and security review blind spots
- response shapes are also underspecified, so client implementations must reverse-engineer payloads

Recommendation:

- either document all externally reachable endpoints or move hidden ops routes behind stronger platform-level protection
- add response schemas and examples to OpenAPI
- explicitly mark compatibility auth paths and sunset dates

### 5. Elective publishing story and runtime consumption path are disconnected

Severity: Medium  
Type: Flow Gap

Observed behavior:

- the public site says professor PRs will cause courses to appear in the elective catalog
- runtime course cards come only from `src/data/courses.ts`
- `src/data/courses.ts` is currently empty
- course package content in `courses/{course-id}` is not rendered by the site
- course CTA is always disabled with `Coming Soon`

Live evidence:

- homepage elective section says “暂无选修课程。成为第一个贡献课程的开源教授！”
- course CTA is disabled in the rendered UI

Implementation evidence:

```14:18:/Users/JiahaoRBC/Git/clawford/src/data/courses.ts
const courses: ElectiveCourse[] = [
  // Courses will be added here by open-source contributors via PR.
  // Each entry must correspond to a course package under courses/{course-id}/.
  // See docs/templates/course.json.template for the schema-conformant package format.
];
```

```90:93:/Users/JiahaoRBC/Git/clawford/src/components/CourseCatalogSection.tsx
      <button type="button" className="button button-secondary" disabled title={t.ui.comingSoon}>
        <ChevronRight size={18} />
        {t.ui.comingSoon}
      </button>
```

```99:107:/Users/JiahaoRBC/Git/clawford/docs/CONTRIBUTING-COURSES.md
In addition to the course package, you must add an entry to `src/data/courses.ts` so your course appears in the website's Course Catalog.

Follow the `ElectiveCourse` type defined in `src/types.ts`. Key fields:

- `status`: set to `"pending"` in your PR. Reviewers change it to `"reviewed"` before merge.
- `coursePath`: relative path to your course directory (e.g. `"courses/flock-101"`).
- All `Localized` fields require `en` at minimum. `zh` is encouraged for bilingual courses.
```

Impact:

- “PR merged -> appears on site” is not a single pipeline; it depends on a second hand-maintained registry
- even after a course appears as a card, the site still does not consume the course package or expose the content
- contributor expectations and learner expectations are both likely to break

Recommendation:

- choose one canonical source of truth for elective runtime data
- either ingest `course.json` packages into the site/API or clearly scope the current site to “catalog teaser only”
- if content reading is not implemented, do not imply merged PRs create a usable learner flow

### 6. The sample `agent-hard` course package is not schema-conformant

Severity: Medium  
Type: Bug / Docs/Spec Drift

Observed behavior:

- the publishing sample presented as canonical does not match the current schema
- concrete mismatches found:
  - `assessment.type = "execution-exam"` but schema only allows `practice-check`, `scenario-exam`, `capstone`, `practicum`
  - `passingThreshold = 75` but schema expects a fraction in the range `0..1`
  - `reviewStatus.status = "first-party-sample"` but schema enum does not allow it
  - `contractPath`, `reviewerGuidePath`, and `sampleSubmissionPath` exist in the sample but are absent from schema properties

Verification output:

```json
{
  "assessmentTypeValid": false,
  "passingThresholdValid": false,
  "reviewStatusValid": false,
  "assessmentFieldsMissingFromSchema": [
    "contractPath",
    "reviewerGuidePath",
    "sampleSubmissionPath"
  ]
}
```

Implementation evidence:

```173:198:/Users/JiahaoRBC/Git/clawford/docs/schemas/course-package.schema.json
        "type": {
          "type": "string",
          "enum": ["practice-check", "scenario-exam", "capstone", "practicum"],
          "description": "Assessment tier."
        },
        "title": {
          "$ref": "#/$defs/Localized"
        },
        "targetModules": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Module IDs this assessment evaluates."
        },
```

```78:92:/Users/JiahaoRBC/Git/clawford/courses/agent-hard-assessment-sample/course.json
    {
      "id": "agent-hard-final",
      "type": "execution-exam",
      "title": {
        "en": "Agent-Hard Final Assessment",
        "zh": "Agent-Hard 结业测验"
      },
      "targetModules": ["ahs-01", "ahs-02", "ahs-03", "ahs-04"],
      "contentPath": "exam.md",
      "rubricPath": "rubric.md",
      "contractPath": "evaluation-contract.md",
      "reviewerGuidePath": "reviewer-guide.md",
      "sampleSubmissionPath": "sample-submission.md",
      "passingThreshold": 75,
```

Impact:

- contributors copying the official sample may produce packages that fail validation
- schema-based tooling cannot reliably trust the first-party reference package

Recommendation:

- align schema and sample immediately
- if `execution-exam` and extra contract fields are the intended future model, update the schema first
- add CI validation for all first-party sample packages

### 7. Health and admin-related hidden surfaces leak operational details or rely on soft assumptions

Severity: Low  
Type: Security/Privacy / White-box concern

Observed behavior:

- `/api/health` publicly returns the Node runtime version
- `/api/resetdb` is correctly admin-gated at the handler level, but implementation only deletes the first 500 blobs before rebuilding registries
- `isAdmin` accepts `adminCode` from either request body or query string

Live evidence:

- `curl https://www.clawford.university/api/health` returned `{"ok":true,"time":"...","node":"v24.13.0"}`

Implementation evidence:

```7:10:/Users/JiahaoRBC/Git/clawford/api/health.ts
  res.status(200).json({
    ok: true,
    time: new Date().toISOString(),
    node: process.version,
```

```15:20:/Users/JiahaoRBC/Git/clawford/api/resetdb.ts
    const { blobs } = await list({ prefix: "clawford/", limit: 500 });
    const deleted: string[] = [];

    for (const blob of blobs) {
      await del(blob.url);
```

```317:320:/Users/JiahaoRBC/Git/clawford/api/_lib/security.ts
export function isAdmin(req: VercelRequest): boolean {
  const code = req.body?.adminCode ?? req.query?.adminCode;
  const secret = process.env.ADMIN_CODE;
```

Impact:

- low direct exploitability from the outside, but avoidable operational information is exposed
- destructive admin reset behavior is incomplete if blob count exceeds 500
- query-string admin secrets are easy to leak into logs and history

Recommendation:

- remove runtime version from public health output
- paginate reset deletion or make the operation key-based rather than list-based
- never accept admin secrets in query strings

## White-Box Concerns Not Safely Exploited In Production

These were confirmed in code but were not exploited on production during this review.

### Session signing falls back to `ADMIN_CODE`

```16:19:/Users/JiahaoRBC/Git/clawford/api/_lib/session.ts
function getSecret(): string {
  const secret = process.env.SESSION_SECRET ?? process.env.ADMIN_CODE;
  if (!secret) throw new Error("SESSION_SECRET or ADMIN_CODE must be set for session signing");
```

This couples admin privilege material and session integrity material. They should never share a secret source.

### Password hashing uses fast SHA-256 plus salt

`api/_lib/identity.ts` uses a salted SHA-256 hash rather than a slow password KDF such as Argon2id or bcrypt. That is weaker against offline cracking if the registry is ever exposed.

### Browser token persistence uses `localStorage`

`src/contexts/SessionContext.tsx` stores the Bearer token in `localStorage`, which increases exposure to XSS-driven token theft even though HttpOnly cookie support also exists.

## Reproduction Steps

### Public learner data exposure

1. Request `GET https://www.clawford.university/api/students`
2. Copy any returned `uid`
3. Request `GET https://www.clawford.university/api/transcript?uid=<uid>`
4. Observe public learner progress and enrollment metadata without authentication

### Registration cooldown blocking onboarding

1. Request `POST https://www.clawford.university/api/admission`
2. Use a fresh username and valid password
3. Observe `429 COOLDOWN` if the caller shares an IP with a prior registration inside 7 days

### Undocumented login endpoint

1. Request `POST https://www.clawford.university/api/session` with any username/password
2. Observe a normal auth error payload, proving the route exists despite missing from OpenAPI

### Assessment id drift

1. Read the quickstart snippet on [Clawford University](https://www.clawford.university/)
2. Request `GET https://www.clawford.university/api/courses`
3. Compare with local canonical `CLAWFORD.md` and `api/assessments/start.ts`
4. Observe `agent-hard` vs `practicum` naming mismatch

## Improvement Priorities

### P0

- unify assessment ids across UI, API metadata, docs, and server defaults
- stop using `ADMIN_CODE` as session-secret fallback

### P1

- fully document or harden hidden endpoints
- align sample course package and schema, then validate both in CI
- document the intentional public learner-visibility and registration-cooldown policies so external agents and evaluators do not misclassify them as defects

### P2

- move browser auth away from `localStorage` dependence
- remove Node version from health output
- make elective runtime consume a real canonical course source instead of a hand-maintained empty registry

## Residual Risks

- this review did not safely execute a full authenticated assessment lifecycle on a fresh production account because the intentional production cooldown blocked new registration from this environment
- the browser tab available in this environment already carried live session state, so I intentionally avoided mutating UI actions there
- grading-path behavior under real FLOCK responses and post-finalize transcript mutation remains partially inferred from code rather than fully replayed end-to-end in production
