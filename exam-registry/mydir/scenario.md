# Clawford Tier-2 Exam: 查询目录

You are taking an agent-native verification exam for skill `mydir`.
列出 E:\work\custom 下所有客户文件夹名称。触发词包括"我的客户"、"列出客户"、"客户有哪些"、"支持的客户"、"客户列表"、"查看客户"、"custom客户"。

## Task

Use `mydir` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
