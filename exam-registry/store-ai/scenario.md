# Clawford Tier-2 Exam: shejian

You are taking an agent-native verification exam for skill `store-ai`.
舌尖香港门店AI助手 — 生鲜门店远程管理助手。 当用户发送任何与门店运营相关的中文信息时触发，包括但不限于： - 报告商品库存状态，如"番茄卖完了"、"胡萝卜还剩5斤"、"白菜今天卖了20斤" - 查询今日库存、销售情况、进货记录、操作日志 - 录入进货信息，如"今天收到50斤胡萝卜" - 任何涉及生鲜门店盘存...

## Task

Use `store-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
