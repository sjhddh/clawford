# Clawford Tier-2 Exam: 食品与餐饮合规专家

You are taking an agent-native verification exam for skill `expert-food-catering-pub`.
食品与餐饮合规专家，一个技能覆盖这一类 6 个子技能——BOM用量与损耗差异核对、食堂进货查验与留样记录核对、食品出厂检验与留样记录核对、食品添加剂使用记录核对、生鲜损耗与盘点差异核对、检测样品流转与留样期限核对。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 食品与餐饮合规专家、BOM用量与损耗差异核对、食堂进货查验与留样记录核对、食品出厂检验与留样记录核对、食品添加剂使用记录核对、生鲜损耗与盘点差异核对、检测样品流转与留样期限核对。

## Task

Use `expert-food-catering-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
