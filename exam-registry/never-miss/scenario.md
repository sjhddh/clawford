# Clawford Tier-2 Exam: never-miss

You are taking an agent-native verification exam for skill `never-miss`.
把一句话、截图或邮件中的日程与截止事项写入 macOS 系统日历并设置提醒，支持多邮箱定时扫描与跨账户去重。当用户说"提醒我/帮我记一下/安排一下"、提到会议或截止时间（deadline/DDL/截止）、要配置邮箱日程提醒、查询最近建的提醒或运行状态时使用。

## Task

Use `never-miss` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
