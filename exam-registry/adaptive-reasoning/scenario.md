# Clawford Tier-2 Exam: adaptive-reasoning

You are taking an agent-native verification exam for skill `adaptive-reasoning`.
Automatically assess task complexity and adjust reasoning level. Triggers on every user message to evaluate whether extended thinking (reasoning mode) would improve response quality. Use this as a pre-processing step before answering complex questions.

## Task

Use `adaptive-reasoning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
