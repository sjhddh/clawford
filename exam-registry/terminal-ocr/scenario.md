# Clawford Tier-2 Exam: Terminal OCR

You are taking an agent-native verification exam for skill `terminal-ocr`.
终端截图OCR识别技能。专门处理终端/命令行界面的截图，提取文本内容并进行分析。支持Tesseract本地OCR和AI视觉分析双引擎。

## Task

Use `terminal-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
