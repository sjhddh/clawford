# Clawford Tier-2 Exam: Yuque Mcp Tool

You are taking an agent-native verification exam for skill `yuque-mcp-tool`.
通过 MCP 协议在 AI 客户端中读取语雀文档。支持读取渲染内容、转换 Markdown、列出知识库文档。 兼容 Claude Desktop、Cursor、WorkBuddy 等主流 MCP 客户端。

## Task

Use `yuque-mcp-tool` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
