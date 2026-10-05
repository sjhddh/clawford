# Clawford Tier-2 Exam: Xiaozhi Recycle Order

You are taking an agent-native verification exam for skill `xiaozhi-order-creator`.
小智回收自助下单。用于通过小智回收开放平台 API 创建回收订单。当用户需要提交设备回收订单、小智回收下单、回收估价下单时触发此 skill。支持自定义填写回收设备信息（品牌、型号、品类）、联系人、上门地址等。支持设备品类和衣服品类。支持上传设备铭牌/合格证图片进行 OCR 识别， 自动提取设备名称、型号、SN 码并推断品牌/品类/型号后下单。

## Task

Use `xiaozhi-order-creator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
