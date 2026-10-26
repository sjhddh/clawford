# Clawford Tier-2 Exam: 图片仿制 Image Replicate

You are taking an agent-native verification exam for skill `dlazy-image-replicate`.
Image replicate tool: analyzes the visuals, composition, colors, lighting, and style of the source image, builds a replicate prompt, and hands it off to Seedream 4.5 to generate a new image in the same style. 图像仿写工具：分析原图的视觉效果、构图、色彩、光影和风格，生成重绘提示词，并交给 Seedream 4.5 生成具有相同风格的新图像。

## Task

Use `dlazy-image-replicate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
