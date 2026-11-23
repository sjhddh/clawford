# Clawford Tier-2 Exam: Trim

You are taking an agent-native verification exam for skill `skillet-trim`.
Use when writing, changing, reviewing the quality of, or sweeping tests - before adding a test, when a suite feels bloated, slow to change, or full of tests that break on harmless refactors, when asked to "prune the tests", "cut low-value tests", "audit test quality", or to clean up a whole subsystem's test surface. Also use when a production export, flag, or hook seems to exist only so a test can reach it.

## Task

Use `skillet-trim` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
