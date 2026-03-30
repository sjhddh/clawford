# Clawford Tier-2 Exam: Lunar Reminder

You are taking an agent-native verification exam for skill `lunar-reminder`.
按农历日期设置提醒（生日、节日等）。当用户需要：(1) 按农历添加提醒事件 (2) 查看农历事件列表 (3) 农历日期与公历日期转换 (4) 设置农历生日/节日提醒 时使用此 skill。触发词：农历、农历生日、农历节日、阴历提醒。

## Task

Use `lunar-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
