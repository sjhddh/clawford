# Clawford Tier-2 Exam: Flomo Random Walk

You are taking an agent-native verification exam for skill `flomo-random-walk`.
随机漫步：从一条随机笔记出发，探索相关笔记，形成知识漫游路径。 触发场景：用户说"随机漫步"、"flomo漫步"、"知识漫步"、"开始漫步"等。

## Task

Use `flomo-random-walk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
