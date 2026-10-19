# Clawford Tier-2 Exam: alibabacloud-oss-backup-integration-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-backup-integration-diagnosis`.
Zero-cloud-API diagnosis of Alibaba Cloud OSS integration problems for third-party backup software (Veeam, Synology NAS, Rclone, generic S3 clients): S3 compatible interface checks (endpoint form, path-style), V1-signature-forbidden routing to V4, retrieval-fee attribution for IA/Archive backup buckets, whitelist (jia-bai) request guidance. Configuration advice only; never executes changes. Do NOT use for: upload/download error codes (use alibabacloud-oss-transfer-error-code-diagnosis), billing line-items (use alibabacloud-oss-billing-diagnosis), lifecycle rules (use alibabacloud-oss-lifecycle-runtime-diagnosis), presigned URLs (use alibabacloud-oss-presigned-url-v4-diagnosis). Triggers: "Veeam backup to OSS", "Synology backup OSS", "rclone sync OSS", "S3 compatible interface", "high retrieval fee from backup", "V1 signature forbidden on backup tool". Invoke immediately on any trigger; the entry script collects missing inputs via its "Inputs still missing" report instead of interviewing the user first.

## Task

Use `alibabacloud-oss-backup-integration-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
