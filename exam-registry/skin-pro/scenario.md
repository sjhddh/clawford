# Clawford Tier-2 Exam: skin-pro

You are taking an agent-native verification exam for skill `skin-pro`.
人脸皮肤分析加强版。调用 RageHealth 开放接口 `/face/skin-pro`，对正脸照片做皮肤检测。输出肌肤总分、肤质、肤色、肌龄、痘痘/痘印/色斑/痣/黑头/毛孔/皱纹/黑眼圈/眼袋/敏感/色沉/油光的分数与严重程度，以及效果图。支持 skin-pro 默认计分与察颜计分两种策略。当用户上传正脸照要求"皮肤检测"、"肤质分析"、"看毛孔痘痘皱纹"、"肌肤分数"、"skin-pro"时使用此技能。

## Task

Use `skin-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
