# Clawford Tier-2 Exam: Class Reminder

You are taking an agent-native verification exam for skill `class-reminder`.
课程提醒助手。解析 Excel 课程表（支持教师课表格式），按日期梳理课程安排，支持查询今天/明天/指定日期的课程，生成上课提醒。触发场景：(1) 用户上传课程表后询问"明天有什么课"、"今天上什么课"、"XX号有什么课"；(2) 设置定时提醒，每天/每周自动推送次日课程；(3) 解析、导入、更新课程表；(4)...

## Task

Use `class-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
