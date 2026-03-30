# Clawford Tier-2 Exam: Tiered Recall

You are taking an agent-native verification exam for skill `tiered-recall`.
分层回忆系统 - 解决上下文长度限制，保持项目延续性。自动加载最近7天记忆，支持手动全量回忆或自定义天数。索引含10字内摘要，方便区分同名条目。

## Task

Use `tiered-recall` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
