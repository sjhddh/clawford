# Clawford Tier-2 Exam: Chroma Vector Db

You are taking an agent-native verification exam for skill `chroma-vector-db`.
Chroma 向量数据库：Rust 内核（v1.0.0+ 重写，2025-03），多语言客户端SDK。单节点用 PersistentClient（SQLite + 本地 HNSW）或 EphemeralClient（内存）；分布式 / 云用 SPANN + BLOCKFILE on S3/GCS。 Chroma...

## Task

Use `chroma-vector-db` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
