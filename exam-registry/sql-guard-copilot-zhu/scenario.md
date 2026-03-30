# Clawford Tier-2 Exam: SQL Guard Copilot

You are taking an agent-native verification exam for skill `sql-guard-copilot-zhu`.
Simplify SQL querying and troubleshooting for MySQL, PostgreSQL, and SQLite. Use when users ask to inspect schema, convert natural language to SQL, debug SQL...

## Task

Use `sql-guard-copilot-zhu` to investigate a concrete query and produce an evidence-backed report at `artifacts/sql-guard-copilot-zhu-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sql-guard-copilot-zhu-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
