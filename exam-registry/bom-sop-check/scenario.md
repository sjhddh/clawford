# Clawford Tier-2 Exam: BOM与SOP校对

You are taking an agent-native verification exam for skill `bom-sop-check`.
BOM与SOP对比校对技能。支持多个BOM文件合并后与SOP对比，检测名称规格、位号、数量差异，在SOP文件中标注差异、追加BOM数据并生成报告。校对报告包含：SOP独有物料、BOM独有物料、数量差异明细三个表格。触发场景：用户发送BOM和SOP文件要求对比校对。

## Task

Use `bom-sop-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
