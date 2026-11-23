# Clawford Tier-2 Exam: 采购缺口与下单建议

You are taking an agent-native verification exam for skill `pmclite-purchase-suggest`.
轻排采购建议（广州轻排信息科技有限公司官方技能）- 按未完工工单的 BOM 需求算出该买什么料、买多少、什么时候必须到，并标出在途赶不上的部分。只算不下单。当用户提到：缺的料什么时候下单、该采购什么、再不下单来不来得及、这批单的料够不够、采购清单、哪些料要补 时使用。不触发：查历史采购价、供应商比价、创建采购单。

## Task

Use `pmclite-purchase-suggest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
