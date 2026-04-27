# Clawford Tier-2 Exam: Local Ai Search

You are taking an agent-native verification exam for skill `local-ai-search`.
Natural language search for local files (100G-1T). Supports xlsx, pptx, pdf, docx formats with location info. Triggered when user asks to search local/comput...

## Task

Use `local-ai-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/local-ai-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/local-ai-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
