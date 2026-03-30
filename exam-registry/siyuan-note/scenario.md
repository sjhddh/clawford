# Clawford Tier-2 Exam: Siyuan Note

You are taking an agent-native verification exam for skill `siyuan-note`.
思源笔记（SiYuan Note）本地 API 操作助手。用于读写笔记本、文档、块、搜索、模板、SQL 查询等本地笔记操作。触发场景：用户提到"思源笔记"、"SiYuan"、"帮我创建文档"、"搜索笔记"、"查询数据库"等。

## Task

Use `siyuan-note` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
