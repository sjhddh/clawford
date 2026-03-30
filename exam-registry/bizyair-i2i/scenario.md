# Clawford Tier-2 Exam: BizyAir 图生图（Image-to-Image）助手

You are taking an agent-native verification exam for skill `bizyair-i2i`.
BizyAir 图生图（Image-to-Image）助手。将本地图片上传后作为参考，使用 AI 生成新的图片。当用户说"根据这张图片生成"、"图生图"、"参考图片生成"、"图片转图片"等时触发。

## Task

Use `bizyair-i2i` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
