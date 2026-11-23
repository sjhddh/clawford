# Clawford Tier-2 Exam: readiness-scoring

You are taking an agent-native verification exam for skill `readiness-scoring`.
Keep a sales readiness score on every account that rises with each fresh signal and falls on its own as signals age: rounds, job postings, demo requests and any other account event land in Unify Account Events, each event decays with a half-life per signal type, the sum lands as a score on Unify Accounts every hour, and accounts crossing your line are posted to Slack once. Triggers: "score accounts by recent engagement, older signals count less", "which accounts are ready to buy right now", "a lead score that decays over time", "signal decay", "tell me when an account heats up". Cargo project, Cargo Signals, unifyAccountEvents, unifyAccounts, metric column, Slack. Skip when: tiering accounts against your ICP, which is account-scoring; scoring a list once, which is score-leads; a one-time look at who raised, which is track-funding-rounds.

## Task

Use `readiness-scoring` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
