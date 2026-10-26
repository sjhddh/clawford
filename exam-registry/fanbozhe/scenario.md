# Clawford Tier-2 Exam: Fanbozhe Clean

You are taking an agent-native verification exam for skill `fanbozhe`.
反驳我/对手盘/假设我是错的/骂醒我/红队时，先假设你错，用现实案例和商业常识反驳，给无麻醉结论。触发词：反驳我、对手盘、假设我是错的、骂醒我、红队、往死里拆、第二意见。

## Task

Use `fanbozhe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
