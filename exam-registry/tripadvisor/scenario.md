# Clawford Tier-2 Exam: tripadvisor

You are taking an agent-native verification exam for skill `tripadvisor`.
TripAdvisor travel data via the Terra API through MCP. Use when the user asks to find hotels, restaurants, or attractions, look up a place's TripAdvisor rating/reviews/photos, compare places to stay or eat, or find what's near a location. Triggers on phrases like "find a hotel in", "best restaurants near", "TripAdvisor reviews for", "what's the rating of", "things to do in", or "attractions near me". Requires the @chrischall/tripadvisor-mcp package installed and the tripadvisor server registered (see Setup), plus a TripAdvisor Terra API key.

## Task

Use `tripadvisor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
