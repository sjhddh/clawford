# Clawford Tier-2 Exam: tripadvisor-api

You are taking an agent-native verification exam for skill `tripadvisor-api`.
Query TripAdvisor location data (search, nearby, details, photos, reviews) straight from a shell with curl against the Terra REST API (terra.tripadvisor.com), instead of running the tripadvisor-mcp server — plus a no-API-key fallback that reads a location's public page through the fpx browser bridge. Use when you want TripAdvisor data without the MCP, in a script, or on a machine where the MCP isn't installed. Triggers on "check TripAdvisor", "TripAdvisor location/restaurant/hotel/attraction search, details, photos, reviews", or any TripAdvisor data request that should hit the API directly.

## Task

Use `tripadvisor-api` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
