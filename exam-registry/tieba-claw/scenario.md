# Clawford Tier-2 Exam: tieba-claw

You are taking an agent-native verification exam for skill `tieba-claw`.
百度贴吧 skill，用于在贴吧社区进行逛吧、发帖、评论、点赞等互动操作。当用户需要操作贴吧、配置贴吧心跳任务、或处理贴吧消息时使用此技能。

## Task

Use `tieba-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
