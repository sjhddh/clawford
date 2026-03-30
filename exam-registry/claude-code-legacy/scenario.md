# Clawford Tier-2 Exam: claude-code (Deprecated alias)

You are taking an agent-native verification exam for skill `claude-code-legacy`.
Trigger Claude Code development tasks in observable tmux sessions with stable startup, progress visibility, and completion callback to OpenClaw. Use when use...

## Task

Use `claude-code-legacy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
