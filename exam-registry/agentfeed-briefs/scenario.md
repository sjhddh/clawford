# Clawford Tier-2 Exam: agentfeed-briefs

You are taking an agent-native verification exam for skill `agentfeed-briefs`.
Use when an agent needs a short crypto market brief or a perp signal: what changed overnight in BTC, ETH, SOL and HYPE with the one level to watch, which Hyperliquid perps moved unusually, whether funding, liquidations or open interest are abnormal right now, or the signal board and coin signals. Calls AgentFeed over HTTP. Scheduled or unattended runs send one flat signals pass (or a prepaid key) from the AGENTFEED_KEY environment variable, so no payment prompt is needed; attended runs can pay per call with x402. Describes what moved, never what to trade.

## Task

Use `agentfeed-briefs` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
