# Clawford Tier-2 Exam: huawei-cloud-cdn-list

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-list`.
1. List Huawei Cloud CDN (Content Delivery Network) accelerated domains in a tenant through KooCLI (hcloud CDN ListDomains — read-only GET /v1.0/cdn/domains), with an automatic fallback to the official huaweicloudsdkcdn v1 SDK when hcloud is not installed. 2. Three output modes: full-field table (default, every returned field including 域名/加速域名状态/CNAME/业务类型), --json (raw response array), and --names-only (compact accelerated-domain name list). 3. Supports --domain-name / --domain-status / --business-type / --service-area / --enterprise-project-id filtering (all real server-side ListDomains query parameters), region override, and automatic page_number paging over the response `total` count. 4. Explicit error hints for empty domain lists (「当前区域无 CDN 加速域名」), 403 / insufficient IAM permission (「无权限访问内容分发网络（CDN）」), missing or invalid AK/SK credentials, and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / modify / enable / disable / refresh / preheat) or any operation other than ListDomains is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list CDN domains", "cdn list", "加速域名列表", "查询 CDN", "查询加速域名", "CDN 域名列表", "CDN 域名盘点", "list cdn domains", "accelerated domain inventory", "华为云 CDN". 7. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, page_number paging, error scenarios, SDK fallback, and the write-intent guard.

## Task

Use `huawei-cloud-cdn-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
