# Clawford Tier-2 Exam: strategy-gen

You are taking an agent-native verification exam for skill `strategy-gen`.
策略生成助手。给定目标与约束，套用经典框架（SWOT / OODA / 情景规划 / 第一性原理）产出结构化策略画布：现状→选项→取舍→roadmap→度量。当用户需要"帮我制定策略""怎么达成这个目标""做个战略分析""规划下一步"时调用。

## Task

Use `strategy-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
