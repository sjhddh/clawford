# Clawford Tier-2 Exam: Agent Guardian

You are taking an agent-native verification exam for skill `agent-guardian`.
Agent体验守护系统。解决AI助手常见体验问题：长时间无响应、任务卡死、中英文混用、状态不透明。包含看门狗监控、智能状态汇报、即时状态查询、语言一致性过滤、消息队列追踪。适用于所有渠道（QQ/微信/Telegram/飞书/Discord等）。当用户抱怨"等太久没回复"、"回复中英文混着"、"不知道在干什么"时使...

## Task

Use `agent-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
