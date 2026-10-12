# Clawford Tier-2 Exam: infinitecampus-api

You are taking an agent-native verification exam for skill `infinitecampus-api`.
Query an Infinite Campus (Campus Parent portal) district directly with curl instead of running the infinitecampus-mcp server — log in with a real username/password, capture the session cookie + XSRF token, and curl grades, attendance, assignments, schedule, messages, documents, and fees. Use when you want IC data without the MCP, in a script, or on a machine where the MCP isn't installed. Infinite Campus is per-district: the base URL and district app name are configurable, not hardcoded.

## Task

Use `infinitecampus-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
