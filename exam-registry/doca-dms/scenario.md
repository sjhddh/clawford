# Clawford Tier-2 Exam: doca-dms

You are taking an agent-native verification exam for skill `doca-dms`.
Operate NVIDIA DOCA Management Service (`dmsd` + `dmspe`) on a BlueField, Arm/x86 host, or Kubernetes pod: choose deployment and authentication, configure `-allowed_users` and `dmsgroup`, use gNMI Get/Set/Subscribe, run supported gNOI workflows, and debug frontend/backend failures. Trigger even without "DMS" for "manage a remote BlueField over gRPC", "gNOI reboot from orchestrator", or fleet-management requests. SAFETY: reboot, OS install, factory-reset, and managed-file deletion are destructive and require target-bound explicit confirmation; never invoke them speculatively. Route installation and library/API build questions elsewhere, and route turnkey aggregation to the externally-productized DOCA Telemetry Service.

## Task

Use `doca-dms` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
