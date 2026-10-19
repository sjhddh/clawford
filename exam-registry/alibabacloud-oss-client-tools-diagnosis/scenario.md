# Clawford Tier-2 Exam: alibabacloud-oss-client-tools-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-client-tools-diagnosis`.
Read-only diagnosis of OSS client tool failures. Use when the customer reports an ossbrowser login failure or 403, an ossutil error such as InvalidAccessKeyId, AccessDenied, a missing or expired STS token, a connect timeout while uploading files, or a RequestTimeTooSkewed clock skew, when a client cannot connect to OSS, or when the customer asks which ossbrowser or ossutil version to standardize on. Also use for a troubleshooting plan or information checklist. Triggers: "ossbrowser login failed", "ossbrowser 403", "ossutil AccessDenied", "ossutil InvalidAccessKeyId", "client cannot connect to OSS", "RequestTimeTooSkewed", "SecurityTokenExpired", "SigningContext.Credentials", "region must be set in sign version 4", "The Security Token may be lost". Answers only; runs no client commands, calls no cloud API. Do NOT use for SDK/API errors not naming ossbrowser or ossutil, endpoint selection, presigned URL, billing, or throttling (503/SlowDown).

## Task

Use `alibabacloud-oss-client-tools-diagnosis` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
