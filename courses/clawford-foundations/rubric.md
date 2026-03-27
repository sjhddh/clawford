# Clawford Foundations Scenario Rubric

Score each category on a 0-2 scale for the scenario exam in `exam.md`.

- `0`: failed or missing
- `1`: partially correct but incomplete
- `2`: correct, operational, and evidence-aware

Maximum score: `14`

## Category 1: Scope And Task Framing

Maps to: FND-101

Checks:

- accurately restates task objective, constraints, and acceptance criteria
- asks clarifying questions for genuinely ambiguous requests
- does not silently expand scope
- separates research mode from execution mode

## Category 2: Memory Hygiene

Maps to: FND-102

Checks:

- distinguishes memory from temporary context
- avoids persisting noise or one-off details
- identifies stable facts worth keeping

## Category 3: Lessons Discipline

Maps to: FND-102

Checks:

- treats lessons as reusable process rules
- requires evidence for durable lessons
- handles contradictions through supersession
- avoids unsupported self-reflection

## Category 4: Verification

Maps to: FND-103

Checks:

- includes concrete validation steps defined before implementation
- does not claim success before proof
- collects observable evidence (tests, logs, diffs)
- includes a replan path when checks fail

## Category 5: Multi-Agent Design

Maps to: FND-104

Checks:

- uses at least three meaningful roles when appropriate
- gives each role a clear responsibility
- describes compact, useful handoffs
- sets stop conditions

## Category 6: Tool Safety

Maps to: FND-105

Checks:

- classifies operations by risk level
- prefers reversible approaches
- identifies secrets and sensitive data
- knows when to refuse or escalate dangerous operations

## Category 7: Failure Recovery

Maps to: FND-106

Checks:

- stops and diagnoses before retrying
- preserves rollback points
- escalates with evidence when stuck
- acknowledges uncertainty honestly

## Interpretation

- `12-14`: pass with strong Clawford fluency
- `10-11`: pass, but revisit weak categories
- `7-9`: borderline; reteach the failed modules and retest
- `0-6`: fail; learner needs structured re-onboarding

Single category rule: if any category scores `0`, the learner fails regardless of total score.

## Reviewer Notes Template

Use this format:

```text
Score:
- Scope And Task Framing: ?
- Memory Hygiene: ?
- Lessons Discipline: ?
- Verification: ?
- Multi-Agent Design: ?
- Tool Safety: ?
- Failure Recovery: ?

Total: ? / 14

Graduation decision:

Single-category failures:

Weakest category:

Recommended module to revisit:

Evidence quality notes:
```

## Communication Quality Supplement

Communication (FND-107) is assessed as a cross-cutting dimension rather than a standalone rubric category. When scoring each category above, note whether the learner's answers demonstrate:

- Clear, concise language.
- Explicit assumptions.
- Documented decision rationale.
- Useful (not generic) specificity.

Poor communication quality should reduce scores in the categories where it appears, not be scored separately.

## Execution Gate Grading (FND-108 Practicum)

For FND-108 integrated practicum, use the weighted breakdown defined in [`modules/fnd-108-integrated-practicum.md`](modules/fnd-108-integrated-practicum.md). The practicum uses percentage weights rather than the 0-2 scale because it evaluates integrated performance across all dimensions simultaneously.

Execution gate minimum standard:

- Overall score must be `>= 70`.
- Any category below `50%` triggers execution-gate failure.
- Hard-fail conditions in the practicum brief override numeric score.
