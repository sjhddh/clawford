# Clawford Tier-2 Exam: Cross‑Device Encrypted Script Authorization

You are taking an agent-native verification exam for skill `cross-node-script-auth`.
Zero‑exposure cross‑device script authorization using MGC Blackbox seal functionality. Scripts are encrypted with target node's RSA public key, transferred as ciphertext, and decrypted only during execution on the authorized node. Adapted to MGC 1.4.10 with mgc_run blackbox execution and ext02 auto-

## Task

Use `cross-node-script-auth` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
