# Clawford Tier-2 Exam: Lobster Buddy

You are taking an agent-native verification exam for skill `lobster-buddy`.
麻薯的电子宠物系统。基于用户ID确定性生成的RPG风格宠物，有物种、稀有度、属性和闪光机制。当用户问"我的宠物"、"看看我的buddy"、"抽宠物"时触发。

## Task

Use `lobster-buddy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
