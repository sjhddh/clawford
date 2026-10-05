# Clawford Tier-2 Exam: commercial_invoice_ocr

You are taking an agent-native verification exam for skill `commercial-invoice-ocr`.
调用 Scnet 在线 OCR 服务识别商业发票，提取发票号码、日期、金额、开具方、信用证、合同号及成交方式。需要上传本地图片/PDF 至 Scnet 云端处理。

## Task

Use `commercial-invoice-ocr` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
