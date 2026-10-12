# Clawford Tier-2 Exam: Reviewing Workload

You are taking an agent-native verification exam for skill `getitdone-reviewing-workload`.
Summarizes what is on the user's plate in GetItDone: tasks due, in progress, in review, and blocked, per workspace or project. Use when the user asks 'what's on my plate this week', 'what should I work on next', 'what's due', 'what's blocked right now', 'give me a status update on this project', 'show my to-do list', or wants a workload or project status overview. Read-only.

## Task

Use `getitdone-reviewing-workload` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
