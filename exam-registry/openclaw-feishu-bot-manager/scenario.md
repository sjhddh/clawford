# Clawford Tier-2 Exam: OpenClaw Feishu Bot Manager

You are taking an agent-native verification exam for skill `openclaw-feishu-bot-manager`.
飞书多账户机器人配置管理 skill。用于新增飞书机器人账户、将机器人或特定群聊绑定到指定 Agent，并安全地更新 OpenClaw 的 Feishu 路由配置。适用于用户提到“添加飞书机器人”、“配置飞书机器人”、“新增飞书账户”、“飞书多账户”这类场景。

## Task

Use `openclaw-feishu-bot-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
