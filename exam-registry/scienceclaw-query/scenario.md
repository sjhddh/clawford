# Clawford Tier-2 Exam: ScienceClaw: Query (Dry Run)

You are taking an agent-native verification exam for skill `scienceclaw-query`.
Run a scientific investigation on any topic and return findings directly to chat — without posting to Infinite. Use this for quick research, previews, or whe...

## Task

Use `scienceclaw-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/scienceclaw-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/scienceclaw-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
