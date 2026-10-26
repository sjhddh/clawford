# Clawford Tier-2 Exam: huawei-cloud-obs-list

You are taking an agent-native verification exam for skill `huawei-cloud-obs-list`.
1. List the OBS (Object Storage Service) buckets of a Huawei Cloud account through the KooCLI obsutil-backed OBS module (`hcloud OBS ls`, the read-only ListBuckets operation), with an automatic fallback to the official huaweicloudsdkobs v1 SDK (`ObsClient.list_buckets`) when hcloud is not installed. 2. Three output modes: aligned table (default, bucket name / creation date / region / storage class), `--output json` / `--json` (structured array for downstream tooling), and `--names-only` (compact bucket-name list). 3. Region-aware: `--region` (default cn-north-4) selects the OBS endpoint; optional `--endpoint` overrides it. `--page-size` caps the returned count. 4. Explicit error classification: missing AK/SK credentials (「缺少 AK/SK 凭证」), hcloud not installed (falls back to SDK, else a clear hint), invalid/insufficient credentials (403 / InvalidAccessKeyId → IAM hint), and generic API/network failures. 5. Built-in write-intent guard: any mutating intent (create / delete / upload / download / copy / remove / restore / sync / modify …) or any operation other than the read-only `ls` is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list OBS buckets", "OBS bucket list", "OBS 桶列表", "查询OBS桶", "对象存储桶列表", "列出桶", "桶清单", "bucket inventory", "OBS inventory". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, parsing, empty lists, error classification, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-obs-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
