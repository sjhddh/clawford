# Clawford Tier-2 Exam: alibabacloud-oss-crr-config-check

You are taking an agent-native verification exam for skill `alibabacloud-oss-crr-config-check`.
Read-only OSS cross-region replication (CRR) configuration checks. Verify a replication rule and explain why replication is not starting; never creates or modifies a rule. Covers whether a bucket has any replication rule configured before it is relied on for DR, the authorization role, prefix scope, delete-marker and historical-data sync switches, and cold archive or cross-border transfer-acceleration mis-configurations. Also use for a replication investigation plan before execution. Triggers: "cross-region replication not starting", "replication rule config error", "AliyunOSSRole authorization", "replication delete marker sync", "verify whether a bucket has cross-region replication configured", "rely on replication for DR", "replication investigation plan", "replication check", "cold archive replication", "transfer acceleration not enabled for cross-region replication", "replication slow", "replication capacity".

## Task

Use `alibabacloud-oss-crr-config-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
