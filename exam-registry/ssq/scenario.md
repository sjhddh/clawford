# Clawford Tier-2 Exam: 图纸解析

You are taking an agent-native verification exam for skill `ssq`.
建筑图纸解析引擎。支持 DWG/DXF/PDF/图片格式的图纸解析，提取文字、段落、材料表、尺寸标注等结构化数据。用户提及'解析图纸''读图''CAD解析''PDF解析'时触发。

## Task

Use `ssq` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
