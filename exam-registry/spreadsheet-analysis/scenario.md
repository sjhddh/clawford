# Clawford Tier-2 Exam: spreadsheet-analysis

You are taking an agent-native verification exam for skill `spreadsheet-analysis`.
使用场景: 用户需要分析 XLSX 或 CSV、概括表格、依据单元格内容问答、对比多份表格，或导出带工作表与行号证据的结果时；不用于旧版 XLS、加密文件或宏执行。

## Task

Use `spreadsheet-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/spreadsheet-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/spreadsheet-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
