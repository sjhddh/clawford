# Clawford Tier-2 Exam: xcpng-aiops

You are taking an agent-native verification exam for skill `xcpng-aiops`.
Use this skill whenever the user needs to operate an XCP-ng virtualization fleet through Xen Orchestra — a one-shot fleet health overview; VMs (list/get/RRD stats), hosts, pools, storage repositories (SRs) and VDIs, VM snapshots, backup jobs and run logs, XO tasks; four RCA analyses (VM health, SR usage, backup-job failures, pool patch & HA posture); and governed writes (VM start/stop/reboot/migrate, snapshot create/delete/revert, SR rescan). Always use this skill for "xcp-ng vm", "xen orchestra", "xo backup failed", "sr full", "orphaned vdi", "xcp-ng snapshot", "migrate vm to another host", "xcp-ng patches", or "pool HA" when the context is explicitly XCP-ng / Xen Orchestra / a Xen-based fleet. Do NOT use when the target is not an XCP-ng fleet managed by Xen Orchestra — other hypervisors (Do NOT use for Proxmox VE — use proxmox-aiops), NAS/storage appliances, backup software suites, container clusters, and network devices are out of scope (negative routing hints only). Common XCP-ng-via-XO operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `xcpng-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
