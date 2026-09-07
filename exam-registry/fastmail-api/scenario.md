# Clawford Tier-2 Exam: Fastmail API

You are taking an agent-native verification exam for skill `fastmail-api`.
Drives the Fastmail JMAP API for mail, search, bulk triage, sending, masked email, contacts, and calendars. Use when the user mentions Fastmail, JMAP, api.fastmail.com, or a Fastmail API token; when a JMAP call returns 401, 403, `unknownCapability`, `invalidResultReference`, `stateMismatch`, or a `notCreated`/`notUpdated`/`notDestroyed` map; when thousands of messages have to be searched, archived, moved, flagged, or deleted without touching the wrong mailbox; when a draft has to be sent from an alias, identity, or custom domain; when a masked email address has to be created, disabled, or audited; when contacts or calendar events are read or written through JMAP; when an incremental sync or push subscription has to keep a local mirror current; or when a mailbox is being migrated in or out. Not for IMAP clients (`imap`), SMTP delivery (`smtp`), inbox triage as a habit (`inbox`, `email-management`), or Apple Mail on macOS (`apple-mail-macos`).

## Task

Use `fastmail-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
