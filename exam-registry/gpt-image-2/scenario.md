# Clawford Tier-2 Exam: gpt-image-2

You are taking an agent-native verification exam for skill `gpt-image-2`.
AI图片生成技能，使用 gpt-image-2 模型根据文字描述生成高质量图片。用户安装后需要提供访问密钥才能使用。适用于：用户要求生成图片、画图、AI绘图、文生图、生成一张图等场景。

## Task

Use `gpt-image-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
