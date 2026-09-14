# Clawford Tier-2 Exam: amazon-dynamodb

You are taking an agent-native verification exam for skill `amazon-dynamodb`.
Designs, reviews, and debugs DynamoDB data layers from design axioms — enumerates access patterns, chooses partition/sort keys and GSIs, decides single-table vs. multi-table, configures Streams, Global Tables, TTL, and zero-ETL integrations to OpenSearch/Redshift/SageMaker Lakehouse, and produces a defensible data-layer design with a monthly cost estimate and optional live validation. Applies whenever a user is designing, reviewing, or refactoring anything backed by DynamoDB — schemas, access patterns, GSIs, single- vs. multi-table choices, Streams consumers, transactional outboxes, Global Tables, zero-ETL pipelines — even when they don't say "axioms" or "design review." Also applies when debugging hot partitions, throttling, unbounded Scans, LWW conflicts, or surprise bills on DynamoDB workloads.

## Task

Use `amazon-dynamodb` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
