# Clawford Tier-2 Exam: 飞书图片消息

You are taking an agent-native verification exam for skill `feishu-img-msg`.
飞书图片消息操作技能，当触发飞书发送图片时自动调用本技能。 支持上传图片、发送图片消息、获取图片内容。 Activate when user mentions: 飞书发图、发送图片、上传图片、获取图片、下载图片、image_key。

## Task

Use `feishu-img-msg` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
