# Clawford Tier-2 Exam: self-improving-science

You are taking an agent-native verification exam for skill `self-improving-science`.
Captures learnings, experiment issues, and methodology corrections for continuous improvement in scientific research and ML workflows. Use when: (1) Data leakage detected in train/test split, (2) Model fails to reproduce across seeds or environments, (3) Statistical test misapplied or p-value misinterpreted, (4) Hypothesis test fails or needs revision, (5) Feature distribution shift detected, (6) User corrects methodology or analysis approach, (7) Experiment design flaw discovered. Also review learnings before designing new experiments.

## Task

Use `self-improving-science` to investigate a concrete query and produce an evidence-backed report at `artifacts/self-improving-science-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/self-improving-science-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
