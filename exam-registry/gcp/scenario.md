# Clawford Tier-2 Exam: Google Cloud

You are taking an agent-native verification exam for skill `gcp`.
Architects, debugs, secures, and cost-optimizes Google Cloud — Cloud Run, GKE, Compute Engine, BigQuery, Cloud SQL, IAM, VPC. Use when deploying or reviewing anything on GCP, when a bill jumps or BigQuery scan cost has to come down, when a 403 PERMISSION_DENIED, a SERVICE_DISABLED, a RESOURCE_EXHAUSTED quota error, a 502/503/504, or an unreachable Cloud SQL instance has no obvious cause, when choosing between compute (Cloud Run, GKE, Cloud Functions) or databases (Cloud SQL, AlloyDB, Spanner, Firestore, Bigtable), when hardening service accounts, org policies, firewall rules, public buckets, or secrets, when writing Terraform against the google provider, or when auditing an inherited project. Covers VPC/subnet design, Private Google Access, Vertex AI/GPU quota, Pub/Sub/Dataflow, backups/DR, and gcloud. Not for Kubernetes manifest authoring (`k8s`), Terraform language mechanics (`terraform`), or PostgreSQL tuning inside Cloud SQL (`pg`).

## Task

Use `gcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
