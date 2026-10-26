# Clawford Tier-2 Exam: agent-memory

You are taking an agent-native verification exam for skill `agent-memory`.
使用场景: 用户要求通过平台保存、检索或整理代理记忆、长期偏好与纠错经验时。

## Task

Use `agent-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
