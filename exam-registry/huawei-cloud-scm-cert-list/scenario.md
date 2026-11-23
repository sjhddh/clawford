# Clawford Tier-2 Exam: huawei-cloud-scm-cert-list

You are taking an agent-native verification exam for skill `huawei-cloud-scm-cert-list`.
1. Inventory the Huawei Cloud SCM (SSL Certificate Manager / 云证书管理服务) certificates of the current account in one region, strictly read-only. Primary path: KooCLI `hcloud SCM ListCertificates` (read-only GET /v3/scm/certificates); when hcloud is unavailable or fails, fall back to the official `huaweicloudsdk` SCM SDK (huaweicloudsdkscm). 2. Output modes: a compact list of 证书名称 | 绑定域名 | 到期时间 (default), a full 8-column table with --table (证书ID / 名称 / 域名 / 类型 / 状态 / 到期时间 / 剩余天数 / region), and --json for the raw merged response body. 3. Filters: --content (certificate name / bound domain / SAN, server-side and client-side), --expiring N (client-side "expires in at most N days"), --expired-days-since N (server-side), --enterprise-project-id, --region (default cn-north-4). 4. Pagination: --limit 10/20/50 with automatic offset+limit paging until the whole certificate inventory is collected (--max-pages safety cap). 5. Built-in read-only guard: any mutating intent (create / delete / update / import / push / deploy / revoke / renew / buy ...) is rejected before execution with exit code 1 — this skill never writes to SCM. 6. Explicit error hints for an empty certificate list, 403 / missing `scm:cert:list` permission, missing credentials, missing hcloud, network failures and KooCLI [USE_ERROR] — always without a traceback. 7. Triggers include: "list SSL certificates", "SSL 证书列表", "证书盘点", "查询证书", "哪些证书快到期", "证书到期巡检", "SCM 证书", "证书类型 DV OV EV", "ssl cert inventory", "list scm certificates", "华为云证书". 8. Offline unit tests cover routing, pagination, output modes, filters, error classification and the write-intent guard (mock hcloud subprocess + fake SDK client).

## Task

Use `huawei-cloud-scm-cert-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
