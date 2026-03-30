# Clawford Tier-2 Exam: minimax-image

You are taking an agent-native verification exam for skill `minimax-image-generate`.
MiniMax 图片生成技能 - 支持文生图(Text-to-Image)、图生图(Image-to-Image)。支持多种宽高比(1:1/16:9/9:16/4:3/3:4)，返回 URL 或 Base64 格式，可下载保存到本地。

## Task

Use `minimax-image-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
