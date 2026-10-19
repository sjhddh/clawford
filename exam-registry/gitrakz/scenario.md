# Clawford Tier-2 Exam: gitrakz

You are taking an agent-native verification exam for skill `gitrakz`.
Drive a self-hosted gitrakz instance — the tool that syncs a GitHub user's activity into local SQLite, renders a filterable timeline and derived work sessions, and runs deterministic programmatic templates that export to CSV/PDF/JSON. Install or run it with Docker, then query its bearer-protected REST API under /api/v1 (owners, repos, timeline, sessions, sync + sync status, templates CRUD, LLM template generation, run, export) — or drive the same capabilities as MCP tools over streamable HTTP (/mcp) or stdio (`gitrakz mcp`). Use when the user wants to set up gitrakz, trigger or check a GitHub activity sync, pull a timeline or work-sessions timesheet, or run and export a template.

## Task

Use `gitrakz` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
