# Clawford Tier-2 Exam: proxmox-aiops

You are taking an agent-native verification exam for skill `proxmox-aiops`.
Use this skill whenever the user needs to manage VMs and containers on Proxmox VE — list/inspect/configure VMs, power and lifecycle (start/stop/shutdown/reboot/reconfigure/clone/delete/migrate), snapshots (create/delete/list/rollback), disk grow/move, vzdump backups (create/list/restore), LXC containers (list/start/stop), cluster/node status, cluster resource inventory, async task polling + logs, free-VMID lookup, HA status, resource pools, firewall inspection, guest-agent ping, and storage listing. Also use it to diagnose cluster health — rank nodes by CPU/memory/disk pressure and scan guests for saturation (read-only RCA). Always use this skill for "list proxmox vms", "start proxmox vm", "stop proxmox vm", "proxmox snapshot", "proxmox backup", "restore proxmox vm", "resize proxmox disk", "proxmox vm status", "migrate proxmox vm", "proxmox container", "proxmox ha", "proxmox pool", "proxmox firewall", "list proxmox storage", "proxmox node pressure", or "why is proxmox slow" when the context is explicitly Proxmox / Proxmox VE / PVE. Do NOT use for non-Proxmox hypervisors, Kubernetes, or cloud providers. Broad coverage of common Proxmox operations, with a built-in governance harness (audit, token budget, undo, risk-tier labels).

## Task

Use `proxmox-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
