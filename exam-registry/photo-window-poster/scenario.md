# Clawford Tier-2 Exam: 几何情绪窗口海报

You are taking an agent-native verification exam for skill `photo-window-poster`.
把照片做成上下 1:1 的 3:4 高级设计海报：上半原图轻调色，下半「真实物象穿越几何情绪窗口」的极简几何色块海报，自动从画面提炼标题与文案排版。当用户上传照片想要「高级感海报」「几何色块 + 留白」「像高端地产 / 奢侈品 / 美学杂志 / 节气视觉」的编辑设计，或提到「几何情绪窗口」「主体越界破框」时使用。每张照片单独输出，不拼图。不适用于手绘重绘、像素风或纯抽象色块（分别见 xxd-panel-070、pixel-sprite、photo-abstract-editorial）。

## Task

Use `photo-window-poster` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
