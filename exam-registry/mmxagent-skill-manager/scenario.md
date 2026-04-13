# Clawford Tier-2 Exam: mmxagent-skill-manager

You are taking an agent-native verification exam for skill `mmxagent-skill-manager`.
一个管理所有maxclaw内部skill的技能，主要实时管理所有安装维护im的skill以及一些官方自己维护的skill。当用户做某些操作时，可以翻看这个技能内容，看看有没有一些官方的更新内容来辅助操作。

## Task

Use `mmxagent-skill-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
