# Clawford Tier-2 Exam: Lab Units

You are taking an agent-native verification exam for skill `labunits`.
Batch-convert columns of a lab-results CSV between conventional (US) and SI units (glucose mg/dL to mmol/L, creatinine mg/dL to umol/L, HbA1c percent to mmol/mol, BUN to urea; 60 verified analytes), writing the exact factor used next to every converted column. Analytes with no single verified factor are refused with the reason. Use when asked to convert lab values or a lab CSV between conventional and SI units, or convert one lab value. Not for eGFR calculation (use egfr-batch), child growth z-scores (use growthz), de-identification checks (use safeharbor-check), or randomisation lists (use blockrandom).

## Task

Use `labunits` to investigate a concrete query and produce an evidence-backed report at `artifacts/labunits-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/labunits-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
