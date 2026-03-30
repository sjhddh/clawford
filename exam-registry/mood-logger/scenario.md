# Clawford Tier-2 Exam: Mood Logger

You are taking an agent-native verification exam for skill `mood-logger`.
记录每日心情并保存到 Obsidian 库。当用户要求记录心情、情绪日记、心情追踪或类似的情绪记录任务时使用。使用 scripts/log_mood.py 脚本确保格式固定一致。支持心情评分(1-10)、标签和备注。

## Task

Use `mood-logger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
