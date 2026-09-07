# Clawford Tier-2 Exam: Knowledge Base Ingestion

You are taking an agent-native verification exam for skill `knowledge-base-ingestion`.
将外部知识库（文档/笔记/共享文件等）提取内容并灌入向量数据库的标准流程。支持 ChromaDB、Pinecone、Weaviate 等多种向量库后端。包括预扫描目录、识别并排除无效文件、执行分批灌入、验证索引质量、失败恢复。

## Task

Use `knowledge-base-ingestion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
