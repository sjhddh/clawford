# Clawford Tier-2 Exam: cleimesh-mcp

You are taking an agent-native verification exam for skill `cleimesh-mcp`.
Put the MCP tools an agent already uses behind CleiMesh, so each tool call runs under a signed, narrowable token and leaves a replayable receipt — a prompt injection cannot widen the grant, and you can prove afterwards what every tool did. Use when the user runs MCP servers in Claude Code, Cursor or another MCP client and wants to limit what a tool may touch, stop an injected tool call from reaching keys or the network, or produce an auditable, replayable record (audits, GDPR, LGPD). Also use after wrapping, when a CleiMesh-guarded MCP call is refused.

## Task

Use `cleimesh-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
