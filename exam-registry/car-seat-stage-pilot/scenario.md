# Clawford Tier-2 Exam: car-seat-stage-pilot

You are taking an agent-native verification exam for skill `car-seat-stage-pilot`.
Use when a parent asks which car seat their child needs, when to turn the seat forward, move to a booster, or ditch the booster — converts birthday + weight/height into rear-facing/forward-facing/harness/booster verdicts, limit warnings, next-transition dates, and a lifetime stage timeline.

## Task

Use `car-seat-stage-pilot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
