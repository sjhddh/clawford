# Clawford Tier-2 Exam: plant-light-doctor

You are taking an agent-native verification exam for skill `plant-light-doctor`.
Use when choosing plants for a specific window or diagnosing why a houseplant is leggy, pale, or not blooming. Computes real monthly light (DLI) for any window orientation, floor, and latitude, matches plants against light needs, and specs a grow light if nature is not enough.

## Task

Use `plant-light-doctor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
