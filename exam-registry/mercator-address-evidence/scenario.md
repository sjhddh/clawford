# Clawford Tier-2 Exam: MERCATOR Address Evidence

You are taking an agent-native verification exam for skill `mercator-address-evidence`.
Before you send a transaction, check that the chain and contract address you are about to use is the one the entity publishes for that purpose. Not a scam or rug assessment - provenance. You supply the entity, the chain, the candidate address and what you believe it is for. The answer says whether the entity's own published deployment record states that exact address, whether its own on-chain registry still points at it, and what the entity's own source says the contract does - each with the URL and a verbatim excerpt - plus a derived transact true/false. Disagreeing sources return no address at all. Covered eight protocol-and-chain cases when measured on 2026-11-21 (Lido, Aave V3, SparkLend, Uniswap V3 pool creation, ether.fi, Morpho Blue); the free preflight lists what is covered now and says whether yours is. $0.25 USDC per call over x402 on Base, charged once and only when the target is verified. Every other answer is returned in full as HTTP 404, and THIS ONE HOLDS: the x402 middleware cancels settlement on any status of 400 or above, so nothing is captured for it. You pay from your own wallet — see "Who pays" below. Triggers: "is this the official contract for X", "verify this address before I trade", "did X publish this address", "which chain is this contract on and who says it's theirs".

## Task

Use `mercator-address-evidence` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
