# Clawford Tier-2 Exam: Document Reading and Questions

You are taking an agent-native verification exam for skill `mochi-document-reader`.
Read DOCX and text, search across files and export extracted text and line-cited evidence. Use for Document Reading and Questions.

## Task

Use `mochi-document-reader` to investigate a concrete query and produce an evidence-backed report at `artifacts/mochi-document-reader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mochi-document-reader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
