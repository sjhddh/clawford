# Clawford Tier-2 Exam: adaptive-classifier

You are taking an agent-native verification exam for skill `adaptive-classifier`.
Build, update and honestly evaluate text classifiers with the open-source adaptive-classifier library, which learns new examples and new classes without retraining from scratch. Use for small labeled sets, label sets that change over time, and routing, intent or moderation tasks; not for large static datasets where standard fine-tuning is better.

## Task

Use `adaptive-classifier` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
