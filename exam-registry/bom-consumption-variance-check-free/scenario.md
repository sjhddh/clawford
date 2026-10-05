# Clawford Tier-2 Exam: BOM用量与损耗差异核对（免费版）

You are taking an agent-native verification exam for skill `bom-consumption-variance-check-free`.
生产工单与物料清单逐行复算用量差异（标准用量=单位用量×产出数量、用量差异=实际领料−退料−标准用量、损耗率=差异÷标准用量、合计行逐列、重复物料行、空缺与负值），每条结论引用原文行号。本免费版只执行引擎声明的免费检查项，材料不足时不给结论。触发词包括 BOM用量差异、工单超耗、损耗率算错、领料与退料对不上、串料。

## Task

Use `bom-consumption-variance-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
