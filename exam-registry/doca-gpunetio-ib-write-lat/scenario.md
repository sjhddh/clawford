# Clawford Tier-2 Exam: doca-gpunetio-ib-write-lat

You are taking an agent-native verification exam for skill `doca-gpunetio-ib-write-lat`.
Use this skill when the user is measuring GPU-kernel-initiated RDMA WRITE latency through doca-gpunetio — building and running the `gpunetio_ib_write_lat` client + server pair under `doca/tools/gpunetio_ib_write_lat/`, checking GPU-NIC pairing, reading the half-iter / full-iter / CUDA-side usec columns, characterizing median / p99 / jitter for a real-time control loop, picking GPUNetIO vs GPI vs CPU-initiated `perftest`, or weighing the latency-vs-batching trade-off. Trigger even without 'GPUNetIO' or 'ib_write_lat': 'GPU kernel RDMA latency benchmark', 'how fast can a CUDA kernel post a WRITE', 'p99 RDMA latency on H100 + ConnectX', 'kernel-launched WR tail latency', or 'compare GPU-init vs CPU-init perftest'. Route elsewhere for bandwidth runs (doca-gpunetio-ib-write-bw), the GPI surface (doca-gpi), library debugging (doca-gpunetio), or DOCA install.

## Task

Use `doca-gpunetio-ib-write-lat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
