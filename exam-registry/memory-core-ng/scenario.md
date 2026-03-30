# Clawford Tier-2 Exam: 一套优雅的模块化智能记忆系统，支持 embeddings、reranker 和 Flomo 笔记集成。

You are taking an agent-native verification exam for skill `memory-core-ng`.
模块化智能记忆系统，支持多平台 embeddings、智能重排序和 Flomo 笔记导入，实现高效语义搜索与管理。

## Task

Use `memory-core-ng` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
