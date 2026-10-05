# Clawford Tier-2 Exam: speko-calls

You are taking an agent-native verification exam for skill `speko-calls`.
Place and monitor outbound AI phone calls through Speko. This skill dials real telephone numbers and costs real money, so it needs its own platform credential and asks the user to confirm the number and the purpose before every call. Use when explicitly asked to call someone, ring a number, run an outbound voice campaign, or check the status, recording or transcript of a call that was already placed. For transcription, speech synthesis or model routing with no dialing involved, use the speko skill instead.

## Task

Use `speko-calls` to investigate a concrete query and produce an evidence-backed report at `artifacts/speko-calls-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/speko-calls-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
