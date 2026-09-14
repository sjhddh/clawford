# Clawford Tier-2 Exam: National Standard Monitor Skill

You are taking an agent-native verification exam for skill `national-standard-monitor-skill`.
跟踪国家标准（GB/GB/T）更新变化，支持任意ICS分类。从openstd.samr.gov.cn获取最新现行标准列表，自动比对本地已下载标准，发现新增/废止/状态变更，支持批量下载PDF。

## Task

Use `national-standard-monitor-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/national-standard-monitor-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/national-standard-monitor-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
