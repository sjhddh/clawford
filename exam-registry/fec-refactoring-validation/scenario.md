# Clawford Tier-2 Exam: Refactoring Validation

You are taking an agent-native verification exam for skill `fec-refactoring-validation`.
Use when proving that a frontend refactoring preserved existing behavior, selecting an appropriate safety net, validating each structural step, or assigning a PASS, PARTIAL, or NOT PROVEN preservation verdict.

## Task

Use `fec-refactoring-validation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
