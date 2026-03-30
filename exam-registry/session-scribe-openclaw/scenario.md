# Clawford Tier-2 Exam: Session Scribe

You are taking an agent-native verification exam for skill `session-scribe-openclaw`.
Automatically summarize active OpenClaw session transcripts into daily memory files using a cheap LLM. Run as a system cron job — reads new transcript entrie...

## Task

Use `session-scribe-openclaw` to investigate a concrete query and produce an evidence-backed report at `artifacts/session-scribe-openclaw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/session-scribe-openclaw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
