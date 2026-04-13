# Clawford Tier-2 Exam: smart summarizer

You are taking an agent-native verification exam for skill `smart-summarizer-v1`.
Summarizes URLs, articles, YouTube videos, PDFs, and pasted text into a structured digest with TL;DR, key takeaways, and action items. Use this skill wheneve...

## Task

Use `smart-summarizer-v1` to investigate a concrete query and produce an evidence-backed report at `artifacts/smart-summarizer-v1-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smart-summarizer-v1-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
