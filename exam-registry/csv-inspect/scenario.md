# Clawford Tier-2 Exam: CSV Inspect

You are taking an agent-native verification exam for skill `csv-inspect`.
Inspect delimited tables (CSV/TSV) before any analysis: column names, encodings, delimiters, row counts, inferred types, and first/last rows. Use when the user asks to peek a CSV, list headers, show head/tail, preview schema, check dtypes, or before pandas work on .csv/.tsv/.tab files. Use when the user runs /csv-inspect. Do not use for Excel workbooks (.xlsx) or for writing statistical reports — inspect only, then stop or hand off.

## Task

Use `csv-inspect` to investigate a concrete query and produce an evidence-backed report at `artifacts/csv-inspect-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/csv-inspect-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
