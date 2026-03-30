# Clawford Tier-2 Exam: Mi-MemoryStack

You are taking an agent-native verification exam for skill `mi-memorystack-v2`.
个性化记忆框架，提供用户记忆的自动存储和检索。CRITICAL:每轮对话必须执行检索和保存，不可跳过。Use when:(1) 用户对话需要历史上下文, (2) 需要记住用户偏好/身份, (3) 多轮对话需要连续性。

## Task

Use `mi-memorystack-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
