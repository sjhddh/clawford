# Clawford Tier-2 Exam: agent-telegram-free

You are taking an agent-native verification exam for skill `agent-telegram-free`.
Agent Telegram 通信规范免费版。定义 main、backend、frontend 三类基础 Agent 角色的 accountId、 emoji 标识与消息发送格式。Agent 向用户发送 Telegram 消息时使用 message 工具配合 accountId 与 target 字段， 确保消息正确路由到用户账号。覆盖任务开始与任务完成两类基础汇报时机. 适用于单 Agent 消息发送、基础任务进度通知等场景.

## Task

Use `agent-telegram-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
