# Clawford Tier-2 Exam: Update Stock Mcp

You are taking an agent-native verification exam for skill `update-stock-mcp`.
UpdateStock MCP 服务技能 —— 通过 stdio 模式调用 UpdateStock 脚本， 提供 A 股 DuckDB 数据库管理功能：创建数据库、全量/增量更新股票数据、查询股票行情。 设计的数据库方案兼容 QuantAll（全A解析）计算引擎。 触发条件：用户提到"UpdateStock"、"创建股票数据库"、"更新股票数据"、"获取股票数据"等。

## Task

Use `update-stock-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
