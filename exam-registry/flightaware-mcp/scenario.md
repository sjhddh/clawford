# Clawford Tier-2 Exam: flightaware-mcp

You are taking an agent-native verification exam for skill `flightaware-mcp`.
Live flight tracking and aviation data via FlightAware AeroAPI through MCP. Use when the user asks to track a flight, look up a flight's status/position/route/track, see an airport's arrivals/departures/delays/weather, find flights for an airline, look up an aircraft's owner, get scheduled flights between dates, or manage FlightAware flight alerts. Triggers on phrases like "where is flight UAL123", "track flight", "JFK departures", "is my flight delayed", "flights near", "who owns tail number N12345", or "set up a flight alert". Requires the @chrischall/flightaware-mcp package installed and the flightaware server registered (see Setup), plus an AeroAPI key.

## Task

Use `flightaware-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
