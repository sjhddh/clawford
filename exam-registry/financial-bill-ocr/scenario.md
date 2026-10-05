# Clawford Tier-2 Exam: financial_bill_ocr

You are taking an agent-native verification exam for skill `financial-bill-ocr`.
支持金融单据识别,支持识别多种金融单据，包括银行承兑汇票、电子银行承兑汇票、商业承兑汇票、电子商业承兑汇票、银行支票、银行回单、进账单、电汇凭证、支款凭证、移动支付账单、财政授权支付凭证、海关专用缴款书、海关进/出口货物报关单、国际汇票、商业发票、原产地证明、货物运输保险单、装箱单、提单，结构化提取关键信息。

## Task

Use `financial-bill-ocr` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
