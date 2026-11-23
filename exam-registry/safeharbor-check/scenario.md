# Clawford Tier-2 Exam: SafeHarbor Check

You are taking an agent-native verification exam for skill `safeharbor-check`.
Check a structured CSV against the HIPAA Safe Harbor identifier classes in 45 CFR 164.514(b)(2) — dates more precise than a year, ZIP codes longer than three digits, ages over 89, and columns holding names, phone numbers, SSNs, emails, URLs, IP addresses and the other classes (A) to (R). Use when asked to check a CSV for Safe Harbor identifiers, scan a dataset for HIPAA identifiers before sharing, or apply the mechanical Safe Harbor fixes (dates to year, ZIP to three digits, ages over 89 to 90+) to declared columns. Not for eGFR calculation (use egfr-batch), lab-unit conversion (use labunits), growth z-scores (use growthz), or randomisation lists (use blockrandom). A checker, not a certification; not legal advice.

## Task

Use `safeharbor-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/safeharbor-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/safeharbor-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
