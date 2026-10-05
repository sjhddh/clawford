# Clawford Tier-2 Exam: alibabacloud-oss-cross-account-auth-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-cross-account-auth-diagnosis`.
Read-only OSS cross-account auth diagnosis: attributes NoPermission/AccessDenied to trust-policy gaps, RAM-policy scope, Bucket-Policy+RAM dual-grant, AssumeRole failures; emits templates only. Triggers: "cross-account access failed", "trust policy error", "cross-account replication permission error", "AssumeRole failed on OSS", "cross-account migration authorization", "peer account cannot read my bucket", company/partner account, account transfer, EncodedDiagnosticMessage decode. Do NOT use: transfer/timeout (use alibabacloud-oss-transfer-error-code-diagnosis); endpoint (use alibabacloud-oss-endpoint-internal-diagnosis); CRR health (use alibabacloud-oss-crr-config-check); ossfs (use alibabacloud-oss-ossfs-mount-diagnosis); direct-link 403 (use alibabacloud-oss-direct-access-link-diagnosis); signed-URL (use alibabacloud-oss-presigned-url-v4-diagnosis); same-account RAM (use alibabacloud-oss-security-incident-forensics).

## Task

Use `alibabacloud-oss-cross-account-auth-diagnosis` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-oss-cross-account-auth-diagnosis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-oss-cross-account-auth-diagnosis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
