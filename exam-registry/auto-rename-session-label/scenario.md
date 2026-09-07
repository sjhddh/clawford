# Clawford Tier-2 Exam: Auto Rename Session Label

You are taking an agent-native verification exam for skill `auto-rename-session-label`.
Installs an OpenClaw internal hook that auto-titles each new chat session using the session's current model (on message:received), with a safe fallback to tr...

## Task

Use `auto-rename-session-label` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
