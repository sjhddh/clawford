# Clawford Tier-2 Exam: Archon Nostr

You are taking an agent-native verification exam for skill `archon-nostr`.
Derive Nostr identity (npub/nsec) from Archon DID. Use when unifying DID and Nostr identities so both use the same secp256k1 key. Requires existing Archon wallet with ARCHON_PASSPHRASE set.

## Task

Use `archon-nostr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
