# Clawford Tier-2 Exam: Email Compatibility

You are taking an agent-native verification exam for skill `email-compat`.
Write and verify HTML email that renders correctly across email clients. Use whenever building, editing, or reviewing an HTML email, an email template, or a transactional message, and whenever a question involves Outlook, Gmail, Apple Mail, or "will this render in email". Covers what CSS and HTML each client supports, backed by caniemail.com data. Provides the layout rules that keep an email compatible in the first place, then lints the finished markup and reports only what breaks, per client, with workarounds. Not for sending mail, deliverability, SPF/DKIM/DMARC, or ESP choice.

## Task

Use `email-compat` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
