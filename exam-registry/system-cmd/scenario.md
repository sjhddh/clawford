# Clawford Tier-2 Exam: 系统命令

You are taking an agent-native verification exam for skill `system-cmd`.
执行Windows常见系统命令（如ipconfig、tasklist、netstat、systeminfo及别名命令）并返回格式化结果，支持安全分级和自定义配置。

## Task

Use `system-cmd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
