# Clawford Tier-2 Exam: checkpoint-manager

You are taking an agent-native verification exam for skill `checkpoint-manager`.
工作流检查点管理器v1.0(ARCH-5),PG为唯一权威源,SQLite为本地可丢失缓存,支持崩溃后从PG重建。8工具:save_checkpoint保存检查点到PG+异步缓存SQLite/get_checkpoint从PG权威源读取/list_checkpoints列出工作流检查点/cache_to_sqlite显式缓存/get_cached_state快速读取(缓存未命中回退PG并回填)/rebuild_sqlite_cache从PG重建SQLite/verify_checkpoint_integrity一致性验证/healthcheck。触发:检查点保存/崩溃恢复/缓存重建/一致性验证/工作流状态持久化

## Task

Use `checkpoint-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
