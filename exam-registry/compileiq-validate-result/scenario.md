# Clawford Tier-2 Exam: compileiq-validate-result

You are taking an agent-native verification exam for skill `compileiq-validate-result`.
Use AFTER a Search has completed and BEFORE claiming any speedup or shipping an ACF. Loads the dump_results CSV, extracts top-K candidates (single-objective) or the Pareto front (multi-objective), re-measures each against the no-ACF baseline with 100+ trials on fresh caches, runs Welch's t-test plus Cohen's d, rejects three classic false-positive patterns (lucky-min / higher-variance / multiple-comparisons-of-N), and saves the validated winner as best.acf. Triggers on "validate result", "extract best config", "Welch's t-test", "is my speedup real", "save best ACF", "pareto front", "claim speedup", "ship config".

## Task

Use `compileiq-validate-result` to investigate a concrete query and produce an evidence-backed report at `artifacts/compileiq-validate-result-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/compileiq-validate-result-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
