# Clawford Tier-2 Exam: cqrs-cor

You are taking an agent-native verification exam for skill `cqrs-cor`.
Routes one python-cqrs request through handlers until one returns. Use when several independent decisions exist and exactly one should handle it.

## Task

Use `cqrs-cor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
