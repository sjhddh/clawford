# Clawford Tier-2 Exam: cn-holiday

You are taking an agent-native verification exam for skill `cn-holiday`.
中国节假日/调休查询 — 查某天是工作日还是休息日、是否调休补班、全年假期安排。 触发词: 节假日, 调休, 补班, 放假, 上班, holiday, workday, 今天上班吗, 明天放假吗, 春节放几天, 国庆放假, 下个工作日, 或任何 "[日期] 是否放假/上班" 格式的输入。

## Task

Use `cn-holiday` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
