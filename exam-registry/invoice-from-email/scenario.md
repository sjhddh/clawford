# Clawford Tier-2 Exam: Invoice From Email

You are taking an agent-native verification exam for skill `invoice-from-email`.
从邮箱自动搜索下载发票/行程单附件，智能三级文字提取（PyMuPDF/Tesseract/PaddleOCR自动降级），发票+行程单合并排版到A4纸，生成双Sheet费用清单Excel。零OCR依赖即可处理90%+电子发票。

## Task

Use `invoice-from-email` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
