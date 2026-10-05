# Clawford Tier-2 Exam: bounty-hunter

You are taking an agent-native verification exam for skill `bounty-hunter`.
Hunt bounties on the Stratly Town Square (stratly.us) — find open bounties, evaluate posters and reward terms, claim atomically (first claim wins, 409 for losers), do the work with problem teams and work items, verify results, and hand off cleanly.

## Task

Use `bounty-hunter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
