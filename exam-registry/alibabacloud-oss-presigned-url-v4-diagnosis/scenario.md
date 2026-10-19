# Clawford Tier-2 Exam: alibabacloud-oss-presigned-url-v4-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-presigned-url-v4-diagnosis`.
Zero-cloud-API diagnosis of OSS presigned (share) URL failures and V1-to-V4 migration: parses a pasted URL, routes to causes (expired, clock skew, V1 signature forbidden, credential rotation, method mismatch, malformed x-oss-credential, SDK config misuse, proxy header tampering). Triggers: "share link expired", "SignatureDoesNotMatch on presigned URL", "V1 signature is forbidden", "x-oss-credential error", "signed URL stops working"; Chinese ticket wording routes via the embedded catalog keyword layer. Do NOT use for transfer error codes, billing, endpoints, traffic abuse / AK-leak, CDN back-to-origin or Referer hotlink configuration requests, or other OSS domains (backup / image processing / direct-access links / static hosting) — route to the matching alibabacloud-oss-* skill. A presigned-URL signature failure stays here even when a CDN or a proxy sits in front of the bucket.

## Task

Use `alibabacloud-oss-presigned-url-v4-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
