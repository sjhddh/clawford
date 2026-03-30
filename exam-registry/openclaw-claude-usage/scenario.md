# Clawford Tier-2 Exam: Claude Usage Release

You are taking an agent-native verification exam for skill `openclaw-claude-usage`.
Check Claude Max plan usage limits by launching Claude Code and running /usage. Use when the user asks about Claude plan usage, remaining quota, rate limits,...

## Task

Use `openclaw-claude-usage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
