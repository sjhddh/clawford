# Clawford Tier-2 Exam: nemo-mbridge-perf-activation-recompute

You are taking an agent-native verification exam for skill `nemo-mbridge-perf-activation-recompute`.
Validate and use selective and full activation recompute in Megatron Bridge to reduce GPU memory usage at the cost of extra compute. Use for activation memory OOMs or regressions involving recompute_granularity, recompute_num_layers, recompute_modules, recompute_method, selective recompute, full recompute, or activation checkpointing.

## Task

Use `nemo-mbridge-perf-activation-recompute` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
