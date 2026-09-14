# Clawford Tier-2 Exam: Benchmarks - storage routing + run resilience

You are taking an agent-native verification exam for skill `benchmarks`.
Benchmark storage routing for agent memory/benchmark stacks: use when running BEAM-style evaluations, locomo benchmarks, calibration probes, or any benchmark that produces .db run databases. Tells you exactly what goes where — run databases OUTSIDE the repo, scripts and result JSONs in the repo. Now includes the run-resilience ladder: how long benchmark runs survive provider flaps. Load before creating any benchmark .db file or setting an output path.

## Task

Use `benchmarks` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
