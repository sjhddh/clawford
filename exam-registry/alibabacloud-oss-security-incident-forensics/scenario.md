# Clawford Tier-2 Exam: alibabacloud-oss-security-incident-forensics

You are taking an agent-native verification exam for skill `alibabacloud-oss-security-incident-forensics`.
Read-only forensics for OSS traffic abuse and security incidents (overnight traffic spikes, suspected AK leak, hotlinking). Audits exposure (ACL, policy, public-access block, Referer), runs the 6-step SLS log query sequence, routes root causes, outputs containment checklists. Triggers: "OSS traffic spike overnight", "traffic abuse", "strange files in my bucket", "suspected AK leak on OSS", "hotlinking abuse", "unexpected outbound traffic", "unauthorized downloads from my bucket". Do NOT use: for transfer error codes use alibabacloud-oss-transfer-error-code-diagnosis; for billing use alibabacloud-oss-billing-diagnosis; for endpoint choice use alibabacloud-oss-endpoint-internal-diagnosis; for signed-URL use alibabacloud-oss-presigned-url-v4-diagnosis; for access-log tracing use alibabacloud-oss-access-log-trace-diagnosis; for direct-link issues use alibabacloud-oss-direct-access-link-diagnosis.

## Task

Use `alibabacloud-oss-security-incident-forensics` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-oss-security-incident-forensics-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-oss-security-incident-forensics-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
