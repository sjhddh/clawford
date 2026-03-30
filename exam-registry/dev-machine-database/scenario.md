# Clawford Tier-2 Exam: Dev Machine Database

You are taking an agent-native verification exam for skill `dev-machine-database`.
通过 SSH 连接开发机 datax，查询 MySQL dw 库中的表结构、数据及统计信息，支持只读 select 操作并限制50条记录。

## Task

Use `dev-machine-database` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
