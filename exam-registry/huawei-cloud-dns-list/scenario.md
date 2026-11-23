# Clawford Tier-2 Exam: huawei-cloud-dns-list

You are taking an agent-native verification exam for skill `huawei-cloud-dns-list`.
1. List Huawei Cloud DNS (云解析服务) zones and record sets in a tenant through KooCLI (hcloud DNS ListPublicZones / ListPrivateZones / ListRecordSets — read-only GET /v2/zones and /v2/recordsets), with an automatic fallback to the official `huaweicloudsdkdns` v2 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 域名/ID/类型/状态/记录集数/邮箱/TTL), --json (raw response array), and --names-only (compact domain-name list). 3. Markdown export: --output / -o [FILE] writes the current table view to a UTF-8 Markdown file (zone view default dns_zones.md, --recordsets view default dns_recordsets.md), atomically (temp file + rename) and prints the absolute path; an empty result still writes a header-only file. 4. Supports --type public|private, --recordsets, --id / --name / --record-type filtering (all real server-side ListZones / ListRecordSets query parameters), region override, and automatic marker paging. 5. Explicit error hints for empty lists (「当前区域无 DNS 域名」), 403 / insufficient IAM permission (「无权限访问云解析服务（DNS）」), API error bodies returned on stdout with exit code 0 (`DNS.1802` / `not authorized` / `no identity-based policy` envelopes are never reported as an empty list), missing or invalid AK/SK credentials, missing project_id on the SDK fallback, hcloud not installed, and Markdown write failure. 6. Built-in write-intent guard: any mutating intent (create / delete / update / associate / transfer / enable / disable / import / export / batch) or any operation other than the three list operations is rejected before execution — this skill is strictly read-only. The --output value is caller data and is excluded from the guard scan. 7. Triggers include: "list DNS zones", "DNS 域名列表", "查询 DNS", "云解析", "公网域名列表", "私网域名列表", "DNS 记录集", "dns zone inventory", "list public zones", "list record sets", "华为云 DNS", "导出 DNS 清单", "DNS Markdown 导出", "export DNS to markdown". 8. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, marker paging, error scenarios, SDK fallback, Markdown export (default file names / atomic write / escaping / empty result), and the write-intent guard.

## Task

Use `huawei-cloud-dns-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
