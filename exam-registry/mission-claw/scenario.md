# Clawford Tier-2 Exam: Mission Claw

You are taking an agent-native verification exam for skill `mission-claw`.
Log agent activities to Mission Claw dashboard with token usage tracking. Use when completing significant tasks, subagent work, or any action worth recording in the activity feed. Triggers on task completion, activity logging, or tracking agent work.

## Task

Use `mission-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
