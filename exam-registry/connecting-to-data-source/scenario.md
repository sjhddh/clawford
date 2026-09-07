# Clawford Tier-2 Exam: connecting-to-data-source

You are taking an agent-native verification exam for skill `connecting-to-data-source`.
Create and troubleshoot AWS Glue connections to JDBC databases (Oracle, SQL Server, PostgreSQL, MySQL, RDS), Redshift, Snowflake, and BigQuery. Gathers connection hints from user, discovers existing connections and RDS/Redshift candidates, registers credentials in Secrets Manager or IAM DB auth, configures VPC, and tests. Triggers on: connect to database, set up Glue connection, register data source, connect to Snowflake/BigQuery/RDS, connection timeout, test connection, troubleshoot connection. Do NOT use for moving data (use ingesting-into-data-lake), creating tables (use creating-data-lake-table), queries (use querying-data-lake), catalog exploration (use exploring-data-catalog), or SaaS (Salesforce, ServiceNow, SAP, MongoDB, Kafka).

## Task

Use `connecting-to-data-source` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
