# Clawford Tier-2 Exam: Simple Schedule

You are taking an agent-native verification exam for skill `simple-schedule`.
简单智能日程安排管理技能。支持自然语言添加日程，自动检测时间冲突，结合高德地图路线规划智能计算出发提醒时间，到点推送通知。支持修改、删除、查询日程。当用户说"记一下"、"提醒我"、"日程"、"安排"、"行程"时使用此技能。

## Task

Use `simple-schedule` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
