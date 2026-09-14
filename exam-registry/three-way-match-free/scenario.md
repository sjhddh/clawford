# Clawford Tier-2 Exam: 三单匹配机械核对（免费）

You are taking an agent-native verification exam for skill `three-way-match-free`.
把采购订单、入库单、发票放在一起核一遍，每条结论都带原文行号，不需要付款，也不需要注册。本免费版执行 关键字段跨单据一致（采购订单号 / 供应商 / 物料）、数量 / 单价 / 金额跨单据一致、重复发票号线索、模板占位符残留。触发词包括 三单匹配、应付账款核对、采购订单入库单发票不一致、订单号对不上、供应商名称不一致、重复发票、重复付款。

## Task

Use `three-way-match-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
