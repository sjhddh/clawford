# Clawford Tier-2 Exam: doca-dpa-hl-tracer

You are taking an agent-native verification exam for skill `doca-dpa-hl-tracer`.
Use this skill when the user runs doca_dpa_hl_tracer to capture/decode DPA-side traces at the programming-events layer (kernel entry/exit, sync points, comm primitive calls, RDMA WR submission, completion drain) — picking TRACE vs CRIT, tuning the JSON config (file-size limits + file_size_limit_policy, thread priorities/cores), decoding against the matching DPA-side ELF, or diagnosing empty/noisy captures. Trigger even when the user does not explicitly mention "DOCA DPA tracer" or "high-level tracer" — typical implicit phrasings include "DPA kernel returns wrong result but host completions look clean", "kernel-entry to first-comm latency is huge", "RDMA WR to drain gap on the DPA", "trace file truncated mid-run", "TRACE doubled my DPA latency", or "tracer wrote a file but parser shows zero events". Refuse and route elsewhere for writing DPA kernels, DPA-Comms/DPA-Verbs programming, raw per-cycle DPA profiling, host-side doca-dpa debugging, or production DPA telemetry — those belong to other skills.

## Task

Use `doca-dpa-hl-tracer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
