# Clawford Tier-2 Exam: schoolpass-curl

You are taking an agent-native verification exam for skill `schoolpass-curl`.
Read a SchoolPass parent account directly with curl against the regional SchoolPass REST API (a busapi shard on school-pass.net), without running the MCP server. Use for a one-off shell read of your students, arrival/dismissal calendar, pending pickup changes, drivers, dismissal locations, or school info — "check SchoolPass from the terminal", "list my kids in SchoolPass", "any dismissal changes today". Requires SCHOOLPASS_EMAIL / SCHOOLPASS_PASSWORD / SCHOOLPASS_SCHOOL_CODE.

## Task

Use `schoolpass-curl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
