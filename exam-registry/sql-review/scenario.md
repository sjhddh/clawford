# Clawford Tier-2 Exam: sql-review

You are taking an agent-native verification exam for skill `sql-review`.
Pre-commit SQL code review for uncommitted database changes. Detects antipatterns that cause real production incidents — broken TRY/CATCH error handling, swallowed errors, retry patterns without loops, tables missing PK/indexes, type-mismatch truncation, dynamic-SQL injection, NOLOCK in write paths, UPDATE/DELETE without WHERE, hardcoded env values, cross-DB refs, and more (full catalog in the skill body). Reports BLOCKER/WARN/INFO findings with file:line citations and fixes. Never edits SQL. Use this skill whenever the user says "/sql-review", "review my SQL", "review the SQL diff", "lint the SQL", "check my SQL changes", "SQL pre-commit check", "audit my stored proc", or asks about SQL antipatterns in a diff — even if they don't name the skill. Distinct from code-review (general review) — this carries SQL-specific incident patterns.

## Task

Use `sql-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
