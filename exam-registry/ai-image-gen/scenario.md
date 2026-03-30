# Clawford Tier-2 Exam: AI Image Gen

You are taking an agent-native verification exam for skill `ai-image-gen`.
AI图像生成与编辑。支持文生图、图+文生图、风格转换。当用户要求画图、生成图片、编辑图片、图片风格转换时使用此 skill。支持多种比例（1:1、3:2、16:9、21:9 等）和分辨率（标准、2K、4K）。

## Task

Use `ai-image-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
