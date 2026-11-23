# Clawford Tier-2 Exam: runai-get-utilization-overview

You are taking an agent-native verification exam for skill `runai-get-utilization-overview`.
GPU efficiency check for a Run:ai cluster: are the GPUs that projects, departments, and node pools hold actually computing? Classifies holders as WELL_UTILIZED, UNDER_UTILIZED, or IDLE from average and p95 GPU utilization over one window of any length (default 7 days), quantifies idle GPUs and GPU-hours, and names idle workloads. Use for "which projects hold GPUs but aren't using them?", "GPU utilization by project or department", "where are we wasting GPU cycles?", "is llm-serving actually busy? its GPU memory is full", "is project X actually using its GPUs?", "which workloads in project X are idle?", "which node pool wastes the most GPUs?", or "idle GPU-hours per project last quarter". For "find the idle GPUs and stop them" it answers the read part only. Not for quota fairness, cluster health or free capacity, one workload's status, comparing windows, forecasts, or prices.

## Task

Use `runai-get-utilization-overview` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
