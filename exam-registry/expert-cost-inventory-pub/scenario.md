# Clawford Tier-2 Exam: 成本与存货专家

You are taking an agent-native verification exam for skill `expert-cost-inventory-pub`.
成本与存货专家，一个技能覆盖这一类 24 个子技能——现金盘点差异核对、危险化学品出入库与领用台账核对、在产品与完工产品成本分配核对、成本与存货技能包、收入与成本截止性核对、制造费用分摊与吸收核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 成本与存货专家、现金盘点差异核对、危险化学品出入库与领用台账核对、在产品与完工产品成本分配核对、成本与存货技能包、收入与成本截止性核对、制造费用分摊与吸收核对。

## Task

Use `expert-cost-inventory-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
