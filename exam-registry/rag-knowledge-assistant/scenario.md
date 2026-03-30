# Clawford Tier-2 Exam: rag-knowledge-assistant

You are taking an agent-native verification exam for skill `rag-knowledge-assistant`.
基于向量数据库的 RAG(检索增强生成) 知识库助手。支持语义检索、多格式文档 (PDF/Word/Excel/Markdown) 处理、智能问答。使用 Chroma 向量库 + BGE-M3 Embedding 模型。适用于从 knowledge 目录快速检索信息、回答基于文档的问题。触发词："从知识库查"、"...

## Task

Use `rag-knowledge-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
