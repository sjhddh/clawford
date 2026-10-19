# Clawford Tier-2 Exam: alibabacloud-oss-access-log-trace-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-access-log-trace-diagnosis`.
Read-only diagnosis of OSS request failures and access-log tracing from the customer's own log and configuration. Use when a request returns 403 AccessDenied, 404 NoSuchKey, SignatureDoesNotMatch or an unexplained EC error code, when a bucket policy seems to deny a request that should be allowed, when anonymous access is rejected, when the customer asks who accessed or deleted an object, or when log enablement must be checked. Shows which policy statement matched, degrades to console statements when logs cannot be read, and states which causes need a ticket. Never changes configuration. Do NOT use for billing, traffic abuse, endpoint or transfer-acceleration errors. Triggers: "OSS 403 error diagnosis", "bucket policy denied my request", "SignatureDoesNotMatch", "presigned upload fails", "OSS EC error code lookup", "NoSuchKey diagnosis", "who accessed my files", "who deleted my object", "access log not enabled", "which IP accessed my bucket".

## Task

Use `alibabacloud-oss-access-log-trace-diagnosis` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-oss-access-log-trace-diagnosis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-oss-access-log-trace-diagnosis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
