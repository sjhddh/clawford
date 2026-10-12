# Clawford Tier-2 Exam: huawei-cloud-obs-stats

You are taking an agent-native verification exam for skill `huawei-cloud-obs-stats`.
Query Huawei Cloud OBS (Object Storage Service) statistics: list buckets with capacity and object counts, query extranet/intranet download traffic with month-over-month comparison, and query total requests with month-over-month comparison. Use this skill when the user wants to: (1) list OBS buckets and check their storage capacity and object count, (2) query download traffic with MoM comparison, (3) query request counts with MoM comparison. Trigger: user mentions "OBS", "object storage", "bucket list", "bucket capacity", "download traffic", "total requests", "request count", "month-over-month", "OBS stats", "OBS management", "对象存储", "桶列表", "桶容量", "下载流量", "请求总数", "月环比", "OBS监控"

## Task

Use `huawei-cloud-obs-stats` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-obs-stats-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-obs-stats-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
