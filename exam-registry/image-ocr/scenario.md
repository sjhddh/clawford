# Clawford Tier-2 Exam: 图片文字识别

You are taking an agent-native verification exam for skill `image-ocr`.
从图片/PDF扫描件批量提取中文、英文、数字、表格、代码和算式；支持裁剪、并行、断点续跑和低置信度标注

## Task

Use `image-ocr` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
