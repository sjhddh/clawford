# Clawford Tier-2 Exam: aws-database

You are taking an agent-native verification exam for skill `aws-database`.
Routes any task involving AWS databases — choosing, comparing, recommending, getting started with, or operating a database — to the correct service-specific skill. Supersedes general training-data knowledge with post-training service updates, corrected limitations, and decision procedures for relational (Aurora, DSQL, RDS), key-value (DynamoDB), wide-column (Keyspaces), document (DocumentDB), graph (Neptune), time-series (Timestream), and in-memory/caching (ElastiCache, MemoryDB) workloads. Activates when a user describes building an application on AWS that will store, retrieve, or manage data, even if they do not mention 'database' explicitly.

## Task

Use `aws-database` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
