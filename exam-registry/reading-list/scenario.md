# Clawford Tier-2 Exam: 阅读清单

You are taking an agent-native verification exam for skill `reading-list`.
管理和追踪阅读清单，支持添加文章、进度更新、智能推荐、笔记整理及阅读统计分析。

## Task

Use `reading-list` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
