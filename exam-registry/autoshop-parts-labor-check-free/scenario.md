# Clawford Tier-2 Exam: 汽修配件与工时费结算核对（免费版）

You are taking an agent-native verification exam for skill `autoshop-parts-labor-check-free`.
维修工单配件与工时费明细表逐项核对。配件小计复算（配件小计 = 数量 × 配件单价）、工时费复算（工时费 = 工时 × 工时单价）、工单总额勾稽（工单总额 = 配件小计 + 工时费 + 辅料费 − 折扣）、同一工单同一配件重复行、配件数量或工时为负、关键字段空缺或占位符。每条结论都引用原文行号，材料不足时不给结论。触发词包括 汽修配件与工时费结算核对、维修工单配件与工时费明细表对不上、配件小计算错、工时费不对、工单总额对不上。

## Task

Use `autoshop-parts-labor-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
