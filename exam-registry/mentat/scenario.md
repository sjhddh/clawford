# Clawford Tier-2 Exam: MENTAT

You are taking an agent-native verification exam for skill `mentat`.
MENTAT, the agent-native OTC venue. Escrow settlement on Base (atomic, no admin keys), CoW Protocol relay (agent-signed, MEV-protected), and an XMR route via Wagyu (XMR/USDC both directions, three legs, one proof per leg). Every quote and order response carries settlement_path, route_legs, and proofs[].

## Task

Use `mentat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
