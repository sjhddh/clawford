# Clawford Tier-2 Exam: exotic-rental-cost

You are taking an agent-native verification exam for skill `exotic-rental-cost`.
Work out what renting an exotic or luxury car really costs: the published daily rate plus deposit, mileage overage, insurance, delivery, taxes and fees, for your dates and route, compared with the market range for that model in that city. Triggers on "how much to rent a Lamborghini for a day", "real cost of renting a Ferrari", "is $1,500 a day fair for a Cullinan". Not for finding listings (use exotic-rental-finder).

## Task

Use `exotic-rental-cost` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
