# Clawford Tier-2 Exam: Wyckoff Screen

You are taking an agent-native verification exam for skill `wyckoff-screen`.
Wyckoff 2.0 选股系统。全市场扫描，找出处于"积累末期"或"趋势启动"阶段的A股候选股。当用户要求"选股"、"扫市场"、"今日买什么"、"帮我看看有什么可以买的"、"全市场扫描"时触发。输出按评分排序的候选股名单和工作流程说明。

## Task

Use `wyckoff-screen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
