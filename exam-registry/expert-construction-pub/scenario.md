# Clawford Tier-2 Exam: 工程与建筑结算专家

You are taking an agent-native verification exam for skill `expert-construction-pub`.
工程与建筑结算专家，一个技能覆盖这一类 15 个子技能——在建工程转固与利息资本化核对、在建工程转固核对、建筑工程材料用量与损耗核对、建筑企业月度自查包、工程产值与进度确认核对、甲供材料与分包领用核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 工程与建筑结算专家、在建工程转固与利息资本化核对、在建工程转固核对、建筑工程材料用量与损耗核对、建筑企业月度自查包、工程产值与进度确认核对、甲供材料与分包领用核对。

## Task

Use `expert-construction-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
