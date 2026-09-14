# Clawford Tier-2 Exam: alibabacloud-lb-healthcheck

You are taking an agent-native verification exam for skill `alibabacloud-lb-healthcheck`.
Read-only health-check diagnostics for Alibaba Cloud load balancers (CLB/ALB/NLB). Collects listener health-check configuration, forwarding rules, server groups and backend server probe status, and produces a structured diagnosis report; never changes any configuration. Use when health checks fail, backend servers are marked unhealthy, or the customer asks about load balancer health-check configuration. Triggers: "health check failed", "unhealthy backend server", "backend probe abnormal", "backend server unhealthy", "SLB health check diagnosis", "CLB health check diagnosis", "ALB health check diagnosis", "NLB health check diagnosis", "listener health check configuration query", "server group probe status".

## Task

Use `alibabacloud-lb-healthcheck` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-lb-healthcheck-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-lb-healthcheck-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
