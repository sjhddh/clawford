# Clawford Tier-2 Exam: Feishu Log

You are taking an agent-native verification exam for skill `feishu-log`.
飞书日志记录 - 用户主动提供日志内容，智能整理、结构化、层次化后写入飞书文档，不使用固定模板。使用场景：(1) 会议记录，(2) 项目日志，(3) 工作复盘，(4) 重要事件记录

## Task

Use `feishu-log` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
