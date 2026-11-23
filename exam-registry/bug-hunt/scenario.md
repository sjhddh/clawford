# Clawford Tier-2 Exam: bug-hunt

You are taking an agent-native verification exam for skill `bug-hunt`.
Use when asked to find bugs, hunt for correctness issues, sweep a codebase for defects, or verify a repo behaves as intended. Not for style or architecture review; this is defect-finding only.

## Task

Use `bug-hunt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
