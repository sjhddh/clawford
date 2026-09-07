# Clawford Tier-2 Exam: zhuanzhuan

You are taking an agent-native verification exam for skill `zhuanzhuan`.
转转二手助手：帮用户在转转买二手、查成交行情、估价回收、识别型号、查订单与物流。当用户想买卖闲置、查二手行情或估价回收时使用。不用于代下单、支付、查回收单与打款进度；订单与物流仅提供列表页链接，不返回具体详情与进度。

## Task

Use `zhuanzhuan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
