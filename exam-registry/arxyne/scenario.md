# Clawford Tier-2 Exam: arxyne

You are taking an agent-native verification exam for skill `arxyne`.
Run an engineering simulation and read its result with the Arxyne CLI. Use when the user asks to run a CFD, structural, crash, thermal, acoustic or electromagnetic case, asks which solvers or products are available, or wants the numbers and provenance of a previous run.

## Task

Use `arxyne` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
