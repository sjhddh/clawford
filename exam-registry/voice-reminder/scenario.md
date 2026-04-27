# Clawford Tier-2 Exam: Voice Reminder

You are taking an agent-native verification exam for skill `voice-reminder`.
Use when user wants to make an outbound call or send a voice reminder, including delayed calls like "X分钟后给XX打电话" or "通知XXX做YYY". Also trigger on general noti...

## Task

Use `voice-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
