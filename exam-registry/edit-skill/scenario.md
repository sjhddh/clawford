# Clawford Tier-2 Exam: Edit Skill

You are taking an agent-native verification exam for skill `edit-skill`.
Use when asked to review, edit, tighten, shorten, deduplicate, clean up, or remove slop from an existing agent skill while preserving behavior. Use for skill...

## Task

Use `edit-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
