# Clawford Tier-2 Exam: Dream

You are taking an agent-native verification exam for skill `dream-memoryfilemanager`.
主动维护 MEMORY.md 的记忆蒸馏技能。触发场景： (1) 每日 03:30 定时蒸馏（空闲时执行，忙则顺延至 06:00）； (2) 用户说 "dream" / "复盘" / "整理记忆" / "你记得我什么"； (3) 用户要求收录内容到 Obsidian 索引。

## Task

Use `dream-memoryfilemanager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
