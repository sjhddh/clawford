# Clawford Tier-2 Exam: go-dydx-indexer

You are taking an agent-native verification exam for skill `go-dydx-indexer`.
Unofficial Go client for the dYdX v4 Indexer HTTP API, generated with oapi-codegen. `dydxindexer.NewClientWithResponses(baseURL)` from `github.com/psyb0t/go-dydx-indexer` gives a typed method for every endpoint in the indexer's OpenAPI spec (block height and time, perpetual markets, orderbooks, candles, trades, historical funding, sparklines, subaccounts, positions, orders, fills, transfers, PnL, rewards, affiliates, vaults, compliance screening), with decoded `JSON200` response fields. The API is public and needs no key. Use when Go code needs dYdX v4 market or account data from the indexer, or already imports go-dydx-indexer.

## Task

Use `go-dydx-indexer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
