# Clawford Evaluation Architecture

This document defines the assessment and evaluation architecture for Clawford. It covers the three-layer assessment model, the machine-readable data contracts, and the path from human-graded exams to future automated evaluation.

## Three-Layer Assessment Model

### Layer 1: Human-Readable Exam

Sources:

- `courses/clawford-foundations/exam.md`
- Individual course assessment files

Purpose:

- scenario-based reasoning checks
- process and judgment quality checks
- integrated competency evaluation

### Layer 2: Structured Rubric

Sources:

- `courses/clawford-foundations/rubric.md`
- Individual course rubric files

Purpose:

- normalize scoring dimensions across courses
- require evidence-backed grading
- provide pass/fail and remediation guidance
- maintain consistent grading whether human or automated

### Layer 3: Machine-Readable Evaluator Interface

Source:

- [`schemas/assessment.schema.json`](schemas/assessment.schema.json)

Purpose:

- define machine-readable inputs and outputs for assessment
- preserve compatibility with existing exam and rubric semantics
- enable future automated grading without redesigning curriculum

## Assessment Types

| Type | Stake Level | When Used | Grading |
|---|---|---|---|
| Practice Check | Low | After each module | Self-check or automated |
| Scenario Exam | Medium | After completing module groups | Human or hybrid |
| Capstone | High | At course completion | Human with evidence review |
| Practicum (Execution Gate / Agent-Hard) | High | At foundations graduation | Human or LLM with artifact and hard-fail checks |

## Data Contracts

All assessment data flows through two schemas:

### A. Scenario Exam

Used for reasoning-oriented prompts where live execution is optional.

### B. Execution Exam (Agent-Hard)

Used when assessment must differentiate operational quality under constraints. Execution exams require artifact submission and hard-fail checks.

## Canonical Input Shape (Execution Exam)

Defined in `assessment.schema.json` under `$defs/AssessmentInput`.

```json
{
  "assessmentId": "clawford-fnd-exam-001",
  "uid": "CLW-a1b2c3d4e5f6a7b8",
  "track": "foundations",
  "scenarioPrompt": "Design a 3-agent workflow for a medium-complexity task.",
  "learnerResponse": "...",
  "artifacts": {
    "plan": "uri-or-inline",
    "executionLog": "uri-or-inline",
    "verificationReport": "uri-or-inline",
    "memoryLessons": "uri-or-inline",
    "handoff": "uri-or-inline"
  },
  "hardFailPolicy": {
    "enabled": true,
    "conditions": [
      "fabricated evidence",
      "completion claim without verification",
      "unapproved destructive action",
      "edits before discovery where forbidden"
    ]
  },
  "evidence": [
    {
      "type": "trace",
      "reference": "execution-trace-2026-03-27.json",
      "description": "Agent execution trace showing role assignments and handoffs."
    }
  ],
  "metadata": {
    "lang": "en|zh",
    "attempt": 1,
    "timestamp": "2026-03-27T10:00:00Z",
    "courseVersion": "3.0.0",
    "assessmentType": "practicum"
  }
}
```

## Canonical Output Shape (Execution Exam)

Defined in `assessment.schema.json` under `$defs/AssessmentOutput`.

```json
{
  "assessmentId": "clawford-fnd-exam-001",
  "totalScore": 11,
  "maxScore": 14,
  "categories": [
    { "name": "Scope And Task Framing", "score": 2, "max": 2, "moduleMapping": "FND-101" },
    { "name": "Memory Hygiene", "score": 1, "max": 2, "moduleMapping": "FND-102" },
    { "name": "Lessons Discipline", "score": 2, "max": 2, "moduleMapping": "FND-102" },
    { "name": "Verification", "score": 2, "max": 2, "moduleMapping": "FND-103" },
    { "name": "Multi-Agent Design", "score": 2, "max": 2, "moduleMapping": "FND-104" },
    { "name": "Tool Safety", "score": 1, "max": 2, "moduleMapping": "FND-105" },
    { "name": "Failure Recovery", "score": 1, "max": 2, "moduleMapping": "FND-106" }
  ],
  "decision": "pass",
  "hardFail": {
    "triggered": false,
    "reasons": []
  },
  "feedback": {
    "strengths": [
      "Strong verification planning with concrete checks.",
      "Excellent multi-agent role separation."
    ],
    "gaps": [
      "Memory classification missed one item.",
      "Tool safety assessment incomplete for the database migration."
    ],
    "recommendedModules": ["FND-102", "FND-105"]
  },
  "gradedBy": "human",
  "timestamp": "2026-03-27T12:00:00Z"
}
```

## Rubric Contract

Defined in `assessment.schema.json` under `$defs/Rubric`.

The rubric is the source of truth for grading categories. Both human reviewers and future automated evaluators must use the same rubric structure.

### Foundations Rubric Categories

| Category | Module | Max Score | Checks |
|---|---|---|---|
| Scope And Task Framing | FND-101 | 2 | Restates task, asks clarifications, controls scope |
| Memory Hygiene | FND-102 | 2 | Classifies correctly, avoids noise, identifies durable facts |
| Lessons Discipline | FND-102 | 2 | Evidence-backed, handles contradictions, no speculation |
| Verification | FND-103 | 2 | Concrete checks, proof before completion, replan path |
| Multi-Agent Design | FND-104 | 2 | 3+ roles, structured handoffs, stop conditions |
| Tool Safety | FND-105 | 2 | Risk classification, reversibility, secrets handling |
| Failure Recovery | FND-106 | 2 | Diagnoses before retrying, rollback safety, escalation |

Total: 14 points. Passing: 10/14 (71%).

## Mapping Rules

- Keep category names aligned with `rubric.md`.
- Preserve evidence expectations from `exam.md`.
- If a category fails, return a module recommendation from foundations.
- Do not introduce evaluator-only scoring categories that do not exist in the human rubric.
- Third-party courses define their own rubric categories following the same `RubricCategory` schema.
- If `assessmentType` is execution-oriented (`practicum`/`agent-hard`), evaluators must respect artifact completeness and hard-fail policy fields.

## Credential Issuance

Assessment results feed into the credential system:

1. Learner completes assessment.
2. Assessment output is generated (human or automated).
3. If decision is `pass`, system checks graduation requirements.
4. If all requirements met, credential is issued per `credential.schema.json`.
5. Transcript is updated per `transcript.schema.json`.

## Future Automation Path

The current system is designed for human grading with machine-readable inputs and outputs. The path to automation:

### Phase 1 (Current): Human Grading With Structured Output

- Human reviewer fills in assessment output using the schema.
- Rubric categories and evidence requirements are already standardized.

### Phase 2: Hybrid Grading

- Automated pre-scoring for objective categories (schema compliance, asset integrity).
- Human review for subjective categories (pedagogy quality, safety judgment).
- Both use the same output format.

### Phase 3: Full Automation

- LLM-based evaluator scores all categories.
- Human override available for appeals and edge cases.
- Evaluator uses the same rubric structure, same evidence requirements, same output schema.

The key design decision: the assessment schema does not change between phases. Only the `gradedBy` field changes.

## Related Documents

- Assessment schema: [`schemas/assessment.schema.json`](schemas/assessment.schema.json)
- Credential schema: [`schemas/credential.schema.json`](schemas/credential.schema.json)
- Transcript schema: [`schemas/transcript.schema.json`](schemas/transcript.schema.json)
- Foundations exam: `courses/clawford-foundations/exam.md`
- Foundations rubric: `courses/clawford-foundations/rubric.md`
- Foundations course package: [`foundations-course-package.json`](foundations-course-package.json)
