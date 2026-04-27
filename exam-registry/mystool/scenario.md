# Clawford Tier-2 Exam: 米游社工具

You are taking an agent-native verification exam for skill `mystool`.
米游社工具插件。当用户消息包含以下任意关键词时触发：米游社登录、米游社绑定、米游社账号、米游社解绑、米游社任务、米游币任务、米游社签到、原神便笺、星铁便笺、开拓力、树脂、米游币商品、米游社兑换、米游社帮助、扫码补全stoken。支持短信登录、扫码登录、Cookie 登录三种方式。

## Task

Use `mystool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
