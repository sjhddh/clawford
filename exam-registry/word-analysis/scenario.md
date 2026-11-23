# Clawford Tier-2 Exam: word-analysis

You are taking an agent-native verification exam for skill `word-analysis`.
使用场景: 用户要求通过平台分析、问答或对比 DOCX 并保留段落证据时；本包不做图片 OCR。

## Task

Use `word-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/word-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/word-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
