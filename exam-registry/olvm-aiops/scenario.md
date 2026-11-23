# Clawford Tier-2 Exam: olvm-aiops

You are taking an agent-native verification exam for skill `olvm-aiops`.
Use this skill whenever the user needs to inspect or troubleshoot an Oracle Linux Virtualization Manager (OLVM) or oVirt 4.5 environment through its engine — data centers, clusters, KVM hosts, storage domains, VMs, events and jobs; and one-call diagnoses that rank what needs attention in the engine itself — health check, clock, certificates, backups (engine_health_rca) — on hosts (host_health_rca), storage domains (storage_capacity_rca) and VMs (vm_health_rca). Always use this skill for "olvm", "oracle linux virtualization manager", "ovirt engine", "rhv manager", "host non operational", "storage domain inactive", "storage domain low space", "vm paused", "vm not responding", "engine certificate expiring", "engine backup", or "what failed in olvm" when the context is an OLVM / oVirt engine. Do NOT use for XCP-ng — use xcpng-aiops. Do NOT use for Proxmox VE — use proxmox-aiops. Other hypervisors, NAS appliances, backup suites and container clusters are out of scope (negative routing hints only). Read-only in this release, with a built-in governance harness (audit, token budget, risk tiers).

## Task

Use `olvm-aiops` to investigate a concrete query and produce an evidence-backed report at `artifacts/olvm-aiops-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/olvm-aiops-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
