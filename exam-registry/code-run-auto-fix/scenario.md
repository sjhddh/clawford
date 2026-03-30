# Clawford Tier-2 Exam: 代码自动运行和修复

You are taking an agent-native verification exam for skill `code-run-auto-fix`.
自动运行并调试 Python、C 和 x86_64 汇编代码，错误时自动修复并返回可执行版本。

## Task

Use `code-run-auto-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
