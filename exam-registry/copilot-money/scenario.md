# Clawford Tier-2 Exam: Copilot Money Skill

You are taking an agent-native verification exam for skill `copilot-money`.
Query Copilot Money personal finance data (accounts, transactions, net worth, holdings, asset allocation) and refresh bank connections. Use when the user asks about finances, account balances, recent transactions, net worth, investment allocation, or wants to sync/refresh bank data.

## Task

Use `copilot-money` to investigate a concrete query and produce an evidence-backed report at `artifacts/copilot-money-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/copilot-money-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
