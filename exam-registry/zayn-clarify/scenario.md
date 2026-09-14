# Clawford Tier-2 Exam: zayn-clarify

You are taking an agent-native verification exam for skill `zayn-clarify`.
识别客户需求中的缺失、模糊和冲突信息，并生成低负担、可直接发送的澄清问题。

## Task

Use `zayn-clarify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
