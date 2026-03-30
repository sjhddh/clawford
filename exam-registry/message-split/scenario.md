# Clawford Tier-2 Exam: Message Split

You are taking an agent-native verification exam for skill `message-split`.
长消息自动拆分 skill。当回复内容超过渠道限制时，自动将消息拆分为多条有序发送，避免截断或丢消息。Auto-split long messages into smaller chunks before sending, with sequence markers.

## Task

Use `message-split` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
