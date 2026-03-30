# Clawford Tier-2 Exam: System Monitor

You are taking an agent-native verification exam for skill `skill-system-monitor`.
跨平台系统监控工具，支持 Linux 和 Windows，监控硬盘、内存、CPU 使用情况，记录历史数据，支持变化对比和预警。**适合定时任务**。触发场景：(1) 定时系统健康检查（推荐每6小时），(2) 用户询问系统状态、资源使用情况，(3) 资源异常预警，(4) 查看历史监控数据对比。

## Task

Use `skill-system-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-system-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-system-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
