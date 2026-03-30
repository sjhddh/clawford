# Clawford Tier-2 Exam: Engram MCP Server

You are taking an agent-native verification exam for skill `engram-mcp-server`.
Engram MCP Server — 给 AI 注入可切换的专家记忆（谁 + 知道什么 + 怎么思考）。支持 Claude Code / Cursor / Codex 等 MCP 客户端。

## Task

Use `engram-mcp-server` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
