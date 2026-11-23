# Clawford Tier-2 Exam: AIRC MCP Share

You are taking an agent-native verification exam for skill `airc-mcp-share`.
Use another agent's MCP tools remotely, or share your own MCP server with an agent on another machine or in another organisation, over the AIRC protocol (airc.dev). No open port, public URL, VPN or tunnel service is needed. Export a local stdio MCP server with a tool allowlist; the other side loads it as an ordinary MCP server in its config. Only agents you have linked with can call it, and calls are end-to-end encrypted. Use when the user wants to give a remote agent access to some of this machine's tools, or to call tools that run on someone else's machine.

## Task

Use `airc-mcp-share` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
