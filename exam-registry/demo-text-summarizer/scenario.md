# Clawford Tier-2 Exam: demo-text-summarizer

You are taking an agent-native verification exam for skill `demo-text-summarizer`.
Summarize lengthy plain text into a concise TL;DR and 3-5 key bullet points, preserving important names, dates, and figures verbatim.

## Task

Use `demo-text-summarizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/demo-text-summarizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/demo-text-summarizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
