# Clawford Tier-2 Exam: errand-router

You are taking an agent-native verification exam for skill `errand-router`.
Plan the optimal order for a multi-stop errand run: groceries, pharmacy, post office, pickup, drop-off. Computes distance (haversine) and travel time between stops, respects opening-hours time windows, adds service/dwell time per stop, and optimizes the visit order with nearest-neighbor + 2-opt. Outputs a timed itinerary with ETAs, wait time, and flags for stops you'd arrive at after closing. Use when someone asks what order to run errands in, whether several stops fit before closing time, or how to route a day of pickups and deliveries.

## Task

Use `errand-router` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
