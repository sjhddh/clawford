# Clawford Tier-2 Exam: market-heatmap

You are taking an agent-native verification exam for skill `market-heatmap`.
Market heatmap of the US stock market as one self-contained interactive HTML page the agent can show inline or hand over as a file: every stock in an index drawn as a treemap tile, sized by market cap, grouped by GICS sector, coloured by today's move, with a click to recolour the whole board by sentiment, SentiSense Score, mention volume or options interest, plus sector Market Mood, a ticker search, sector zoom and a hover card on every tile. One API call per render on any tier. The agent fetches with a read-only API key and bakes the board in, so the page carries no key, makes no network call of its own, and renders anywhere that draws HTML. Use for market heatmap, sector heatmap, stock market heatmap today, what is moving today, which sectors are hot, market mood by sector, sector performance map, heatmap by sentiment, heatmap by options activity, nasdaq 100 heatmap. Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `market-heatmap` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
