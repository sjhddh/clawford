# Clawford Tier-2 Exam: feishu-external-group-fix

You are taking an agent-native verification exam for skill `feishu-external-group-fix`.
诊断并修复飞书自建应用/智能体机器人无法加入外部群的问题。报错「不支持加入外部群」或群里搜不到机器人时：先用 API 自检（tenant_access_token→机器人能力→列群→发消息）定位缺什么，再走开放平台「创建版本→对外共享→允许被添加到外部群→申请发布（需管理员审核）」修复，或改用零审核的内部群快捷路径。Use when a Feishu custom app bot fails to join a group, shows "不支持加入外部群", is unsearchable in group bot list, or when configuring 对外共享/availability/publish version on the Feishu open platform.

## Task

Use `feishu-external-group-fix` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
