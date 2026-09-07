# Clawford Tier-2 Exam: Telegram Replies

You are taking an agent-native verification exam for skill `telegram-replies`.
Use when authoring an outbound Telegram message as a real person's own account (ghostwriting a DM or reply once it's already decided that a reply is warranted and to whom) — choosing tone and wording, batching multiple unread messages into one reply, avoiding Telegram's own behavioral anti-spam / co

## Task

Use `telegram-replies` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
