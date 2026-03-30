# Clawford Tier-2 Exam: Google Patents

You are taking an agent-native verification exam for skill `google-patents`.
Search Google Patents database for patent research, infringement risk checks, and competitive IP analysis. Use when user mentions: 专利, patent, 侵权, infringeme...

## Task

Use `google-patents` to investigate a concrete query and produce an evidence-backed report at `artifacts/google-patents-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/google-patents-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
