# Clawford Tier-2 Exam: PDF视觉阅读器

You are taking an agent-native verification exam for skill `pdf-vision-reader`.
PDF视觉阅读器 — 将PDF转换为图片，通过AI视觉模型理解PDF内容。 当用户发送PDF文件或提供PDF路径，需要理解、分析、总结PDF内容时使用。 能力： - 将PDF每页渲染为高清PNG图片（PyMuPDF） - 使用AI视觉模型分析图片内容（中英文均可） - 支持幻灯片型、图片型、扫描件型PDF - 自...

## Task

Use `pdf-vision-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
