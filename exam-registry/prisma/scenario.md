# Clawford Tier-2 Exam: Prisma

You are taking an agent-native verification exam for skill `prisma`.
Designs Prisma schemas, writes type-safe queries, and fixes migrations, connection pools, and N+1 relation loads in Node and TypeScript. Use when editing schema.prisma, modeling relations, indexes, enums, JSON or Decimal columns, or choosing between db push, migrate dev and migrate deploy; when a migration drifts, fails, or would drop a column on rename, or a database needs baselining; on errors P2002, P2025, P2024, P2034 or P3009; when connections run out on Lambda, Vercel or behind PgBouncer; when queries are slow or include loads too much; on transaction timeouts, deadlocks and optimistic locking; when Decimal or BigInt break JSON.stringify; for $queryRaw and TypedSQL; when porting $use middleware to client extensions; when prisma generate fails in Docker, Alpine or CI; and for seeding and test isolation. Not for database-server tuning or hand-written SQL (pg, sql), or other ORMs.

## Task

Use `prisma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
