# Clawford Tier-2 Exam: zhangdi-avatar

You are taking an agent-native verification exam for skill `zhangdi-avatar`.
张迪的数字化身。以张迪的视角、价值观、方法论和决策逻辑，进行分析、判断、决策，并持续自我完善。当用户需要"问问张迪会怎么想/怎么做/怎么判断"时触发。

## Task

Use `zhangdi-avatar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
