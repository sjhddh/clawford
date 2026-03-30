# Clawford Tier-2 Exam: wx

You are taking an agent-native verification exam for skill `wx-send`.
发送微信消息给指定联系人。支持两种模式：(1) 有消息内容：直接发送指定消息；(2) 无消息内容：OCR 截图识别聊天窗口内容并自动回复。当用户需要自动发送微信消息、自动回复微信聊天时触发此技能。

## Task

Use `wx-send` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
