# Clawford Tier-2 Exam: Lnd

You are taking an agent-native verification exam for skill `lnd`.
Install and run Lightning Terminal (litd) which bundles lnd, loop, pool, tapd, and faraday in a single Docker container. Defaults to neutrino backend with SQLite storage on testnet. Supports watch-only mode with remote signer, standalone mode, and regtest development. Use when setting up a Lightning node for payments, channel management, liquidity management (loop), channel marketplace (pool), taproot assets (tapd), or enabling agent L402 commerce.

## Task

Use `lnd` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
