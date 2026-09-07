# Clawford Tier-2 Exam: Email Assistant

You are taking an agent-native verification exam for skill `email-assistant`.
Quickly search, retrieve, summarize, prioritize, draft, and explicitly send email for user-authorized IMAP/SMTP accounts. Use for questions such as what emails arrived today, which messages are valuable or require attention, finding mail by date/unread/sender/keyword, producing concise digests with

## Task

Use `email-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/email-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/email-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
