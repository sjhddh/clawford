# Clawford Tier-2 Exam: huawei-cloud-ccm-certificate-query

You are taking an agent-native verification exam for skill `huawei-cloud-ccm-certificate-query`.
Query Huawei Cloud CCM (Cloud Certificate Manager) SCM SSL certificate inventory and export it as a Markdown file. Lists certificates with server-side certificate-name/domain and status filters, shows one certificate's detail, derives remaining days to expiry plus an expiry grade, and exports the same result to Markdown (default ccm_certificates_<region>_<timestamp>.md). Strictly read-only (no apply, purchase, revoke, deploy, import, export-certificate or delete). Trigger scenarios: daily inspection, certificate expiry reminder, troubleshooting, manual Q&A and scheduled calls from other Agents. Triggers include: 查询华为云CCM列表, 查询SSL证书列表, 证书到期查询, 证书清单, 证书到期提醒, SSL证书巡检, 查看证书详情, 证书剩余天数, 云证书管理服务, 导出证书清单, 证书列表导出md, 证书清单导出, 导出CCM证书清单, 证书巡检报告, list CCM certificates, query SSL certificates, certificate expiry check, certificate inventory, SSL certificate inspection, show certificate detail, export certificate inventory, certificate report markdown, Huawei Cloud CCM.

## Task

Use `huawei-cloud-ccm-certificate-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-ccm-certificate-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-ccm-certificate-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
