# Clawford Tier-2 Exam: alibabacloud-oss-transfer-acceleration-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-transfer-acceleration-diagnosis`.
Read-only OSS transfer acceleration diagnosis: detects acceleration not taking effect (client still on the plain endpoint), separates OSS Data Accelerator (same-region hot data) from Transfer Acceleration (cross-region links), attributes slow cross-border access and fees; never changes anything. Triggers: "transfer acceleration not working", "oss-accelerate endpoint", "cross-border access slow", "overseas upload slow", "transfer acceleration fee", "accelerator vs transfer acceleration". Do NOT use for bill line-item attribution (defer alibabacloud-oss-billing-diagnosis), endpoint choice (alibabacloud-oss-endpoint-internal-diagnosis), multipart fragments (alibabacloud-oss-multipart-upload-diagnosis), presigned URL errors (alibabacloud-oss-presigned-url-v4-diagnosis), QPS/bandwidth throttling (alibabacloud-oss-quota-throttling-diagnosis), GA/ESA/CDN back-to-origin, or executing enablement (write, out of scope).

## Task

Use `alibabacloud-oss-transfer-acceleration-diagnosis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
