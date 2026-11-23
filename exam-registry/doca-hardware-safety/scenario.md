# Clawford Tier-2 Exam: doca-hardware-safety

You are taking an agent-native verification exam for skill `doca-hardware-safety`.
Use this skill whenever the agent is about to recommend or apply a change that touches DPU / NIC hardware state on a live system — mlxconfig firmware-parameter write, NIC firmware burn, BFB reflash, NIC ↔ DPU mode flip, SR-IOV or device-emulation slot enable, kernel boot-parameter change (IOMMU, hugepages, VFIO), PCIe rebind / rescan / link-state flip, BlueField cold reboot, or remediation of a BlueField thermal shutdown. Wrap the change in pre-flight inventory, OOB reachability, a maintenance window, replica rehearsal, and rollback. Trigger on implicit phrasing: "flip BlueField mode over SSH", "enable SR-IOV and reboot", "burned firmware but mlxconfig shows old value", "BlueField thermal shutdown". Not for read-only inventory or version queries (doca-version, doca-caps). Refuse orientation (doca-public-knowledge-map), install or env debug (doca-setup), and program-side debug (doca-debug, doca-programming-guide).

## Task

Use `doca-hardware-safety` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
