# Clawford Tier-2 Exam: bank_check_ocr

You are taking an agent-native verification exam for skill `bank-check-ocr`.
仅在用户明确提及“银行支票”、“支票号码”、“支票金额”、“支票识别”等特定词汇时触发，用于识别银行支票上的关键信息（号码、日期、大小写金额、签章等）。不适用于通用 OCR 或非支票类图像识别。

## Task

Use `bank-check-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
