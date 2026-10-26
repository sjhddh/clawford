# Clawford Tier-2 Exam: resy-fpx

You are taking an agent-native verification exam for skill `resy-fpx`.
Query and act on Resy (resy.com restaurant reservations) from a shell without running the resy-mcp server — search venues, check slot availability, book/cancel reservations, and manage favorites/Priority Notify with curl against api.resy.com, using the fpx CLI (@fetchproxy/cli) only for the one-time token bootstrap when you have no RESY_EMAIL/RESY_PASSWORD. Use when you want Resy data or actions without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `resy-fpx` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
