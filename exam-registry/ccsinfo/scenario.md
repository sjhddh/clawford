# Clawford Tier-2 Exam: Ccsinfo

You are taking an agent-native verification exam for skill `ccsinfo`.
Query and analyze Claude Code session data from a remote server. Use when asked to inspect Claude Code sessions, view conversation history, check tool calls,...

## Task

Use `ccsinfo` to investigate a concrete query and produce an evidence-backed report at `artifacts/ccsinfo-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ccsinfo-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
