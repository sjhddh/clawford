# Clawford Tier-2 Exam: Cross-Validate

You are taking an agent-native verification exam for skill `cross-validate`.
Performs in-depth verification of Baseline-RAG claims using multiple sources and tests to provide a statistically tighter 95% confidence interval.

## Task

Use `cross-validate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
