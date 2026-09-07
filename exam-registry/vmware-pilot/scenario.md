# Clawford Tier-2 Exam: vmware-pilot

You are taking an agent-native verification exam for skill `vmware-pilot`.
Use this skill whenever the user wants to design, execute, or manage complex multi-step VMware workflows with human approval and automatic rollback. Pilot is the orchestration brain — it breaks a goal into steps across companion VMware skills (aiops, monitor, nsx, nsx-security, aria, vks, storage, avi), adds approval gates before destructive operations, and rolls back automatically if anything fails. Always use vmware-pilot for: "clone and test before applying to production", "VMware incident response with checkpoints", "investigate alert root cause", "VMware rolling restart with health checks", "baseline capture and drift detection", "rolling maintenance with AVI drain", or any VMware workflow needing approval gates or rollback. 15 built-in templates + custom YAML + AI-designed workflows. Do NOT use for single-step work — use vmware-aiops for one VM action, vmware-monitor for read-only queries, vmware-avi for load balancer queries.

## Task

Use `vmware-pilot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
