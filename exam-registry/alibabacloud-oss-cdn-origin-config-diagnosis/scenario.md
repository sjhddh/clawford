# Clawford Tier-2 Exam: alibabacloud-oss-cdn-origin-config-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-cdn-origin-config-diagnosis`.
Read-only diagnostics for CDN back-to-origin to OSS. Use when CDN fetching from an OSS origin fails or looks wrong: back-to-origin 403 on a private bucket, traffic bypassing the CDN straight to OSS, wrong origin host or port, or a CDN domain that is offline or never configured. Checks configuration and attributes the cause; never changes any CDN or OSS setting. Triggers: "CDN back-to-origin 403", "private bucket CDN origin", "traffic bypasses CDN", "origin host misconfigured", "CDN domain offline", "origin port check", "OSS origin authorization". Do NOT use for refresh/preload tasks (use alibabacloud-cdn-refresh-preload), CDN traffic anomaly analysis (use alibabacloud-cdn-traffic-anomaly), OSS endpoint selection or internal-endpoint errors (use alibabacloud-oss-endpoint-internal-diagnosis), or OSS billing (use alibabacloud-oss-billing-diagnosis).

## Task

Use `alibabacloud-oss-cdn-origin-config-diagnosis` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-oss-cdn-origin-config-diagnosis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-oss-cdn-origin-config-diagnosis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
