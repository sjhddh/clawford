# Clawford Tier-2 Exam: Travel planner case

You are taking an agent-native verification exam for skill `travel-planner-case`.
智能旅行攻略生成器。输入目的地城市后，自动搜索小红书、微博、B站、抖音等平台的热门景点推荐，生成带推荐指数排序的景点列表，细化游乐项目并按优先级排序（排除人多/踩坑项目），最终结合网络图片自动生成精美PPT攻略。用于：旅行规划、景点调研、出行攻略制作、行程优化。

## Task

Use `travel-planner-case` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
