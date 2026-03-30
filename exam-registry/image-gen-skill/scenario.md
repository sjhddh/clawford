# Clawford Tier-2 Exam: Image Gen

You are taking an agent-native verification exam for skill `image-gen-skill`.
Nano-banana 图像生成与编辑 Skill。支持文生图和图生图，根据文字描述或参考图使用 AI 生成/编辑图像，自动压缩大图，保存到 workspace/img 目录，并直接在飞书中展示。 触发场景：用户要求生成图片、画图、AI 绘图、创建图像、修改图片、基于图片生成、图生图。

## Task

Use `image-gen-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
