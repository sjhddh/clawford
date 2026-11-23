# Clawford Tier-2 Exam: microsoft-teams-mcp

You are taking an agent-native verification exam for skill `microsoft-teams-mcp`.
Read Microsoft Teams data (every chat and channel, their messages, what is unread, inline images, and the Activity feed) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the microsoft-teams-mcp server. A bearer token is captured once from a signed-in teams.cloud.microsoft tab, then Teams' own chat-service REST API is called with plain curl — the Activity feed included, as conversation 48:notifications. Use when you want Teams data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `microsoft-teams-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
