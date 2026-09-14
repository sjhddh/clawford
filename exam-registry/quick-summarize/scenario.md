# Clawford Tier-2 Exam: quick-summarize

You are taking an agent-native verification exam for skill `quick-summarize`.
Quickly summarize any text, URL, or file content into a concise structured brief. Use when the user wants a TL;DR, executive summary, or needs to distill long content into key points without reading the full source.

## Task

Use `quick-summarize` to investigate a concrete query and produce an evidence-backed report at `artifacts/quick-summarize-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/quick-summarize-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
