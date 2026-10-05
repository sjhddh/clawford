# Clawford Tier-2 Exam: vmware-vdi

You are taking an agent-native verification exam for skill `vmware-vdi`.
Use this skill whenever the user needs to operate a VMware/Omnissa Horizon VDI environment via its Connection Server: list and manage desktop pools, RDS farms and published apps, inspect and act on user sessions (log off, disconnect, send message), manage desktop machines (reset, maintenance, remove), view and change entitlements, read Horizon events/health/statistics, and push instant-clone golden images. Always use this skill for "log off VDI user", "reset this desktop", "why is the desktop pool not provisioning", "push the new image to the pool", "list Horizon sessions", "who is entitled to the pool", "VDI health" — when the context is explicitly Horizon / Omnissa / VDI / desktop-pool / RDS-farm. Do NOT use for the underlying vCenter VM lifecycle/power/snapshot/migrate (use vmware-aiops), read-only vSphere monitoring (use vmware-monitor), or NSX microsegmentation (use vmware-nsx-security). This skill manages the Horizon broker layer; vmware-aiops manages the vCenter VMs backing the desktops.

## Task

Use `vmware-vdi` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
