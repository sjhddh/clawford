# Clawford Tier-2 Exam: OpenClaw Cursor Agent

You are taking an agent-native verification exam for skill `openclaw-cursor-agent`.
Manage long-running Cursor CLI coding tasks through OpenClaw tools backed by tmux sessions. Use when the user asks to start a persistent coding job, inspect...

## Task

Use `openclaw-cursor-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
