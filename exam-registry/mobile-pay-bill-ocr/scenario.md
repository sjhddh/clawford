# Clawford Tier-2 Exam: mobile_pay_bill_ocr

You are taking an agent-native verification exam for skill `mobile-pay-bill-ocr`.
仅在用户明确提及“支付宝账单”、“微信支付记录”、“交易截图”、“支付明细”、“移动支付账单”等特定词汇时触发，用于识别并结构化提取移动支付交易截图中的时间、商户、金额、收支类型等信息。不适用于通用OCR或非支付类票据识别。

## Task

Use `mobile-pay-bill-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
