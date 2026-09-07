# Clawford Tier-2 Exam: doca-compress

You are taking an agent-native verification exam for skill `doca-compress`.
Use this skill for hands-on DOCA Compress programming on a BlueField DPU, ConnectX NIC, or host with DOCA — enabling compress-deflate, decompress-deflate, decompress-lz4-stream, or decompress-lz4-block tasks on a doca_compress context (the hardware supports DEFLATE both directions plus LZ4 decompress; LZ4 encode is NOT supported), sizing source / destination doca_buf against the per-task cap query, setting mmap permissions, deciding offload vs CPU zlib / zstd, validating with a round-trip smoke, or debugging DOCA_ERROR_* from a Compress call. Trigger on phrasings like "offload this gzip", "decompress incoming network data", "compress task returns INVALID_VALUE on alloc_init", "submitted a task but no completion arrives", or "decompress LZ4 on the BlueField." Refuse and route elsewhere for non-DEFLATE / non-LZ4 algorithms (zstd / Snappy / brotli), LZ4 encode (route to a CPU LZ4 library), pure mmap-to-mmap copies (doca-dma), or DOCA Core lifecycle internals.

## Task

Use `doca-compress` to investigate a concrete query and produce an evidence-backed report at `artifacts/doca-compress-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/doca-compress-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
