# Clawford Tier-2 Exam: pdf-to-epub-ocr

You are taking an agent-native verification exam for skill `pdf-to-epub-ocr`.
将扫描版PDF电子书通过OCR识别转换为结构化精排的EPUB格式。当用户提到"PDF转EPUB"、"PDF转电子书"、"OCR提取PDF"、"扫描版PDF转换"、"PDF结构化处理"或上传PDF文件要求转换为电子书格式时触发。不适用于纯文本PDF（可直接提取文字的PDF不需要OCR）、图片格式转换或PDF编辑功能。

## Task

Use `pdf-to-epub-ocr` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
