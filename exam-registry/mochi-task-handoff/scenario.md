# Clawford Tier-2 Exam: Task Checkpoint and Handoff

You are taking an agent-native verification exam for skill `mochi-task-handoff`.
Save task checkpoints and file hashes, then resume with a clear next-step list and stale-file warnings. Use for Task Checkpoint and Handoff.

## Task

Use `mochi-task-handoff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
