# Clawford Tier-2 Exam: Whiteboard Animation

You are taking an agent-native verification exam for skill `whiteboard-animation`.
从图片生成白板手绘动画视频。将任意彩色图片转换为包含线稿绘制和上色两个阶段的动画，带手部覆盖效果，输出 H.264 MP4 视频。支持单张和批量两种模式。当用户说"把图片做成白板动画"、"白板动画"、"批量白板动画"时触发。

## Task

Use `whiteboard-animation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
