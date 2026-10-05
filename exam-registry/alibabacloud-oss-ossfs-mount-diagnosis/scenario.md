# Clawford Tier-2 Exam: alibabacloud-oss-ossfs-mount-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-ossfs-mount-diagnosis`.
Read-only diagnostics for ossfs and container OSS mounts. Use when an ossfs mount fails, a mounted directory disappears, an ACK/ACS storage volume mount returns 403, or reading archive objects through a mount returns 403. Attributes causes (credential file, endpoint region, RAM permission, FUSE dependency) and checks bucket region/storage class read-only for the archive direct-read judgment; never executes mounts, never changes anything. Triggers: "ossfs mount failed", "mount directory disappeared", "mount OSS in container", "storage volume mount 403", "ossfs archive read 403". Do NOT use for endpoint selection (use alibabacloud-oss-endpoint-internal-diagnosis), authorization config (use alibabacloud-oss-cross-account-auth-diagnosis), archive restore or lifecycle (use alibabacloud-oss-lifecycle-runtime-diagnosis), or transfer acceleration error codes (use alibabacloud-oss-transfer-error-code-diagnosis).

## Task

Use `alibabacloud-oss-ossfs-mount-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
