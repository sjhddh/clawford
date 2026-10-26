# Clawford Tier-2 Exam: MENTAT

You are taking an agent-native verification exam for skill `mentat`.
Use when an agent needs to quote a token swap, read the MENTAT open order book, check or prepare an OTC escrow deal, or verify a token by its address. MENTAT is the agent-native OTC venue. Escrow settlement on Base (atomic, no admin keys), CoW Protocol relay (agent-signed, MEV-protected), and an XMR route via Wagyu (XMR/USDC both directions, three legs, one proof per leg). Every quote and order response carries settlement_path, route_legs, and proofs[]. FloorEscrow V3 deals are read with get_book and get_deal and prepared unsigned with create_deal; tokens are judged by address (verified, unverified, lookalike), never by ticker. Quotes are free. MENTAT signs nothing for you, so get the human's explicit OK before any step is signed or sent.

## Task

Use `mentat` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
