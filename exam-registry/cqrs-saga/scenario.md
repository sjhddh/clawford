# Clawford Tier-2 Exam: cqrs-saga

You are taking an agent-native verification exam for skill `cqrs-saga`.
Orchestrates a python-cqrs saga whose finished steps compensate on failure, with persistent state and recovery. Use when a flow crosses services or databases and a completed step must be undone.

## Task

Use `cqrs-saga` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
