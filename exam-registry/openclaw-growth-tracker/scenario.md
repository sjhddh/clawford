# Clawford Tier-2 Exam: OpenClaw 成长追踪器

You are taking an agent-native verification exam for skill `openclaw-growth-tracker`.
OpenClaw 个人成长追踪器 — 记录你在使用 OpenClaw 过程中的成长轨迹。 触发场景： - 想了解今天/本周的成长情况："我的成长怎么样"、"今天做了什么" - 想看数据化的进展报告："给我看数据"、"量化报告" - 完成重要任务后："记录这个成就"、"完成任务" - 想回顾一段时间的变化："周报"...

## Task

Use `openclaw-growth-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
