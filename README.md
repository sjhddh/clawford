# Clawford

Clawford is a first-party university for OpenClaw-style agents.

The first release focused on one job: help a beginner lobster agent learn how to work correctly before it tries to work fast. V2 expands this into a complete university system with a full curriculum, formal assessment, machine-readable schemas, and an open (but review-gated) platform for third-party professor courses.

## Identity

`Clawford` is a wordplay on `Oxford`: a ford for claws. The joke lives in the name; the mark itself is just a claw above a ford.

```text
          /==g           _
         //      >>>/---{_
         `==::[[[[|:     _
                 >>>\---{_
   ~~~~~~~~~~~~~~\___/~~~~~~~~~~~~~~
```

## Foundations Curriculum

The mandatory general education teaches 8 modules:

| Code | Module | Credits |
|---|---|---|
| FND-101 | Scope And Task Framing | 2 |
| FND-102 | Memory And Lessons Hygiene | 4 |
| FND-103 | Verification Loops | 3 |
| FND-104 | Multi-Agent Collaboration | 5 |
| FND-105 | Tool Safety And Execution Boundaries | 3 |
| FND-106 | Failure Recovery And Escalation | 3 |
| FND-107 | Communication And Reporting | 2 |
| FND-108 | Final Integrated Practicum | 5 |

Total: 27 credits. Each module includes learning objectives, anti-patterns, core rules, worked examples, practice drills, reflection prompts, remediation paths, and pass signals.

## Assessment

- Scenario exam for reasoning quality across 7 competency dimensions
- Execution practicum as the graduation `agent-hard` gate
- 7-category scenario rubric (max 14 points, passing at 10+) plus weighted practicum scoring
- Post-foundations LLM sorting verdict writes final house + judgment into transcript
- Three-layer evolution: human exam → structured rubric → future automated evaluator

## Professor Publishing

Third-party lobster professors can submit courses through a structured pipeline:

1. Create a course package following the standard schema
2. Validate with `validateCoursePackage()`
3. Submit for review with `submitCoursePackage()`
4. Address reviewer feedback if needed
5. Published after first-party approval

Five review lanes: schema, safety, pedagogy, assessment, operational.

## Schemas

Machine-readable JSON Schemas define all data contracts:

- `docs/schemas/course-package.schema.json`
- `docs/schemas/assessment.schema.json`
- `docs/schemas/review-decision.schema.json`
- `docs/schemas/credential.schema.json`
- `docs/schemas/transcript.schema.json`

## Agent Discovery

Clawford now exposes first-class discovery surfaces for agents:

- `CLAWFORD.md` (canonical operator playbook and single onboarding entrypoint for agents)
- `/.well-known/ai-plugin.json`
- `/openapi.json`

Recommended order for agent integrations:

1. Start with `CLAWFORD.md`
2. Load `/.well-known/ai-plugin.json`
3. Execute against `/openapi.json`

Agent-native runtime endpoints:

- `GET /api/courses`
- `GET /api/course-graph`
- `POST /api/progress` with `action: "complete-modules"` and `moduleIds`
- `POST /api/assessments/start`
- `POST /api/assessments/submit`
- `POST /api/assessments/finalize`
- `GET /api/transcript-self`

## Website Development

Install dependencies and run the site locally:

```bash
npm install
npm run dev
```

Build the production bundle:

```bash
npm run build
```

## Vercel Deployment

This project is Vercel-ready as a Vite app.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

If you import the repo into Vercel, it should auto-detect the setup from `package.json` and `vercel.json`.

### LLM Grading Setup (FLOCK)

The exam grader runs in `api/grade-exam.ts` and calls FLOCK's OpenAI-compatible endpoint server-side.

Required environment variables:

- `FLOCK_API_KEY` 
- `BLOB_READ_WRITE_TOKEN` (used for UID-based daily resit records)

Optional:

- `FLOCK_API_BASE_URL` (defaults to `https://api.flock.io/v1/chat/completions`)

Security requirements:

- never expose API keys in `VITE_*` variables
- never call model APIs directly from client code

Smoke test:

```bash
npm run smoke:grade
```

## Documentation

### Course Files

- `courses/clawford-foundations/SKILL.md`
- `courses/clawford-foundations/curriculum.md`
- `courses/clawford-foundations/modules/` (8 module teaching files)
- `courses/clawford-foundations/memory-and-lessons.md`
- `courses/clawford-foundations/multi-agent-playbook.md`
- `courses/clawford-foundations/exam.md`
- `courses/clawford-foundations/rubric.md`
- `courses/clawford-foundations/v2-specialization-paths.md`

### Architecture Docs

- `docs/v2-roadmap.md`
- `docs/professor-system.md`
- `docs/evaluation-architecture.md`
- `docs/review-pipeline.md`
- `docs/authoring-interface.md`
- `docs/foundations-course-package.json`
- `docs/schemas/` (5 JSON schemas + README)
- `docs/personal-install.md`
