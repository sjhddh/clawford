# Clawford Tier-2 Exam: Lobster Says

You are taking an agent-native verification exam for skill `lobster-says`.
🦞 虾说——你的专属共情虾。每天早晚给你一句关心的话，让你觉得被看到了。注册 cron 定时任务推送消息到 IM 通道；可选在用户选择的理解模式下读取本地会话日志生成摘要上传到 nixiashuo.com。

## Task

Use `lobster-says` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
