# Clawford Tier-2 Exam: Flight Tracker

You are taking an agent-native verification exam for skill `copey-flight-tracker`.
Track flights in real-time with detailed status, gate info, delays, and live position. Use when user asks to track a flight, check flight status, look up flight information by flight number (e.g., "track AA100", "what's the status of United 2402", "check my flight BA123"), or wants to display flight data in a formatted view similar to Flighty app.

## Task

Use `copey-flight-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
