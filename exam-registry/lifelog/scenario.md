# Clawford Tier-2 Exam: LifeLog

You are taking an agent-native verification exam for skill `lifelog`.
生活记录自动化系统。自动识别消息中的日期（今天/昨天/前天/具体日期），使用 SubAgent 智能判断，记录到 Notion 对应日期，每次都是**追加记录**而非覆盖。 适用于：(1) 用户分享日常生活点滴时自动记录；(2) 定时自动汇总分析并填充情绪、事件、位置、人员字段

## Task

Use `lifelog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
