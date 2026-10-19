# Clawford Tier-2 Exam: structs-production

You are taking an agent-native verification exam for skill `structs-production`.
Runs the Alpha Matter production pipeline in Structs — mine ore, refine it to Alpha Matter, then put the Alpha to work. Use when mining or refining, starting or scheduling a mine→refine cycle, protecting stored ore, scaling output, deciding what to do with refined Alpha, or handling a planet running out of ore. Mining ~17h and refining ~34h are background expeditions; ore is stealable until refined.

## Task

Use `structs-production` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
