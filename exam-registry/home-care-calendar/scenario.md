# Clawford Tier-2 Exam: home-care-calendar

You are taking an agent-native verification exam for skill `home-care-calendar`.
Use when you own a home (or apartment) and things keep breaking because nobody remembered the last service date — builds a whole-home maintenance registry from a guided 10-minute inventory (roof, HVAC, water heater, gutters, detectors, filters, seals, drains), generates a personalized seasonal task calendar with intervals from real maintenance science (filters 1-3 months, HVAC service yearly, water-heater flush yearly, detector batteries yearly, chimney every 2 years...), schedules via ICS export, tracks completion, and estimates the deferred-maintenance debt you're accumulating in dollars — because a $12 filter neglected for a year becomes a $1500 compressor.

## Task

Use `home-care-calendar` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
