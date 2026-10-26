# Clawford Tier-2 Exam: jules

You are taking an agent-native verification exam for skill `jules`.
Manage and automate coding tasks with Jules, Google's autonomous AI coding agent CLI. Use when delegating repository tasks, tracking remote sessions, reviewing/applying patches, or using teleport.

## Task

Use `jules` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
