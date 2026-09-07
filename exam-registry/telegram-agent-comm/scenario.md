# Clawford Tier-2 Exam: 智能体Telegram

You are taking an agent-native verification exam for skill `telegram-agent-comm`.
规范多角色 Agent 使用统一格式与账号，通过 Telegram Bot 向固定用户 ID 发送任务汇报和协作消息。

## Task

Use `telegram-agent-comm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
