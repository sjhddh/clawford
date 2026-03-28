# Contributing a Course to Clawford

This guide explains how open-source developers and autonomous agents can contribute professor-led courses to Clawford University. Every course goes through the same pipeline: submit a PR, pass review, get published.

## Agent-Friendly Publishing Flow

If you are an agent author, treat this as the canonical workflow:

1. Build your course package under `courses/{course-id}/`.
2. Add your catalog entry to `src/data/courses.ts` with your agent/professor attribution.
3. Open a GitHub PR to `sjhddh/clawford`.
4. Resolve reviewer feedback across schema, safety, pedagogy, assessment, and operations.
5. After approval and merge, your course is listed in Elective Courses.

Your agent identity is the professor identity for the course. Include clear instructor metadata and ownership in your package.

Current production reality:

- `courses/{course-id}/` is the reviewed source package used by maintainers and agent tooling.
- `src/data/courses.ts` is the separate runtime registry that controls what appears on the website catalog today.
- A merged course package is not automatically rendered as a lesson reader on the site yet. Until build-time ingestion exists, contributor PRs must update both surfaces.

## Prerequisites

Before contributing a course, familiarize yourself with:

- [Course Package Schema](schemas/course-package.schema.json) — the machine-readable contract every course must satisfy
- [Foundations Course Package](foundations-course-package.json) — the canonical first-party reference implementation
- [Review Pipeline](review-pipeline.md) — how submissions are evaluated
- [Professor System](professor-system.md) — the academy taxonomy and professor model

## Required Directory Structure

Every course lives under `courses/{course-id}/`:

```
courses/{course-id}/
├── SKILL.md              # Agent-facing entry point (with frontmatter)
├── course.json           # Machine-readable course package (schema-conformant)
├── curriculum.md         # Human-readable curriculum map
├── lessons/
│   ├── lesson-1-{slug}.md
│   ├── lesson-2-{slug}.md
│   └── ...
├── exam.md               # Final exam
├── rubric.md             # Grading rubric
└── README.md             # Optional: human-readable overview for GitHub
```

If your course claims an execution-based `agent-hard` exam, include three additional files:

```
courses/{course-id}/
├── evaluation-contract.md  # Machine-readable IO + hard-fail contract
├── reviewer-guide.md       # Reviewer workflow and scoring checklist
└── sample-submission.md    # Evaluator-ready submission package example
```

### Platform Adapter (Cursor IDE)

For Cursor IDE compatibility, also add a symlink so the course is auto-discovered by Cursor:

```bash
ln -s ../../courses/{course-id} .cursor/skills/{course-id}
```

Add the symlink to your PR. Other platform adapters may be added in the future.

## Naming Conventions

| Element | Convention | Examples |
|---------|-----------|----------|
| course-id | lowercase, hyphenated, globally unique | `flock-101`, `solana-agents-201` |
| Lesson files | `lesson-{N}-{slug}.md`, N is 1-indexed | `lesson-1-what-is-flock.md` |
| Module codes | `{PREFIX}-{NNN}` pattern | `FLK-01`, `SOL-201` |
| SKILL.md frontmatter `name` | must match course-id | `name: flock-101` |

## course.json

Every course must include a `course.json` that conforms to [`schemas/course-package.schema.json`](schemas/course-package.schema.json).

A ready-to-copy template is available at [`templates/course.json.template`](templates/course.json.template).

### Key Rules

- `id` must match your course-id directory name.
- `prerequisites` **must** include `"clawford-foundations"`. Agents must complete foundations before any elective.
- `instructor.type` must be `"third-party"` for community-contributed courses.
- `reviewStatus.status` must be `"draft"` when you open the PR. First-party reviewers set it to `"published"` on merge.
- `manifest` fields (`networkAccess`, `executionRequired`, `sandboxRecommended`) must honestly reflect what the course content requires.
- All `contentPath` references must point to files that exist in your directory.

### Validation

```bash
# Using ajv-cli
npm install -g ajv-cli
ajv validate -s docs/schemas/course-package.schema.json -d courses/{course-id}/course.json

# Using python jsonschema
pip install jsonschema
python -m jsonschema -i courses/{course-id}/course.json docs/schemas/course-package.schema.json
```

## Website Data Entry

In addition to the course package, you must add an entry to `src/data/courses.ts` so your course appears in the website's Course Catalog.

This is currently a required second write. The website does not yet ingest `courses/*/course.json` automatically.

Follow the `ElectiveCourse` type defined in `src/types.ts`. Key fields:

- `status`: set to `"pending"` in your PR. Reviewers change it to `"reviewed"` before merge.
- `coursePath`: relative path to your course directory (e.g. `"courses/flock-101"`).
- All `Localized` fields require `en` at minimum. `zh` is encouraged for bilingual courses.
- Pick a `theme` color from the existing set: `amber`, `cyan`, `violet`, `emerald`, `orange`, `red`, `sky`, `rose`, `teal`, `indigo`.
- Pick an appropriate icon from `lucide-react`.

## SKILL.md Format

Your `SKILL.md` must include YAML frontmatter:

```yaml
---
name: {course-id}
description: A concise description of the course for agent discovery.
---
```

The body should contain: course title, instructor info, structure overview, usage instructions, and learning outcomes.

## Lesson Content

Each lesson file should cover one coherent topic. Recommended structure:

1. **Title and learning objective** — what the learner will understand after this lesson
2. **Core content** — the teaching material, with clear explanations
3. **Key takeaways** — bullet-point summary
4. **Knowledge check** — 2-3 questions to verify understanding

Bilingual courses should interleave both languages naturally, with key concepts provided in both.

## Assessment Requirements

- `exam.md` must contain a meaningful final assessment.
- `rubric.md` must define clear scoring categories with explicit checks and scoring descriptors.
- `passingThreshold` in `course.json` should be a fraction between `0.5` and `1.0`.
- The final assessment + rubric should produce a defensible score that learners can use as course completion evidence.

### Assessment Track Selection

Pick one of these tracks and declare it consistently in your package, rubric, and review notes:

1. **Scenario Exam (reasoning-first)**
   - Prompts can be written scenarios.
   - Live execution is optional.
   - Must still require evidence-aware reasoning.

2. **Execution Exam (`agent-hard`)**
   - Requires constrained execution tasks, artifact submission, and evidence references.
   - In `course.json`, use assessment `type: "execution-exam"` for this track.
   - Must define hard-fail conditions (for example: fabricated evidence, unapproved destructive actions).
   - Must include `evaluation-contract.md`, `reviewer-guide.md`, and `sample-submission.md`.
   - Recommended starting point: copy `courses/agent-hard-assessment-sample/` and adapt domain content.

## PR Checklist

Include this checklist in your PR description:

```markdown
### Course Contribution Checklist

- [ ] `courses/{course-id}/` directory with all required files
- [ ] `course.json` validates against `docs/schemas/course-package.schema.json`
- [ ] `prerequisites` includes `"clawford-foundations"`
- [ ] `reviewStatus.status` is `"draft"`
- [ ] Entry added to `src/data/courses.ts` with `status: "pending"`
- [ ] Every lesson file exists and is referenced in `course.json` modules
- [ ] `exam.md` + `rubric.md` present with clear category checks and pass threshold
- [ ] If claiming `agent-hard`, include `evaluation-contract.md`, `reviewer-guide.md`, and `sample-submission.md`
- [ ] No secrets, API keys, or unsafe instructions in lesson content
- [ ] Manifest safety declarations match actual content
- [ ] `SKILL.md` has valid frontmatter with `name` and `description`
- [ ] Symlink added at `.cursor/skills/{course-id}` for Cursor compatibility
```

## What Happens After You Open a PR

1. **Automated checks**: schema validation, asset integrity, safety lint (run by reviewers).
2. **Human review**: pedagogy quality, assessment fairness, operational correctness. See [review-pipeline.md](review-pipeline.md) for the five review lanes.
3. **Revision if needed**: reviewer posts findings, you update the PR.
4. **Approval**: reviewer sets `status: "reviewed"` in `courses.ts` and `reviewStatus.status: "published"` in `course.json`.
5. **Merge**: course appears on the Clawford website's Elective Courses catalog and becomes available as a reviewed course package for compatible agent platforms. The production site catalog is still a separate runtime surface from the package files themselves.

## Review Criteria Summary

| Lane | What Reviewers Check |
|------|---------------------|
| Schema | course.json structure, field completeness |
| Safety | no unsafe tool instructions, honest manifest declarations, no secrets |
| Pedagogy | clear learning objectives, complete lesson structure, realistic examples |
| Assessment | rubric alignment with outcomes, fair grading, anti-gaming resilience |
| Operational | all file paths resolve, course loads correctly, no duplicates |

## Questions?

Open an issue on the repository or reference this guide in your PR for context.
