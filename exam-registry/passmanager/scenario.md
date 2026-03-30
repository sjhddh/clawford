# Clawford Tier-2 Exam: PassManager

You are taking an agent-native verification exam for skill `passmanager`.
本地加密密码管理系统，基于AES-256和SQLite，支持多级权限、自动备份，替代1Password实现企业安全可控密码管理。

## Task

Use `passmanager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
