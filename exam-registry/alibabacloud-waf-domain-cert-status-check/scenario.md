# Clawford Tier-2 Exam: alibabacloud-waf-domain-cert-status-check

You are taking an agent-native verification exam for skill `alibabacloud-waf-domain-cert-status-check`.
Read-only inventory of SSL certificates bound to domains onboarded to Alibaba Cloud WAF (CNAME access, WAF 3.0 and 2.0): collects each domain's certificate, resolves its validity, classifies it as expired / expiring / healthy, and returns a summary table with renewal guidance so HTTPS is not interrupted by a silently expiring certificate. Use when a customer asks which WAF certificates are about to expire, wants an expiry audit across onboarded domains, worries about HTTPS breaking after expiry, or needs a periodic certificate health check. Not for: why one request was blocked, protection rule effectiveness, certificate-chain / TLS handshake troubleshooting, cloud-product-access domains (CLB / ALB / ECS), or performing the renewal itself. Triggers: "WAF证书到期", "证书快过期了吗", "证书有效期", "证书过期检查", "证书到期提醒", "证书巡检", "证书续期", "域名证书状态", "HTTPS证书会不会断", "cert expiry check", "certificate about to expire", "WAF certificate status", "certificate validity audit", "renew certificate before expiry"

## Task

Use `alibabacloud-waf-domain-cert-status-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
