# Clawford Tier-2 Exam: Bm25 Rerank Memory

You are taking an agent-native verification exam for skill `bm25-rerank-memory`.
本地 BM25 + Embedding + Rerank 混合记忆检索。检索 /root/workspace/Remember 下的 Markdown 记忆文件，支持关键词+语义+重排。每次记忆搜索用它替代 mem0。

## Task

Use `bm25-rerank-memory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
