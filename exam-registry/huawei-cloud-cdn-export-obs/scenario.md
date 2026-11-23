# Clawford Tier-2 Exam: huawei-cloud-cdn-export-obs

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-export-obs`.
1. Query the Huawei Cloud CDN (Content Delivery Network) accelerated-domain list of a tenant through KooCLI (`hcloud CDN ListDomains`, the official read-only GET /v1.0/cdn/domains), with an automatic fallback to the official huaweicloudsdkcdn v1 SDK (CdnClient.list_domains) when hcloud is not installed. 2. Serialize the result into a local file — `--format json` (raw array, default) / `csv` (RFC-4180 flat table) / `md` (Markdown table whose first column is 域名) — written atomically (temp file + rename). 3. Upload the result file to a user-specified OBS bucket + object key through KooCLI's obsutil-backed OBS module (`hcloud OBS cp`), with a fallback to the official huaweicloudsdkobs v1 SDK (ObsClient.put_object) when hcloud is absent. 4. Read-back verification by default: after upload the object metadata is re-read (`hcloud OBS stat` / ObsClient.head_object) and its size compared with the local file. 5. Overwrite protection by default: an already-existing target object is refused (exit 1) unless the user explicitly passes `--overwrite`. 6. Explicit error classification: empty domain list is not an error; missing AK/SK, no permission (403), hcloud missing, KooCLI usage errors, bad local output path, and already-existing object are each reported with a dedicated hint. A write-intent guard rejects any mutating CDN operation (create / delete / update / enable / disable / refresh / preheat ...). 7. Triggers include: "CDN 列表导出 OBS", "CDN 域名列表上传 OBS", "查询 CDN 并上传 OBS", "CDN 盘点归档到 OBS", "导出 CDN 加速域名到对象存储", "cdn list export obs", "upload CDN domains to OBS", "archive CDN domains", "华为云 CDN 列表导出". 8. Offline unit tests (mocked hcloud subprocess) cover the CDN query, paging, serialization (json/csv/md), OBS upload, overwrite protection, read-back verification, error classification, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-cdn-export-obs` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
