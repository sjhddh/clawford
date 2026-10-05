# Clawford Tier-2 Exam: doca-gpunetio-ib-write-bw

You are taking an agent-native verification exam for skill `doca-gpunetio-ib-write-bw`.
Use this skill when the user is building, running, or interpreting the doca/tools/gpunetio_ib_write_bw client+server benchmark — a CUDA kernel on the client posts RDMA WRITE work requests through the doca-gpunetio device-side surface to measure sustained GPU-driven WRITE bandwidth on a GPU+IB-device pair. Trigger even when the user does not explicitly mention "doca-gpunetio-ib-write-bw" or "GPUNetIO" — typical implicit phrasings include "measure WRITE BW when the GPU posts the WRs", "BW swings between runs on the same flags", "is the NIC saturated or am I CPU-bound on the CUDA kernel", "meson compile fails for the GPUNetIO bw tool", "nvidia_peermem isn't picking up my GPU buffer", or "GPU-initiated WRITE throughput vs CPU-initiated perftest". Refuse and route elsewhere for general doca-gpunetio library work, DOCA install, the GPU-initiated WRITE latency analog, the CPU-initiated upstream perftest, or application-level end-to-end throughput — those belong to other skills.

## Task

Use `doca-gpunetio-ib-write-bw` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
