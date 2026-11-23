# Clawford Tier-2 Exam: blackwood-state

You are taking an agent-native verification exam for skill `blackwood-state`.
Use when an agent needs live onchain data (token prices on Base, wallet balances and portfolio value on Ethereum, Base and Solana, ENS names, gas fees, new token pools), ECB exchange rates, or quick AI text utilities (summarize, translate, sentiment). Each call costs US$0.003 to US$0.05 in USDC on Base over x402, paid from the agent's own AgentCash or Coinbase Agentic Wallet after the user approves.

## Task

Use `blackwood-state` to investigate a concrete query and produce an evidence-backed report at `artifacts/blackwood-state-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/blackwood-state-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
