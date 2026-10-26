# Clawford Tier-2 Exam: HyperNatt Liq Radar

You are taking an agent-native verification exam for skill `hypernatt-liq-radar`.
Instructs the agent to call the remote HyperNatt MCP tool get_liq_radar (forced-order / liquidation map) before sizing any crypto perp - BTC ETH SOL and other whitelist assets, any venue. Docs + call order only - no local exec/shell/files. This skill covers market-data tools only (manifest + liq radar). Not trade advice. get_liq_radar = $0.001 USDC via x402.

## Task

Use `hypernatt-liq-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
