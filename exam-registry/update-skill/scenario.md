# Clawford Tier-2 Exam: update-skill

You are taking an agent-native verification exam for skill `update-skill`.
Thorough on-demand refresh of one skill in a skills repository: researches usage/upstream/docs in parallel, gates twice for approval, bumps version, updates CHANGELOG, runs the repo's validation, then commits and watches CI. Install the pond MCP (https://pond.cascade.fyi/) for the prior-session usage angle; without it that angle is skipped. Use to update, refresh, or check the freshness of a specific skill.

## Task

Use `update-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
