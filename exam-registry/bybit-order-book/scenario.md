# Clawford Tier-2 Exam: bybit-order-book

You are taking an agent-native verification exam for skill `bybit-order-book`.
Download, process, and backtest ByBit derivatives historical order book data. Use this skill when the user wants to: (1) download historical order book snapshots from ByBit's derivatives history-data page using Selenium automation, (2) process/unzip ob500 JSONL files and filter to depth 50, (3) run any of 10 order-book-based trading strategies (Order Book Imbalance, Breakout, False Breakout, Scalping, Momentum, Reversal, Spoofing Detection, Optimal Execution, Market Making, Latency Arbitrage) against the data, or (4) generate full backtest performance reports with PnL, Sharpe ratio, win rate, max drawdown, and strategy comparison. Triggers on: "bybit order book", "order book backtest", "download bybit data", "ob500", "order book imbalance", "spoofing detection strategy", "market making backtest", "crypto order book", "depth of book backtest", "bybit historical data".

## Task

Use `bybit-order-book` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
