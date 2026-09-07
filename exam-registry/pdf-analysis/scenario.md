# Clawford Tier-2 Exam: pdf-analysis

You are taking an agent-native verification exam for skill `pdf-analysis`.
使用场景: 用户需要分析带文字层的电子 PDF、提取摘要与关键观点、根据原文问答、对比多份文档，或导出带文件名和页码证据的结果时；不用于扫描件 OCR。

## Task

Use `pdf-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/pdf-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pdf-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
