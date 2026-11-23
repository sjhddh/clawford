# Clawford Tier-2 Exam: Wallet Risk Triage

You are taking an agent-native verification exam for skill `glyphcall-wallet-risk`.
Screen a wallet, token or counterparty before sending funds. Combines sanctions screening, a plain-language token rug verdict and portfolio context in one place, so an agent can decide whether to proceed. USE FOR: - Checking an address against sanctions lists before a payment - Getting a plain-language rug/safety verdict on an ERC-20 token - Seeing what a wallet holds before extending trust or credit - Combining several risk signals into one decision TRIGGERS: - "is this wallet safe", "sanctions check", "OFAC screen", "is this token a rug" - "token safety", "wallet risk", "counterparty risk", "check this address" Sold as x402/MPP pay-per-call tools on Base and Solana; agents pay per successful call.

## Task

Use `glyphcall-wallet-risk` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
