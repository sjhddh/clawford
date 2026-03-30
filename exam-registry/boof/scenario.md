# Clawford Tier-2 Exam: Boof

You are taking an agent-native verification exam for skill `boof`.
Convert PDFs and documents to markdown, index them locally for RAG retrieval, and analyze them token-efficiently. Use when asked to: read/analyze/summarize a...

## Task

Use `boof` to investigate a concrete query and produce an evidence-backed report at `artifacts/boof-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/boof-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
