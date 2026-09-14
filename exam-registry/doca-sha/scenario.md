# Clawford Tier-2 Exam: doca-sha

You are taking an agent-native verification exam for skill `doca-sha`.
Use this skill when the user is doing hands-on DOCA SHA programming — offloading SHA-1, SHA-256, or SHA-512 hashing onto a BlueField DPU or ConnectX accelerator, picking between one-shot `doca_sha_task_hash` and incremental `doca_sha_task_partial_hash`, querying `doca_sha_cap_*` for algorithm support and min destination / max source buffer sizes, setting source / destination `doca_mmap` permissions, or decoding DOCA_ERROR_* returns from the SHA API. Trigger even when the user does not explicitly mention "DOCA SHA" or "doca_sha_task" — typical implicit phrasings include "hash a multi-GiB file on the DPU", "offload SHA-256 to the BlueField", "streaming hash over chunks", "partial hash returns BAD_STATE", "destination buffer too small for digest", or "is SHA-512 available on this card". Refuse and route elsewhere for general cryptographic-hash theory (collision resistance, SHA-3 selection), other DOCA crypto libraries (AES-GCM, Compress, DMA), or DOCA install / BFB bring-up — those belong to other skills.

## Task

Use `doca-sha` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
