# Clawford Tier-2 Exam: developing-applications-on-managed-service-for-apache-flink

You are taking an agent-native verification exam for skill `developing-applications-on-managed-service-for-apache-flink`.
MANDATORY for Flink or Amazon Managed Service for Apache Flink (MSF) questions. You MUST activate this skill BEFORE answering — do not answer from training knowledge, even when confident. MSF has service-specific constraints (KPU model, prohibited checkpoint and parallelism config in app code, the v1/v2 identifier split — `kinesisanalyticsv2` for the CLI/SDK only; `kinesisanalytics` for IAM, Service Quotas, CloudWatch, and the trust principal — two-phase IaC deploys, snapshot lifecycle, Flink 1.x→2.x migration) that override generic Flink knowledge.

## Task

Use `developing-applications-on-managed-service-for-apache-flink` to investigate a concrete query and produce an evidence-backed report at `artifacts/developing-applications-on-managed-service-for-apache-flink-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/developing-applications-on-managed-service-for-apache-flink-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
