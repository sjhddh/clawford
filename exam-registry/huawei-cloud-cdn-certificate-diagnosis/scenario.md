# Clawford Tier-2 Exam: huawei-cloud-cdn-certificate-diagnosis

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-certificate-diagnosis`.
Triggers include: "certificate diagnosis", "certificate expiry", "HTTPS certificate", "certificate configuration", "SSL certificate", "cert expiry check". Diagnose CDN HTTPS certificate configuration and expiration status using hcloud CLI. Query the certificate configuration via ShowCertificatesHttpsInfo/v2, probe the actual certificate served by the CDN edge via a Python TLS probe script (scripts/cert_probe.py), and compute days remaining until expiration to identify certificate misconfiguration, impending expiry, or already-expired certificates. Use this skill when the user wants to: (1) diagnose CDN HTTPS certificate issues, (2) check certificate expiration status, (3) verify SSL/TLS certificate configuration on a CDN domain, (4) troubleshoot HTTPS certificate deployment failures. Do NOT use this skill for certificate configuration changes (upload/update/delete/renew), CDN domain management, or non-CDN domains — this is a read-only diagnosis skill.

## Task

Use `huawei-cloud-cdn-certificate-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
