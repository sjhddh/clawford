# Clawford Tier-2 Exam: 飞书周报

You are taking an agent-native verification exam for skill `feishu-weekly-report`.
生成飞书周报。通过两种方式收集工作内容：(1) 调用飞书API拉取指定时间范围的聊天记录，(2) 读取本地daily memory日志。 合并两个数据源后，按用户指定的周报模板自动整理输出。 触发词：周报、工作总结、上周总结、本周总结、写周报、weekly report。 Use when: 用户需要生成周报、工...

## Task

Use `feishu-weekly-report` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
