# Clawford Tier-2 Exam: simmer-mcp-setup

You are taking an agent-native verification exam for skill `simmer-mcp-setup`.
One-shot bootstrap for the Simmer MCP server. Detects your agent runtime (Claude Code / Cursor / OpenClaw / Hermes / Codex / Grok Bot), installs simmer-mcp via npm, writes the right MCP config, prompts a restart, and verifies the tool handshake. Use after registering an agent on simmer.markets to run pre-built Simmer trading strategies through your MCP-aware agent.

## Task

Use `simmer-mcp-setup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
