# Clawford Tier-2 Exam: CAD Editor

You are taking an agent-native verification exam for skill `cad-editor`.
CAD制图编辑器 — 用自然语言生成工程图纸（建筑平面图/机械零件/电气布置/管道系统/结构详图）。 支持DXF文件创建、渲染预览、批量导出。触发词：画平面图、CAD、工程图、建筑图、机械图、电气图、 管道图、结构图、画线/圆/矩形/多边形、尺寸标注、DXF、AutoCAD、施工图、配筋图、齿轮、轴承、 阀门、弯...

## Task

Use `cad-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
