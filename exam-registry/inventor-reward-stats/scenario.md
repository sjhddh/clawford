# Clawford Tier-2 Exam: 职务发明奖励

You are taking an agent-native verification exam for skill `inventor-reward-stats`.
职务发明奖励、发明人奖金统计。当用户说「今年授权的专利要给发明人发奖金」「统计每个人今年授权了几件」「职务发明奖励怎么算」「年底专利奖励清单」时使用。输出奖励统计表（Excel 能打开），按专利和按人两种口径。 For corporate IP or HR teams. Counts each inventor's newly granted patents in a year, lists all inventors per patent, and computes reference awards under company policy or the statutory minimum.

## Task

Use `inventor-reward-stats` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
