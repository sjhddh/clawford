# Clawford Tier-2 Exam: TRAECNclaw MCP

You are taking an agent-native verification exam for skill `traecnclaw-mcp`.
Operate TraeCN through TRAECNclaw's focused stdio MCP tools. Use when an MCP-capable agent must send or stop work, choose a workspace/model/mode/conversation, inspect or change Trae settings through its UI, manage conversations, or resolve an exceptional question or command approval. Queueing, waiting, recovery, notifications, routine non-command questions, and keep/revert gates are gateway-managed.

## Task

Use `traecnclaw-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
