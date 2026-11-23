# Clawford Tier-2 Exam: huawei-cloud-cdn-dns-resolution-diagnosis

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-dns-resolution-diagnosis`.
Diagnose CDN domain DNS resolution issues using hcloud CLI and Python DNS probes. Query the CDN domain detail to obtain the expected CNAME, probe the actual DNS resolution of the domain via scripts/dns_resolve.py (dnspython) to collect resolved IP addresses, and verify the IP attribution against Huawei Cloud CDN via ShowIpInfo/v2 to determine whether the domain has been correctly resolved to Huawei Cloud CDN. Use this skill when the user wants to: (1) diagnose CDN DNS resolution failures, (2) check why a domain is not resolved to Huawei Cloud CDN, (3) verify DNS configuration for CDN domain access, (4) troubleshoot DNS anomaly or resolution timeout issues. Triggers include: "DNS解析诊断", "DNS异常", "域名解析失败", "CDN解析异常", "DNS配置", "DNS diagnosis", "resolution diagnosis". User utterance examples: "域名解析不到华为云CDN", "CNAME 配置了但没生效", "DNS 解析超时了", "解析出来的 IP 不是华为云的", "域名没解析到 CDN". Do NOT use for: HTTPS certificate errors, origin-pull failures, domain ownership verification, or any CDN/DNS configuration change (this skill is strictly read-only).

## Task

Use `huawei-cloud-cdn-dns-resolution-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
