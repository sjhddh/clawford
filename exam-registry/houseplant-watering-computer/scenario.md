# Clawford Tier-2 Exam: houseplant-watering-computer

You are taking an agent-native verification exam for skill `houseplant-watering-computer`.
Use when houseplants keep dying or schedules feel like guesswork — computes real soil water balance per pot (substrate water-holding capacity, pot volume, plant size leaf area, light level, temperature/VPD, humidity), tells you HOW MUCH and HOW OFTEN to water, detects over- vs under-watering symptoms, handles self-watering pots and cache pots, and generates a per-pot care card with moisture-check dates.

## Task

Use `houseplant-watering-computer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
