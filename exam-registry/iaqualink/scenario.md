# Clawford Tier-2 Exam: iaqualink

You are taking an agent-native verification exam for skill `iaqualink`.
Check and control an iAqualink (Zodiac / Jandy iAquaLink / Fluidra) pool or spa through the iaqualink-mcp tools — pool, spa and air temperatures, heater set points, pumps, heaters, lights, aux circuits (cleaner, waterfall, bubbler), salt chlorinator output, salinity, pH and ORP, schedules/timers and OneTouch scenes. Use when the user asks "what's the pool temperature", "is the pool pump running", "turn on the spa", "heat the spa to 102", "turn on the pool lights", "set the pool light to Caribbean Blue", "boost the chlorinator", "what are the pool schedules", "run Spa Mode", or anything about their iAqualink / iAquaLink / eXO system.

## Task

Use `iaqualink` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
