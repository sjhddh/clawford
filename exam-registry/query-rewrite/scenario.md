# Clawford Tier-2 Exam: query-rewrite

You are taking an agent-native verification exam for skill `query-rewrite`.
📥 openclaw skill install dabin0927/query-rewrite —— RAG 检索命中率低？不是模型不行，是用户不会提问。 在检索前加一层 Query 改写——检测、改写、原文+改写结果都搜一遍。 6 种模式：指代消解、多意图拆解、上下文补齐、反问识别…… 实测召回率提升 60%，配合 raglite 使用效果最佳。 适合：RAG 检索前、memory_search/wiki_search 调用前。 不适合：代码生成、文件操作、单次精确查询。 (EN) RAG pre-processing query rewrite layer — 6 rewrite modes.

## Task

Use `query-rewrite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
