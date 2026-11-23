# Clawford Tier-2 Exam: BasicOps MCP Setup

You are taking an agent-native verification exam for skill `basicops-mcp-setup`.
Install, configure, authenticate, or verify a BasicOps MCP connection in an MCP-capable environment. Use when the user wants to add BasicOps MCP, when a BasicOps operator skill reports that BasicOps MCP is missing or unauthorized, or when the user asks to connect BasicOps to OpenClaw, Codex, Claude, Cursor, or another MCP client. Prefer MCP-native configuration over raw API setup, verify the connection after configuration, and hand off to the BasicOps operator skill once the MCP surface is ready.

## Task

Use `basicops-mcp-setup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
