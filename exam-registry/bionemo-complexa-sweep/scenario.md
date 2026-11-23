# Clawford Tier-2 Exam: complexa-sweep

You are taking an agent-native verification exam for skill `bionemo-complexa-sweep`.
Agent runbook for Proteina-Complexa parameter sweeps through the separately installed first-party CLI and config generator. Use for cartesian-product hyperparameter scans, sweeper YAML authoring, configuration comparisons, ablations, tuning, success-rate ranking, or Pareto searches over quality and wall-clock cost. Do not use for a single existing-job launch or SLURM submission template. SKILL.md performs the orchestration; bundled executables only inspect local readiness and write a run manifest.

## Task

Use `bionemo-complexa-sweep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
