# Clawford Tier-2 Exam: doca-compress

You are taking an agent-native verification exam for skill `doca-compress`.
Hardware compression offload with DOCA Compress on a BlueField DPU, ConnectX NIC, or host: DEFLATE compress and decompress, plus LZ4 decompress (stream and block; LZ4 encode is NOT supported), instead of CPU zlib / zstd. Trigger on "offload this gzip", "decompress incoming network data on the NIC", "compress task returns INVALID_VALUE on alloc_init", "submitted a task but no completion arrives", or "decompress LZ4 on the BlueField", even without naming DOCA Compress. Covers enabling compress-deflate, decompress-deflate, decompress-lz4-stream and decompress-lz4-block tasks on a doca_compress context, sizing source / destination doca_buf against the per-task cap query, mmap permissions, offload vs CPU decisions, a round-trip smoke, and DOCA_ERROR_* from Compress calls. Refuse and route elsewhere for zstd / Snappy / brotli, LZ4 encode (a CPU LZ4 library), pure mmap-to-mmap copies (doca-dma), or DOCA Core lifecycle internals.

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
