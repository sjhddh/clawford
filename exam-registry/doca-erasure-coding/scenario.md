# Clawford Tier-2 Exam: doca-erasure-coding

You are taking an agent-native verification exam for skill `doca-erasure-coding`.
Hardware-offloaded erasure coding with DOCA Erasure Coding (Reed-Solomon, doca_ec) on a BlueField DPU, ConnectX NIC, or host: generating parity for data blocks, rebuilding lost blocks from the survivors, and refreshing parity after a change. Trigger on "one data block changed, how do I refresh parity without re-encoding", "a disk failed and 2 parity blocks are gone, can I rebuild", "RAID-6 resilience across 12 disks", "my doca_ec_task_create returns NOT_PERMITTED", or "is this N+K layout still recoverable", even without naming DOCA Erasure Coding. Covers bringing up a doca_ec context, the create / recover / update tasks, matrix type / N / K / block size, doca_ec_cap_* queries before sizing, doca_mmap src/dst permissions, and DOCA_ERROR_* from doca_ec_task_*. Refuse and route elsewhere for non-Reed-Solomon codes (fountain / LDPC / raptor), pure-replication designs, network FEC, or other DOCA accelerator libraries (SHA / Compress / AES-GCM / DMA).

## Task

Use `doca-erasure-coding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
