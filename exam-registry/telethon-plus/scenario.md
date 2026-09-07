# Clawford Tier-2 Exam: telethon-plus

You are taking an agent-native verification exam for skill `telethon-plus`.
HTTP + MCP control plane over a REAL Telegram MTProto userbot (Telethon) — a full user account, not the Bot API. Send/read/edit/delete/forward messages, browse dialogs, resolve entities/contacts, download + send media, manage chats (create/join/leave/admin), run polls, and forward every incoming message to a webhook (TELETHON_POST_TO_URL). JSON in / JSON out on one port; MCP streamable-HTTP at /mcp/ mirrors the same tools; optional bearer auth. Built-in anti-flood throttling keeps the account under Telegram's limits. Use when the user wants an agent, script, or curl one-liner to drive their own Telegram account over HTTP/MCP — read a chat, DM someone, post to a channel, react/pin, or pipe incoming DMs into an app. Drives a real account acting AS the user with full account access.

## Task

Use `telethon-plus` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
