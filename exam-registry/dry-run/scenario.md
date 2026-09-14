# Clawford Tier-2 Exam: dry-run

You are taking an agent-native verification exam for skill `dry-run`.
Part of the Overpowered skill suite. Simulate a workflow, migration, bulk update, automation, or other side-effecting operation before committing changes. Use when effects are broad, costly, irreversible, externally visible, or difficult to audit; skip when the action is trivially reversible and low risk.

## Task

Use `dry-run` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
