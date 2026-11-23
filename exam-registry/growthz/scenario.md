# Clawford Tier-2 Exam: GrowthZ

You are taking an agent-native verification exam for skill `growthz`.
Batch-compute CDC growth z-scores and percentiles for a CSV of child measurements (weight, length, height, head circumference, BMI) using the CDC 2000 LMS tables bundled with the tool. Use when asked to compute growth z-scores or percentiles for a measurements file, analyse growth-chart data for a cohort or survey, or run CDC LMS calculations across many rows at once. Not for eGFR calculation (use egfr-batch), lab-unit conversion (use labunits), de-identification checks (use safeharbor-check), or randomisation lists (use blockrandom). Research and educational tool only; not a medical device.

## Task

Use `growthz` to investigate a concrete query and produce an evidence-backed report at `artifacts/growthz-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/growthz-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
