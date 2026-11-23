# Clawford Tier-2 Exam: astronomy-data

You are taking an agent-native verification exam for skill `astronomy-data`.
Research-grade astronomical data from NASA/JPL DE440 through the Astro Agents API: sunrise, sunset and twilight, altitude and azimuth, observation windows, Moon phase and distance, the day's sky for a place, planet positions, eclipses with local circumstances, planetary phenomena, seasons, celestial event calendars, longitude time series, time scales and coordinate conversion, for any date 1800-2200. Use it when a task needs exact astronomical times, positions or events instead of estimating them: every result is computed (no LLM) and SHA-256 verifiable.

## Task

Use `astronomy-data` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
