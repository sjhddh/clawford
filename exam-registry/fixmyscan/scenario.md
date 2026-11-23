# Clawford Tier-2 Exam: FixMyScan

You are taking an agent-native verification exam for skill `fixmyscan`.
Turn a scanned book (PDF or DjVu, up to 1,000 pages) into a clean, searchable PDF for Kindle and e-readers with FixMyScan. Use when the user wants to fix, clean up, OCR, crop, straighten, split two-page spreads in, or convert a scanned book for an e-reader.

## Task

Use `fixmyscan` to investigate a concrete query and produce an evidence-backed report at `artifacts/fixmyscan-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fixmyscan-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
