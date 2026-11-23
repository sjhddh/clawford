# Clawford Tier-2 Exam: EV Road-Trip Charger Planner

You are taking an agent-native verification exam for skill `ev-road-trip-charger-planner`.
Use when planning a long EV road trip — which chargers, how many stops, how long each. Physics-based consumption model (speed, temperature, cargo, elevation), a leg-by-leg stop solver with arrival buffers and charge-window taper math, pre-departure checklist (preconditioning, adapters, network accounts), and etiquette rules.

## Task

Use `ev-road-trip-charger-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
