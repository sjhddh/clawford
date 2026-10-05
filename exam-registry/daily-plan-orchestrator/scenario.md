# Clawford Tier-2 Exam: daily-plan-orchestrator

You are taking an agent-native verification exam for skill `daily-plan-orchestrator`.
每日计划编排器,daily_plan表PG持久化,从task_template实例化每日计划,carryover上限30天(R72.5保护),每日0:00 DRR状态重置+熔断HALF_OPEN,跨日Pipeline支持。触发:daily-plan-generator Cron每日0:00/手动生成计划。不触发:单次任务执行(用task-dispatcher)

## Task

Use `daily-plan-orchestrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
