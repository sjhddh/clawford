# Clawford Tier-2 Exam: Diet Logger

You are taking an agent-native verification exam for skill `diet-logger`.
记录日常饮食并保存到 Obsidian 库。当用户要求记录早饭、午饭、晚饭、加餐、饮食日记或类似的饮食追踪任务时使用。使用 scripts/log_diet.py 脚本确保格式固定一致。

## Task

Use `diet-logger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
