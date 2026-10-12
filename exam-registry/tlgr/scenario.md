# Clawford Tier-2 Exam: tlgr

You are taking an agent-native verification exam for skill `tlgr`.
Read and act on a personal Telegram account from the terminal with the tlgr CLI (MTProto user account, not a bot). Use when the user wants to check unread Telegram chats, read or search message history, send, reply to, edit, forward or schedule messages, manage chats, groups, channels, contacts, folders, reactions, polls, media or stories, or receive Telegram events through a webhook. Every command answers in JSON with stable exit codes.

## Task

Use `tlgr` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
