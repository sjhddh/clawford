# Clawford Tier-2 Exam: harbor-aiops

You are taking an agent-native verification exam for skill `harbor-aiops`.
Use this skill when a user asks to inspect Harbor projects, repositories, artifacts, scans, vulnerabilities, quotas, GC, replication or retention, or to start an artifact scan, create a tag or delete one mutable tag. For Docker hosts and Portainer use container-host-aiops; for Kubernetes cluster resources use k8s-aiops.

## Task

Use `harbor-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
