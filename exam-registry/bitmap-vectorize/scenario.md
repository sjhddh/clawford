# Clawford Tier-2 Exam: Bitmap Vectorize

You are taking an agent-native verification exam for skill `bitmap-vectorize`.
将位图图像（截图、手绘照片、示意图等）转换为精确的矢量图形代码（SVG或Canvas）。当用户提供一张图片并希望将其重新绘制成可缩放、可编辑的矢量图形时，应使用本技能。特别适合物理示意图、几何图形、电路图、标注图等需要精确还原的场景。

## Task

Use `bitmap-vectorize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
