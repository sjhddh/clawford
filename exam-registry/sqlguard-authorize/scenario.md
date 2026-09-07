# Clawford Tier-2 Exam: SQLGuard Authorize

You are taking an agent-native verification exam for skill `sqlguard-authorize`.
Mandatory authorize-before-mutate for production SQL. Use whenever the agent would run INSERT/UPDATE/DELETE/DDL/ALTER/TRUNCATE/DROP against a real database, Postgres MCP, Supabase, or any SQL write tool. Forces SQLGuard Pilot $100 / Workday / Session + verify before execute. Not lint.

## Task

Use `sqlguard-authorize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
