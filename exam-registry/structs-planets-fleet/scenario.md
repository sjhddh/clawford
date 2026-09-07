# Clawford Tier-2 Exam: Structs Planets & Fleet

You are taking an agent-native verification exam for skill `structs-planets-fleet`.
Manages planets and fleet in Structs — evaluating and exploring planets, claiming/relocating, fleet movement and composition, evacuation, and the onStation-vs-away state. Use when discovering or claiming a planet, your planet is depleting, relocating, moving the fleet, checking fleet status, or deciding fleet composition for offense/defense. Covers the raid-clock implications of fleet position.

## Task

Use `structs-planets-fleet` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
