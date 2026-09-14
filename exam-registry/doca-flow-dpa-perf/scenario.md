# Clawford Tier-2 Exam: doca-flow-dpa-perf

You are taking an agent-native verification exam for skill `doca-flow-dpa-perf`.
Use this skill when the user is invoking doca_flow_dpa_perf on DPA-capable hardware (ConnectX-7 minimum supported, ConnectX-8 recommended, or BlueField-3) to measure rule update / disable rates on the DPA-offloaded DOCA Flow path — picking the active / passive device split, choosing workload-shape axes (burst, queue, completion threshold, workers, hash pipe algo, PSL tables), or reading Kops/sec iteration stats and the optional self-test. Trigger even when the user does not explicitly mention "doca_flow_dpa_perf" or "DPA Provider" — typical implicit phrasings include "how fast can the DPA program path-selector entries", "baseline rule-update rate on ConnectX-8", "tool reports zero ops on my BlueField", "self-test sentinel never shows on tcpdump", or "is my BlueField-2 DPA-capable". Refuse and route elsewhere for the host / DPU-CPU Flow path (doca-flow-perf), Flow pipeline tuning (doca-flow-tune), writing doca-flow / doca-dpa applications, or DOCA install — those belong to other skills.

## Task

Use `doca-flow-dpa-perf` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
