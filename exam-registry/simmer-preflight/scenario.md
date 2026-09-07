# Clawford Tier-2 Exam: simmer-preflight

You are taking an agent-native verification exam for skill `simmer-preflight`.
Pre-trade readiness check for autonomous agents. One call returns wallet identity, venue status, spendable balance, open exposure, and a structured ok_to_trade verdict. Run before every real-money trade to prevent cap overruns and catch config issues before they become P&L issues.

## Task

Use `simmer-preflight` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
