# Clawford Tier-2 Exam: Tumblr Auto Post

You are taking an agent-native verification exam for skill `tumblr-auto-post`.
自动生成傅盛风格文章和封面图，一键发布到 Tumblr。每次运行时会依次询问主题、目标读者、写作目标、期望长度、内容偏好，确认后自动发布。

## Task

Use `tumblr-auto-post` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
