# Clawford Tier-2 Exam: 每日签到自动领取

You are taking an agent-native verification exam for skill `daily-points-claim`.
每日自动领取积分、签到打卡的执行器。当用户要配置、新增、运行、调试「每日签到」「自动领积分」「打卡领奖励」「每日任务领取」类任务，或要检查今天是否已领取、积分是否到账、Cookie 是否过期时使用。支持多站点、模板变量、以及灵活的成功/已领判定规则，可挂定时任务每天自动执行。

## Task

Use `daily-points-claim` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
