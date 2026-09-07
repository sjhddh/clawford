# Clawford Tier-2 Exam: car-maintenance-timeline

You are taking an agent-native verification exam for skill `car-maintenance-timeline`.
Use when the user asks what car maintenance is due or overdue, whether a service can wait, what a dealer 'recommended service' actually contains, or to build a maintenance schedule and budget from mileage, vehicle age, and service history. Computes dual-interval status (every N km OR M months, whichever first), applies a severe-service multiplier for city/short-trip/towing driving, projects a 24-month service timeline from annual mileage, and shows typical cost ranges and DIY difficulty so owners can challenge upselling.

## Task

Use `car-maintenance-timeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
