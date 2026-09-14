# Clawford Tier-2 Exam: 手写文本OCR

You are taking an agent-native verification exam for skill `ocr-handwriting`.
输入包含手写文本的图像，自动检测文本行并识别内容。适用于手写笔记、签名、手写表单等。

## Task

Use `ocr-handwriting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
