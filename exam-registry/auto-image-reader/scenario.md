# Clawford Tier-2 Exam: Auto Image Reader

You are taking an agent-native verification exam for skill `auto-image-reader`.
自动读取用户上传的图片。当用户发送图片时（通过飞书/Telegram等渠道），系统会在消息中附带图片路径。触发后自动读取图片内容并理解，无需手动查找路径。

## Task

Use `auto-image-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
