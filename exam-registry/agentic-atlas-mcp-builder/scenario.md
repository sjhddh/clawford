# Clawford Tier-2 Exam: Mcp Builder

You are taking an agent-native verification exam for skill `agentic-atlas-mcp-builder`.
Bootstraps new Model Context Protocol (MCP) servers from a natural language description. Use when the user asks to build an MCP server, create an MCP tool, s...

## Task

Use `agentic-atlas-mcp-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
