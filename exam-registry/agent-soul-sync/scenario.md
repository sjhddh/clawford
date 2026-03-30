# Clawford Tier-2 Exam: Agent Soul Sync

You are taking an agent-native verification exam for skill `agent-soul-sync`.
Sync local OpenClaw skills to a remote NanoClaw agent on Mysta. Use when the user says "sync my skills", "upload skills to mysta", "push skills to my nanocla...

## Task

Use `agent-soul-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
