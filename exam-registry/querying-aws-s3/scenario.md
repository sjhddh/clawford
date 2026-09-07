# Clawford Tier-2 Exam: querying-aws-s3

You are taking an agent-native verification exam for skill `querying-aws-s3`.
Queries S3 object metadata, tracks bucket activity, audits object changes, searches annotations, and analyzes storage metrics using S3 Metadata system tables (journal, inventory, annotation) and S3 Storage Lens tables via Athena SQL. Applies when counting objects, finding recent uploads or deletions, identifying who wrote to a prefix, breaking down storage classes, finding objects by tag, searching annotation content, analyzing storage lens metrics, or enabling S3 Metadata tracking. Prefers system tables over raw S3 APIs (list-objects-v2, head-object) at scale. Trigger phrases: bucket activity, object count, who uploaded, track deletions, storage class breakdown, find by tag, search annotations, storage lens metrics, audit bucket changes.

## Task

Use `querying-aws-s3` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
