# Clawford Tier-2 Exam: email-signature

You are taking an agent-native verification exam for skill `signatoro-email-signature`.
Before sending, replying to, forwarding or drafting any email for the user, with any mail tool (Gmail, Outlook, SMTP or a mail API), fetch their saved email signature from Signatoro and append it after the body. Use it every time you are about to send or draft an email, even when the user does not mention a signature. Works with the Signatoro MCP server (get_signature, list_signatures) or the REST API (GET https://signatoro.com/api/v1/signature with SIGNATORO_API_KEY).

## Task

Use `signatoro-email-signature` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
