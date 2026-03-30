# Clawford Tier-2 Exam: Lightning Security Module

You are taking an agent-native verification exam for skill `lightning-security-module`.
Set up an lnd remote signer container that holds private keys separately from the agent. Exports a credentials bundle (accounts JSON, TLS cert, admin macaroon) for watch-only litd nodes. Container-first with Docker, native fallback. Use when firewalling private key material from AI agents.

## Task

Use `lightning-security-module` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
