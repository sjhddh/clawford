# Clawford Tier-2 Exam: alibabacloud-oss-deletion-recovery-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-deletion-recovery-diagnosis`.
Read-only OSS diagnosis of accidental-deletion recovery and deletion residue: uses versioning to decide if a deleted object is recoverable, explains delete markers, leftover fragments, and why capacity/cost does not drop. States honestly when data is unrecoverable by official policy (versioning never enabled, lifecycle noncurrent version expiration, overdue-payment release). Triggers: "accidentally deleted how to recover", "delete marker", "BucketNotEmpty", "failed to delete bucket", "capacity not reduced after deletion", "file/object suddenly disappeared or returns 404, can it be recovered", "restore the deleted object to its previous version". Not for bill line-items (alibabacloud-oss-billing-diagnosis), the fragment cleanup procedure (alibabacloud-oss-multipart-upload-diagnosis), transfer or endpoint/region issues, lifecycle rule design, or restore/delete writes. Invoke immediately; missing bucket/region/object details are handled internally, never ask for supplements before invoking.

## Task

Use `alibabacloud-oss-deletion-recovery-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
