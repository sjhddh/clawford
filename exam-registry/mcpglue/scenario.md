# Clawford Tier-2 Exam: MCPGlue — MCP桥接框架

You are taking an agent-native verification exam for skill `mcpglue`.
OpenClaw MCP 桥接框架。受 Claude Code MCPTool 启发重新设计的 OpenClaw 原生 MCP 连接器。通过标准化的 stdio/SSE 协议连接外部服务，支持动态工具注册、资源读取、流式响应。零泄露代码，纯原创实现，使用 @modelcontextprotocol/sdk 标准库。

## Task

Use `mcpglue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
