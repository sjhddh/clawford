# Clawford Tier-2 Exam: alibabacloud-oss-lifecycle-runtime-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-lifecycle-runtime-diagnosis`.
Read-only OSS diagnosis for lifecycle runtime and archive restore. Use when a lifecycle rule does not take effect (loading window, prefix/tag matching, one-way transition, versioning), when an archive / cold archive / deep cold archive object cannot be read (restore tiers, archive direct read), or for storage tiering advice and restore/retrieval fee composition. Triggers: "lifecycle rule not working", "archive file cannot download", "InvalidObjectState", "RestoreAlreadyInProgress", "Overlap for same action type", "The operation is not valid for the object's state", "restore fee", "storage class transition", "cold archive restore duration", "storage tiering". Do NOT use for bill line-items (alibabacloud-oss-billing-diagnosis), data recovery (alibabacloud-oss-deletion-recovery-diagnosis), transfer error codes (alibabacloud-oss-transfer-error-code-diagnosis), backup-tool retrieval fees (alibabacloud-oss-backup-integration-diagnosis), or write operations.

## Task

Use `alibabacloud-oss-lifecycle-runtime-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
