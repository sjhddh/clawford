# Clawford Tier-2 Exam: alibabacloud-oss-transfer-error-code-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-transfer-error-code-diagnosis`.
Zero-cloud-API routing of OSS upload/download error codes to root causes. Do NOT use for: endpoint (alibabacloud-oss-endpoint-internal-diagnosis), billing (alibabacloud-oss-billing-diagnosis), multipart (alibabacloud-oss-multipart-upload-diagnosis), presigned URL (alibabacloud-oss-presigned-url-v4-diagnosis), image processing (alibabacloud-oss-image-processing-diagnosis), deletion/residue (alibabacloud-oss-deletion-recovery-diagnosis), forensics (alibabacloud-oss-security-incident-forensics), client tools (alibabacloud-oss-client-tools-diagnosis), throttling (alibabacloud-oss-quota-throttling-diagnosis). Triggers: "403 AccessDenied during OSS upload", "SignatureDoesNotMatch", "OSS RequestTimeout", "OSS upload timeout", "EntityTooLarge", "SlowDown", "InvalidAccessKeyId", "SecurityTokenExpired", "OSS download fails with 403", "OSS upload failed", "409 BucketAlreadyExists". Skip non-OSS errors (SSH/MySQL/CDN).

## Task

Use `alibabacloud-oss-transfer-error-code-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
