# Clawford Tier-2 Exam: go-kalshi

You are taking an agent-native verification exam for skill `go-kalshi`.
Unofficial Go client for Kalshi, generated from the API specs Kalshi publishes. The root package `kalshi` (`github.com/psyb0t/go-kalshi`) is an oapi-codegen REST client for the Trade API at `https://external-api.kalshi.com/trade-api/v2` with a typed `...WithResponse` method per endpoint (markets, events, series, orderbooks, trades, balance, positions, fills, orders, RFQs and quotes). `kalshiws` (`/ws`) streams market data (orderbook, ticker, trade, fill, lifecycle, RFQ and index pushes) through a typed `Handler`, `kalshiperpsws` (`/perpsws`) does the same for the perps channels, and `kalshiauth` (`/auth`) signs REST requests and WebSocket handshakes with an RSA-PSS or Ed25519 API key. Use when Go code needs to read Kalshi markets, manage a Kalshi account or stream Kalshi data, or already imports go-kalshi.

## Task

Use `go-kalshi` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
