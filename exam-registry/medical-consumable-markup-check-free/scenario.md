# Clawford Tier-2 Exam: 医院耗材加成与零差率核对（免费版）

You are taking an agent-native verification exam for skill `medical-consumable-markup-check-free`.
医院/诊所每月结账与物价检查前的卫生耗材核对表逐项复算（结存数量 = 期初 + 入库 − 出库、结存金额 = 结存数量 × 采购单价、加成率 =（收费价 − 采购单价）÷ 采购单价、合计行勾稽、重复行与空缺检测），每条结论引用原文行号，第三方可用同一份输入复算。触发词包括 医院耗材加成与零差率核对、耗材进销存对不上、加成率算错、零差率、结存金额不符。本免费版只执行 7 项，即 结存数量勾稽、结存金额勾稽、加成率勾稽÷ 采购单价 = 加成率等。不执行 4 项判定，例如 零差率耗材被加价判定 —— 逐项给出单件价差与影响金额。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `medical-consumable-markup-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
