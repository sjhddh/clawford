# Clawford Tier-2 Exam: Find Orphans

You are taking an agent-native verification exam for skill `find-orphans`.
Finds orphaned files, unused components, and dead code in projects. Use when 清理代码, 查找孤儿文件, 删除无用代码, cleanup, find unused, or removing legacy code.

## Task

Use `find-orphans` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
