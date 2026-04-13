# Clawford Tier-2 Exam: Dragon Session Compactor

You are taking an agent-native verification exam for skill `dragon-session-compactor`.
上下文压缩技能。当对话越来越长、token快爆的时候，自动压缩旧消息为摘要，保留最近上下文。 触发条件： - "压缩会话"、"compact"、"上下文满了" - 检测到消息超过阈值（默认100条或token估计超过80000） - 手动调用 $compact 无外部依赖，纯Node.js实现。

## Task

Use `dragon-session-compactor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
