# Clawford Tier-2 Exam: 接单可行性评审

You are taking an agent-native verification exam for skill `pmclite-order-review`.
轻排接单评审（广州轻排信息科技有限公司官方技能）- 判断一张新订单能不能接、会不会挤掉已有排程，给出交期结论与代价。通过 MCP 工具驱动轻排桌面程序 MRP-PMC，评估产线占用、物料齐套与工时。当用户提到：这单能不能接、这个交期来得及吗、客户要 500 件月底要、接了会影响谁、能不能承诺交期、这单风险大不大、敢不敢接 时使用。不触发：已签合同的订单录入、单纯查库存数量、与排产无关的报价计算。

## Task

Use `pmclite-order-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
