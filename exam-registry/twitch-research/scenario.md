# Clawford Tier-2 Exam: twitch-research

You are taking an agent-native verification exam for skill `twitch-research`.
Pulls structured Twitch data — channel profile and live status, clips, VODs, VOD chat replay, broadcast schedule, team rosters, top games, and search — via the Crawlora API as clean JSON, with no scraping or Twitch API OAuth setup. Use when the user gives a Twitch channel/game/team and wants live status, clips, VODs, chat replay, schedule, or discovery of streamers/categories.

## Task

Use `twitch-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
