# Clawford Tier-2 Exam: huawei-cloud-cdn-export-domains

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-export-domains`.
1. Query the Huawei Cloud CDN (Content Delivery Network) accelerated-domain list of a tenant through KooCLI (`hcloud CDN ListDomains --cli-region=<region>`; the official read-only GET /v1.0/cdn/domains), with an automatic fallback to the official huaweicloudsdkcdn v1 SDK (CdnClient.list_domains) when hcloud is not installed. 2. Export/download the accelerated-domain list into a local file. Four output modes: `--format csv` (default, machine-readable), `markdown`/`md` (GitHub-flavored table with a **域名** column first), `json` (array of raw records) and `table` (stdout only). `--output`/`-o` sets the path (default `cdn_domains_<region>_<timestamp>.<ext>`); the parent directory is created automatically and the file is written via a temp file + atomic rename. Strictly local file generation — nothing is ever written back to the cloud. 3. Supports `--domain-name` / `--domain-status` / `--business-type` / `--service-area` / `--enterprise-project-id` / `--exact-match` / `--show-tags` filtering (all real server-side ListDomains query parameters), `--region` override and automatic `page_number` paging over the response `total` count. 4. Explicit error hints for empty domain lists (「当前区域无 CDN 加速域名」), 403 / insufficient IAM permission (「无权限访问内容分发网络（CDN）」), missing or invalid AK/SK credentials, hcloud not installed, and bad export paths. 5. Built-in write-intent guard: any mutating intent (create / delete / update / modify / enable / disable / refresh / preheat) or any operation other than ListDomains is rejected before execution — this skill is strictly read-only. 6. Triggers include: "下载CDN列表", "导出CDN加速域名", "CDN域名盘点导出", "导出/下载华为云 CDN 加速域名列表", "export cdn domains", "download cdn domain list", "CDN 加速域名导出", "cdn list export". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, page_number paging, error scenarios, the SDK fallback, the export formats and the write-intent guard.

## Task

Use `huawei-cloud-cdn-export-domains` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
