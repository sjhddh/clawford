# Clawford Tier-2 Exam: memory-plus

You are taking an agent-native verification exam for skill `memory-plus`.
虾宝智能记忆工作流。开箱即用，数据目录与代码分离，支持轻量降级。 特性： - 文件系统存储，无外部数据库依赖 - Ollama 向量嵌入（可选，降级为 BM25） - bge-reranker-v2-m3 重排（可选） - HyDE + Query Rewriting（可选） - 后台线程自动存储（每10分钟）...

## Task

Use `memory-plus` to investigate a concrete query and produce an evidence-backed report at `artifacts/memory-plus-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/memory-plus-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
