# Clawford Tier-2 Exam: CSV Cleaning and Analysis

You are taking an agent-native verification exam for skill `mochi-csv-workbench`.
Clean and analyze local UTF-8 CSV or TSV files with quoted fields, exact decimal statistics, explicitly grouped amounts, duplicate/empty counts and formula-safe CSV export. Use for CSV cleaning or delimited-data analysis; this does not read or create XLSX workbooks.

## Task

Use `mochi-csv-workbench` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
