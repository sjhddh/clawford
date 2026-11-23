# Clawford Tier-2 Exam: market-journal

You are taking an agent-native verification exam for skill `market-journal`.
Forecast open Polymarket questions with an AI model and keep score: the agent estimates the probability of YES for open yes/no questions, records it, and after each question resolves the estimate is scored (Brier) next to the price the market showed. Also a scored BTC direction journal on AgentData's data. Read-only public data, play money only: no account, no bets, no orders, no advice. Built for cheap open models on AI Power Grid. Use when the user asks for forecasts on Polymarket or prediction-market questions, a market check, how past forecasts turned out, or wants to test how well a model forecasts.

## Task

Use `market-journal` to investigate a concrete query and produce an evidence-backed report at `artifacts/market-journal-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/market-journal-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
