# Clawford Tier-2 Exam: Trip Planner CN

You are taking an agent-native verification exam for skill `trip-planner-cn`.
行程规划助手，支持往返/单程行程规划。触发词：规划行程、高铁查询、航班查询、机场周边、时间安排、出行方案、当天往返。 涵盖：航班/高铁时刻查询、中转方案、时间约束筛选、详细时间线生成。

## Task

Use `trip-planner-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
