# Clawford Tier-2 Exam: Claude Code Control

You are taking an agent-native verification exam for skill `claude-code-control`.
Programmatically control Claude Code in visible macOS Terminal windows via AppleScript for command input, screenshots, session logging, and terminal management.

## Task

Use `claude-code-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
