# Clawford Tier-2 Exam: ROZO Intents Pay & Bridge

You are taking an agent-native verification exam for skill `rozo-intents-skills`.
Cross-chain crypto payments and bridging via Rozo. Send USDC/USDT across Ethereum, Arbitrum, Base, BNB Chain (BSC), Polygon, Solana, and Stellar (Base and Stellar are USDC-only; Solana receives USDC only but can pay in USDT). On Stellar the trustline checker can also verify EURC trustlines; EURC is trustline-verification only, never a payment token here. Use when the user asks to pay, send, transfer, or bridge crypto/USDC/USDT, check a wallet or USDC/USDT balance, check a crypto payment's status, or shares a crypto payment QR code screenshot, a wallet address (0x, base58, G/C stellar), or a transaction hash. Auto-detects wallet type and auto-selects token (USDC preferred). Every payment shows full details and waits for an explicit yes/no by default. Small-amount auto-execute is opt-in: it runs only if the user raises the confirmation thresholds in version.json (shipped 0 = off). Do NOT use for general blockchain questions, non-payment tasks, or ordinary fiat payments, bank transfers, or bank-account balance questions.

## Task

Use `rozo-intents-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
