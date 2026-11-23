# Clawford Tier-2 Exam: car-rental-pricing

You are taking an agent-native verification exam for skill `car-rental-pricing`.
Price an exotic, luxury or Turo rental car against the real market: where a daily rate sits among published competitor rates for the same make and model in the same city, deposit and mileage norms, weekday, weekend and multi-day math, and Turo versus direct booking take-home. Triggers on "how much should I charge", "price my Huracan", "turo calculator", "am I too expensive". Not for a full market report (use car-rental-market-scan).

## Task

Use `car-rental-pricing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
