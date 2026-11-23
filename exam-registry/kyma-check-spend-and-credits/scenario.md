# Clawford Tier-2 Exam: Kyma API: check spend and credits

You are taking an agent-native verification exam for skill `kyma-check-spend-and-credits`.
Report the Kyma API account balance, this connection's spend cap, amount spent, remaining budget and reset date, plus recent credit ledger entries, and hand back the top-up link when the balance is low. Use when the user asks about their balance, credits, budget, spend cap, what a call cost, why a request was refused for funds, or before running anything that is billed such as send_message.

## Task

Use `kyma-check-spend-and-credits` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
