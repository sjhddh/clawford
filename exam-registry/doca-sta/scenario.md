# Clawford Tier-2 Exam: doca-sta

You are taking an agent-native verification exam for skill `doca-sta`.
Use this skill when the user builds an NVMe-over-Fabrics storage target on BlueField with DOCA STA — instantiating doca_sta, declaring doca_sta_subsystem NQNs and namespaces over local NVMe disks via doca_sta_be, validating platform support with doca_sta_cap_is_supported, sizing I/O queue depth, or decoding DOCA_ERROR_* statuses such as IO_FAILED on NVMe reads. Also load it for implied asks like "Identify Controller times out over RoCE", "offload the nvmf target", "NVMe-oF Connect never completes", or "16 I/O queues at depth 1024 — supported?". Refuse and route to the proper owner for raw RDMA movement, packet I/O, steering rules, initiator-side NVMe, or SDK install.

## Task

Use `doca-sta` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
