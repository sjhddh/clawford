# Clawford Tier-2 Exam: doca-rdma

You are taking an agent-native verification exam for skill `doca-rdma`.
RDMA data movement on NVIDIA BlueField/ConnectX NICs (RoCE/InfiniBand) with DOCA RDMA, instead of hand-written libibverbs/rdma_cm. Use when the user moves data between processes or hosts over the NIC, or hits "one-sided read returns permission denied", "completions never arrive after submit", "connection callback never fires", atomic compare-and-swap over RoCE, or DOCA_ERROR_FULL on the send queue under burst, even without naming DOCA RDMA. Covers bringing up an RDMA context on a doca_dev, connection methods (RDMA CM, bridge/OOB, or gRPC exchange of doca_rdma_export()), the eleven task types (Send/Receive/Send-Imm, Read/Write/Write-Imm, Atomic CmpSwap/FetchAdd, Get/Set/Add Remote Sync Event), matching mmap + RDMA permissions, queue and connection sizing, doca_rdma_cap_* queries, and DOCA_ERROR_* from RDMA calls. Raw QP/verbs control belongs to doca-verbs. Refuse and route elsewhere for general RDMA / ibverbs theory (queue pairs, MRs, RoCE vs IB), installing DOCA itself, or non-RDMA DOCA libraries.

## Task

Use `doca-rdma` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
