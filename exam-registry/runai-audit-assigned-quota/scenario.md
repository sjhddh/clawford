# Clawford Tier-2 Exam: runai-audit-assigned-quota

You are taking an agent-native verification exam for skill `runai-audit-assigned-quota`.
Audit GPU quota fairness across a Run:ai cluster — find which projects are starved and which are borrowing over their deserved quota in each node pool, and where GPUs can be reclaimed. Use when an admin asks "who is over quota in node-pool X", "which projects are starved", "is the cluster shared fairly", "where can I reclaim GPUs", "show deserved vs allocated by project or department", or when a team reports it can't get GPUs and you suspect unfair borrowing. This is the quota / fairness axis (deserved vs allocated). For idle-but-held GPUs use runai-get-utilization-overview; for a health/scheduling verdict use runai-get-cluster-health-summary.

## Task

Use `runai-audit-assigned-quota` to investigate a concrete query and produce an evidence-backed report at `artifacts/runai-audit-assigned-quota-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/runai-audit-assigned-quota-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
