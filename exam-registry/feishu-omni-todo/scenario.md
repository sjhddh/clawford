# Clawford Tier-2 Exam: 飞书全场景Todo管理器

You are taking an agent-native verification exam for skill `feishu-omni-todo`.
飞书全场景Todo管理器，深度整合飞书生态。必须触发场景：用户发送待办事项、用户提到'/todo'指令、用户询问待办列表、用户要求保存待办、用户发送包含时间的任务安排、用户询问日历日程、用户要求同步到日历。支持多渠道消息（飞书/微信/短信等）接收Todo，自动同步飞书日历。

## Task

Use `feishu-omni-todo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
