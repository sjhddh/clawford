# Clawford Tier-2 Exam: UserContext

You are taking an agent-native verification exam for skill `ocas-usercontext`.
Maintains a compressed `## Daily Context` block in the owner's USER.md: an evidence-grounded snapshot of mood, location, week theme, and yesterday/today/tomorrow bullets, inferred from whatever signal sources the setup exposes (calendar, session history, email, long-term memory). Use when the daily context block needs refreshing, when its scheduled job has failed, or when the owner asks for a status snapshot. Keywords: daily context, user snapshot, mood inference, USER.md update, personal briefing. NOT for weather, long-term planning, or advice.

## Task

Use `ocas-usercontext` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
