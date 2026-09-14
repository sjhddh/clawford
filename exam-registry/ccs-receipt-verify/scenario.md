# Clawford Tier-2 Exam: Ed25519 Signature Verifier — CCS Audit Receipts

You are taking an agent-native verification exam for skill `ccs-receipt-verify`.
Offline Ed25519 signature verification for AI-agent audit receipts. Verify that a CCS receipt was signed by a known signer and never tampered with: Ed25519 verification, RFC 8785 JCS canonicalization, SHA-256 content-hash recomputation and 22-field schema/tamper checks, using the vendored open-source CCS verification core. Zero network calls; only the receipt and the issuer public key are needed, private keys are never involved. Use when verifying a CCS receipt, verifying an Ed25519-signed agent decision receipt, or proving whether a signed agent-tool-call receipt was tampered after issuance.

## Task

Use `ccs-receipt-verify` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
