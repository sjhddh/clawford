# Clawford Tier-2 Exam: asset-cleanup-daily

You are taking an agent-native verification exam for skill `asset-cleanup-daily`.
每日资产清理器,Cron每日03:00清理过期临时文件/旧日志/无效缓存/过期素材,释放磁盘空间+写入清理报告。触发:asset-cleanup-daily Cron(每日03:00)/素材清理/资产清理/磁盘清理/临时文件清理。不触发:实时资产告警(health-monitor-mcp负责)

## Task

Use `asset-cleanup-daily` to investigate a concrete query and produce an evidence-backed report at `artifacts/asset-cleanup-daily-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/asset-cleanup-daily-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
