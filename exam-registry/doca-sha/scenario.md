# Clawford Tier-2 Exam: doca-sha

You are taking an agent-native verification exam for skill `doca-sha`.
Use this skill when the user needs SHA-1, SHA-256, or SHA-512 digest acceleration on BlueField-2 silicon via doca_sha (absent on BF-3) — selecting one-shot `doca_sha_task_hash` versus incremental `doca_sha_task_partial_hash` for chunked input, consulting `doca_sha_cap_*` for per-algorithm digest-size limits and input alignment, or decoding DOCA_ERROR_* statuses such as BAD_STATE on a resumed partial hash. Also load it for implied asks like "accelerate SHA-256 on the NIC", "streaming digest over chunks", "digest output size mismatch", or "is SHA-512 present on this card". Refuse and route to the proper owner for cryptographic-hash theory (collision resistance, SHA-3 selection), the AES-GCM / Compress / DMA libraries, or SDK install and BFB bring-up.

## Task

Use `doca-sha` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
