# Clawford Tier-2 Exam: alibabacloud-oss-multipart-upload-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-multipart-upload-diagnosis`.
Read-only diagnostics for OSS multipart upload. Use when a multipart upload is stuck or interrupted, a large file upload fails, or multipart fragments occupy storage. Finds fragments via read-only ListMultipartUploads, checks part size/concurrency limits, attributes server/client/network causes; cleanup guidance is manual-only. Triggers: "multipart upload stuck", "upload stuck at 0%", "resume interrupted upload", "multipart fragments occupy storage", "large file upload fails", "fragment cleanup", "resumable upload", "breakpoint resume". Do NOT use for single-request upload errors (use alibabacloud-oss-transfer-error-code-diagnosis), billing (use alibabacloud-oss-billing-diagnosis), endpoints (use alibabacloud-oss-endpoint-internal-diagnosis), signed URL V4 (use alibabacloud-oss-presigned-url-v4-diagnosis), browser/mini-program direct upload with CORS (use alibabacloud-oss-browser-upload-cors-diagnosis).

## Task

Use `alibabacloud-oss-multipart-upload-diagnosis` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
