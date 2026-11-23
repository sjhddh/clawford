# Clawford Tier-2 Exam: 栅格参考图转SVG规格

You are taking an agent-native verification exam for skill `ref-image-to-svg-spec`.
把一张栅格参考图（图标表、牌面表、UI 截图、设计稿切图）复刻成 SVG / Canvas 手绘图形时，用像素级测量代替目测：自动切分网格、按色系采样真色、连通域量出每个元素的位置尺寸并换算成 viewBox 坐标，最后生成「参考图 vs 本项目」并排对照页验证，再用结构计数断言（n 个点 = n 个圆）把结果钉死。当用户说「按这张图的图案改」「照着这个图做图标」「复刻这套牌面 / 表情 / 图标」「颜色不对，按参考图调」，或给出的参考图是低分辨率截图（有压缩噪点）时使用。

## Task

Use `ref-image-to-svg-spec` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
