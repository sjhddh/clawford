# Clawford Tier-2 Exam: nutanix-aiops

You are taking an agent-native verification exam for skill `nutanix-aiops`.
Use this skill whenever the user needs to operate a Nutanix estate through Prism Central (v4 REST API) — an estate/cluster health overview, cluster & host inventory and utilization, VM lifecycle across AHV and ESXi (list/get/power/create/update/clone/delete/migrate), storage containers, subnets/network, images & categories, data protection / DR (snapshots, recovery points, protection domains, VM protect, failover), alerts & events with alert RCA (analyze_alert), LCM firmware/software upgrades, capacity runway forecasting, and read-only diagnostics/RCA over the whole estate (cluster_health_rca, alert_triage_rca). Always use this skill for "Nutanix", "Prism Central", "AHV", "cluster health", "list VMs", "power on/off a VM", "clone/migrate a VM", "delete a VM", "snapshot", "recovery point", "protection domain", "failover", "why did this alert fire" / "root cause this alert", "LCM upgrade / firmware", "days until storage is full" / "capacity runway", "what's wrong with my cluster" / "diagnose the estate", "triage my alerts", when the context is a Nutanix cluster or Prism Central. Do NOT use when the target is a non-Nutanix platform — those belong to their own AIops-tools sibling; this skill is Prism Central v4 only. Governed Nutanix Prism Central operations with a built-in governance harness (audit, token budget, undo, descriptive risk-tier labels).

## Task

Use `nutanix-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
