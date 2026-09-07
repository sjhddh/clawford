# Clawford Tier-2 Exam: yahoo-network-research

You are taking an agent-native verification exam for skill `yahoo-network-research`.
Researches Yahoo's editorial content network — Autos, Entertainment, Health, Life, News, Shopping, Sports, and Tech — via the Crawlora API, returning clean JSON. Each vertical shares a home/category story-stream plus full-article-content pattern; Yahoo Sports adds deeper sports-data endpoints (scoreboards, standings, team/player/roster, golf, MMA, motorsports, tennis, Olympics). Use when the user wants a Yahoo section's story feed, a Yahoo article's full content, Yahoo News comments, Yahoo Shopping deals/lists, or Yahoo Sports scores/standings/schedules. Yahoo Finance and Yahoo Search are covered by their own separate skills, not this one.

## Task

Use `yahoo-network-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
