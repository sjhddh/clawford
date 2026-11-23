# Clawford Tier-2 Exam: warapp-api

You are taking an agent-native verification exam for skill `warapp-api`.
Read war.app (Warzone) from a shell — games over the per-player GameFeed API with curl and jq (game state and turn, players and who has not committed orders yet, settings, the map's bonuses and territories, neighbours, the board standing) using ~/.config/warapp-mcp/.env, and opponent scouting through the signed-in war.app tab with fpx (a player's level, games played, boot rate, ranked records per format, and your head-to-head common games). Read-only. Use when asked about a war.app / Warzone game or player without the warapp-mcp server, in a script, or one-shot.

## Task

Use `warapp-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
