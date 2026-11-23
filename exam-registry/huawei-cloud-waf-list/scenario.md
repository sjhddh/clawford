# Clawford Tier-2 Exam: huawei-cloud-waf-list

You are taking an agent-native verification exam for skill `huawei-cloud-waf-list`.
1. Query the list of Huawei Cloud WAF (Web Application Firewall, Web应用防火墙) protected websites / domain names under the current account through KooCLI (hcloud waf ListHost / ListCompositeHosts — read-only GET /v1/{project_id}/waf/instance and /v1/{project_id}/composite-waf/host). 2. Output modes: a compact table (default) with 防护域名 | 防护状态 | 接入方式 | 保活方式 | 独享IP | Domain ID key fields, --json (the raw host array)[, and --names-only (unique sorted domain list). 3. Supports --region to pick the region, --all-modes / --mode cloud|premium to select cloud-mode or dedicated/premium-mode protected domains, --hostname filtering, --protect-status (-1 bypass / 0 suspended / 1 enabled), --enterprise-project-id and --policyname filters, and automatic pagination (--pagesize, -1 = fetch all). Access mode (接入方式 cloud/premium) is surfaced from waf_type, keep-alive mode (保活方式) from proxy. 4. Explicit error hints for an empty protected-site list (「当前区域无 WAF 防护网站」), 403 / insufficient IAM permission (「无权限访问 WAF 防护网站列表」, WAF.00012006), disabled region (APIGW.0802), and hcloud not installed. 5. Built-in write-intent guard: any mutating intent (create / delete / update / migrate / rename / batch ...) is rejected before execution — this skill is strictly read-only. 6. Triggers include: "list WAF sites", "WAF 防护网站列表", "查询WAF防护域名", "WAF 域名列表", "WAF 防护状态查询", "WAF 网站盘点", "WAF 巡检", "list waf hosts", "waf protected domains", "华为云WAF列表". 7. Offline unit tests (mocked hcloud subprocess) cover routing, output modes, filters, error scenarios and the write-intent guard.

## Task

Use `huawei-cloud-waf-list` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
