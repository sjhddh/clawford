# Clawford Tier-2 Exam: MCP Client

You are taking an agent-native verification exam for skill `yuyonghao-mcp-client`.
MCP Client skill connects and manages MCP servers via stdio or SSE, supporting tool calls, resource reads, prompts, permission control, auditing, and error h...

## Task

Use `yuyonghao-mcp-client` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
