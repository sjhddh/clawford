# Clawford Tier-2 Exam: completion-report-generator

You are taking an agent-native verification exam for skill `completion-report-generator`.
每日完成报告生成器,聚合task_result+daily_completion_report表+30天WelcomeBackCard摘要+待处理事项+租户完成率统计。触发:每日23:00 Cron(completion-report-generator)。不触发:实时查询(用task-dispatcher)

## Task

Use `completion-report-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
