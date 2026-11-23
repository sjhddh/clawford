# Clawford Tier-2 Exam: huawei-cloud-obs-statistics

You are taking an agent-native verification exam for skill `huawei-cloud-obs-statistics`.
1. Read-only aggregated statistics for Huawei Cloud OBS (Object Storage Service): for a target scope (all buckets, or one bucket, optionally narrowed by a key prefix) it reports, in one shot, the bucket count, the object count, the total capacity (sum of object Size, bytes — an estimate, not a billing figure), the distribution by storage class, and the distribution by region. 2. Primary execution path is the KooCLI obsutil-backed OBS module (`hcloud OBS ls`), with an automatic fallback to the official `huaweicloudsdkobs` v1 SDK (`ObsClient.list_buckets` / `list_objects`) when hcloud is not installed. 3. Three output modes: an aligned table (default), structured JSON (`--json` / `--output json`) for downstream automation, and Markdown (`--output md`). 4. Scope controls: `--bucket` (single bucket), `--prefix` (limit the scan), `--region` (default cn-north-4), `--max-objects` (cap, truncated results are marked). 5. Built-in write-intent guard: any mutating intent (create / delete / upload / download / copy / remove / restore / sync / modify …) or any operation other than the read-only `ls` is rejected before execution — this skill is strictly read-only. 6. Triggers include: "OBS 统计", "OBS 聚合统计", "OBS 容量统计", "对象数量统计", "存储类别分布", "区域分布", "桶统计", "资源巡检", "容量盘点", "OBS statistics", "bucket usage stats", "obs statistics summary". 7. Offline unit tests (mocked hcloud subprocess and SDK) cover output modes, parsing, aggregation, empty scopes, error classification, SDK fallback and the write-intent guard.

## Task

Use `huawei-cloud-obs-statistics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
