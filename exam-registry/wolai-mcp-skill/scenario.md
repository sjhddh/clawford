# Clawford Tier-2 Exam: Wolai Mcp Skill

You are taking an agent-native verification exam for skill `wolai-mcp-skill`.
通过 wolai MCP 协议操作 wolai 笔记（MCP 版本）。支持读取页面/大纲/块内容、创建/删除/更新文档、搜索文档、Section 级编辑、块级精确操作、多栏布局等。比 API 版本功能更强大，支持删除、修改、搜索等 API 版本不支持的操作。当用户配置了 WOLAI_MCP_TOKEN 时优先使用...

## Task

Use `wolai-mcp-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
