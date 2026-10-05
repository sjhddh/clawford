# Clawford Tier-2 Exam: minio-aiops

You are taking an agent-native verification exam for skill `minio-aiops`.
Use this skill whenever the user needs to operate or diagnose MinIO object storage — explain why the cluster is filling up or refusing writes (capacity_rca), find publicly exposed buckets and hygiene gaps (bucket_exposure_audit), find storage that lifecycle/ILM should be reclaiming but isn't, including noncurrent versions and incomplete multipart uploads (lifecycle_gap_analysis), check heal backlog and erasure-set write-quorum risk (healing_health), read service health / cluster status / per-bucket config (policy, versioning, lifecycle, encryption, quota, tags) — plus governed writes (set or delete bucket policy, enable/suspend versioning, set or delete lifecycle rules, set bucket quota, purge incomplete uploads, delete an empty bucket). Always use this skill for "minio health", "why is my object storage full", "which bucket is biggest", "is any bucket public / anonymous access", "versioning / noncurrent versions piling up", "incomplete multipart uploads", "lifecycle / ILM rules", "bucket quota", "erasure set / drive failure tolerance", "healing backlog", or "delete a bucket safely" when the context is a MinIO deployment. Do NOT use when the target is not MinIO — for Ceph/RGW use ceph-aiops; for TrueNAS storage use truenas-aiops; for a hypervisor, backup product, container cluster, or network device route to the appropriate other AIops-tools skill (negative routing hint only). Common MinIO ops with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `minio-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
