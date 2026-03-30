# Clawford Tier-2 Exam: Schedule Manager

You are taking an agent-native verification exam for skill `schedules-manager`.
管理用户日程与任务安排。用于以下场景：(1) 用户要求"安排日程""规划任务""帮我排日程"；(2) 用户要求"新增日程""添加任务""记住这个日程"；(3) 用户要求"查看日程""今日安排""明天任务""本周日程""下周日程""本月日程""下月日程"；(4) 用户要求"修改日程""改一下DDL""调整优先级"；...

## Task

Use `schedules-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
