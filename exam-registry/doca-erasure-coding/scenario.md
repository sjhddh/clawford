# Clawford Tier-2 Exam: doca-erasure-coding

You are taking an agent-native verification exam for skill `doca-erasure-coding`.
Use this skill when the user is doing hands-on DOCA Erasure Coding programming on a BlueField DPU, ConnectX NIC, or host — bringing up a doca_ec context, picking among the create / recover / update tasks, choosing matrix type / N / K / block size, querying doca_ec_cap_* before sizing, setting doca_mmap src/dst permissions, or debugging DOCA_ERROR_* returns from doca_ec_task_*. Trigger even when the user does not name "DOCA Erasure Coding" or "Reed-Solomon" — typical implicit phrasings include "one data block changed, how do I refresh parity without re-encoding", "a disk failed and 2 parity blocks are gone, can I rebuild", "RAID-6 resilience across 12 disks", "my doca_ec_task_create returns NOT_PERMITTED", or "is this N+K layout still recoverable". Refuse and route elsewhere for non-Reed-Solomon codes (fountain / LDPC / raptor), pure-replication designs, network FEC, or other DOCA accelerator libraries (SHA / Compress / AES-GCM / DMA) — those belong to other skills.

## Task

Use `doca-erasure-coding` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
