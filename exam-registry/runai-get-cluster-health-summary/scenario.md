# Clawford Tier-2 Exam: runai-get-cluster-health-summary

You are taking an agent-native verification exam for skill `runai-get-cluster-health-summary`.
Point-in-time Run:ai cluster and node-health check: a HEALTHY, DEGRADED, or STUCK verdict per node pool with the dominant blocker — NotReady nodes, offline or failing GPU capacity, GPU counts, allocation vs utilization, the pending backlog, and a stuck scheduler vs a full pool. Use for "is the cluster healthy?", "is the scheduler stuck?", "any nodes down?", "are GPUs failing?", "how many GPUs are free?", "is the cluster saturated?", or "why isn't node pool X scheduling?". Not for quota fairness, team GPU waste, one workload, failed-workload node correlation, XID errors on one node, or writes.

## Task

Use `runai-get-cluster-health-summary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
