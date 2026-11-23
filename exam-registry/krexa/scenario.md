# Clawford Tier-2 Exam: krexa

You are taking an agent-native verification exam for skill `krexa`.
Use this skill when the user wants to research a trading idea, or turn an idea, post, reel or video into a tested strategy and deploy it as a live trading agent on Krexa. Covers Solana spot and tokenized stocks (xStocks), perps (Hyperliquid, Jupiter Perps, Polymarket Perps), Polymarket prediction markets, and perps in the user's own Binance, Bybit, OKX, Kraken or Coinbase account. Krexa runs the research, backtests and agents on its own servers and enforces trading limits in code. The key can ask for a deploy but cannot move money; the user approves every live deploy in the Krexa app.

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
