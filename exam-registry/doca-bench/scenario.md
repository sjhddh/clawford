# Clawford Tier-2 Exam: doca-bench

You are taking an agent-native verification exam for skill `doca-bench`.
Run `doca_bench` (DOCA 2.7.0 or newer) to measure throughput, bulk latency, precision latency, or maximum bandwidth for RDMA, Compress, AES-GCM, SHA, DMA, EC, Ethernet, Comch, or GPUNetIO on a host or BlueField Arm. Use it to discover enabled benchmark libraries, capture a reproducible command/version/device/environment baseline, compare stable runs against a declared tolerance, or diagnose configuration, device-binding, workload-precondition, and measurement failures. Trigger for requests such as measuring BlueField compression speed, NIC RDMA throughput, crypto latency, or a pre-upgrade baseline. Do not use for application end-to-end timing, custom benchmark code, DOCA installation, or binary patches.

## Task

Use `doca-bench` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
