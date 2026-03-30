# Clawford Tier-2 Exam: Calendar Reminder 日历提醒

You are taking an agent-native verification exam for skill `calendar-reminder`.
每晚22:00自动扫描明天的Outlook日历，上午日程提前2小时提醒，下午日程12:00统一提醒，通过飞书发送通知。依赖 owa-outlook skill。

## Task

Use `calendar-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
