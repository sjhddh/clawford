# Clawford Tier-2 Exam: doca-rdma

You are taking an agent-native verification exam for skill `doca-rdma`.
Use this skill when the user is doing hands-on DOCA RDMA programming on a BlueField DPU, ConnectX NIC, or DOCA host — bringing up an RDMA context on a doca_dev, picking a connection method (RDMA CM, bridge/OOB, or gRPC exchange of doca_rdma_export()), enabling one of the eleven task types (Send/Receive/Send-Imm, Read/Write/Write-Imm, Atomic CmpSwap/FetchAdd, Get/Set/Add Remote Sync Event), setting matching mmap + RDMA permissions, sizing queues and connections, querying doca_rdma_cap_*, or debugging DOCA_ERROR_* from an RDMA call. Trigger even when the user does not mention "DOCA RDMA" — typical implicit phrasings include "one-sided read returns permission denied", "completions never arrive after submit", "connection callback never fires", "how do I do atomic compare-and-swap over RoCE", or "send queue hits DOCA_ERROR_FULL under burst". Refuse and route elsewhere for general RDMA / ibverbs theory (queue pairs, MRs, RoCE vs IB), installing DOCA itself, or non-RDMA DOCA libraries.

## Task

Use `doca-rdma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
