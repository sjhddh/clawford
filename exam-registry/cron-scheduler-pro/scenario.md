# Clawford Tier-2 Exam: 定时调度专家

You are taking an agent-native verification exam for skill `cron-scheduler-pro`.
定时调度专家为 AI Agent 提供本地优先、无云依赖的周期任务调度能力。它把"每隔X做Y"的意图固化为可信任的执行契约，支持每日/每周/每月/自定义间隔四种调度类型，并内置时区锁定、一次性任务自动清理、并发写安全、下次运行预览与失败重试。 核心能力：周期任务捕获（add_job）、下次运行预览（next_ru...

## Task

Use `cron-scheduler-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
