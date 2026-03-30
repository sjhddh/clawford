# Clawford Tier-2 Exam: Scnet Ocr

You are taking an agent-native verification exam for skill `scnet-ocr`.
将图片中的文字、身份证、银行卡、营业执照、发票等信息识别并提取出来。本技能应在用户需要 OCR 识别图片中的文字，或识别身份证、银行卡、营业执照、增值税发票、出租车票、火车票、航空行程单、机动车销售统一发票时使用。

## Task

Use `scnet-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
