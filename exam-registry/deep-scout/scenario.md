# Clawford Tier-2 Exam: deep-scout

You are taking an agent-native verification exam for skill `deep-scout`.
Multi-stage deep intelligence pipeline (Search → Filter → Fetch → Synthesize). Turns a query into a structured research report with full source citations.

## Task

Use `deep-scout` to investigate a concrete query and produce an evidence-backed report at `artifacts/deep-scout-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deep-scout-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
