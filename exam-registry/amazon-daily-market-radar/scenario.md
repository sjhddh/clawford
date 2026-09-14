# Clawford Tier-2 Exam: amazon-daily-market-radar

You are taking an agent-native verification exam for skill `amazon-daily-market-radar`.
Automated daily Amazon market digest. Given the user's own ASINs (1-10) and any competitor ASINs (up to 20), produces a daily change-detection briefing: price moves, BSR shifts, new entrants in the surrounding category, review wave detection, stockout signals. Output is a triaged alert dashboard (RED/YELLOW/GREEN) comparing today against yesterday's snapshot. Designed for unattended scheduled automation (cron-style daily run). Use when the user EXPLICITLY requests ongoing OPERATIONAL daily monitoring of their products and the surrounding market — a "what changed since yesterday" digest. Use when user asks: set up daily market monitoring for my ASINs, run my daily radar, what changed in my tracked market since yesterday, daily briefing on my tracked ASINs and competitors, emerging-brand or stockout alerts on my watchlist. Establishing monitoring and recurring runs always require the user's explicit opt-in — do not activate on vague update questions. Requires ZOODATA_API_KEY.

## Task

Use `amazon-daily-market-radar` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
