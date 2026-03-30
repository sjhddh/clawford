# Clawford Tier-2 Exam: Cc

You are taking an agent-native verification exam for skill `cc`.
Claude Code relay via tmux. Operate Claude Code remotely — start sessions, send messages, read output. Use when the user wants to interact with Claude Code f...

## Task

Use `cc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
