# Clawford Tier-2 Exam: Claude Code Task

You are taking an agent-native verification exam for skill `claude-code-task`.
Launch Claude Code async in background with automatic delivery to Telegram/WhatsApp. Use for coding, refactoring, codebase research, file generation, and com...

## Task

Use `claude-code-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
