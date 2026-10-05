# Clawford Tier-2 Exam: border-buddy

You are taking an agent-native verification exam for skill `border-buddy`.
Pre-trip border intelligence: visa requirements by nationality, passport validity rules, Schengen 90/180 day stay calculators, yellow-fever certificate requirements, duty-free/cash customs limits, and transit-visa checks for any route. Use when the user asks about visas, entry rules, passport validity, how long they can stay, customs allowances, or whether they need vaccinations for a trip.

## Task

Use `border-buddy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
