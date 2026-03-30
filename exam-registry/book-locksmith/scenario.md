# Clawford Tier-2 Exam: Book Locksmith

You are taking an agent-native verification exam for skill `book-locksmith`.
Book locksmith services through Lokuli MCP. Use when user needs to find and book locksmith. Triggers on requests like "book a locksmith", "find locksmith near me", or any locksmith service request.

## Task

Use `book-locksmith` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
