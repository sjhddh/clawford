# Clawford Tier-2 Exam: doca-sta

You are taking an agent-native verification exam for skill `doca-sta`.
Use this skill when the user is doing hands-on NVMe-over-Fabrics storage-target work on a BlueField DPU or ConnectX NIC with DOCA STA — standing up a doca_sta DOCA Core context that accelerates the target-side NVMe-oF data path over RDMA, defining doca_sta_subsystem targets (NQN + namespaces) backed by local NVMe-PCI backend disks (doca_sta_be), checking device support via doca_sta_cap_is_supported, sizing the per-connection I/O queues, or debugging DOCA_ERROR_* from a STA call. Trigger even when the user does not say "DOCA STA" — typical implicit phrasings include "my NVMe-oF Connect never completes", "Identify Controller times out over RoCE", "16 I/O queues at depth 1024 — does this BlueField support that", "offload the nvmf target onto the DPU", or "DOCA_ERROR_IO_FAILED on an NVMe read". Refuse and route elsewhere for DOCA install, raw RDMA data movement, raw packet I/O, flow-rule programming, or initiator-side / host NVMe stack work — those belong to other skills.

## Task

Use `doca-sta` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
