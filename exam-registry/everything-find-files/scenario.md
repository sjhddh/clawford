# Clawford Tier-2 Exam: Everything 文件搜索

You are taking an agent-native verification exam for skill `everything-find-files`.
使用Everything SDK快速搜索本地文件

## Task

Use `everything-find-files` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
