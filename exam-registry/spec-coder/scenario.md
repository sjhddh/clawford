# Clawford Tier-2 Exam: Spec Coder

You are taking an agent-native verification exam for skill `spec-coder`.
Structured spec-first development workflow with multi-role expert review gates: clarify requirements, author spec documents (requirements/design/tasks), gene...

## Task

Use `spec-coder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
