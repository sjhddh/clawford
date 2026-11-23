# Clawford Tier-2 Exam: Stocktake

You are taking an agent-native verification exam for skill `skillet-stocktake`.
Use when auditing, updating, or migrating project dependencies, runtimes, package managers, lockfiles, or toolchains. Requires reading authoritative release and migration notes, changing one compatibility boundary at a time, and verifying the resolved dependency graph.

## Task

Use `skillet-stocktake` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
