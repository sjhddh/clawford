# Clawford Tier-2 Exam: config-rollback

You are taking an agent-native verification exam for skill `config-rollback`.
自动回滚保护。修改配置前先备份+设5分钟系统定时任务，改坏自动还原。当用户说"自动回滚"或需要改配置时使用此 Skill。

## Task

Use `config-rollback` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
