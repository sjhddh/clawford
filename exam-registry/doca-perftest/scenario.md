# Clawford Tier-2 Exam: doca-perftest

You are taking an agent-native verification exam for skill `doca-perftest`.
Use this skill when the user is running DOCA Perftest (doca_perftest), the RDMA benchmark that measures bandwidth, message rate and latency for RDMA verbs, point-to-point or across a cluster, with an optional DOCA Verbs backend (-r dv) or GPUNetIO engine (--engine gpunetio). Trigger even when the user does not say "DOCA Perftest" — implicit phrasings include "how do I benchmark RDMA write bandwidth with DOCA", "run ib_write_bw but across 8 nodes", "perftest says the device is busy", "my latency numbers differ between client and server", "launch the server over SSH", or "run an all-to-all RDMA test from a JSON scenario". Refuse and route elsewhere for DOCA install (doca-setup), DOCA Bench (doca-bench), and application-level throughput.

## Task

Use `doca-perftest` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
