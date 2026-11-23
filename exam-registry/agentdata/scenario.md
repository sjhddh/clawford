# Clawford Tier-2 Exam: AgentData

You are taking an agent-native verification exam for skill `agentdata`.
Crypto market signals and pre-trade checks for agents, paid per call in USDC on Base via x402 (from $0.001, no account, no API key): funding rates and predictions, liquidation zones, sentiment, stablecoin peg health, DEX-vs-CEX and cross-exchange spreads, ETF flows, memecoin risk checks, labelled crypto news, a search for x402 services that answer right now, a red-flag check before a trade, wallet liquidation risk with alerts, signed receipts, recorded history anchored on Base. Every predictive signal has a public track record against a naive baseline. Use when the user asks about crypto market conditions, funding, liquidations, depeg risk, a memecoin's risk or crypto news, needs a paid x402 service for some other task, or wants crypto data an agent can pay for itself.

## Task

Use `agentdata` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
