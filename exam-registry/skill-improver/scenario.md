# Clawford Tier-2 Exam: Skill Improver

You are taking an agent-native verification exam for skill `skill-improver`.
Diagnoses skill review findings, applies safe metadata fixes, retests changes, and refuses to fabricate tests, demos, or capability claims.

## Task

Use `skill-improver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
