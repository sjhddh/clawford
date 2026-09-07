# Clawford Tier-2 Exam: ALab Experiment Worker

You are taking an agent-native verification exam for skill `alab-experiment-worker`.
Use when operating inside one ALab experiment worktree with that worktree token context to inspect status, edit candidate source, run evaluations, submit fin...

## Task

Use `alab-experiment-worker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
