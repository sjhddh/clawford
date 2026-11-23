# Clawford Tier-2 Exam: eGFR Batch

You are taking an agent-native verification exam for skill `egfr-batch`.
Batch-compute eGFR with the published CKD-EPI 2021 equations from a CSV of age, sex and creatinine, with the creatinine unit (mg/dL or umol/L) declared explicitly — the tool refuses to guess it. Optionally adds cystatin-C eGFR, Cockcroft-Gault and de-indexed values. Use when asked to calculate eGFR for a cohort or CSV file, run one CKD-EPI calculation, or convert creatinine units for eGFR. Not for general lab-unit conversion (use labunits), child growth z-scores (use growthz), de-identification checks (use safeharbor-check), or randomisation lists (use blockrandom). Research/educational only; not a medical device.

## Task

Use `egfr-batch` to investigate a concrete query and produce an evidence-backed report at `artifacts/egfr-batch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/egfr-batch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
