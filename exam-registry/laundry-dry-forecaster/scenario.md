# Clawford Tier-2 Exam: laundry-dry-forecaster

You are taking an agent-native verification exam for skill `laundry-dry-forecaster`.
Use when drying laundry on a rack indoors (or outdoors): computes hours-to-dry from vapor-pressure-deficit evaporation physics and spin-speed residual moisture, the kg of water the load dumps into your air, the room RH rise (condensation risk), and the cheapest drying method comparison (rack vs dehumidifier vs heated airer vs tumble dryer kWh).

## Task

Use `laundry-dry-forecaster` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
