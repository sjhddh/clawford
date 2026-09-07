# Clawford Tier-2 Exam: wickworks

You are taking an agent-native verification exam for skill `wickworks`.
Stateless OHLC primitives service — candlestick bars in, technical indicators + Smart-Money-Concepts objects out. Single POST / takes a bars array + an indicators selection map and returns computed primitives; GET /metadata is the output-path catalog; GET /health. 67 primitives across trend (SMA/EMA + 15 more MAs, slope, Donchian, Ichimoku), momentum (RSI, MACD, Stoch, StochRSI, ADX, MFI, CCI, Williams %R, ROC, MOM, TSI, TRIX, UO, Fisher), volatility (ATR, NATR, Bollinger, Keltner, Squeeze), volume (VWAP, VWMA, OBV, AD, ADOSC, CMF, KVO), and SMC (order blocks, fair-value gaps, BOS/CHoCH, swing structure, S/R levels, liquidity, retracements, sessions, previous-period H/L) plus pre-baked summaries. camelCase, NaN-safe JSON. Unified REST + MCP (streamable-HTTP at /mcp — tools health / list_indicators / metadata / compute). Auth-less by default. Use when the user wants technical indicators or Smart-Money-Concepts primitives computed from OHLC candlestick bars.

## Task

Use `wickworks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
