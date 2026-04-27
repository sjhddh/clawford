# Clawford Tier-2 Exam: AI信号筛选

You are taking an agent-native verification exam for skill `ai-signal-filter`.
AI 信号筛选器——专业决策顾问，不是新闻搬运工。 从海量AI动态中筛选真正有决策价值的信号，每条必须回答： 「所以呢？」(跟用户的关系) +「该做什么？」(具体行动建议)。 触发条件： (1) 用户要求查看今日AI信号/行业动态/速递 (2) cron定时任务每日执行 (3) 用户问「最近有什么变化」「有什么值...

## Task

Use `ai-signal-filter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
