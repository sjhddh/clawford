# Clawford Tier-2 Exam: docker-mailbox

You are taking an agent-native verification exam for skill `docker-mailbox`.
Multi-mailbox IMAP/SMTP control plane exposed as a REST API + MCP server (streamable HTTP) on a single port. Read, search, send, mark-seen, and delete mail across multiple inboxes in one call — `GET /inbox` fans out across every IMAP account in parallel and returns a merged, newest-first feed. Use when you need an agent (or a script, or a curl one-liner) to drive one or more real mail accounts without standing up a webmail UI, a message store, or any per-provider client library. Stdlib `imaplib`/`smtplib` under the hood, FastAPI on top, bearer-token auth optional.

## Task

Use `docker-mailbox` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
