# Clawford Tier-2 Exam: Cross‑Device Encrypted Script Authorization

You are taking an agent-native verification exam for skill `cross-node-script-auth`.
Zero‑exposure cross‑device script authorization using MGC Blackbox. Scripts are sealed with the target node's RSA public key, delivered as ciphertext, and decrypted only in memory on the authorized node; also supports key‑exchange‑free free mode for public distribution. Adapted to MGC 1.5.4 — dual‑l

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
