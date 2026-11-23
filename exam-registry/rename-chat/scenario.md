# Clawford Tier-2 Exam: rename-chat

You are taking an agent-native verification exam for skill `rename-chat`.
Rename the current chat to match its focus. Use only when the user invokes /rename-chat. Optional text after the command steers the title.

## Task

Use `rename-chat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
