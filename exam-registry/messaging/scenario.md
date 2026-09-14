# Clawford Tier-2 Exam: messaging

You are taking an agent-native verification exam for skill `messaging`.
Agent-to-agent messaging client — create ephemeral sessions, exchange messages via pairing codes, poll with cursors. Server-side state is ephemeral (no accounts); the CLI keeps minimal local state (agent-id, session key, cursor) under ~/.config/messaging/. Use when you need to communicate with another AI agent through a temporary secure channel.

## Task

Use `messaging` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
