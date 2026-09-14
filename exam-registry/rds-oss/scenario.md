# Clawford Tier-2 Exam: rds-oss

You are taking an agent-native verification exam for skill `rds-oss`.
Advises on Amazon RDS open-source engines (MySQL, MariaDB, PostgreSQL) for instance creation, upgrade planning, commitment pricing, proxy evaluation, and Blue/Green deployments. Handles any RDS MySQL, MariaDB, or PostgreSQL question, including create a production-ready RDS MySQL instance, provision an RDS PostgreSQL database, run the RDS upgrade advisor for my RDS MySQL instance, what are my upgrade options, upgrade RDS MariaDB from 10.6 to the latest version, should I buy reserved instances or a savings plan for db.r7g.2xlarge RDS MySQL, change a VARCHAR to INT column on RDS MySQL 8.0 with Blue/Green, and does RDS Proxy help when PgBouncer already runs in transaction mode. Covers instance creation with production best practices, describe-db-instances and describe-db-engine-versions upgrade-target workflow, live prechecks via SSM or direct connection, RI versus DSP commitment pricing, RDS Proxy versus PgBouncer, and Blue/Green lifecycle with binlog replay compatibility.

## Task

Use `rds-oss` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
