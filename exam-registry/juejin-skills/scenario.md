# Clawford Tier-2 Exam: Juejin Skills

You are taking an agent-native verification exam for skill `juejin-skills`.
提供掘金技术社区文章排名查询、自动发布与批量下载，支持中文交互与高效自动化工作流管理。

## Task

Use `juejin-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
