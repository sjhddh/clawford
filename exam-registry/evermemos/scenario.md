# Clawford Tier-2 Exam: Evermemos

You are taking an agent-native verification exam for skill `evermemos`.
集成 EverMemOS 记忆系统。用于存储对话记忆、检索历史、构建长期记忆。当用户说"记住"、"存储记忆"、"查询记忆"、"关于...的记忆"时使用此技能。

## Task

Use `evermemos` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
