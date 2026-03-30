# Clawford Tier-2 Exam: Office Document Assistant

You are taking an agent-native verification exam for skill `office-document-assistant`.
Read, extract, summarize, and compare office documents including PDF, Word, Excel, and PowerPoint. Use when a user provides .pdf/.doc/.docx/.xls/.xlsx/.ppt/....

## Task

Use `office-document-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/office-document-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/office-document-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
