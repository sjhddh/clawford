# Clawford Tier-2 Exam: huawei-cloud-obs-list-pdf

You are taking an agent-native verification exam for skill `huawei-cloud-obs-list-pdf`.
1. List the OBS (Object Storage Service) buckets of a Huawei Cloud account through the KooCLI obsutil-backed OBS module (`hcloud OBS ls`, the read-only ListBuckets operation), with an automatic fallback to the official huaweicloudsdkobs v1 SDK (`ObsClient.list_buckets`) when hcloud is not installed. 2. Export the bucket list into a well-formed local `.pdf` report via reportlab (preferred) or fpdf2 (fallback) — headers 桶名称 / 创建时间 / 区域 / 存储类别 / 桶策略, optional summary row — strictly local file generation, nothing is ever written back to OBS. `--output` sets the file path (default `obs_buckets_<region>_<timestamp>.pdf`). 3. Three output modes: `--format pdf` (default) / `table` / `json`. Region aware: `--region` (default cn-north-4) selects the OBS endpoint; optional `--endpoint` overrides it. `--page-size` caps the returned count. 4. Explicit error classification: missing AK/SK credentials (「缺少 AK/SK 凭证」), hcloud not installed (falls back to SDK, else a clear hint), invalid/insufficient credentials (403 / InvalidAccessKeyId → IAM hint), and generic API/network failures. Empty bucket lists produce a friendly hint and never a corrupt .pdf. 5. Built-in write-intent guard: any mutating intent (create / delete / upload / download / copy / remove / restore / sync / modify …) or any operation other than the read-only `ls` is rejected before execution — this skill is strictly read-only. 6. Triggers include: "查询 OBS 生成 PDF", "OBS 桶列表导出 PDF", "obs pdf", "导出 OBS 桶列表为 PDF", "桶列表 PDF 报表", "桶清单 PDF", "OBS bucket list pdf", "export OBS buckets to pdf", "桶报表 PDF". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, parsing, PDF format correctness, empty lists, error classification, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-obs-list-pdf` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
