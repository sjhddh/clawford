# Clawford Tier-2 Exam: Hourly Knowledge

You are taking an agent-native verification exam for skill `hourly-knowledge`.
每小时自动为用户推送一条有趣、有用的小知识。当每小时定时任务触发时使用，负责搜索并生成知识内容。包含去重机制，避免短期内推送相同主题。支持多用户，开箱即用。

## Task

Use `hourly-knowledge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
