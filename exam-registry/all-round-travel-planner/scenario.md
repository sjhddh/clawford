# Clawford Tier-2 Exam: 全能旅行规划师

You are taking an agent-native verification exam for skill `all-round-travel-planner`.
全能旅行规划师。根据用户提供的出发地、目的地、预算、出行天数、人数等信息，规划完整的旅游方案，涵盖吃、住、游玩、交通四大核心板块。支持交通方式选择，飞机出行时可查询合适时间点的票价。当用户提到"旅游规划""旅行攻略""出行方案""帮我安排旅游""旅游计划""行程规划""旅行计划""旅游攻略"等关键词时触发此技能。...

## Task

Use `all-round-travel-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
