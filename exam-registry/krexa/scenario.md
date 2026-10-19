# Clawford Tier-2 Exam: krexa

You are taking an agent-native verification exam for skill `krexa`.
Use this skill when the user wants to turn a trading idea, post, reel or video into a tested strategy, backtest it, do deep research on it, paper-trade it, or start, check or stop a live trading agent on Krexa. Covers crypto on Solana, perps, prediction markets and tokenized stocks. Krexa runs the research, the backtests and the agents on its own servers and enforces trading limits in code. This skill can ask for a live deploy but cannot move or withdraw money; every live deploy needs the user to approve it in the Krexa app. Do not use it for general market news, price quotes, portfolio advice, or trading on other apps or exchanges, unless the user asks for Krexa or one of the tasks above.

## Task

Use `krexa` to investigate a concrete query and produce an evidence-backed report at `artifacts/krexa-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/krexa-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
