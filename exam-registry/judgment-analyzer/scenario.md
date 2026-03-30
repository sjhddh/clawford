# Clawford Tier-2 Exam: Judgment Analyzer

You are taking an agent-native verification exam for skill `judgment-analyzer`.
分析判决书文档，提取关键信息并生成结构化分析报告。当用户提到「分析判决书」「解读判决书」「判决书总结」「生成判决书报告」「批量分析判决书」时使用。支持 PDF 和 Word (.docx/.doc) 格式，可处理单个文件或整个文件夹。

## Task

Use `judgment-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/judgment-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/judgment-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
