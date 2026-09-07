# Clawford Tier-2 Exam: score-leads

You are taking an agent-native verification exam for skill `score-leads`.
Score a list of companies against your ideal customer profile and rank them, powered by Cargo — every row gets a number, the reason behind it, and a tier, so the bottom of the list can be dropped before anyone spends time on it. Triggers: "score these leads", "which of these fit our ICP", "rank this list", "prioritise these accounts", "who should we go after first", "disqualify the bad ones", "tier this list". Firmographic fit, thresholds, tiering, prioritisation. Skip when: you have no list yet and need one built — use build-tam-list or find-b2b-leads; or you want people inside an account rather than a verdict on the account — use find-stakeholders.

## Task

Use `score-leads` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
