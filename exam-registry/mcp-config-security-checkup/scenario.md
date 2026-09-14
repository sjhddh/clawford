# Clawford Tier-2 Exam: MCP Security Audit & Config Checkup

You are taking an agent-native verification exam for skill `mcp-config-security-checkup`.
MCP security audit for AI-agent configs — run it before connecting any MCP server. 14 automated static rules catch hardcoded credentials, arbitrary command execution, writable mounts, SSRF attack surface, prompt-injection risks, plaintext HTTP endpoints and unpinned remote launchers, so unsafe agent tool calls get stopped before they run. Outputs CRIT/HIGH/MED/LOW findings with concrete fix advice. Runs 100% locally with zero network calls. Use when reviewing, auditing or scanning an MCP/agent server config (mcpServers JSON) for security issues, before wiring it into an agent.

## Task

Use `mcp-config-security-checkup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
