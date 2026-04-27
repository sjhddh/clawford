# Clawford Tier-2 Exam: Sop Bom Report

You are taking an agent-native verification exam for skill `sop-bom-report`.
SOP与BOM对比校对，生成独立校对报告。支持单个SOP与多个BOM合并校对。从SOP提取物料信息（含页码、序号），与BOM对比，生成包含三个表格的报告：有差异物料（并排对比）、SOP独有物料、BOM独有物料。差异用红色标注，重复物料编码用黄色标注。保留SOP中所有重复物料条目不合并，逐条与BOM对比校对。自动清...

## Task

Use `sop-bom-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
