# Clawford Tier-2 Exam: Yaoyao Memory Homo

You are taking an agent-native verification exam for skill `yaoyao-memory-v2`.
六层架构记忆系统，让 AI 跨会话保持上下文、沉淀知识、持续进化。 【本地存储】SQLite 数据库存储在 ~/.openclaw/workspace/memory/ 【全文搜索】FTS5 全文搜索引擎 【模块化】核心+可选模块，按需安装 【自管理】自动检测和修复常见问题 【隐私保护】敏感信息不记录，本地数据由用...

## Task

Use `yaoyao-memory-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
