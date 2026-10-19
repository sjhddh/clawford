# Clawford Tier-2 Exam: 危险化学品出入库与领用台账核对（免费版）

You are taking an agent-native verification exam for skill `chemical-inventory-check-free`.
危险化学品出入库与领用台账逐项核对，每条结论都带原文行号与原文依据。本免费版只执行 6 项，即 数量勾稽、账实核对、领用与退库勾稽、重复登记检测、合计行逐列复核、空白占位符数值格式与负数检测。不执行 5 项，例如 超量储存、复检有效期到期、双人复核缺失、储存条件记录缺失与台账期间不连续、分品名分仓库汇总清单。触发词包括 危险化学品出入库与领用台账核对、危化品出入库与领用台账对不上。

## Task

Use `chemical-inventory-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
