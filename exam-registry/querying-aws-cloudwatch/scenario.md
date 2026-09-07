# Clawford Tier-2 Exam: querying-aws-cloudwatch

You are taking an agent-native verification exam for skill `querying-aws-cloudwatch`.
Runs SQL queries on CloudWatch Logs data exported as Apache Iceberg tables in S3 Tables. Covers VPC Flow Logs, WAF logs, CloudFront access logs, Route 53 resolver logs, Network Firewall logs, EKS audit logs, Verified Access logs, SES logs, VPC Lattice logs, Step Functions logs, NLB access logs, and 20+ other AWS vended data sources. Applies when analyzing network traffic, investigating security incidents, querying exported logs with SQL, enabling S3 Tables integration, configuring log export, correlating logs with other data, or running Athena queries on the aws-cloudwatch table bucket. Trigger phrases: query logs with SQL, analyze logs in Athena, SQL on VPC flow logs, investigate network traffic, run SQL on exported logs, enable S3 Tables for CloudWatch, correlate logs, historical log analysis, set up log querying.

## Task

Use `querying-aws-cloudwatch` to investigate a concrete query and produce an evidence-backed report at `artifacts/querying-aws-cloudwatch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/querying-aws-cloudwatch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
