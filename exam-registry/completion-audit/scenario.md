# Clawford Tier-2 Exam: completion-audit

You are taking an agent-native verification exam for skill `completion-audit`.
Part of the Overpowered skill suite. Independently determine whether a claimed task outcome is actually complete by reconstructing completion criteria and checking fresh evidence. Use before declaring work done, accepted, migrated, reconciled, fixed, or delivered; not as a general planning loop.

## Task

Use `completion-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
