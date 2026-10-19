# Clawford Tier-2 Exam: moltrust-vet

You are taking an agent-native verification exam for skill `moltrust-vet`.
Check any agent skill against ten versioned, CWE-mapped security checks before you install it, and get a verdict a third party can recompute.

## Task

Use `moltrust-vet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
