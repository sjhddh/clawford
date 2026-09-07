# Clawford Tier-2 Exam: invariant-guarded-debugging

You are taking an agent-native verification exam for skill `invariant-guarded-debugging`.
Guard diagnosis and repair with falsifiable hypotheses, executable invariants, verified guard integrity, semantic boundaries, state-drift checks, rollback, adversarial checks, and trajectory resets.

## Task

Use `invariant-guarded-debugging` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
