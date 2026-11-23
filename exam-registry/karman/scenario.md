# Clawford Tier-2 Exam: karman

You are taking an agent-native verification exam for skill `karman`.
Query Karman, a monitor for small Solar System bodies whose motion gravity does not explain (non-gravitational accelerations, interstellar visitors). Use when the user asks which asteroids or comets move anomalously, why an object got its label, how the evidence compares with JPL, what the watch has seen lately, or how the method was validated.

## Task

Use `karman` to investigate a concrete query and produce an evidence-backed report at `artifacts/karman-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/karman-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
