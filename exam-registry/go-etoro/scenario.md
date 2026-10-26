# Clawford Tier-2 Exam: go-etoro

You are taking an agent-native verification exam for skill `go-etoro`.
Unofficial Go clients for the eToro public API, generated from the specs eToro publishes. The root package `etoro` (`github.com/psyb0t/go-etoro`) is an oapi-codegen REST client for `https://public-api.etoro.com` with a typed `...WithResponse` method per endpoint (balances, market data, instruments, rates, candles, feeds, portfolios, transfers, posts). The `etorows` package (`github.com/psyb0t/go-etoro/ws`) is a typed WebSocket client for `wss://ws.etoro.com/ws` that authenticates, subscribes to topics and decodes instrument rate, candle and market status pushes and order and position updates through a `Handler`. Use when Go code needs to call the eToro API or stream eToro market data, or already imports go-etoro.

## Task

Use `go-etoro` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
