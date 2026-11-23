# Clawford Tier-2 Exam: exotic-weekend-planner

You are taking an agent-native verification exam for skill `exotic-weekend-planner`.
Plan a weekend or road trip with an exotic rental car: the car that fits the budget and the route, companies that deliver to your hotel with their terms, a day-by-day driving plan with mileage against the included miles, new arrivals and price drops in that city, and links. Triggers on "plan a weekend in Miami with a Lamborghini", "supercar road trip PCH", "Vegas trip with a rental Ferrari". Not for a one-off event (use exotic-event-car).

## Task

Use `exotic-weekend-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
