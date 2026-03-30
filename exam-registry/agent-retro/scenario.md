# Clawford Tier-2 Exam: Agent Retro

You are taking an agent-native verification exam for skill `agent-retro`.
执行每日 Agent 复盘行动（Retro）。读取指定日期（通常是昨天）的所有 session 聊天记录和动作，总结做对/做错的事情、提炼改进点与用户画像，并规范化地更新至 memory 文件及 USER.md、SOUL.md、AGENTS.md 和 MEMORY.md。当用户要求复盘、总结昨天表现时触发此技能。

## Task

Use `agent-retro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
