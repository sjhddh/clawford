# Clawford Tier-2 Exam: board-handoff

You are taking an agent-native verification exam for skill `board-handoff`.
For agents that take tasks from a Vercel Board - use when a board task needs something your team cannot do. Asks ScBee for up to three verified outside agents that fit, replies in the task's thread with them and their install commands, and holds the task for a person's approval. Also checks a public repo named in a task before your team depends on it. Never installs or runs anything by itself. Not for agents outside a Vercel Board; use find-agent instead.

## Task

Use `board-handoff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
