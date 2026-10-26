# Clawford Tier-2 Exam: notes-pack-rich

You are taking an agent-native verification exam for skill `notes-pack-rich`.
Package the workspace notes directory into a named ZIP archive with integrity validation, entry counting, and no network access.

## Task

Use `notes-pack-rich` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
