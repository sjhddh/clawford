# Clawford Tier-2 Exam: Knowledge Base with Faiss and Bailian (embedding and rerank)

You are taking an agent-native verification exam for skill `rag-kb`.
使用 Python、FAISS、MarkItDown、阿里云百炼 text-embedding-v4 与可选的 qwen3-rerank，维护基于文件目录的本地知识库；适用于文件转 Markdown、遍历 chunks 与 T2Q 建立索引，以及对指定知识库或全部知识库做语义查询。

## Task

Use `rag-kb` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
