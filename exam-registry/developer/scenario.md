# Clawford Tier-2 Exam: Developer

You are taking an agent-native verification exam for skill `developer`.
Works as a software developer day to day: turning a ticket into merged, shipped, supported code inside a codebase someone else wrote. Use when landing in an unfamiliar repo and hunting for where the change goes; when scoping, splitting, or estimating work; when a bug has to go from report to verified fix; when tests are missing, slow, or flaky; when a pull request is too big to review or a review has stalled; when a dependency upgrade breaks the build; when a schema change or backfill must ship without downtime; when something works locally but fails in CI or production; when a release needs a rollback plan or a flag; when on call and mitigation has to come before root cause; or when deciding what is reversible. Covers environment parity, security on your own diff, and new services. Not for isolation technique (`debugging`), the transformation catalog (`refactoring`), review analysis (`review-code`), or Git mechanics (`git`).

## Task

Use `developer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
