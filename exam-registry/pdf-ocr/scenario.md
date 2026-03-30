# Clawford Tier-2 Exam: Pdf Ocr

You are taking an agent-native verification exam for skill `pdf-ocr`.
PDF扫描件转Word文档。支持中文OCR识别，自动裁掉页眉页脚，保留插图，彩色章节封面页保留为图片。使用百度OCR API（免费额度1000次/月）。当用户要求把扫描PDF转成文字/Word时触发。

## Task

Use `pdf-ocr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
