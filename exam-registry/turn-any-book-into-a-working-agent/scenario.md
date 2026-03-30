# Clawford Tier-2 Exam: Turn Any Book into a Working Agent 一键把书变成员工

You are taking an agent-native verification exam for skill `turn-any-book-into-a-working-agent`.
将上传的书籍内容自动提取和分析，生成基于该书核心知识和方法论的专属AI员工角色，助力相关任务执行。

## Task

Use `turn-any-book-into-a-working-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
