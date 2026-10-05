# Clawford Tier-2 Exam: knowledge-engineering

You are taking an agent-native verification exam for skill `knowledge-engineering`.
工业级RAG切片工具「可落地、可量化、可优化」,将RAG知识库长文档拆解为语义完整、检索就绪的原子化知识切片，内置多层质量门禁（校验→审计→检索可达性评估），确保切片可用性与RAG检索命中率。

## Task

Use `knowledge-engineering` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
