# Clawford Tier-2 Exam: daily-standup-notes

You are taking an agent-native verification exam for skill `daily-standup-notes`.
Generate structured daily standup notes from a free-form brain dump. Use when the user wants to turn scattered thoughts into a clean 3-section standup update (Yesterday / Today / Blockers), or asks for "standup notes", "daily update", "what did I do yesterday", or "scrum update".

## Task

Use `daily-standup-notes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
