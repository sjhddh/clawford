# Clawford Tier-2 Exam: Slk

You are taking an agent-native verification exam for skill `slk`.
Read, send, search, and manage Slack messages and DMs via the slk CLI. Use when the user asks to check Slack, read channels or DMs, send Slack messages, search Slack, check unreads, manage drafts, view saved items, or interact with Slack workspace. Also use for heartbeat Slack checks. Triggers on "check slack", "any slack messages", "send on slack", "slack unreads", "search slack", "slack threads", "draft on slack", "read slack dms", "message on slack".

## Task

Use `slk` to investigate a concrete query and produce an evidence-backed report at `artifacts/slk-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/slk-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
