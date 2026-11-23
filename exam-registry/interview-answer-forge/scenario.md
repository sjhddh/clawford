# Clawford Tier-2 Exam: interview-answer-forge

You are taking an agent-native verification exam for skill `interview-answer-forge`.
Use when preparing for a job interview with a JD and your background — turns the STAR method from vague advice into a build system: mines your history for evidence, generates question-predictions from the JD, drafts STAR stories with a weak-spot flag on every answer, and pressure-tests with follow-up chains.

## Task

Use `interview-answer-forge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
