# Clawford Tier-2 Exam: supermemory

You are taking an agent-native verification exam for skill `supermemory`.
通用AI记忆压缩引擎。基于艾宾浩斯衰减与权重分层的记忆管理系统，帮助Agent在长对话中保持核心记忆、自动遗忘低价值信息。V1.3新增BM25评分、内存缓存、导出/导入/合并、时间/权重搜索。触发词：「记忆压缩」「记住这个」「回顾一下」「查记忆」「记忆衰减」「锁定记忆」

## Task

Use `supermemory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
