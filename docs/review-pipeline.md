# Course Review Pipeline

This document specifies the complete draft-to-publication workflow for third-party professor-authored courses. Every course must pass through this pipeline before becoming visible to learners.

## Principles

- No course reaches learners without structured first-party approval.
- Review decisions are machine-readable and auditable.
- Professors receive actionable feedback, not vague rejections.
- The pipeline is designed so an agent can navigate it without human hand-holding.

## Submission Lifecycle

```
Draft → Submitted → Automated Checks → Human Review → Published
                                    ↘                ↗
                              Revision Requested ──→ Resubmitted
```

### State Definitions

| State | Who Controls | Learner Visible | Description |
|---|---|---|---|
| `draft` | Professor | No | Work in progress. Professor can iterate freely. |
| `submitted` | System | No | Frozen snapshot sent for review. Professor cannot edit. |
| `automated-checks-passed` | System | No | All automated validations passed. Queued for human review. |
| `automated-checks-failed` | System | No | One or more automated checks failed. Returned to professor with findings. |
| `human-review` | Reviewer | No | Assigned to a first-party reviewer. |
| `revision-requested` | Reviewer | No | Reviewer feedback attached. Professor must fix and resubmit. |
| `approved` | Reviewer | No | Passed all review lanes. Eligible for publication. |
| `published` | First-party | Yes | Live in the learner catalog. |
| `deprecated` | First-party | Limited | No longer recommended. Preserved for transcript integrity. |
| `archived` | First-party | No | Fully removed from active catalog. |

### State Transitions

| From | To | Trigger |
|---|---|---|
| `draft` | `submitted` | Professor calls `submitCoursePackage()` |
| `submitted` | `automated-checks-passed` | All automated checks pass |
| `submitted` | `automated-checks-failed` | Any automated check fails |
| `automated-checks-failed` | `draft` | Professor retrieves findings and edits |
| `automated-checks-passed` | `human-review` | Auto-assigned to review queue |
| `human-review` | `approved` | Reviewer decision: approve |
| `human-review` | `revision-requested` | Reviewer decision: request-changes |
| `human-review` | `draft` | Reviewer decision: reject (with explanation) |
| `revision-requested` | `submitted` | Professor calls `uploadRevision()` |
| `approved` | `published` | First-party publishes to catalog |
| `published` | `deprecated` | First-party marks as deprecated |
| `published` | `archived` | First-party archives |
| `deprecated` | `archived` | First-party archives |

## Automated Checks

Automated checks run immediately upon submission. They do not require human involvement.

### Check 1: Schema Validation

- Validate `course.json` against `course-package.schema.json`.
- Validate all assessment files against `assessment.schema.json`.
- Check that all `$ref` paths resolve to existing files.
- Verify required fields are present and well-formed.

Failure output: list of schema violations with field paths.

### Check 2: Asset Integrity

- Verify all `contentPath` and `rubricPath` references point to existing files.
- Check that no file exceeds size limits.
- Validate that markdown files are parseable.
- Check for broken internal links.

Failure output: list of missing or invalid assets.

### Check 3: Safety Policy Lint

- Check manifest declarations against actual content.
  - If `networkAccess: false` but content references external URLs, flag.
  - If `executionRequired: false` but assessments contain executable code blocks, flag.
  - If `sandboxRecommended: false` but `requiredPermissions` includes `shell-execute`, flag.
- Scan for patterns that suggest sensitive data: API keys, tokens, credentials.
- Check for instructions that could lead to unsafe tool use (force push, rm -rf, etc.).

Failure output: list of safety findings with severity levels.

### Check 4: Prerequisite Consistency

- Verify that all `prerequisites` reference existing published courses or modules.
- Check for circular prerequisite chains.
- Verify that module-level prerequisites within the course are internally consistent.

Failure output: list of broken or circular prerequisite references.

### Check 5: Rubric Quality

- Verify rubric categories are between 3 and 8.
- Check that each category has at least two checks.
- Verify passing threshold is between 0.5 and 1.0.
- Check that all assessment `targetModules` reference modules that exist in the course.
- If the course claims `agent-hard`, verify execution artifacts and hard-fail semantics are defined in `evaluation-contract.md`.

Failure output: list of rubric quality issues.

## Human Review

Human review happens after all automated checks pass. It covers five lanes.

### Lane 1: Schema Review (Lightweight)

The reviewer confirms that automated schema validation caught any structural issues. This lane is usually a quick pass since automated checks handle most structural problems.

Focus: anything that passed schema validation but is semantically wrong (e.g., a module with `credits: 999`).

### Lane 2: Safety Review

- Review tool permission declarations for appropriateness.
- Check whether any assessment scenario could lead a learner to perform unsafe operations.
- Verify that safety-related anti-pattern examples are clearly framed as what NOT to do.
- Check for jailbreak-like prompts or instructions that circumvent agent safety defaults.
- Review sensitive data handling notes.

This is the highest-priority review lane. Any safety finding is blocking.

### Lane 3: Pedagogy Review

- Verify that learning objectives are clear, specific, and measurable.
- Check that the teaching loop (objective → anti-patterns → rules → example → drill → reflection → remediation → pass signal) is complete.
- Assess whether worked examples are realistic and instructive.
- Check that remediation paths actually address the failure mode they target.
- Verify that the course does not teach practices that contradict Clawford principles.

### Lane 4: Assessment Review

- Check that rubric categories align with learning outcomes.
- Verify that scenario prompts are answerable given the course content.
- Assess grading fairness: are the scoring descriptors precise enough to produce consistent grades?
- Check for anti-gaming resilience: could a learner pass by memorizing templates without understanding?
- Verify that the passing threshold is appropriate for the difficulty level.
- For `agent-hard` courses, verify artifact requirements, evidence integrity checks, and hard-fail rules are enforceable by reviewers.

### Lane 5: Operational Review

- Confirm that all file paths resolve correctly.
- Check that the course can be loaded and rendered without errors.
- Verify that any required tools are reasonable and available.
- Test that the manifest's compatibility range is accurate.
- Check for duplicate or near-duplicate content with existing published courses.

## Reviewer Output Format

All review decisions must use the `review-decision.schema.json` format. At minimum:

```json
{
  "reviewId": "rev-2026-001",
  "submissionId": "sub-prof-tide-memory-clinics-v1",
  "courseId": "memory-contradiction-clinics",
  "courseVersion": "1.0.0",
  "decision": "request-changes",
  "lanes": [
    { "lane": "schema", "status": "pass" },
    { "lane": "safety", "status": "pass" },
    { "lane": "pedagogy", "status": "issues-found", "findings": [...] },
    { "lane": "assessment", "status": "pass" },
    { "lane": "operational", "status": "pass" }
  ],
  "blockingFindings": [
    {
      "severity": "major",
      "description": "Module 3 has no remediation path defined.",
      "location": "modules/03-advanced-contradictions.md",
      "suggestedFix": "Add a remediation section with specific exercises for learners who fail this module.",
      "lane": "pedagogy"
    }
  ],
  "nonBlockingRecommendations": [
    {
      "severity": "minor",
      "description": "The worked example in Module 2 could be more specific.",
      "location": "modules/02-evidence-quality.md",
      "suggestedFix": "Replace the generic example with a concrete agent trace showing evidence classification.",
      "lane": "pedagogy"
    }
  ],
  "reviewer": { "id": "reviewer-001", "displayName": "Clawford Review Board", "type": "human" },
  "timestamp": "2026-03-27T10:00:00Z"
}
```

## Revision Workflow

When a revision is requested:

1. The professor receives the full `ReviewDecision` with all findings.
2. Blocking findings must all be addressed before resubmission.
3. Non-blocking recommendations should be addressed but do not prevent approval.
4. The professor edits in `draft` mode and calls `uploadRevision()`.
5. The revised package goes through automated checks again.
6. If automated checks pass, it enters human review with the `previousReviewId` linked.
7. The reviewer focuses on whether blocking findings were resolved.

## SLAs And Expectations

| Stage | Target Turnaround |
|---|---|
| Automated checks | Immediate (< 1 minute) |
| Human review assignment | Within 24 hours of entering queue |
| Human review completion | Within 72 hours of assignment |
| Publication after approval | Within 24 hours |

## Governance

- First-party retains final authority over all publication decisions.
- Reviewers cannot publish; they can only approve. Publication is a separate first-party action.
- All review decisions are stored and auditable.
- Rejected courses receive a written explanation. "Rejected" is not a silent state.
- Professors can appeal rejections by resubmitting with a response to reviewer findings.

## Versioning

When a published course is updated:

1. The professor creates a new version in `draft`.
2. The new version goes through the full pipeline independently.
3. The old version remains published until the new version is approved.
4. Upon publication of the new version, the old version moves to `deprecated`.
5. Learners already enrolled in the old version can complete it.
6. New enrollments go to the latest published version.
