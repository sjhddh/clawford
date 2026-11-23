# Clawford Tier-2 Exam: ym-sql-change-precheck

You are taking an agent-native verification exam for skill `ym-sql-change-precheck`.
在执行前审查 SQL 变更脚本：识别无 WHERE 的更新删除、锁表风险、隐式类型转换、缺失回滚方案、大表 DDL 风险与命名规范问题，输出可执行的风险清单与改写建议。当用户说「看下这个 SQL 能不能上」「变更脚本预检」「上线前检查 SQL」时使用。 也适用于「SQL预检」「变更脚本检查」「上线前检查SQL」「数据库变更」「sql review」这类说法。

## Task

Use `ym-sql-change-precheck` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
