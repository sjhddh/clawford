# Clawford Tier-2 Exam: cqrs-eda

You are taking an agent-native verification exam for skill `cqrs-eda`.
Wires a python-cqrs domain event, notification, transactional outbox, and transactional inbox, and runs independent domain handlers concurrently. Use when a fact stays in this process, must reach another service, must survive at-least-once delivery, or when handler order does not matter.

## Task

Use `cqrs-eda` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
