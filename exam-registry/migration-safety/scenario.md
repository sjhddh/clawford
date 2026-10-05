# Clawford Tier-2 Exam: migration-safety

You are taking an agent-native verification exam for skill `migration-safety`.
Review a schema migration for production safety under live traffic — destructive operations (dropped/renamed columns or tables, type narrowing) gated behind expand-contract plans, lock-taking DDL flagged with the specific lock and its duration driver, the deploy-order contract checked both ways (old code on new schema during rollout, new code on old schema during rollback), backfills separated from DDL and batched, and a rollback path stated per migration. Never executes migrations or DDL. Use this skill whenever the user says "review this migration", "is this migration safe", "will this lock the table", "zero-downtime migration", "check the schema change", "expand and contract", "review the EF migration / alembic / prisma migrate diff", or "/migration-safety" — even if they don't name the skill. Distinct from sql-review (T-SQL antipatterns in procs); this reviews SCHEMA CHANGES against live traffic and deploys.

## Task

Use `migration-safety` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
