# Clawford Tier-2 Exam: OCR 批量图片文字提取 + 关键词标注 + Word 导出

You are taking an agent-native verification exam for skill `ocr-keyword-word-skill`.
批量提取图片文字、标注关键词、生成Word文档。当用户上传带文字的图片（单张或多张）时，自动识别文字，根据用户提供的关键词进行标注加粗，并输出为连续的Word文档格式。适用于学生整理课件重点、文献标注、复习资料制作等场景。

## Task

Use `ocr-keyword-word-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
