# Clawford Tier-2 Exam: Dispatch (Claude Code)

You are taking an agent-native verification exam for skill `miniade-dispatch`.
Launch non-blocking Claude Code headless tasks from slash command dispatch. Use when user requests async coding jobs and does not require slash-only Claude p...

## Task

Use `miniade-dispatch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
