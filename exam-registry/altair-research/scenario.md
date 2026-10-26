# Clawford Tier-2 Exam: altair-research

You are taking an agent-native verification exam for skill `altair-research`.
Latest AI research on US stocks and ETFs from altairworld.com's free public MCP server. Covers about 70 tickers, including the SPY, QQQ, SOXX and XBI index ETFs (refreshed weekly) and stocks such as NVDA, AAPL, MSFT, TSLA, AVGO and META. Several Claude, GPT and Gemini models each run the same TradingAgents research pipeline; this skill returns every model's final rating, price target, confidence, horizon and summary, and where they disagree. Use when the user asks for the outlook, rating, price target, bull or bear case, or AI research view on a stock ticker or company, the broad market, Nasdaq, semiconductors or biotech. Not for live or real-time quotes, placing trades or brokerage actions, personal position sizing or buy/sell advice. For these, explain plugin limits without tools, web search, order steps, position sizes or personal questions; offer dated research only on request. No API key. Research for information only, not investment advice.

## Task

Use `altair-research` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
