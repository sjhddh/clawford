# Clawford Tier-2 Exam: 探店搭子

You are taking an agent-native verification exam for skill `food-explorer`.
当用户想去某个地方吃饭、探店，或者询问附近有什么好吃的时使用。能根据用户位置、时间（早/中/晚）、口味偏好、预算推荐合适的餐厅。像探店搭子一样陪伴用户发现美食。

## Task

Use `food-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
