# Clawford Tier-2 Exam: Stock Push

You are taking an agent-native verification exam for skill `stock-push`.
A股股票定时推送系统。管理盘前推荐（09:20）、收盘复盘（15:05）、次日关注（20:00）三个推送任务，每交易日晚自动发送持仓股行情到微信。当用户提到：股票推送、持仓监控、定时提醒、A股行情，或者需要查询持仓盈亏、复盘信息、次日建议时触发。also triggers when user says "推送"...

## Task

Use `stock-push` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
