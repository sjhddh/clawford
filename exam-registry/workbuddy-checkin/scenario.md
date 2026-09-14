# Clawford Tier-2 Exam: WorkBuddy Check-in

You are taking an agent-native verification exam for skill `workbuddy-checkin`.
WorkBuddy 每日积分自动签到。自动解密本地登录令牌，调用官方签到 API 完成每日积分领取（100 积分/天，连续第 7 天 1000 积分），并支持配置定时任务。触发词：WorkBuddy 签到、每日积分、check-in、credits。

## Task

Use `workbuddy-checkin` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
