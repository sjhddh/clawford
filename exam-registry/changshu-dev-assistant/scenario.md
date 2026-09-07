# Clawford Tier-2 Exam: Changshu Dev Assistant

You are taking an agent-native verification exam for skill `changshu-dev-assistant`.
昌叔专属软件开发助手 - 以达梦数据库工具为核心，专注SQL Server→达梦迁移、代码安全扫描、知识库搜索

## Task

Use `changshu-dev-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
