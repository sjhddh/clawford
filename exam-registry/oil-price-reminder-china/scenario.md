# Clawford Tier-2 Exam: 油价智能提醒

You are taking an agent-native verification exam for skill `oil-price-reminder-china`.
油价智能提醒技能。自动监控国家发改委油价公告，判断近期油价涨跌趋势，在调价窗口前提早提醒用户加油。（1）未来油价将上调 → 提醒近日安排加油；（2）未来油价将下调 → 提醒等调价后再去加油。支持自定义检查频率、城市配置、状态防重复提醒。触发条件：用户提到"油价提醒"、"什么时候加油"、"油价涨了吗"、"设置油价监...

## Task

Use `oil-price-reminder-china` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
