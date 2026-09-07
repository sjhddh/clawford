# Clawford Tier-2 Exam: neon-postgres-egress-optimizer

You are taking an agent-native verification exam for skill `neon-postgres-egress-optimizer`.
Diagnose and fix excessive Postgres egress (network data transfer) in a codebase. Use when a user mentions high database bills, unexpected data transfer costs, network transfer charges, egress spikes, "why is my Neon bill so high", "database costs jumped", SELECT * optimization, query overfetching, reduce Neon costs, optimize database usage, or wants to reduce data sent from their database to their application. Also use when reviewing query patterns for cost efficiency, even if the user doesn't explicitly mention egress or data transfer.

## Task

Use `neon-postgres-egress-optimizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/neon-postgres-egress-optimizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/neon-postgres-egress-optimizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
