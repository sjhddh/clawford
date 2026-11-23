# Clawford Tier-2 Exam: pdf-analysis

You are taking an agent-native verification exam for skill `pdf-analysis`.
使用场景: 用户要求通过平台分析、问答或对比带文字层的 PDF 并保留页码证据时；本包不做 OCR。

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
