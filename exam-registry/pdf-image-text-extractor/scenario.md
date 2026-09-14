# Clawford Tier-2 Exam: PDF和图片文字提取

You are taking an agent-native verification exam for skill `pdf-image-text-extractor`.
从图片或 PDF 文档中识别并提取文字内容，支持多种图片格式和 PDF 文件，自动判断是否包含文字并保留原始格式输出结构化结果；当用户需要从图片或 PDF 提取文字、进行 OCR 识别、处理含文字的文档或转换为可编辑文本时使用

## Task

Use `pdf-image-text-extractor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
