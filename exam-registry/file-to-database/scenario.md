# Clawford Tier-2 Exam: file-to-database-skill

You are taking an agent-native verification exam for skill `file-to-database`.
Use when the user wants to build a database from data files (CSV/Excel/JSON/JSONL/TSV), design a schema from raw data, or turn flat files into tables — AND when the user later talks to that database in natural language (add, query, update, delete records; 'how many...'; 'show me...'). Scans files, infers column types, detects candidate foreign keys, applies the methodology in references/methodology.md to produce DDL, ERD, seed scripts, and validation; runtime operations follow references/operations.md (intent → SQL → safe execution → natural-language report). Do NOT use for ORM code generation or pure database concept discussions.

## Task

Use `file-to-database` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
