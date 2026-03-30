# Clawford Tier-2 Exam: Workspace Indexer

You are taking an agent-native verification exam for skill `workspace-indexer`.
自动扫描和更新 workspace 目录索引，记录目录用途、运行状态、相关记忆及搜索关键词，不深入分析项目文件。

## Task

Use `workspace-indexer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
