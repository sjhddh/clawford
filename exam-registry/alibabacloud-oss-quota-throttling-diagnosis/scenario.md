# Clawford Tier-2 Exam: alibabacloud-oss-quota-throttling-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-quota-throttling-diagnosis`.
Read-only OSS QPS/bandwidth quota and throttling diagnostics. Use when requests persistently hit 503/SlowDown or clients time out with no server errors. Covers watermark guidance, a throttling attribution decision tree, optimization (concurrency, prefix hashing, backoff), quota-increase guidance, ActiveRequestLimitExceeded concurrency throttling, and resource pool QoS / dedicated bandwidth consultation. Triggers: "QPS limit exceeded", "bandwidth saturated", "timeout without server errors", "persistent SlowDown 503", "quota increase request", "TotalQpsLimitExceeded", "x-oss-qos-delay-time", "ActiveRequestLimitExceeded", "resource pool QoS", "dedicated bandwidth". Not for one-off SlowDown / single-request error codes, client-tool connection timeouts, transfer acceleration selection, endpoint errors, or billing (use the matching OSS diagnosis skill); never applies changes.

## Task

Use `alibabacloud-oss-quota-throttling-diagnosis` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-oss-quota-throttling-diagnosis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-oss-quota-throttling-diagnosis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
