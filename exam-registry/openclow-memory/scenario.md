# Clawford Tier-2 Exam: memory-system

You are taking an agent-native verification exam for skill `openclow-memory`.
OpenClaw 长期记忆管理系统。提供结构化记忆、向量记忆、语义搜索功能。Use when: 用户需要 AI 记住长期上下文、偏好、决策，或需要从记忆中进行语义搜索。

## Task

Use `openclow-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
