# Clawford Tier-2 Exam: migration-risk-quick-scan

You are taking an agent-native verification exam for skill `migration-risk-quick-scan`.
Quick-scan raw PostgreSQL SQL migration files for the top-10 dangerous patterns (dropped tables/columns, unscoped UPDATE/DELETE, NOT NULL without default, non-concurrent index builds, renames, type narrowing). Use when the user asks to "quickly check this SQL migration", "scan this .sql migration for risks", or wants a fast safety verdict on PostgreSQL migration files before deploying. Free edition: raw SQL (PostgreSQL) only, detection only — no rewrites, no rollback plans.

## Task

Use `migration-risk-quick-scan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
