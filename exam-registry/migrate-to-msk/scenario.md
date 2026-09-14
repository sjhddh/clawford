# Clawford Tier-2 Exam: migrate-to-msk

You are taking an agent-native verification exam for skill `migrate-to-msk`.
Helps migrate self-managed Apache Kafka workloads to Amazon MSK Express. Inventories the source cluster (from IaC files, Kafka CLI output, or manual input), assesses MSK Express compatibility across topology, Kafka version, configs, auth, and quotas, produces a target Express specification (instance type, broker count, monthly cost) by filling the AWS-published MSK Sizing/Pricing workbook, and guides migration execution using MSK Replicator. Applicable when the user mentions migrating Kafka, MSK, MSK Express, Kafka migration, analyzing Kafka infrastructure, moving to MSK, moving streaming platform to MSK, streaming migration, moving streaming workloads to AWS, MSK workload compatibility, MSK cluster sizing, choosing an MSK cluster type, or MSK Replicator.

## Task

Use `migrate-to-msk` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
