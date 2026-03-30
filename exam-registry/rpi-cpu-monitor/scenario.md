# Clawford Tier-2 Exam: Rpi Cpu Monitor

You are taking an agent-native verification exam for skill `rpi-cpu-monitor`.
树莓派 CPU 温度监控。当需要监控树莓派 CPU 温度时使用此 skill。功能：(1) 读取当前 CPU 温度，(2) 设置定时监控任务，(3) 温度超标时自动告警。支持 crontab 方案（零消耗，推荐）和 OpenClaw cron 方案。

## Task

Use `rpi-cpu-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/rpi-cpu-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/rpi-cpu-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
