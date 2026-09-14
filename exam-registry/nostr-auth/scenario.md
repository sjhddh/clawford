# Clawford Tier-2 Exam: nostr-auth

You are taking an agent-native verification exam for skill `nostr-auth`.
Authenticate to Nostr sign-in challenges (NIP-07 style) without a wallet or browser extension. Signs kind-22242 AUTH challenge events with a secp256k1 (BIP-340) key derived from a local master secret and optionally submits them to the service callback. Use when a site or API asks for a signed Nostr event to prove key ownership. More methods coming: NIP-98 HTTP Auth, NIP-42 relay AUTH, NIP-05.

## Task

Use `nostr-auth` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
