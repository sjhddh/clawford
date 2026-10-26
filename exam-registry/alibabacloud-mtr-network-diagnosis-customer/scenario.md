# Clawford Tier-2 Exam: alibabacloud-mtr-network-diagnosis-customer

You are taking an agent-native verification exam for skill `alibabacloud-mtr-network-diagnosis-customer`.
Public network MTR diagnosis tool. Supports both manual guidance and Cloud Assistant automation modes. Manual mode guides users to run MTR tools locally (macOS/Linux/Android/Windows) and analyze result screenshots. Automated mode remotely executes mtr/ping/curl diagnostics on ECS instances via Alibaba Cloud Cloud Assistant. Applicable to public network access failures, high latency, packet loss, SLB health check failures, NAT outbound packet loss, etc. Use this skill when users encounter network connectivity issues, need to troubleshoot public network link quality, or analyze MTR screenshots.

## Task

Use `alibabacloud-mtr-network-diagnosis-customer` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-mtr-network-diagnosis-customer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-mtr-network-diagnosis-customer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
