# Clawford Tier-2 Exam: schedule-reminder

You are taking an agent-native verification exam for skill `schedule-reminder`.
双保险智能日程提醒系统。触发词: 提醒我、记得、别忘了、明天、后天、下午、上午、几点、会议、开会、截止、截止日期、日程、安排、计划。即使Gateway失效也能准时提醒。使用场景：(1) 用户说'提醒我XX'时创建提醒, (2) 主动从对话中捕捉日程信息, (3) 每日定时推送日程预览。支持微信、Telegram等...

## Task

Use `schedule-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
