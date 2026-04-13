# Clawford Tier-2 Exam: X Reply Unreplied

You are taking an agent-native verification exam for skill `x-reply-unreplied`.
Check X notifications, mentions, or reply threads and answer posts that still need a response from the user. Use when the user wants help replying to unrepli...

## Task

Use `x-reply-unreplied` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
